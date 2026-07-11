import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FormField } from "@/components/forms/FormField";
import { Input } from "@/components/common/Input";
import { TextArea } from "@/components/common/TextArea";
import { Button } from "@/components/common/Button";
import { Alert } from "@/components/feedback/Alert";
import { notificationService } from "@/services/notification/notification.service";

const ContactPage = () => {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSubmitting(false);
    setSent(true);
    notificationService.success("Message sent — we'll reply within a business day.");
  };

  return (
    <Container className="py-20">
      <SectionHeading eyebrow="Contact" title="Let's talk" description="Tell us what you need — a hire, a fleet, or both." />

      <div className="mt-12 grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 text-moss-700" />
            <div>
              <p className="font-medium text-ink">Office</p>
              <p className="text-sm text-ink/60">KG 7 Ave, Kigali, Rwanda</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 text-moss-700" />
            <div>
              <p className="font-medium text-ink">Phone</p>
              <p className="text-sm text-ink/60">+250 788 000 000</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-moss-700" />
            <div>
              <p className="font-medium text-ink">Email</p>
              <p className="text-sm text-ink/60">hello@ineza.rw</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          {sent ? (
            <Alert tone="success">Thanks for reaching out — we'll be in touch soon.</Alert>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField label="Full name" htmlFor="name" required>
                  <Input id="name" placeholder="Your name" required />
                </FormField>
                <FormField label="Email address" htmlFor="email" required>
                  <Input id="email" type="email" placeholder="you@company.com" required />
                </FormField>
              </div>
              <FormField label="Message" htmlFor="message" required>
                <TextArea id="message" placeholder="How can we help?" required rows={5} />
              </FormField>
              <Button type="submit" isLoading={isSubmitting}>Send message</Button>
            </form>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ContactPage;
