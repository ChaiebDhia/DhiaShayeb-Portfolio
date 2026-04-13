export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const {
    name,
    email,
    inquiryType,
    company,
    position,
    projectType,
    budget,
    timeline,
    message
  } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  try {
    const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    // 1. Email to the Website Owner (Dhia)
    const ownerMailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'dhiashayeb6@gmail.com',
      replyTo: email,
      subject: `New ${inquiryType === 'recruitment' ? 'Recruitment' : 'Project'} Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #030208; color: #00f7ff; padding: 20px; text-align: center; border-bottom: 2px solid #00f7ff;">
            <h2 style="margin: 0; text-transform: uppercase;">New Inquiry Received</h2>
          </div>
          <div style="padding: 30px; background-color: #fafafa;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
            ${position ? `<p><strong>Position:</strong> ${position}</p>` : ''}
            ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            
            <h3 style="margin-top: 30px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">Message</h3>
            <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 5px; border: 1px solid #eee;">${message}</p>
          </div>
          <div style="background-color: #030208; color: #8a94bf; padding: 15px; text-align: center; font-size: 12px;">
            Dhia Shayeb - Automated Contact System
          </div>
        </div>
      `,
    };

    // 2. Email to the Sender (Confirmation Receipt)
    const senderMailOptions = {
      from: `"Dhia Shayeb" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Message Received - Dhia Shayeb`,
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #e0e6ff; line-height: 1.6; max-width: 600px; margin: 0 auto; background-color: #050714; border: 1px solid #00f7ff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, rgba(0, 247, 255, 0.1) 0%, rgba(255, 0, 204, 0.1) 100%); padding: 30px; text-align: center; border-bottom: 1px solid rgba(0, 247, 255, 0.2);">
            <h2 style="margin: 0; color: #00f7ff; letter-spacing: 2px;">CONFIRMATION RECEIPT</h2>
            <p style="margin-top: 10px; color: #8a94bf;">AI Engineer & Full-Stack Architect</p>
          </div>
          <div style="padding: 40px;">
            <h3 style="color: #ffffff; margin-top: 0;">Hello ${name},</h3>
            <p>Thank you for reaching out! I have successfully received your inquiry regarding <strong>${inquiryType === 'recruitment' ? 'a career opportunity' : 'a potential project'}</strong>.</p>
            <p>I am currently reviewing your message and will get back to you as soon as possible.</p>
            
            <div style="background: rgba(13, 18, 38, 0.8); border-left: 4px solid #ff00cc; padding: 15px; margin: 30px 0; border-radius: 4px;">
              <p style="margin: 0; color: #e0e6ff;"><strong>Your Message Summary:</strong><br/><br/>
              <span style="color: #8a94bf; font-style: italic;">"${message.substring(0, 100)}${message.length > 100 ? '...' : ''}"</span>
              </p>
            </div>
            
            <p>Best regards,<br/><strong>Dhia Shayeb</strong></p>
          </div>
          <div style="background-color: #030208; padding: 20px; text-align: center; font-size: 12px; color: #8a94bf; border-top: 1px solid rgba(0, 247, 255, 0.2);">
            &copy; ${new Date().getFullYear()} Dhia Shayeb. All rights reserved.<br/>
            <a href="https://dhiashayeb.com" style="color: #00f7ff; text-decoration: none;">dhiashayeb.com</a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(senderMailOptions);

    return res.status(200).json({ success: true, message: 'Message sent successfully. Confirmation email dispatched.' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return res.status(500).json({ success: false, message: 'Failed to send message via SMTP.' });
  }
}