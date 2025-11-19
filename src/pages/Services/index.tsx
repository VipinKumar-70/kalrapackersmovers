import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home as HomeIcon, 
  Building,
  Briefcase,
  Package,
  Car,
  Warehouse,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Car Bike Relocation",
      description: "Specialized carriers for safe transportation of cars and bikes, offering insurance, expert handling, and real-time tracking.",
      features: ["All India delivery", "Insurance coverage", "Door-to-door pickup", "Real-time tracking"],
      link: "/services/Car-Bike-Relocation",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Building,
      title: "Office Relocation",
      description: "Professional office moving solutions for businesses of all sizes, with minimal downtime and complete confidentiality.",
      features: ["IT equipment handling", "Furniture & files transfer", "Weekend/after-hours moves", "Custom relocation plans"],
      link: "/services/Office-Relocation",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: HomeIcon,
      title: "Home Relocation",
      description: "Safe and efficient shifting of your household goods, furniture, and appliances to your new home, anywhere in India.",
      features: ["Door-to-door service", "Expert packing & handling", "Timely delivery", "Unpacking & setup assistance"],
      link: "/services/Home-Relocation",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Package,
      title: "Packaging of Goods",
      description: "High-quality packing materials and techniques to protect your belongings during transit, including fragile items.",
      features: ["Premium packing materials", "Fragile item protection", "Systematic labeling", "Custom packaging"],
      link: "/services/Packaging-of-Goods",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Shield,
      title: "Trained Team",
      description: "Experienced and trained staff to handle all types of moves, ensuring safety and professionalism throughout the process.",
      features: ["Background-checked staff", "Professional training", "Customer-friendly approach", "Efficient teamwork"],
      link: "/services/Trained-Team",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Warehouse,
      title: "Warehouse and Storage Services",
      description: "Secure and climate-controlled storage facilities for short-term and long-term needs, with easy access and inventory management.",
      features: ["Climate-controlled storage", "24/7 security", "Flexible duration", "Easy inventory access"],
      link: "/services/Warehouse-and-Storage-Services",
      color: "from-blue-700 to-blue-900"
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
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive moving and relocation services tailored to meet your specific needs. 
              From residential moves to international relocations, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-[#f1f2f6] hover:shadow-card transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header with gradient */}
                    <div className={`bg-[#2567a1] p-6 text-white`}>
                      <div className="w-12 h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      {/* Features */}
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        asChild 
                        className="w-full bg-gradient-primary text-white hover:shadow-button group-hover:scale-105 transition-transform duration-300"
                      >
                        <Link to={service.link} className="flex items-center justify-center">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f1f2f6]">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process designed to make your move as smooth as possible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Free Quote", description: "Get a detailed, no-obligation quote for your move" },
              { step: "02", title: "Planning", description: "We create a customized moving plan tailored to your needs" },
              { step: "03", title: "Packing", description: "Professional packing using high-quality materials" },
              { step: "04", title: "Moving", description: "Safe transportation and delivery to your new location" },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Every move is unique. Contact us to discuss your specific requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group">
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero">
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;