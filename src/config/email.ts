// Email configuration
export const EMAIL_CONFIG = {
  // Main contact email - can be easily changed
  CONTACT_EMAIL: 'ahmedvrgaming@gmail.com',
  
  // Career applications email - can be easily changed
  CAREER_EMAIL: 'ahmedvrgaming@gmail.com',
  
  // Email service configuration
  SERVICE_ID: 'service_elnuby',
  TEMPLATE_ID_CONTACT: 'template_contact',
  TEMPLATE_ID_CAREER: 'template_career',
  PUBLIC_KEY: 'your_public_key_here' // This will need to be replaced with actual EmailJS key
};

// Email templates
export const EMAIL_TEMPLATES = {
  CONTACT: {
    to_name: 'EL-Nuby Team',
    from_name: '{{name}}',
    from_email: '{{email}}',
    phone: '{{phone}}',
    company: '{{company}}',
    subject: '{{subject}}',
    message: '{{message}}',
    reply_to: '{{email}}'
  },
  CAREER: {
    to_name: 'HR Department',
    from_name: '{{firstName}} {{lastName}}',
    from_email: '{{email}}',
    phone: '{{phone}}',
    job_position: '{{jobAppliedFor}}',
    notes: '{{notes}}',
    reply_to: '{{email}}'
  }
};
