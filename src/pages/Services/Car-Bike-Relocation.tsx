import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Car, CheckCircle, ArrowRight } from "lucide-react";

const CarBikeRelocation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const title = "Car Bike Relocation";
  const description = "Specialized carriers for safe transportation of cars and bikes, with insurance and real-time tracking.";
  const features = [
    "All India delivery",
    "Insurance coverage",
    "Door-to-door pickup",
    "Real-time tracking"
  ];
  const color = "from-red-500 to-red-600";

  const vehicleTypes = [
    {
      title: "Cars",
      items: ["Hatchbacks", "Sedans", "SUVs", "Luxury Cars", "Vintage Cars"]
    },
    {
      title: "Two Wheelers",
      items: ["Motorcycles", "Scooters", "Sports Bikes", "Electric Bikes", "Vintage Bikes"]
    },
    {
      title: "Commercial",
      items: ["Taxis", "Commercial Vans", "Delivery Vehicles", "Fleet Cars", "Company Vehicles"]
    }
  ];

  const process = [
    { step: "01", title: "Vehicle Inspection", description: "Thorough inspection and documentation of current condition" },
    { step: "02", title: "Secure Loading", description: "Professional loading using specialized equipment and safety measures" },
    { step: "03", title: "Safe Transport", description: "Careful transportation with real-time tracking and monitoring" },
    { step: "04", title: "Delivery & Handover", description: "Safe delivery and final inspection before handover" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-12 h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6" />
              </div>
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
            <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero">
              <Link to="/contact#quote-form">Get Relocation Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Our Car Bike Relocation?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Safe and reliable transportation for your car or bike, with insurance and real-time tracking.
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl font-bold mb-6">Ready to Relocate Your Vehicle?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get a free quote for safe and reliable car or bike relocation services with full insurance coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group">
                <Link to="/contact#quote-form">
                  Get Relocation Quote
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

export default CarBikeRelocation;
