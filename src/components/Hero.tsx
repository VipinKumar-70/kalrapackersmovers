import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Phone,
  ArrowRight,
  Package,
  Clock,
  Truck,
  Shield,
  Headphones,
  Star,
  X,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/emailjs";
import packers from "../assets/packers2.png"

// Fixed Google Reviews
const GOOGLE_REVIEWS = [
  {
    author: "Gaurav Semwal",
    rating: 5,
    text: "Amazing professionals in shifting. Mr AK Kalra ensures smooth moving. A must try for peace of mind while shifting homes.",
    date: "1 month ago",
    role: "Local Guide",
  },
  {
    author: "Swasti Bardhan",
    rating: 5,
    text: "Fantastic experience with Kalra M&P. Very supportive staff. All items relocated safely without any damage.",
    date: "2 months ago",
    role: "",
  },
  {
    author: "Mayank Singhal",
    rating: 5,
    text: "Mr Kalra ensures customer delight. Delhi to Lucknow delivery was timely with all safety measures. Highly recommended!",
    date: "6 months ago",
    role: "Local Guide",
  },
  {
    author: "Priya Sharma",
    rating: 4,
    text: "Good service, but could be faster. Overall satisfied with the packing quality.",
    date: "3 weeks ago",
    role: "",
  },
  {
    author: "Rajesh Kumar",
    rating: 5,
    text: "Excellent movers! Handled fragile items with care. Highly recommend for interstate moves.",
    date: "1 week ago",
    role: "",
  },
  {
    author: "Anita Gupta",
    rating: 5,
    text: "Professional team, reasonable rates, and punctual. Will use again for next relocation.",
    date: "2 weeks ago",
    role: "",
  },
  {
    author: "Vikram Singh",
    rating: 5,
    text: "Seamless experience from booking to delivery. GPS tracking was a great feature.",
    date: "1 month ago",
    role: "",
  },
  {
    author: "Neha Patel",
    rating: 4,
    text: "Mostly good, minor delay in pickup but compensated well.",
    date: "4 months ago",
    role: "",
  },
  {
    author: "Amit Roy",
    rating: 5,
    text: "Best packers in Delhi NCR. No damage, quick service.",
    date: "5 months ago",
    role: "",
  },
];

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 3;
        return next >= GOOGLE_REVIEWS.length ? 0 : next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Show popup after 800ms
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    setSent(false);

    try {
      const result = await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current!,
        emailjsConfig.publicKey
      );

      if (result.status === 200) {
        setSent(true);
        formRef.current?.reset();
        setTimeout(() => setShowPopup(false), 2000);
      } else {
        setError("Failed to send. Please try again.");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const features = [
    { icon: <Package className="w-5 h-5" />, text: "30+ Years Experience" },
    { icon: <Truck className="w-5 h-5" />, text: "15000+ successfully moved orders" },
    { icon: <Star className="w-5 h-5" />, text: "GPS enabled vehicle" },
    { icon: <Shield className="w-5 h-5" />, text: "Reasonable rate" },
    { icon: <Clock className="w-5 h-5" />, text: "Best Services" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 Support" },
  ];

  const ReviewCard = ({ review }: { review: typeof GOOGLE_REVIEWS[0] }) => (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 h-full flex flex-col"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
          {review.author.charAt(0)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
            {review.author}
          </p>
          {review.role && (
            <p className="text-xs text-blue-600 font-medium">{review.role}</p>
          )}
        </div>
      </div>

      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-1 italic">
        "{review.text}"
      </p>

      <p className="text-xs text-gray-500 mt-3 text-right">{review.date}</p>
    </motion.div>
  );

  return (
    <>
      {/* === HERO SECTION (Improved Layout) === */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-gray-200"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 lg:py-20">
            {/* LEFT: Content + CTA */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="lg:col-span-5 space-y-8 text-center lg:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900"
              >
                Professional
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Moving Services
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="mt-4 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0"
              >
                Stress-free relocations with insured trucks, real-time tracking, and a dedicated support team.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-6"
              >
                {/* <Button
                  onClick={() => setShowPopup(true)}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  Get a Free Quote
                </Button>
                <a
                  href="tel:+18001234567"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-indigo-700 bg-white border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a> */}
              </motion.div>

              {/* Features Grid */}
              <motion.ul
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto lg:mx-0"
              >
                {features.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + idx * 0.07, duration: 0.5 }}
                    className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-gray-100"
                  >
                    <div className="text-indigo-600 flex-shrink-0">{item.icon}</div>
                    <span className="text-sm font-medium text-gray-800">{item.text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* RIGHT: Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 80 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="lg:col-span-7 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-indigo-200 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
                <img
                  src={packers}
                  alt="Packers & Movers – truck, boxes, happy family"
                  className="w-full max-w-md lg:max-w-xl xl:max-w-2xl drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === REVIEWS SECTION === */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">4.9</span>
              <span className="text-sm sm:text-base text-gray-600">(reviews)</span>
            </div>
          </motion.div>

          {/* Slider */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * (100 / 3)}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {GOOGLE_REVIEWS.map((review, idx) => (
                  <div key={idx} className="w-full md:w-1/3 flex-shrink-0 px-3">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(GOOGLE_REVIEWS.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx * 3)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / 3) === idx
                      ? "bg-blue-600 w-8 sm:w-10"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Show More Reviews */}
          <div className="text-center mt-10">
            <a
              href="https://www.google.com/search?q=Kalra+Packers+Movers+Reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 text-sm sm:text-base font-semibold"
            >
              Show More Reviews on Google
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* === POPUP CONTACT FORM === */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
              Get a Free Moving Quote!
            </h3>
            <p className="text-sm text-gray-600 text-center mb-6">
              Fill in your details and we'll call you back in 5 minutes.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <input
                name="user_name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
              />
              <input
                name="user_phone"
                type="tel"
                pattern="[0-9]{10}"
                required
                placeholder="Your Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm"
              />
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-60"
              >
                {sending ? "Sending..." : "Request Callback"}
              </Button>

              {sent && (
                <p className="text-green-600 text-center font-medium text-sm">
                  Sent! We'll call you soon.
                </p>
              )}
              {error && <p className="text-red-600 text-center text-sm">{error}</p>}
            </form>

            <p className="text-xs text-gray-500 text-center mt-4">
              Rated <span className="font-bold text-yellow-500">4.9</span> by happy customers
            </p>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;