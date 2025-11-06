// frontend/pages/api/book.ts
import type { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
// Assuming you have 'lib/sendgrid.ts' for email
import { sendBookingConfirmationEmail } from '@/lib/sendgrid';

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().regex(/^\+?[0-9()\s-]{8,20}$/, "Invalid phone number"),
  email: z.string().email("Invalid email address").optional().or(z.literal('')),
  service: z.string().min(1, "Service selection is required"),
  date: z.string().optional(), // Date is optional in form, but might be formatted
  message: z.string().optional(),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const body = schema.parse(req.body);

    // --- Integration with Airtable or Google Sheets (Webhook) ---
    // Example: Replace with your actual Airtable/Sheets webhook URL and API key
    // const airtableResponse = await fetch('YOUR_AIRTABLE_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     // 'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`, // If using direct API
    //   },
    //   body: JSON.stringify({ fields: body }),
    // });
    // if (!airtableResponse.ok) {
    //   console.error("Airtable submission failed:", await airtableResponse.text());
    //   throw new Error("Failed to record appointment in CRM.");
    // }
    console.log("Appointment data submitted to CRM (simulated):", body);


    // --- Send email via SendGrid ---
    if (body.email) { // Only send if email is provided
      try {
        await sendBookingConfirmationEmail(body.email, body);
        console.log(`Booking confirmation email sent to ${body.email}`);
      } catch (emailError: any) {
        console.error("SendGrid email failed:", emailError.message);
        // Do not block the booking success if email fails, but log it.
      }
    }

    return res.status(200).json({ success: true, message: "Appointment booked successfully!" });
  } catch (e: any) {
    if (e instanceof z.ZodError) {
      return res.status(400).json({ error: "Validation failed", details: e.errors });
    }
    console.error("Booking API error:", e);
    return res.status(500).json({ error: e.message || "An unexpected error occurred." });
  }
}