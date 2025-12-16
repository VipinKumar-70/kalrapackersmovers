import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Home,
  Info,
  List,
  Mail as MailIcon,
  BookOpen,
  Truck,
  Building,
  Package,
  Shield,
  Archive,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
            <form className="space-y-2.5">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full p-2.5 sm:p-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              />
              <button
                type="submit"
                className="w-full bg-primary-glow text-white py-2 sm:py-2.5 rounded-lg hover:bg-primary transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-muted leading-relaxed">
              Get moving tips, offers, and updates in your inbox.
            </p>
          </div>
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5 mb-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center overflow-hidden bg-white">
                <img
                  src="/assets/LOGO.png"
                  alt="Kalra Packers & Movers Logo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold">Kalra</h2>
                <p className="text-xs sm:text-sm text-muted">
                  Packers & Movers
                </p>
              </div>
            </div>
            <p className="text-muted leading-relaxed text-sm mb-3">
              Professional packers and movers providing reliable, safe, and
              efficient relocation services across India. Your trusted moving
              partner for over a decade.
            </p>
            <div className="flex space-x-2.5">
              <a
                href="https://www.facebook.com/KalraPackers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  size={18}
                  className="hover:text-primary-glow cursor-pointer transition-colors"
                />
              </a>
              <a
                href="https://www.instagram.com/kalrapackersmovers?igsh=MTFlNXhocHdheHYyZg=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  size={18}
                  className="hover:text-primary-glow cursor-pointer transition-colors"
                />
              </a>
              <Linkedin
                size={18}
                className="hover:text-primary-glow cursor-pointer transition-colors"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:translate-x-0 md:translate-x-5">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                >
                  <Home size={15} /> Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                >
                  <Info size={15} /> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                >
                  <List size={15} /> Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                >
                  <BookOpen size={15} /> Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                >
                  <MailIcon size={15} /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 sm:translate-x-0 md:-translate-x-5">
            <h3 className="text-lg font-semibold mb-3">Our Services</h3>
            <ul className="space-y-1.5">
              <li>
                <Link
                  to="/services/Home-Relocation"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Home size={15} /> Home Relocation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Office-Relocation"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Building size={15} /> Office Relocation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Car-Bike-Relocation"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Truck size={15} /> Car Bike Relocation
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Packaging-of-Goods"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Package size={15} /> Packaging of Goods
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Trained-Team"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Shield size={15} /> Trained Team
                </Link>
              </li>
              <li>
                <Link
                  to="/services/Warehouse-and-Storage-Services"
                  className="flex items-center gap-2 text-muted hover:text-primary-glow transition-colors py-1"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Archive size={15} /> Warehouse and Storage Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-3">Contact Info</h3>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2.5">
                <MapPin
                  size={16}
                  className="text-primary-glow mt-0.5 flex-shrink-0"
                />
                <p className="text-muted text-sm leading-relaxed">
                  Address :- 474, Plot - 40, Block-C, Sector 6 Dwarka, Dwarka,
                  New Delhi, Delhi, 110075
                </p>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-primary-glow flex-shrink-0" />
                <p className="text-muted text-sm">
                  +91-7292010102, <br />
                  +91-9810584326
                </p>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-primary-glow flex-shrink-0" />
                <p className="text-muted text-sm">mail@kalrapackersmovers.in</p>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock size={16} className="text-primary-glow flex-shrink-0" />
                <p className="text-muted text-sm">24/7 Customer Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-muted text-sm leading-relaxed">
            © {new Date().getFullYear()} Kalra Packers & Movers. All rights
            reserved. |{" "}
            <Link
              to="/privacy"
              className="hover:text-primary-glow transition-colors"
            >
              Privacy Policy
            </Link>
            |{" "}
            <Link
              to="/terms"
              className="hover:text-primary-glow transition-colors"
            >
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
