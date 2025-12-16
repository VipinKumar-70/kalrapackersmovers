import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "@/layouts/MainLayout";
import { Loader2 } from "lucide-react";

// Lazy load pages for code splitting with better error boundaries
const Home = lazy(() => import("@/pages/Home").catch(() => ({ default: () => <div>Error loading Home</div> })));
const About = lazy(() => import("@/pages/About").catch(() => ({ default: () => <div>Error loading About</div> })));
const Contact = lazy(() => import("@/pages/Contact").catch(() => ({ default: () => <div>Error loading Contact</div> })));
const NewGallery = lazy(() => import("@/pages/NewGallery").catch(() => ({ default: () => <div>Error loading NewGallery</div> })));
const Blog = lazy(() => import("@/pages/Blog").catch(() => ({ default: () => <div>Error loading Blog</div> })));
const BlogPost = lazy(() => import("@/pages/BlogPost").catch(() => ({ default: () => <div>Error loading BlogPost</div> })));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy").catch(() => ({ default: () => <div>Error loading Privacy Policy</div> })));
const TermsOfService = lazy(() => import("@/pages/TermsOfService").catch(() => ({ default: () => <div>Error loading Terms of Service</div> })));

// Services pages
const Services = lazy(() => import("@/pages/Services").catch(() => ({ default: () => <div>Error loading Services</div> })));
const LocalShifting = lazy(() => import("@/pages/Services/Home-Relocation").catch(() => ({ default: () => <div>Error loading page</div> })));
const GoodsPackingAndMoving = lazy(() => import("@/pages/Services/Office-Relocation").catch(() => ({ default: () => <div>Error loading page</div> })));
const CarCarrier = lazy(() => import("@/pages/Services/Car-Bike-Relocation").catch(() => ({ default: () => <div>Error loading page</div> })));
const StorageServices = lazy(() => import("@/pages/Services/Packaging-of-Goods").catch(() => ({ default: () => <div>Error loading page</div> })));
const LogisticsServices = lazy(() => import("@/pages/Services/Trained-Team").catch(() => ({ default: () => <div>Error loading page</div> })));
const WarehouseStorage = lazy(() => import("@/pages/Services/Warehouse-and-Storage-Services").catch(() => ({ default: () => <div>Error loading page</div> })));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-[40vh]">
    <div className="text-center space-y-4">
      <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
      <p className="text-muted-foreground text-sm">Loading...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="NewGallery" element={<NewGallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          
          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/local-shifting" element={<LocalShifting />} />
          <Route path="services/goods-packing" element={<GoodsPackingAndMoving />} />
          <Route path="services/goods-packing-and-moving" element={<GoodsPackingAndMoving />} />
          <Route path="services/car-carrier" element={<CarCarrier />} />
          <Route path="services/storage-services" element={<StorageServices />} />
          <Route path="services/logistics-services" element={<LogisticsServices />} />
          <Route path="services/Home-Relocation" element={<LocalShifting />} />
          <Route path="services/Office-Relocation" element={<GoodsPackingAndMoving />} />
          <Route path="services/Car-Bike-Relocation" element={<CarCarrier />} />
          <Route path="services/Packaging-of-Goods" element={<StorageServices />} />
          <Route path="services/Trained-Team" element={<LogisticsServices />} />
          <Route path="services/Warehouse-and-Storage-Services" element={<WarehouseStorage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;