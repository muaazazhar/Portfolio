function buildPortfolioEmailPayload({ name, email, message }) {
  const safeName = name || "Anonymous visitor";
  const safeEmail = email || "No email provided";
  const safeMessage = message || "No message provided";

  return {
    from_name: safeName,
    from_email: safeEmail,
    message: safeMessage,
    subject: `Portfolio inquiry from ${safeName}`,
    portfolio_title: "Muaaz Azhar | Software Engineer",
    accent_color: "#2f6bff",
    intro_text:
      "Thanks for reaching out through the portfolio. This message was sent from the contact form and styled to match the portfolio theme.",
    summary_html: `
      <div style="margin: 24px 0; padding: 20px; border-radius: 18px; background: linear-gradient(135deg, #0f172a 0%, #1d4ed8 100%); color: #ffffff; font-family: Arial, Helvetica, sans-serif;">
        <div style="font-size: 12px; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.8; margin-bottom: 10px;">Portfolio Contact</div>
        <div style="font-size: 24px; font-weight: 700; line-height: 1.2;">${safeName}</div>
        <div style="margin-top: 6px; font-size: 14px; opacity: 0.9;">${safeEmail}</div>
      </div>
      <div style="padding: 20px; border-radius: 18px; background: #111827; color: #e5e7eb; font-family: Arial, Helvetica, sans-serif; line-height: 1.7; border: 1px solid rgba(255,255,255,0.08);">
        <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #93c5fd; margin-bottom: 12px;">Message</div>
        <div style="white-space: pre-wrap;">${safeMessage}</div>
      </div>
    `,
    cta_label: "Reply from Portfolio",
  };
}

export { buildPortfolioEmailPayload };
