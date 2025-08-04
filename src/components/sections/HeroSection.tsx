import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslatedData } from '../../hooks/useTranslatedData';
import HeroCarousel from '../Carousel ';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { getHero, getStats, getWebsiteInfo } = useTranslatedData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hero = getHero();
  const stats = getStats();
  const websiteInfo = getWebsiteInfo();

  // Create carousel images array with translated content
  const carouselImages = [
    {
      src: 'https://elnuby.com/wp-content/uploads/2024/06/btshk-7.jpg',
      alt: t('residentialTower'),
      title: t('residentialTower'),
      subtitle: t('residentialTowerDesc')
    },
    {
      src: 'https://elnuby.com/wp-content/uploads/2024/05/rdkbsh-2-1.jpg',
      alt: t('commercialCenter'),
      title: t('commercialCenter'),
      subtitle: t('commercialCenterDesc')
    },
    {
      src: 'https://elnuby.com/wp-content/uploads/2024/06/lvmai-scaled.jpg',
      alt: t('infrastructureProject'),
      title: t('infrastructureProject'),
      subtitle: t('infrastructureDesc')
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <HeroCarousel />
  );
};

export default HeroSection; 