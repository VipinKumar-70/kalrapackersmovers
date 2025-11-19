import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Users,
  CheckCircle,
  Award,
  Star,
  Briefcase,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const TrainedTeam = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: Award,
      title: "Certified Professionals",
      description: "Our team consists of trained and certified experts in relocation and logistics.",
    },
    {
      icon: Star,
      title: "Quality Service",
      description: "Focused on delivering excellence with every move and project we handle.",
    },
    {
      icon: Briefcase,
      title: "Experience You Can Trust",
      description: "Years of hands-on experience in managing complex logistics operations.",
    },
    {
      icon: BookOpen,
      title: "Continuous Training",
      description: "Regular skill enhancement programs to stay updated with best practices.",
    },
  ];

  const benefits = [
    "Seamless relocation and logistics handling",
    "Professional support from start to finish",
    "Customer-focused and transparent services",
    "Specialized expertise in packing, moving, and storage",
    "Trusted by businesses and families alike",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-12 h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h1 className="text-5xl font-bold mb-4">Our Trained Team</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Skilled, professional, and customer-focused staff ensuring safe and
              efficient handling of all your relocation and logistics needs.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero"
            >
              <Link to="/contact#quote-form">Meet Our Experts</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Our Team Stands Out
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We go beyond services — we provide reliability, professionalism, and trust through our people.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <Card className="h-full bg-[#f1f2f6] hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#f1f2f6]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                The Benefits of Working with Us
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our trained professionals make every step of the relocation
                process stress-free and reliable.
              </p>
              <div className="space-y-4">
                {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/assets/residential-moving.jpg"
                alt="Trained team at work"
                className="rounded-2xl shadow-card w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">
              Work With Our Trained Experts
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Ready to move with confidence? Partner with our skilled and
              professional team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group"
              >
                <Link to="/contact#quote-form">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero"
              >
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainedTeam;
