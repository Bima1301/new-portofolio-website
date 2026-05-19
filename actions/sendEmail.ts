"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail =
    formData.get("email")?.toString() ||
    formData.get("senderEmail")?.toString();
  const name = formData.get("name")?.toString();
  const subject =
    formData.get("subject")?.toString() || "Message from portfolio contact form";
  const message = formData.get("message")?.toString();

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  const fullMessage = name
    ? `From: ${name}\n\n${message}`
    : message ?? "";

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bima.aji1380@gmail.com",
      subject,
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: fullMessage,
        senderEmail: senderEmail!,
      }),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
