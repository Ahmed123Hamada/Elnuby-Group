// Working email service using plain JavaScript - no TypeScript
import { SimpleEmailService } from './simpleEmailService';

export class EmailService {
  /**
   * Send contact form email directly to ahmedvrgaming@gmail.com
   */
  static async sendContactEmail(formData) {
    return await SimpleEmailService.sendContactEmail(formData);
  }

  /**
   * Send career application email directly to ahmedvrgaming@gmail.com
   */
  static async sendCareerEmail(formData) {
    return await SimpleEmailService.sendCareerEmail(formData);
  }

  /**
   * Create mailto link as fallback
   */
  static createMailtoLink(type, formData) {
    return SimpleEmailService.createMailtoLink(type, formData);
  }
}
