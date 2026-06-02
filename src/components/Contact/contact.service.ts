import emailjs from "@emailjs/browser";
import type { ContactFormData } from "../../types/contactFormData.type";

export const sendContactEmail = async (
  data: ContactFormData,
): Promise<void> => {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  );
};
