// Simple email service that sends formatted emails without HTML
export class SimpleEmailService {
  /**
   * Send contact form email with better formatting
   */
  static async sendContactEmail(formData) {
    try {
      // Create a well-formatted plain text email
      const emailContent = this.formatContactEmail(formData);
      
      // Use Web3Forms for reliable email delivery
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '01bddc87-096a-4177-ad07-aea73c4d0324',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          subject: `Contact Form: ${formData.subject}`,
          message: emailContent,
          to: 'ahmedvrgaming@gmail.com',
          from_name: formData.name,
          reply_to: formData.email,
          form_type: 'Contact Form',
          website: 'EL-Nuby Website'
        }),
      });

      if (response.ok) {
        console.log('Contact email sent successfully to ahmedvrgaming@gmail.com');
        return true;
      } else {
        console.error('Failed to send contact email:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Error sending contact email:', error);
      return false;
    }
  }

  /**
   * Send career application email with better formatting
   */
  static async sendCareerEmail(formData) {
    try {
      // Create a well-formatted plain text email
      const emailContent = this.formatCareerEmail(formData);
      
      // Use Web3Forms for reliable email delivery
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '01bddc87-096a-4177-ad07-aea73c4d0324',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: `Career Application: ${formData.jobAppliedFor}`,
          message: emailContent,
          to: 'ahmedvrgaming@gmail.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email,
          form_type: 'Career Application',
          website: 'EL-Nuby Website'
        }),
      });

      if (response.ok) {
        console.log('Career email sent successfully to ahmedvrgaming@gmail.com');
        return true;
      } else {
        console.error('Failed to send career email:', response.status);
        return false;
      }
    } catch (error) {
      console.error('Error sending career email:', error);
      return false;
    }
  }

  /**
   * Format contact email with better structure
   */
  static formatContactEmail(formData) {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const time = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    // Determine priority
    const priorityMap = {
      'general': 'NORMAL',
      'project': 'HIGH',
      'quote': 'HIGH',
      'partnership': 'URGENT',
      'support': 'HIGH',
      'other': 'NORMAL'
    };
    const priority = priorityMap[formData.subject] || 'NORMAL';

    return `🏗️ EL-NUBY CONSTRUCTION COMPANY
═══════════════════════════════════════════════════════════════

📧 NEW CONTACT FORM SUBMISSION
───────────────────────────────────────────────────────────────

👤 FULL NAME: ${formData.name || 'Not provided'}
📧 EMAIL: ${formData.email || 'Not provided'}
📞 PHONE: ${formData.phone || 'Not provided'}
🏢 COMPANY: ${formData.company || 'Not provided'}
📋 SUBJECT: ${formData.subject || 'Not provided'} [${priority} PRIORITY]
💬 MESSAGE:
${formData.message || 'No message provided'}

───────────────────────────────────────────────────────────────
📅 RECEIVED: ${date} at ${time}
🌐 SOURCE: EL-Nuby Website Contact Form

═══════════════════════════════════════════════════════════════
Building the Future, One Project at a Time
EL-NUBY Construction Company`;
  }

  /**
   * Format career email with better structure
   */
  static formatCareerEmail(formData) {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    const time = now.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });

    return `👷 EL-NUBY CONSTRUCTION COMPANY
═══════════════════════════════════════════════════════════════

📧 NEW CAREER APPLICATION
───────────────────────────────────────────────────────────────

🎯 POSITION APPLIED FOR: ${formData.jobAppliedFor || 'Not specified'}

👤 APPLICANT DETAILS:
───────────────────────────────────────────────────────────────
Name: ${formData.firstName || ''} ${formData.lastName || ''}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

📝 ADDITIONAL NOTES:
───────────────────────────────────────────────────────────────
${formData.notes || 'No additional notes provided'}

───────────────────────────────────────────────────────────────
📅 APPLICATION RECEIVED: ${date} at ${time}
🌐 SOURCE: EL-Nuby Website Career Page

═══════════════════════════════════════════════════════════════
Building Careers, Building the Future
EL-NUBY Construction Company

📧 QUICK ACTIONS:
• Reply to candidate: ${formData.email || 'N/A'}
• Internal review: ahmedvrgaming@gmail.com`;
  }

  /**
   * Create mailto link as fallback
   */
  static createMailtoLink(type, formData) {
    if (type === 'contact') {
      const contactData = formData;
      const subject = encodeURIComponent(`Contact Form: ${contactData.subject}`);
      const body = encodeURIComponent(this.formatContactEmail(contactData));
      return `mailto:ahmedvrgaming@gmail.com?subject=${subject}&body=${body}`;
    } else {
      const careerData = formData;
      const subject = encodeURIComponent(`Career Application: ${careerData.jobAppliedFor}`);
      const body = encodeURIComponent(this.formatCareerEmail(careerData));
      return `mailto:ahmedvrgaming@gmail.com?subject=${subject}&body=${body}`;
    }
  }
}
