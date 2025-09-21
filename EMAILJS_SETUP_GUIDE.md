# EmailJS Setup Guide - Complete Instructions

## 🎯 Goal
Set up automatic email sending to `ahmedvrgaming@gmail.com` when users fill out the contact and career forms.

## 📋 Step-by-Step Setup

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions for your email provider
5. **Important**: Use `ahmedvrgaming@gmail.com` as the email address
6. Copy the **Service ID** (you'll need this)

### Step 3: Create Email Templates

#### Contact Form Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Set **Template ID**: `template_contact_form`
4. Set **Template Name**: "Contact Form"
5. Use this template:

**Subject**: `Contact Form: {{subject}}`

**Content**:
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from EL-Nuby website contact form.
Reply to: {{reply_to}}
```

#### Career Form Template
1. Create another template
2. Set **Template ID**: `template_career_form`
3. Set **Template Name**: "Career Application"
4. Use this template:

**Subject**: `Career Application: {{job_position}}`

**Content**:
```
New Career Application

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Position Applied For: {{job_position}}

Additional Notes:
{{notes}}

---
Sent from EL-Nuby website career page.
Reply to: {{reply_to}}
```

### Step 4: Get Your Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Update Configuration
Edit `src/services/emailService.ts` and replace these values:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';        // From Step 2
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_contact_form';  // From Step 3
const EMAILJS_TEMPLATE_ID_CAREER = 'template_career_form';   // From Step 3
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';        // From Step 4
```

### Step 6: Test the Forms
1. Start your development server: `npm start`
2. Go to the contact page
3. Fill out the form and submit
4. Check `ahmedvrgaming@gmail.com` for the email
5. Test the career form as well

## 🔧 Troubleshooting

### If emails don't arrive:
1. Check your spam folder
2. Verify the Service ID and Public Key are correct
3. Make sure the email templates are published
4. Check the browser console for error messages

### If you get CORS errors:
1. Make sure you're using the correct Public Key
2. Verify the service is properly configured
3. Check that the templates are published

## 📧 Email Format
When working correctly, you'll receive emails like this:

**From**: The person who filled out the form
**To**: ahmedvrgaming@gmail.com
**Subject**: Contact Form: [subject] or Career Application: [position]
**Body**: All form data formatted nicely

## 🚀 Alternative: Quick Test Setup

If you want to test immediately without full setup:

1. The forms already have a fallback that opens the user's email client
2. This will work right now for testing
3. Users can manually send the pre-filled email to your address

## ✅ Success Indicators

- ✅ Forms submit without errors
- ✅ Success message appears
- ✅ Emails arrive in ahmedvrgaming@gmail.com
- ✅ Email content is properly formatted
- ✅ Reply-to is set to the form submitter's email

## 📞 Need Help?

If you need assistance with any step, just let me know and I can help you through the setup process!
