import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Package,
  Clock,
  Truck,
  Shield,
  Headphones,
  Star,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "@/lib/emailjs";
import welcome from "../assets/Welcome-cuate.png";
import hello from "../assets/Hello-rafiki.png";
import packers from "../assets/packers2.png";
import herobg from "../assets/deliverytruck.jpg";

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

  const ReviewCard = ({ review }: { review: (typeof GOOGLE_REVIEWS)[0] }) => (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-[#f1f2f6] rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100 h-full flex flex-col"
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
              i < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
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
      {/* === HERO SECTION === */}
      <section className="relative flex items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-yellow-50 via-white to-gray-50">
        <div
          className="absolute inset-0 z-0 bg-center bg-cover"
          style={{ backgroundImage: `url(${herobg})` }}
        ></div>
        <div className="absolute inset-0 z-10 bg-black/35"></div>

        <div className="relative z-20 max-w-6xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* LEFT TEXT */}
          <div className="text-left px-4">
            <div className="inline-flex items-center gap-3 bg-black/80 text-white rounded-full px-3 py-1 text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3 7v6c0 5 4 9 9 9s9-4 9-9V7l-9-5z" />
              </svg>
              Trusted Since 1993
            </div>

            <h1 className="mt-6 text-3xl md:text-[44px] font-extrabold leading-tight text-white ">
              Move with Confidence — Kalra Packers Movers
            </h1>
            <p className="mt-4 text-yellow-100 text-lg">
              30+ years • 15,000+ successful moves • 4.9★ on Google. We handle
              home & office shifts with care, speed and transparent pricing.
            </p>

            <div className="mt-6 flex gap-4 flex-wrap">
              <a
                href="#quote"
                className="bg-black text-yellow-400 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:opacity-95"
              >
                Get Free Quote
              </a>
              <a
                href="tel:+91XXXXXXXXXX"
                className="border-2 border-white text-white px-6 py-3 rounded-2xl font-semibold"
              >
                Call Now
              </a>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 max-w-sm text-white">
              <div className="text-left">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-xs text-yellow-200">Years</div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-xs text-yellow-200">Moves</div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold">4.9★</span>
                </div>
                <div className="text-xs text-yellow-200">Google Rating</div>
              </div>
            </div>
          </div>

          {/* === QUOTE FORM === */}
          <div className="px-4 py-5" id="quote">
            <div className="rounded-2xl shadow-2xl overflow-hidden bg-white">
              <div
                className="w-full aspect-[16/9] bg-center bg-cover"
                style={{
                  backgroundImage: `url(${packers})`,
                }}
                role="img"
                aria-label="Kalra staff providing a survey and quote"
              ></div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Instant Quote</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Tell us your move details and get a guaranteed, transparent
                  quote — no hidden fees.
                </p>

                {/* === FORM START === */}
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="grid gap-3"
                >
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Your name"
                    className="border rounded px-3 py-2"
                    required
                  />
                  <input
                    name="user_phone"
                    type="tel"
                    placeholder="Phone number"
                    className="border rounded px-3 py-2"
                    required
                  />

                  <Button
                    type="submit"
                    disabled={sending}
                    className="bg-yellow-500 text-black px-4 py-2 rounded font-semibold hover:bg-yellow-400 transition-all"
                  >
                    {sending ? "Sending..." : "Request Quote"}
                  </Button>

                  {sent && (
                    <p className="text-green-600 text-sm mt-2">
                      ✅ Message sent successfully!
                    </p>
                  )}
                  {error && (
                    <p className="text-red-600 text-sm mt-2">❌ {error}</p>
                  )}
                </form>
                {/* === FORM END === */}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div
                className="w-full h-28 bg-center bg-cover rounded"
                style={{ backgroundImage: "url('/assets/packing.jpg')" }}
                aria-label="Professional packing by Kalra team"
              ></div>
              <div
                className="w-full h-28 bg-center bg-cover rounded"
                style={{ backgroundImage: "url('/assets/truck-loading.jpg')" }}
                aria-label="Branded truck being loaded"
              ></div>
            </div>
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
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                Google Reviews
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                4.9
              </span>
              <span className="text-sm sm:text-base text-gray-600">
                (reviews)
              </span>
            </div>
          </motion.div>

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
              {Array.from({
                length: Math.ceil(GOOGLE_REVIEWS.length / 3),
              }).map((_, idx) => (
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
    </>
  );
};

export default Hero;
