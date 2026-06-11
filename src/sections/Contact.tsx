import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/personalInfo';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { cn } from '../utils/cn';
import { useForm } from 'react-hook-form';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        personalInfo.contact.serviceId,
        personalInfo.contact.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: personalInfo.name,
        },
        personalInfo.contact.publicKey
      );
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full mb-6" />
          <p className="text-secondary max-w-2xl mx-auto">
            Have a project in mind or looking for a dedicated software engineering intern? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-primary mb-4">Let's Connect</h3>
              <p className="text-secondary mb-8">
                I'm currently open for new opportunities, specifically focusing on junior roles and internships in software engineering, web development, or machine learning.
              </p>

              <div className="space-y-6">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-secondary hover:text-accent transition-colors group">
                  <div className="p-3 bg-secondary/10 group-hover:bg-accent/10 rounded-full transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">Email Me</p>
                    <p>{personalInfo.email}</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass p-8 rounded-2xl space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border transition-colors focus:outline-none focus:ring-2",
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-secondary/20 focus:border-accent focus:ring-accent/50"
                  )}
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border transition-colors focus:outline-none focus:ring-2",
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-secondary/20 focus:border-accent focus:ring-accent/50"
                  )}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can I help you?"
                  className={cn(
                    "w-full px-4 py-3 rounded-lg bg-surface border transition-colors focus:outline-none focus:ring-2 resize-none",
                    errors.message ? "border-red-500 focus:ring-red-500" : "border-secondary/20 focus:border-accent focus:ring-accent/50"
                  )}
                  {...register("message")}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 text-green-500 rounded-lg flex items-start gap-3">
                  <CheckCircle size={20} className="shrink-0 mt-0.5" />
                  <p className="text-sm">Thank you for your message! I will get back to you as soon as possible.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 text-red-500 rounded-lg flex items-start gap-3">
                  <AlertCircle size={20} className="shrink-0 mt-0.5" />
                  <p className="text-sm">Oops! Something went wrong. Please check your EmailJS configuration or try emailing me directly.</p>
                </div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
