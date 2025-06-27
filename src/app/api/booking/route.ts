import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();
    
    console.log('Booking form submission received:', {
      name: formData.name,
      email: formData.email,
      eventType: formData.eventType
    });
    
    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email environment variables');
      throw new Error('Email service not configured. Please contact us directly at joebatemanofficial@gmail.com or 07939 000446.');
    }

    // Configure the email transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail email
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Format the booking inquiry email
    const emailSubject = `🎵 New Booking Inquiry - ${formData.eventType} ${formData.eventDate ? `on ${formData.eventDate}` : ''}`;
    
    const emailBody = `
🎵 NEW BOOKING INQUIRY

=== CLIENT DETAILS ===
Name: ${formData.name}
Email: ${formData.email}
How they heard about us: ${formData.hearAboutUs || 'Not specified'}

=== EVENT DETAILS ===
Event Type: ${formData.eventType}
Date: ${formData.eventDate || 'Not specified'}
Start Time: ${formData.eventTime || 'Not specified'}
Duration: ${formData.duration || 'Not specified'}
Guest Count: ${formData.guestCount || 'Not specified'}
Performance Type: ${formData.performanceType}

=== VENUE INFORMATION ===
Venue Name: ${formData.venue || 'Not specified'}
Venue Address: ${formData.venueAddress}

=== SPECIAL REQUESTS ===
${formData.eventType === 'Wedding' && formData.firstDance ? `First Dance Song: ${formData.firstDance}` : ''}
${formData.additionalNotes ? `Additional Notes: ${formData.additionalNotes}` : 'No additional notes'}

=== ESTIMATED QUOTE ===
${formData.quote ? `
Performance Package: £${formData.quote.basePrice}
Travel Distance: ${formData.quote.estimatedMiles} miles from E10 5ZD
Travel Costs: £${formData.quote.travelCost}
${formData.quote.congestionCharge > 0 ? `Congestion Charge: £${formData.quote.congestionCharge}` : ''}
${formData.quote.timeSurcharge > 0 ? `Distance Surcharge: £${formData.quote.timeSurcharge}` : ''}
${formData.quote.timeNote ? `Note: ${formData.quote.timeNote}` : ''}

ESTIMATED TOTAL: £${formData.quote.totalCost}
${formData.quote.distanceError ? `⚠️ Distance Calculation: ${formData.quote.distanceError}` : ''}
` : 'Quote not calculated'}

---
Reply directly to this email to respond to ${formData.name}.
`.trim();

    // Send email to you
    await transporter.sendMail({
      from: `"${formData.name}" <${process.env.EMAIL_USER}>`, // Shows client name but sends from your email
      to: "joebatemanofficial@gmail.com",
      replyTo: `"${formData.name}" <${formData.email}>`, // This allows you to click reply and respond directly to client
      subject: emailSubject,
      text: emailBody,
      headers: {
        'Return-Path': formData.email, // Additional header to ensure proper reply routing
      }
    });

    return NextResponse.json({ 
      message: "Booking inquiry sent successfully!" 
    }, { status: 200 });

  } catch (error: any) {
    console.error("Error sending booking inquiry:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to send booking inquiry. Please try again or call us directly." 
    }, { status: 500 });
  }
}