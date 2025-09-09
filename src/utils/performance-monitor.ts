// Performance monitoring utilities for mobile optimization
import { useEffect, useRef } from 'react';

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Track image loading times
  trackImageLoad(src: string, startTime: number): void {
    const loadTime = performance.now() - startTime;
    this.metrics.set(`image_load_${src}`, loadTime);
    
    if (loadTime > 1000) {
      console.warn(`Slow image load detected: ${src} took ${loadTime.toFixed(2)}ms`);
    }
  }

  // Track component render times
  trackComponentRender(componentName: string, renderTime: number): void {
    this.metrics.set(`render_${componentName}`, renderTime);
    
    if (renderTime > 16) { // 60fps = 16.67ms per frame
      console.warn(`Slow render detected: ${componentName} took ${renderTime.toFixed(2)}ms`);
    }
  }

  // Track animation performance
  trackAnimationFrame(animationName: string, frameTime: number): void {
    const key = `animation_${animationName}`;
    const existingTime = this.metrics.get(key) || 0;
    const avgTime = (existingTime + frameTime) / 2;
    this.metrics.set(key, avgTime);

    if (frameTime > 16) {
      console.warn(`Dropped frame in ${animationName}: ${frameTime.toFixed(2)}ms`);
    }
  }

  // Get Core Web Vitals
  getCoreWebVitals(): Promise<{
    fcp?: number;
    lcp?: number;
    cls?: number;
    fid?: number;
  }> {
    return new Promise((resolve) => {
      const vitals: any = {};

      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          vitals.fcp = fcpEntry.startTime;
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        vitals.lcp = lastEntry.startTime;
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift
      new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        vitals.cls = clsValue;
      }).observe({ entryTypes: ['layout-shift'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const firstInput = list.getEntries()[0] as any;
        vitals.fid = firstInput.processingStart - firstInput.startTime;
      }).observe({ entryTypes: ['first-input'] });

      setTimeout(() => resolve(vitals), 5000);
    });
  }

  // Check if device is mobile
  isMobileDevice(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  // Check network speed
  getNetworkSpeed(): string {
    const connection = (navigator as any).connection;
    if (connection) {
      return connection.effectiveType || 'unknown';
    }
    return 'unknown';
  }

  // Get memory usage (if available)
  getMemoryUsage(): number | null {
    const memory = (performance as any).memory;
    if (memory) {
      return memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    }
    return null;
  }

  // Generate performance report
  generateReport(): {
    isMobile: boolean;
    networkSpeed: string;
    memoryUsage: number | null;
    metrics: Record<string, number>;
    recommendations: string[];
  } {
    const isMobile = this.isMobileDevice();
    const networkSpeed = this.getNetworkSpeed();
    const memoryUsage = this.getMemoryUsage();
    const metrics = Object.fromEntries(this.metrics);
    
    const recommendations: string[] = [];

    // Analyze metrics and provide recommendations
    Object.entries(metrics).forEach(([key, value]) => {
      if (key.startsWith('image_load_') && value > 1000) {
        recommendations.push(`Consider optimizing image: ${key.replace('image_load_', '')}`);
      }
      if (key.startsWith('render_') && value > 16) {
        recommendations.push(`Optimize rendering for: ${key.replace('render_', '')}`);
      }
    });

    if (isMobile && networkSpeed === 'slow-2g') {
      recommendations.push('Consider implementing more aggressive image compression for slow networks');
    }

    if (memoryUsage && memoryUsage > 0.8) {
      recommendations.push('High memory usage detected - consider reducing concurrent animations');
    }

    return {
      isMobile,
      networkSpeed,
      memoryUsage,
      metrics,
      recommendations
    };
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = (componentName: string) => {
  const startTime = useRef<number>(0);

  useEffect(() => {
    startTime.current = performance.now();
    
    return () => {
      const renderTime = performance.now() - startTime.current;
      PerformanceMonitor.getInstance().trackComponentRender(componentName, renderTime);
    };
  }, [componentName]);

  const trackImageLoad = (src: string, loadStartTime: number) => {
    PerformanceMonitor.getInstance().trackImageLoad(src, loadStartTime);
  };

  return { trackImageLoad };
};
