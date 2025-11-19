import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { emailjsConfig } from "@/lib/emailjs";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Fallback scroll to form if navigated via #quote-form
  useEffect(() => {
    if (window.location.hash === "#quote-form" && formRef.current) {
      setTimeout(() => {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, []);
  const contactInfo = [
    {
      icon: Clock,
      title: "Hours",
      details: ["24/7 Customer Support",],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["offers@kalrapackersmovers.in", "mail@kalrapackersmovers.in"],
      color: "from-orange-500 to-orange-600",
      classname: "text-sm sm:text-base"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-7292010102", "+91-9876543210"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight relative">
              Contact Us
              {/* Animated handshake emoji */}
              <motion.span
                className="absolute -top-3 -right-8 text-3xl"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤝
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Ready to move? Get in touch with our expert team for a free quote and
              personalized moving solution tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              {...fadeInUp}
              className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            >
              {/* Why Choose Us */}
              <Card className="bg-[#f1f2f6]">
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-foreground">Why Us?</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      "30+ years experience",
                      "Free, no-obligation quotes",
                      "Transparent pricing",
                      "Customer Satisfaction",
                      "Customized moving solutions",
                    ].map((reason, idx) => (
                      <div key={idx} className="flex items-center space-x-2 sm:space-x-3">
                        <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-base sm:text-lg lg:text-xl">{reason}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp} className="order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-foreground text-center lg:text-left relative">
                Get Your Free Quote
                {/* Animated dollar emoji */}
                <motion.span
                  className="absolute -top-2 -right-6 text-2xl"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >

                </motion.span>
              </h2>
              <form id="quote-form" className="space-y-4 sm:space-y-6" ref={formRef} onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                setError("");
                setSent(false);

                try {
                  const result = await emailjs.sendForm(
                    emailjsConfig.serviceId,
                    emailjsConfig.templateId,
                    formRef.current,
                    emailjsConfig.publicKey
                  );

                  if (result.status === 200) {
                    setSent(true);
                    // Reset form after successful submission
                    if (formRef.current) {
                      formRef.current.reset();
                    }
                  } else {
                    setError("Failed to send. Please try again later.");
                  }
                } catch (err) {
                  console.error("EmailJS error:", err);
                  setError("Failed to send. Please check your internet connection or try again later.");
                }
                setSending(false);
              }}>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-black">
                    Your Phone Number *
                  </label>
                  <Input
                    name="user_phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary py-3 sm:py-4 text-base"
                    placeholder="Enter your 10-digit mobile number"
                  />
                </div>

                <div className="space-y-2">
                  <Textarea
                    name="user_message"
                    required
                    placeholder="Tell us about your moving requirements, number of rooms, locations, preferred dates, etc."
                    rows={5}
                    className="bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary resize-none text-base"
                  />
                </div>

                <Button className="w-full bg-primary-glow text-white hover:text-white hover:shadow-button group pt-0 py-3 sm:py-4 text-base sm:text-lg font-semibold touch-manipulation" size="lg" type="submit" disabled={sending}>
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {sending ? "Sending..." : "Send Message"}
                </Button>
                {sent && <div className="text-green-600 mt-2 text-sm sm:text-base font-medium">Message sent successfully!</div>}
                {error && <div className="text-red-600 mt-2 text-sm sm:text-base">{error}</div>}
              </form>
            </motion.div>
          </div>
        </div>
        <div className="container mx-auto mt-12 sm:mt-16 lg:mt-24 mb-0 pb-0 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}>
                <Card className="h-full bg-[#f1f2f6] hover:shadow-card transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`bg-gradient-to-r ${info.color} p-4 sm:p-6 text-white`}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                        <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold">{info.title}</h3>
                    </div>
                    <div className="p-4 sm:p-6">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground mb-2 last:mb-0 text-sm sm:text-base leading-relaxed break-words">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Map Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Visit Our Office</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Located in the heart of Delhi, easily accessible from all major areas
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="bg-gray-200 rounded-2xl overflow-hidden">
            <div className="flex flex-col items-center justify-center w-full">
              <div className="w-full h-64 sm:h-80 lg:h-96 relative">
                <iframe
                  title="Kalra Packers & Movers Location"
                  src="https://www.google.com/maps?q=474,+Plot,+Block-C,+Sector+6+Dwarka,+Dwarka,+New+Delhi,+Delhi,+110075&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-4 sm:p-6 lg:p-8 text-center bg-white rounded-b-2xl w-full">
                <div className="text-sm sm:text-base lg:text-lg font-semibold text-foreground leading-relaxed">
                  <strong>Address:</strong> 474, Plot, Block-C, Sector 6 Dwarka, Dwarka, New Delhi, Delhi, 110075
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;