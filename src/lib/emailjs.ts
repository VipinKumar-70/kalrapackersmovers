// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new email service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Get your Service ID, Template ID, and Public Key
// 6. Replace the values below with your actual credentials

export const emailjsConfig = {
  // Your EmailJS Service ID (e.g., 'service_xxxxxxx')
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6a3v57n",
  
  // Your EmailJS Template ID (e.g., 'template_xxxxxxx')
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ctl2ltb",
  
  // Your EmailJS Public Key (User ID)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "V8GhOKI5mvbnni1gC",
};

// Email template variables that should be included in your EmailJS template:
// {{user_name}} - Customer's name
// {{user_email}} - Customer's email
// {{user_phone}} - Customer's mobile number
// {{moving_from}} - Source location
// {{moving_to}} - Destination location
// {{moving_date}} - Preferred moving date
// {{service_type}} - Type of service requested
// {{additional_details}} - Additional requirements/details
// {{reply_to}} - Customer's email for replies