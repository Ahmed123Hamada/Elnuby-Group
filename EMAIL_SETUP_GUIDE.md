# Email Setup Guide

This guide explains how to set up email functionality for the Contact and Career forms.

## Current Configuration

Both forms are currently configured to send emails to: **ahmedvrgaming@gmail.com**

## Email Service Setup

The forms use EmailJS for sending emails. To complete the setup:

### 1. EmailJS Account Setup

1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create email templates for both contact and career forms

### 2. Update Configuration

Edit `src/config/email.ts` and replace the placeholder values:

```typescript
export const EMAIL_CONFIG = {
  // Main contact email - can be easily changed
  CONTACT_EMAIL: 'ahmedvrgaming@gmail.com',
  
  // Career applications email - can be easily changed  
  CAREER_EMAIL: 'ahmedvrgaming@gmail.com',
  
  // Email service configuration
  SERVICE_ID: 'your_service_id_here',        // Replace with your EmailJS service ID
  TEMPLATE_ID_CONTACT: 'template_contact',   // Replace with your contact template ID
  TEMPLATE_ID_CAREER: 'template_career',     // Replace with your career template ID
  PUBLIC_KEY: 'your_public_key_here'         // Replace with your EmailJS public key
};
```

### 3. Email Templates

Create two templates in EmailJS:

#### Contact Template
- **Template ID**: `template_contact`
- **Subject**: Contact Form: {{subject}}
- **Body**:
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}
```

#### Career Template
- **Template ID**: `template_career`
- **Subject**: Career Application: {{job_position}}
- **Body**:
```
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Position Applied For: {{job_position}}

Additional Notes:
{{notes}}
```

### 4. Fallback Behavior

If EmailJS fails, the forms will automatically open the user's default email client with a pre-filled message as a fallback.

## Testing

1. Update the configuration with your EmailJS credentials
2. Test both forms to ensure emails are sent successfully
3. Check the fallback behavior by temporarily using invalid credentials

## Changing Email Address

To change the email address, simply update the `CONTACT_EMAIL` and `CAREER_EMAIL` values in `src/config/email.ts`:

```typescript
export const EMAIL_CONFIG = {
  CONTACT_EMAIL: 'new-email@example.com',
  CAREER_EMAIL: 'new-email@example.com',
  // ... rest of config
};
```

## Features

- ✅ Contact form with validation
- ✅ Career application form with validation
- ✅ Loading states and error handling
- ✅ EmailJS integration with fallback
- ✅ Responsive design
- ✅ Easy email address configuration
- ✅ TypeScript support
