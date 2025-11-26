export const sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "All fields are required" });

  // Save to DB or send email
  console.log("New contact message:", req.body);

  return res.status(200).json({ success: "Message sent successfully!" });
};
