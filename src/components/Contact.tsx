import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

// Define the props for this component
type ContactProps = {
  companyName: string;
  phone: string;
  email: string;
  address: string;
  businessHours: string;
};

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link: string | undefined;
  delay?: number;
}
const ContactItem = ({ icon, title, content, link, delay }: ContactItemProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="contact-card"
  >
    <div className="flex items-start">
      <div className="mr-4">
        <div className="p-3 bg-navy rounded-full text-gold">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-700 hover:text-gold transition-colors">
            {content}
          </a>
        ) : (
          <p className="text-gray-700">{content}</p>
        )}
      </div>
    </div>
  </motion.div>
);

const Contact: React.FC<ContactProps> = ({ companyName, phone, email, address, businessHours }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    // Log the form data being sent
    const emailPayload = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: companyName
    };
  
    console.log("Sending email with data:", emailPayload);
  
    try {
      const result = await emailjs.send(
        'service_p0c6h3c',
        'template_l7m02i4',
        emailPayload,
        'GDWzGI7STMS3-7NRH'
      );
  
      console.log("EmailJS response:", result);
  
      if (result.status === 200 || result.text === 'OK') {
        toast.success('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" />
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-heading text-white">Contact Us</h2>
        <p className="text-light-blue/90 max-w-3xl mx-auto text-lg">
          Have questions or ready to discuss your custom dress requirements? Get in touch with our team. We're here to help bring your vision to life.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <ContactItem 
          icon={<Phone className="w-6 h-6" />}
          title="Phone"
          content={phone}
          link={`tel:${phone.replace(/\s+/g, '')}`}
          delay={0.1}
        />
        
        <ContactItem 
          icon={<Mail className="w-6 h-6" />}
          title="Email"
          content={email}
          link={`mailto:${email}`}
          delay={0.2}
        />
        
        <ContactItem 
          icon={<MapPin className="w-6 h-6" />}
          title="Address"
          content={address}
          link="https://maps.google.com"
          delay={0.3}
        />
        
        <ContactItem 
          icon={<Clock className="w-6 h-6" />}
          title="Business Hours"
          content={businessHours}
          delay={0.4} link={undefined}        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16 p-8 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg max-w-4xl mx-auto"
      >
        <h3 className="text-2xl font-serif font-bold mb-6 text-navy text-center">Send Us a Message</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                placeholder="Your Email"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input 
              type="text" 
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Subject"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea 
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
              placeholder="Your Message"
            ></textarea>
          </div>
          
          <div className="text-center">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`inline-block bg-gold text-navy font-medium px-8 py-3 rounded-full transition-colors ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold/90'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
