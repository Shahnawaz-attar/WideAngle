// frontend/lib/sendgrid.ts
// This is a placeholder for your SendGrid integration.
// You'll need to install the SendGrid Node.js library: `npm install @sendgrid/mail`
// And configure your API key.

// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface BookingDetails {
  name: string;
  phone: string;
  email?: string;
  service: string;
  date?: string;
  message?: string;
}

export async function sendBookingConfirmationEmail(toEmail: string, details: BookingDetails): Promise<void> {
  // console.log("Simulating sending email with SendGrid...");
  // console.log(`To: ${toEmail}`);
  // console.log("Details:", details);

  // In a real application, you would construct the email content
  // and send it using sgMail.send() here.
  /*
  const msg = {
    to: toEmail,
    from: 'your_verified_sender_email@example.com', // Your verified sender email
    subject: 'WIDEANGLE: Your Appointment Booking Confirmation',
    html: `
      <strong>Dear ${details.name},</strong>
      <p>Thank you for booking an appointment with WIDEANGLE.</p>
      <p>Here are your appointment details:</p>
      <ul>
        <li><strong>Service:</strong> ${details.service}</li>
        <li><strong>Preferred Date:</strong> ${details.date || 'Not specified'}</li>
        <li><strong>Phone:</strong> ${details.phone}</li>
        ${details.message ? `<li><strong>Message:</strong> ${details.message}</li>` : ''}
      </ul>
      <p>We will contact you shortly to confirm the details.</p>
      <p>Best regards,<br/>The WIDEANGLE Team</p>
    `,
  };

  try {
    await sgMail.send(msg);
  } catch (error: any) {
    console.error('SendGrid email error:', error);
    if (error.response) {
      console.error(error.response.body);
    }
    throw new Error('Failed to send booking confirmation email.');
  }
  */

  // Simulate delay for a real API call
  await new Promise(resolve => setTimeout(resolve, 500));
  console.log(`Simulated: Email sent to ${toEmail} for service "${details.service}"`);
}
