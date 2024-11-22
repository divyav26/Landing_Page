import { Facebook, Twitter, Instagram, Linkedin } from "react-feather";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Wood Crafters</h3>
            <p className="text-wood-medium">
              Transforming spaces with exceptional carpentry since 1995.
            </p>
            <p className="text-wood-medium mt-4">
              Address: 123 Woodcraft Lane, Carpenter's City, WO 56789
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/custom-furniture"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Custom Furniture
                </a>
              </li>
              <li>
                <a
                  href="/home-renovations"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Home Renovations
                </a>
              </li>
              <li>
                <a
                  href="/commercial-projects"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Commercial Projects
                </a>
              </li>
              <li>
                <a
                  href="/repairs-restoration"
                  className="text-wood-medium hover:text-wood-light transition duration-300"
                >
                  Repairs & Restoration
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-wood-medium hover:text-wood-light transition duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-wood-medium hover:text-wood-light transition duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-wood-medium hover:text-wood-light transition duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-wood-medium hover:text-wood-light transition duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-wood-medium text-center">
          <p className="text-wood-medium">
            &copy; {new Date().getFullYear()} Wood Crafters. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
