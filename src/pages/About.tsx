import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Award, 
  Users, 
  Truck, 
  Shield, 
  Clock,
  CheckCircle,
  ArrowRight,
  Target,
  Heart,
  Star
} from "lucide-react";
import cusfeedback from "../assets/happyCustomer.png"

const About = () => {
  const achievements = [
  { icon: Award, number: "30+", label: "Years Experience" },
    { icon: Users, number: "10,000+", label: "Happy Customers" },
    { icon: Truck, number: "50+", label: "Moving Vehicles" },
    { icon: Shield, number: "100%", label: "Insured Moves" },
  ];

  const values = [
    {
      icon: Target,
      title: "Reliability",
      description: "We deliver on our promises with consistent, dependable service you can trust."
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every item is handled with care as if it were our own precious belongings."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery."
    },
    {
      icon: Shield,
      title: "Safety",
      description: "Your belongings' safety is our top priority throughout the moving process."
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight relative">
              About Kalra Packers Movers
              {/* Animated info emoji */}
              <motion.span
                className="absolute -top-3 -right-6 text-3xl"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ℹ️
              </motion.span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
              Your trusted partner in relocation services for over 30 years. We make moving 
              stress-free with professional expertise and personalized care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div {...fadeInUp} className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-foreground">Our Story</h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Founded in 1992, Kalra Packers and Movers began as a small family business with a 
                simple mission: to make relocation as smooth and stress-free as possible. What started 
                as a local moving service has grown into one of India's most trusted names in the 
                relocation industry.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Over the years, we have successfully completed thousands of moves, earning the trust 
                and satisfaction of our customers through our commitment to excellence, reliability, 
                and personalized service. The business has been running for two generations, originally started with just one truck and a small team. Today, we have grown to operate 7+ trucks and employ over 20 dedicated workers, able to deliver anywhere in India from your neighborhood. Our founder, A.K. Kalra, has led this journey with a vision for reliable and accessible moving services. We now operate across major cities in India with a team of skilled professionals and modern equipment.
              </p>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">24/7 Customer Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="text-primary h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-foreground text-sm sm:text-base">Transparent Pricing</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-gradient-section rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Why Choose Us?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start space-x-3">
                    <Clock className="text-primary h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">On-time delivery guaranteed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Shield className="text-primary h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">Comprehensive insurance coverage</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Users className="text-primary h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">Trained and experienced staff</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="text-primary h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">Industry-leading service standards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Award className="text-primary h-4 w-4 sm:h-5 sm:w-5 mt-1 flex-shrink-0" />
                    <span className="text-lg font-bold text-primary">15k+ Happy Customers</span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-col items-center">
                  <div className="flex items-center space-x-2">              
                  </div>
                  <img
                  src="/assets/Happy-customers.png"
                  alt="Happy Customers"
                  className="w-100 h-100 object-cover mt-4"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Our Achievements</h2>
            {/* Animated trophy emoji */}
            <motion.div
              className="absolute -top-2 left-1/4 text-2xl"
              animate={{ y: [0, -5, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >

            </motion.div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <achievement.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-1 sm:mb-2">{achievement.number}</div>
                <div className="text-muted-foreground text-sm sm:text-base">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Our Values</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              The principles that guide us in delivering exceptional moving experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-section hover:shadow-card transition-all duration-300 text-center">
                  <CardContent className="p-4 sm:p-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Experience the Difference?</h2>
            <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4">
              Join thousands of satisfied customers who trust us with their moving needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero group px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
                <Link to="/contact#quote-form">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-glow hover:text-white shadow-hero px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;