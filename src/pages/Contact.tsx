import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Reveal from '@/components/ui/Reveal';
import { contactInfo } from '@/data/company';
import { sendContactEmail } from '@/services/email';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [searchParams] = useSearchParams();
  const productQuery = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    if (productQuery) {
      setFormData((prev) => ({
        ...prev,
        subject: `Product Inquiry: ${productQuery}`,
        message: `I am interested in the ${productQuery}. Please provide more information.`,
      }));
    }
  }, [productQuery]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const response = await sendContactEmail(formData);
      if (response.success) {
        setSubmitted(true);
      } else {
        setSubmitError(response.error || 'Failed to send your message. Please try again.');
      }
    } catch (err: any) {
      setSubmitError(err.message || 'An unexpected error occurred while sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: MapPin,
      title: 'Address',
      value: contactInfo.address,
    },
    {
      icon: Phone,
      title: 'Phone',
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone}`,
    },
    {
      icon: Mail,
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: contactInfo.hours,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us | PAGE International Ltd."
        description="Get in touch with PAGE International Ltd. for automotive garage equipment inquiries, quotes, and support. Located in Banani, Dhaka, Bangladesh."
        path="/contact"
      />

      {/* Hero */}
      <section className="border-b border-steel-200 bg-steel-50">
        <div className="container-page py-10 lg:py-14">
          <Breadcrumb items={[{ label: 'Contact' }]} />
          <h1 className="mt-4 text-3xl font-bold text-navy-900 sm:text-4xl">Contact Us</h1>
          <p className="mt-2 max-w-2xl text-base text-steel-600">
            Have a question or need a quote? Reach out to our team and we&rsquo;ll get back to you
            promptly.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              const content = card.href ? (
                <a href={card.href} className="text-sm text-steel-600 transition-colors hover:text-accent-600">
                  {card.value}
                </a>
              ) : (
                <p className="text-sm text-steel-600">{card.value}</p>
              );
              return (
                <Reveal key={card.title} delay={index * 80}>
                  <div className="card h-full p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wide text-navy-900">{card.title}</h3>
                    <div className="mt-2">{content}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="bg-steel-50 py-14 lg:py-20">
        <div className="container-page">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
                {submitted ? (
                  <div className="flex flex-col items-center py-10 text-center animate-fade-in">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 ring-8 ring-green-50/60">
                      <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-900">Message Sent Successfully!</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-steel-600">
                      Thank you for reaching out, <span className="font-semibold text-navy-900">{formData.fullName}</span>. Your message has been delivered to our team via Resend. We will respond to <span className="font-semibold text-navy-900">{formData.email}</span> within 1–2 business days.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setSubmitError(null);
                        setFormData({ fullName: '', company: '', phone: '', email: '', subject: '', message: '' });
                      }}
                      className="btn btn-outline mt-6"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-navy-900">Send a Message</h2>
                    <p className="mt-2 text-sm text-steel-600">
                      Fill out the form below and we&rsquo;ll respond as soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                      {submitError && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 flex items-start gap-3 animate-fade-in">
                          <AlertCircle className="h-5 w-5 shrink-0 text-red-500 mt-0.5" aria-hidden="true" />
                          <div>
                            <p className="font-semibold">Unable to send message</p>
                            <p className="mt-0.5">{submitError}</p>
                          </div>
                        </div>
                      )}
                      <div>
                        <label htmlFor="fullName" className="label-field">
                          Full Name <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="input-field"
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-600">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.fullName}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="company" className="label-field">Company</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="label-field">
                            Phone <span className="text-accent-600">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="input-field"
                            aria-invalid={!!errors.phone}
                          />
                          {errors.phone && (
                            <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-600">
                              <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="label-field">
                          Email <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="input-field"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-600">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="subject" className="label-field">
                          Subject <span className="text-accent-600">*</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="input-field"
                          aria-invalid={!!errors.subject}
                        />
                        {errors.subject && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-600">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="label-field">
                          Message <span className="text-accent-600">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="input-field resize-y"
                          aria-invalid={!!errors.message}
                        />
                        {errors.message && (
                          <p className="mt-1.5 flex items-center gap-1 text-xs text-accent-600">
                            <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary btn-lg w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            <span>Sending Message...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </Reveal>

            {/* Map */}
            <Reveal delay={100}>
              <div className="flex h-full flex-col">
                <div className="overflow-hidden rounded-2xl shadow-card">
                  <div className="aspect-[4/3] w-full bg-steel-200 lg:aspect-auto lg:h-full lg:min-h-[400px]">
                    <iframe
                      title="PAGE International location map"
                      src="https://www.openstreetmap.org/export/embed.html?bbox=90.395%2C23.793%2C90.405%2C23.803&amp;layer=mapnik&amp;marker=23.798%2C90.400"
                      className="h-full w-full border-0"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-navy-900 p-6 text-white">
                  <h3 className="text-lg font-bold">Visit Our Office</h3>
                  <p className="mt-2 text-sm text-steel-300">{contactInfo.address}</p>
                  <Link to="/garage-equipment" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-400 transition-colors hover:text-accent-300">
                    Explore Our Products
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
