// Test function to preview HTML email templates
import { EmailTemplateGenerator } from './emailTemplateGenerator';

export const testEmailTemplates = () => {
  // Sample contact form data
  const sampleContactData = {
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@example.com',
    phone: '+20 100 123 4567',
    company: 'ABC Construction Ltd.',
    subject: 'project',
    message: 'Hello,\n\nI am interested in discussing a new construction project for our company. We are looking to build a residential complex in New Cairo and would like to explore partnership opportunities with EL-NUBY.\n\nPlease let me know when we can schedule a meeting to discuss the details.\n\nBest regards,\nAhmed Hassan'
  };

  // Sample career form data
  const sampleCareerData = {
    firstName: 'Sarah',
    lastName: 'Mohamed',
    email: 'sarah.mohamed@example.com',
    phone: '+20 101 987 6543',
    jobAppliedFor: 'Civil Engineer',
    notes: 'I have 5 years of experience in construction projects and have worked on several residential and commercial buildings. I am particularly interested in sustainable construction practices and have certifications in green building design.\n\nPortfolio: www.sarahmohamed-portfolio.com\nLinkedIn: linkedin.com/in/sarahmohamed'
  };

  console.log('=== CONTACT EMAIL TEMPLATE ===');
  const contactHtml = EmailTemplateGenerator.generateContactEmail(sampleContactData);
  console.log('Contact HTML generated successfully!');
  
  // Save to file for preview
  const contactBlob = new Blob([contactHtml], { type: 'text/html' });
  const contactUrl = URL.createObjectURL(contactBlob);
  console.log('Contact email preview URL:', contactUrl);
  
  console.log('\n=== CAREER EMAIL TEMPLATE ===');
  const careerHtml = EmailTemplateGenerator.generateCareerEmail(sampleCareerData);
  console.log('Career HTML generated successfully!');
  
  // Save to file for preview
  const careerBlob = new Blob([careerHtml], { type: 'text/html' });
  const careerUrl = URL.createObjectURL(careerBlob);
  console.log('Career email preview URL:', careerUrl);

  // Open previews in new tabs
  window.open(contactUrl, '_blank');
  window.open(careerUrl, '_blank');

  return {
    contactHtml,
    careerHtml,
    contactUrl,
    careerUrl
  };
};

// Function to generate preview files
export const generatePreviewFiles = () => {
  const sampleContactData = {
    name: 'Ahmed Hassan',
    email: 'ahmed.hassan@example.com',
    phone: '+20 100 123 4567',
    company: 'ABC Construction Ltd.',
    subject: 'project',
    message: 'Hello,\n\nI am interested in discussing a new construction project for our company. We are looking to build a residential complex in New Cairo and would like to explore partnership opportunities with EL-NUBY.\n\nPlease let me know when we can schedule a meeting to discuss the details.\n\nBest regards,\nAhmed Hassan'
  };

  const sampleCareerData = {
    firstName: 'Sarah',
    lastName: 'Mohamed',
    email: 'sarah.mohamed@example.com',
    phone: '+20 101 987 6543',
    jobAppliedFor: 'Civil Engineer',
    notes: 'I have 5 years of experience in construction projects and have worked on several residential and commercial buildings. I am particularly interested in sustainable construction practices and have certifications in green building design.\n\nPortfolio: www.sarahmohamed-portfolio.com\nLinkedIn: linkedin.com/in/sarahmohamed'
  };

  // Generate HTML content
  const contactHtml = EmailTemplateGenerator.generateContactEmail(sampleContactData);
  const careerHtml = EmailTemplateGenerator.generateCareerEmail(sampleCareerData);

  // Create download links
  const contactBlob = new Blob([contactHtml], { type: 'text/html' });
  const careerBlob = new Blob([careerHtml], { type: 'text/html' });

  const contactLink = document.createElement('a');
  contactLink.href = URL.createObjectURL(contactBlob);
  contactLink.download = 'contact-email-preview.html';
  contactLink.textContent = 'Download Contact Email Preview';
  document.body.appendChild(contactLink);
  contactLink.click();
  document.body.removeChild(contactLink);

  const careerLink = document.createElement('a');
  careerLink.href = URL.createObjectURL(careerBlob);
  careerLink.download = 'career-email-preview.html';
  careerLink.textContent = 'Download Career Email Preview';
  document.body.appendChild(careerLink);
  careerLink.click();
  document.body.removeChild(careerLink);

  console.log('Preview files generated and downloaded!');
};
