import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import SimpleGallery from "@/components/SimpleGallery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Building,
  Truck,
  Package,
  Shield,
  Globe,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
// ...removed import for public image...

const Home = () => {
  // Gallery images from Flickr (replace/add more URLs as needed)
  // (removed duplicate galleryImages declaration)

  const services = [
    {
      icon: Truck,
      title: "Office Relocation",
      description:
        "Complete office moving solutions with specialized equipment and experienced staff.",
      link: "/services/office-relocation",
    },
    {
      icon: Building,
      title: "Commercial Moving",
      description:
        "Efficient business relocation services minimizing downtime and ensuring business continuity.",
      link: "/services/commercial",
    },
    {
      icon: HomeIcon,
      title: "Residential Moving",
      description:
        "Safe and reliable home shifting services with professional packing and careful handling.",
      link: "/services/residential",
    },
    {
      icon: Package,
      title: "Packing & Unpacking",
      description:
        "Professional packing services using quality materials to ensure item safety.",
      link: "/services/packing-unpacking",
    },
    {
      icon: Truck,
      title: "Vehicle Transport",
      description:
        "Safe car and bike transportation services across India with insurance coverage.",
      link: "/services/vehicle-transport",
    },
    {
      icon: Shield,
      title: "Storage Solutions",
      description:
        "Secure warehouse storage facilities for short-term and long-term storage needs.",
      link: "/services/storage-solutions",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Excellent service! The team was professional and handled all our belongings with care. Highly recommended!",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      comment:
        "Best packers and movers. On-time delivery and very reasonable prices. Will use again!",
    },
    {
      name: "Anita Gupta",
      rating: 5,
      comment:
        "Stress-free relocation experience. The team was punctual and took great care of our furniture.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground text-center lg:text-left relative">
                Welcome to
                <span className="text-primary"> Kalra Packers & Movers</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-center lg:text-left">
                With over 30 years of experience in the moving industry, Kalra
                Packers and Movers has established itself as a trusted name in
                relocation services. We provide comprehensive door-to-door
                packing and moving solutions across India.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="text-primary h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">
                    24/7 Customer Support
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="text-primary h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">
                    Professional Team
                  </span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <CheckCircle className="text-primary h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">
                    Transparent Pricing
                  </span>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group px-6 py-3 sm:px-8 sm:py-4"
                >
                  <Link to="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} className="relative order-1 lg:order-2">
              <img
                src="/assets/services-truck.jpg"
                alt="Professional moving services"
                className="rounded-2xl shadow-card w-full h-64 sm:h-80 lg:h-96 object-cover"
              />

              {/* Stats Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-yellow-200 rounded-lg shadow-card p-4 sm:p-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    15,000+
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Happy Customers
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="text-center mb-12 sm:mb-16 relative"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
              Our Services
            </h2>
            {/* Animated gear emoji */}
            <motion.div
              className="absolute top-0 right-1/4 text-2xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              We offer comprehensive moving and relocation services tailored to
              meet your specific needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group cursor-pointer bg-[#f1f2f6] shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <service.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white drop-shadow" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-8 sm:mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#f1f2f6] text-primary hover:bg-primary-glow hover:text-white shadow-hero group px-6 py-3 sm:px-8 sm:py-4"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Our Gallery Section */}
      {/* <SimpleGallery
        googlePhotosUrl="https://photos.app.goo.gl/PoSYcjGjWuqL4eY56"
        className=""
      /> */}

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-white relative">
        {/* Floating money emoji */}
        <motion.div
          className="absolute top-8 left-8 text-3xl"
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>

        {/* Floating rocket emoji */}
        <motion.div
          className="absolute top-12 right-12 text-3xl"
          animate={{ y: [0, -15, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        ></motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 relative">
              Ready to Move?
              {/* Animated checkmark */}
              <motion.span
                className="absolute -top-2 -right-8 text-2xl"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              ></motion.span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Get a free quote today and experience stress-free relocation with
              our professional team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                asChild
                size="lg"
                className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto"
              >
                <Link to="/contact#quote-form">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
