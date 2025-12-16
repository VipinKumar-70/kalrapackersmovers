import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// 🔹 Sample images (replace with your real images)
const images: string[] = [
  "/images/img1.jpg",
  "/images/img2.jpg",
  "/images/img3.jpg",
  "/images/img4.jpg",
  "/images/img5.jpg",
  "/images/img6.jpg",
  "/images/img7.jpg",
  "/images/img8.jpg",
  "/images/img9.jpg",
];

const NewGallery = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Our Services Gallery
            </h1>
            <p className="text-base sm:text-lg text-blue-100 max-w-3xl mx-auto">
              Showcasing our professional moving and packing services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="
              grid 
              grid-cols-2 
              lg:grid-cols-3 
              gap-4 
              sm:gap-6 
              lg:gap-8
            "
          >
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={img}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewGallery;
