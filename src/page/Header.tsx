import { motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Works", href: "#works" },
  { name: "Contact", href: "#contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white/0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-pink-600">
          🌸
        </a>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-pink-500 transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-white shadow-md border-t border-pink-100"
        >
          <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-pink-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
