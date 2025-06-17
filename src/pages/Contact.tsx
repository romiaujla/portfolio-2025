import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface ContactItem {
  label: string;
  value: string;
  link: string;
  icon: React.ReactNode;
}

export const Contact = () => {
  const contactList: Array<ContactItem> = [
    {
      label: "Email",
      value: "raujla0228@gmail.com",
      link: "mailto:raujla0228@gmail.com",
      icon: <Mail className="w-4 h-4" />,
    },
    {
      label: "Phone",
      value: "+1 (734) 716-8891",
      link: "tel:+17347168891",
      icon: <Phone className="w-4 h-4" />,
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/romiaujla/",
      link: "https://www.linkedin.com/in/romiaujla/",
      icon: <Linkedin className="w-4 h-4" />,
    },
    {
      label: "Github",
      value: "https://github.com/romiaujla",
      link: "https://github.com/romiaujla",
      icon: <Github className="w-4 h-4" />,
    },
  ];

  return (
    <section className="text-left py-10 lg:py-20" id="contact">
      <h3 className="text-primary font-semibold mb-4 sticky top-0 z-10 lg:hidden px-10 py-4 bg-primary/10">
        CONTACT
      </h3>
      <div className="flex flex-col gap-4 px-10 lg:px-0">
        {contactList.map((contact) => (
          <div className="flex flex-row gap-6 items-center">
            <div className="w-4 h-4 text-primary ">{contact.icon}</div>
            <div className="text-xs">{contact.label}</div>
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary transition-colors underline flex items-center gap-2"
            >
              {contact.value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
