// Email template generator for beautiful HTML emails
export class EmailTemplateGenerator {
  /**
   * Generate HTML email for contact form submission
   */
  static generateContactEmail(formData) {
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

    // Determine priority based on subject
    const priorityMap = {
      'general': { class: 'normal', label: 'NORMAL' },
      'project': { class: 'high', label: 'HIGH' },
      'quote': { class: 'high', label: 'HIGH' },
      'partnership': { class: 'urgent', label: 'URGENT' },
      'support': { class: 'high', label: 'HIGH' },
      'other': { class: 'normal', label: 'NORMAL' }
    };

    const priority = priorityMap[formData.subject] || priorityMap['normal'];

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - EL-Nuby</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .form-details {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
        }
        .field-group {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e2e8f0;
        }
        .field-group:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .field-label {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            color: #1f2937;
            font-size: 16px;
            background-color: white;
            padding: 12px 15px;
            border-radius: 6px;
            border-left: 4px solid #3b82f6;
        }
        .message-field {
            background-color: white;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #10b981;
            white-space: pre-wrap;
            font-family: inherit;
        }
        .footer {
            background-color: #1f2937;
            color: #9ca3af;
            padding: 25px 30px;
            text-align: center;
            font-size: 14px;
        }
        .footer a {
            color: #3b82f6;
            text-decoration: none;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: white;
            margin-bottom: 10px;
        }
        .timestamp {
            color: #6b7280;
            font-size: 12px;
            margin-top: 20px;
            text-align: center;
        }
        .priority-badge {
            display: inline-block;
            background-color: #fef3c7;
            color: #92400e;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 10px;
        }
        .urgent { background-color: #fee2e2; color: #dc2626; }
        .high { background-color: #fef3c7; color: #d97706; }
        .normal { background-color: #d1fae5; color: #059669; }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">🏗️ EL-NUBY</div>
            <h1>New Contact Form Submission</h1>
            <p>You have received a new inquiry from your website</p>
        </div>
        
        <div class="content">
            <div class="form-details">
                <div class="field-group">
                    <div class="field-label">👤 Full Name</div>
                    <div class="field-value">${formData.name || 'Not provided'}</div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">
                        <a href="mailto:${formData.email || ''}" style="color: #3b82f6; text-decoration: none;">${formData.email || 'Not provided'}</a>
                    </div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">📞 Phone Number</div>
                    <div class="field-value">${formData.phone || 'Not provided'}</div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">🏢 Company</div>
                    <div class="field-value">${formData.company || 'Not provided'}</div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">📋 Subject</div>
                    <div class="field-value">
                        ${formData.subject || 'Not provided'}
                        <span class="priority-badge ${priority.class}">${priority.label}</span>
                    </div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">💬 Message</div>
                    <div class="message-field">${formData.message || 'No message provided'}</div>
                </div>
            </div>
            
            <div class="timestamp">
                📅 Received on ${date} at ${time}
            </div>
        </div>
        
        <div class="footer">
            <p><strong>EL-NUBY Construction Company</strong></p>
            <p>Building the Future, One Project at a Time</p>
            <p>This email was sent from your website contact form</p>
        </div>
    </div>
</body>
</html>`;
  }

  /**
   * Generate HTML email for career application
   */
  static generateCareerEmail(formData) {
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

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Career Application - EL-Nuby</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
        }
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #059669 0%, #10b981 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            font-weight: 700;
        }
        .header p {
            margin: 10px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 40px 30px;
        }
        .application-details {
            background-color: #f0fdf4;
            border-radius: 8px;
            padding: 25px;
            margin: 20px 0;
            border-left: 4px solid #10b981;
        }
        .field-group {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid #d1fae5;
        }
        .field-group:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .field-label {
            font-weight: 600;
            color: #374151;
            font-size: 14px;
            margin-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .field-value {
            color: #1f2937;
            font-size: 16px;
            background-color: white;
            padding: 12px 15px;
            border-radius: 6px;
            border-left: 4px solid #10b981;
        }
        .notes-field {
            background-color: white;
            padding: 15px;
            border-radius: 6px;
            border-left: 4px solid #3b82f6;
            white-space: pre-wrap;
            font-family: inherit;
        }
        .position-highlight {
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            color: white;
            padding: 15px;
            border-radius: 8px;
            text-align: center;
            margin: 20px 0;
        }
        .position-highlight h3 {
            margin: 0;
            font-size: 20px;
        }
        .footer {
            background-color: #1f2937;
            color: #9ca3af;
            padding: 25px 30px;
            text-align: center;
            font-size: 14px;
        }
        .footer a {
            color: #10b981;
            text-decoration: none;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: white;
            margin-bottom: 10px;
        }
        .timestamp {
            color: #6b7280;
            font-size: 12px;
            margin-top: 20px;
            text-align: center;
        }
        .status-badge {
            display: inline-block;
            background-color: #dbeafe;
            color: #1e40af;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 10px;
        }
        .action-buttons {
            text-align: center;
            margin: 30px 0;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            margin: 0 10px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
        }
        .btn-primary {
            background-color: #3b82f6;
            color: white;
        }
        .btn-secondary {
            background-color: #6b7280;
            color: white;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <div class="logo">👷 EL-NUBY</div>
            <h1>New Career Application</h1>
            <p>A new job application has been submitted</p>
        </div>
        
        <div class="content">
            <div class="position-highlight">
                <h3>🎯 Position Applied For: ${formData.jobAppliedFor || 'Not specified'}</h3>
                <span class="status-badge">NEW APPLICATION</span>
            </div>
            
            <div class="application-details">
                <div class="field-group">
                    <div class="field-label">👤 Full Name</div>
                    <div class="field-value">${formData.firstName || ''} ${formData.lastName || ''}</div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">📧 Email Address</div>
                    <div class="field-value">
                        <a href="mailto:${formData.email || ''}" style="color: #3b82f6; text-decoration: none;">${formData.email || 'Not provided'}</a>
                    </div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">📞 Phone Number</div>
                    <div class="field-value">${formData.phone || 'Not provided'}</div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">💼 Position Applied For</div>
                    <div class="field-value">${formData.jobAppliedFor || 'Not specified'}</div>
                </div>
                
                <div class="field-group">
                    <div class="field-label">📝 Additional Notes</div>
                    <div class="notes-field">${formData.notes || 'No additional notes provided'}</div>
                </div>
            </div>
            
            <div class="action-buttons">
                <a href="mailto:${formData.email || ''}?subject=Re: Application for ${formData.jobAppliedFor || 'Position'}&body=Dear ${formData.firstName || 'Candidate'},%0D%0A%0D%0AThank you for your interest in joining EL-NUBY Construction Company.%0D%0A%0D%0AWe have received your application for the position of ${formData.jobAppliedFor || 'the position'} and will review it carefully.%0D%0A%0D%0AWe will contact you soon with further information.%0D%0A%0D%0ABest regards,%0D%0AEL-NUBY HR Team" class="btn btn-primary">📧 Reply to Candidate</a>
                <a href="mailto:ahmedvrgaming@gmail.com?subject=Review Application: ${formData.firstName || ''} ${formData.lastName || ''} for ${formData.jobAppliedFor || 'Position'}&body=Please review this application and provide feedback." class="btn btn-secondary">👥 Internal Review</a>
            </div>
            
            <div class="timestamp">
                📅 Application received on ${date} at ${time}
            </div>
        </div>
        
        <div class="footer">
            <p><strong>EL-NUBY Construction Company</strong></p>
            <p>Building Careers, Building the Future</p>
            <p>This application was submitted through your website career page</p>
        </div>
    </div>
</body>
</html>`;
  }
}
