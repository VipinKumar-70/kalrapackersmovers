
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Warehouse, CheckCircle, ArrowRight } from "lucide-react";

const WarehouseAndStorageServices = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const title = "Warehouse and Storage Services";
  const description = "Secure and climate-controlled storage facilities for short-term and long-term needs, with easy access and inventory management.";
  const features = [
    "Climate-controlled storage",
    "24/7 security",
    "Flexible duration",
    "Easy inventory access"
  ];
  const color = "from-blue-700 to-blue-900";

  const process = [
    { step: "01", title: "Free Consultation", description: "Discuss your storage needs and get a custom solution" },
    { step: "02", title: "Secure Packing", description: "Professional packing and inventory management" },
    { step: "03", title: "Safe Storage", description: "Items stored in climate-controlled, secure facilities" },
    { step: "04", title: "Easy Access", description: "Retrieve your items whenever needed with simple access" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-12 h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-4">
                <Warehouse className="h-6 w-6" />
              </div>
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
            <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero">
              <Link to="/contact#quote-form">Get Storage Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Our Storage Services?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art storage facilities with advanced security and climate control systems
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
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Storage Process</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Simple, transparent process designed to make your storage experience smooth and secure
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{step.title}</h3>
                <p className="text-blue-100">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6 text-foreground">Need Flexible Storage Solutions?</h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Contact us to discuss your specific requirements and get a personalized storage plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group">
                <Link to="/contact">
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseAndStorageServices;