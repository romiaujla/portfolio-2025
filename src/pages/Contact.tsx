import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const EMAILJS_PUBLIC_KEY = "6c_XGXy-2-oRDpmLb";
const EMAILJS_SERVICE_ID = "service_kdkqllo";
const EMAILJS_TEMPLATE_ID = "template_t22wmdr";

interface ContactItem {
  label: string;
  value: string;
  link: string;
  icon: React.ReactNode;
}

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if ("emailjs" in window && window.emailjs != null) {
      // @ts-ignore
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // @ts-ignore
      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      if (response.status === 200) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setShowError(true);
      setErrorMessage(error instanceof Error ? error.message : "Unknown error");
    }

    setTimeout(() => {
      setShowSuccess(false);
      setShowError(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactList: Array<ContactItem> = [
    {
      label: "Email",
      value: "raujla0228@gmail.com",
      link: "mailto:raujla0228@gmail.com",
      icon: <Mail size={16} />,
    },
    {
      label: "Phone",
      value: "+1 (734) 716-8891",
      link: "tel:+17347168891",
      icon: <Phone size={16} />,
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/romiaujla/",
      link: "https://www.linkedin.com/in/romiaujla/",
      icon: <Linkedin size={16} />,
    },
    {
      label: "Github",
      value: "https://github.com/romiaujla",
      link: "https://github.com/romiaujla",
      icon: <Github size={16} />,
    },
  ];

  return (
    <section className="text-left py-10 lg:py-20" id="contact">
      <h3 className="text-primary font-semibold mb-4 sticky top-0 z-10 lg:hidden px-10 py-4 bg-primary/10">
        CONTACT
      </h3>
      <div className="flex flex-col gap-4">
        <p className="text-sm text-foreground px-10 lg:px-0">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, I'll try my best to get back to you!
        </p>
        {showSuccess && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 text-xs text-center px-4 py-3 rounded fixed bottom-10 left-[50%] translate-x-[-50%]"
            role="alert"
          >
            <strong className="font-bold">Success! </strong>
            <span className="block sm:inline text-xs">
              Your message has been sent successfully. I'll definitely get back
              to you!
            </span>
          </div>
        )}
        {showError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 text-xs text-center px-4 py-3 rounded fixed bottom-10 left-[50%] translate-x-[-50%]"
            role="alert"
          >
            <strong className="font-bold">Error! </strong>
            <span className="block sm:inline text-xs">
              God Damn It! {errorMessage}
            </span>
          </div>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 px-10 lg:px-0 mb-10"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background border border-input rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border border-input rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="bg-background border border-input rounded-md px-3 py-2 text-sm resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-semibold transition-colors w-full lg:w-fit lg:mx-auto cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-10 px-10 lg:px-0">
        {contactList.map((contact) => (
          <div key={contact.label} className="flex flex-row gap-6 items-center">
            <div className="w-4 h-4 text-primary">{contact.icon}</div>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary transition-colors flex items-center gap-2 cursor-pointer"
            >
              {contact.label}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
