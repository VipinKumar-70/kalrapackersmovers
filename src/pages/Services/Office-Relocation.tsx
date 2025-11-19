import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Building, CheckCircle, Package, Laptop, Briefcase, ArrowRight } from "lucide-react";

const OfficeRelocation = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const title = "Office Relocation";
  const description =
    "Professional office moving solutions for businesses of all sizes, with minimal downtime and complete confidentiality.";

  // Updated features (with icon, title, description)
  const features = [
    {
      icon: Laptop,
      title: "IT Equipment Handling",
      description: "Careful disconnection, packing, and setup of your IT systems."
    },
    {
      icon: Briefcase,
      title: "Furniture & Files Transfer",
      description: "Safe relocation of furniture, cabinets, and important files."
    },
    {
      icon: Package,
      title: "Weekend/After-hours Moves",
      description: "Flexible scheduling to minimize disruption to business operations."
    },
    {
      icon: CheckCircle,
      title: "Custom Relocation Plans",
      description: "Tailored moving plans to suit your office needs."
    }
  ];

  // Packing types (newly defined)
  const packingTypes = [
    {
      title: "Household Items",
      items: ["Furniture", "Appliances", "Clothing", "Kitchenware"]
    },
    {
      title: "Office Equipment",
      items: ["Computers", "Servers", "Printers", "Workstations"]
    },
    {
      title: "Fragile Valuables",
      items: ["Glassware", "Art pieces", "Electronics", "Decor items"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp}>
            <div className="flex flex-col items-center justify-center mb-6">
              <div className="w-12 h-12 bg-yellow-200/20 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6" />
              </div>
              <h1 className="text-5xl font-bold mb-4">{title}</h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              {description}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero"
            >
              <Link to="/contact#quote-form">Get Office Quote</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Why Choose Our Packing & Moving Services?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expert packing with reliable moving solutions, so your
              goods are protected and reach their destination safely. Our team
              manages every step, from packing and loading to transport and
              unloading.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Packing Types Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              What We Pack & Move
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive packing and moving solutions for all types of goods,
              from household items to office equipment and fragile valuables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packingTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full bg-[#f1f2f6]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">
                      {type.title}
                    </h3>
                    <ul className="space-y-2">
                      {type.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Premium Packing & Moving Materials
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We use only the highest quality packing materials and modern
                moving equipment to ensure maximum protection and safe delivery
                for your belongings.
              </p>
              <div className="space-y-4">
                {[
                  "High-grade corrugated boxes in various sizes",
                  "Bubble wrap for fragile item protection",
                  "Foam sheets and padding materials",
                  "Waterproof covers and plastic wrapping",
                  "Specialized boxes for electronics and artwork",
                  "Professional sealing tapes and labels"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                  >
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
                alt="Premium packing and moving materials"
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
              Need Packing & Moving Help?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Let our experts handle your packing and moving needs with premium
              materials, professional techniques, and safe transport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-yellow-200 text-primary hover:bg-primary-glow hover:text-white shadow-hero group"
              >
                <Link to="/contact">
                  Get Packing & Moving Quote
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

export default OfficeRelocation;
