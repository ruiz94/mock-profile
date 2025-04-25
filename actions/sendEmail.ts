'use server'
import { getErrorMessage } from "@/utils/getErrorMessage";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || 'no_api');

export const sendEmail = async (formData: FormData): Promise<{ error: string } | { data: string }> => {
  const message = formData.get('message');
  const email = formData.get('email');

  if(process.env.RESEND_API_KEY === 'no_api_key') {
    return {
      error: 'No API key provided'
    }
  }

  if(!message || typeof message !== 'string' || message.length > 500 || !email || typeof email !== 'string' || email.length > 500) {
    console.error('Missing message or email');
    return {
      error: 'Missing message or email'
    }
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'example@gmail.com',
      subject: 'New message from your portfolio',
      text: `You have a new message from ${email}: ${message}`
    })
  } catch (error) {
    console.error('Error sending email', error);
    return {
      error: getErrorMessage(error)
    }
  }

  // Default return in case no other return is reached
  return {
    error: data.data ? 'Email sent successfully' : 'Error sending email: ' + data.error?.message,
  };
}