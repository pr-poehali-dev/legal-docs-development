
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-blue-900">ЮристПро</span>
          </Link>

          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-8">
            <NavLinks />
          </nav>

          {/* Кнопка связи */}
          <div className="hidden md:flex items-center">
            <Button asChild variant="outline" className="mr-4">
              <a href="tel:+79991234567">+7 (999) 123-45-67</a>
            </Button>
            <Button asChild>
              <Link to="/contacts">Связаться</Link>
            </Button>
          </div>

          {/* Мобильное меню кнопка */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <NavLinks mobile onClick={toggleMobileMenu} />
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Button asChild variant="outline" className="justify-start">
                  <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                </Button>
                <Button asChild>
                  <Link to="/contacts" onClick={toggleMobileMenu}>Связаться</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, onClick }) => {
  const linkClassName = mobile
    ? "block py-2 text-gray-800 hover:text-blue-700"
    : "text-gray-800 hover:text-blue-700";

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <Link to="/" className={linkClassName} onClick={handleClick}>
        Главная
      </Link>
      <Link to="/services" className={linkClassName} onClick={handleClick}>
        Услуги
      </Link>
      <Link to="/about" className={linkClassName} onClick={handleClick}>
        О компании
      </Link>
      <Link to="/team" className={linkClassName} onClick={handleClick}>
        Команда
      </Link>
      <Link to="/blog" className={linkClassName} onClick={handleClick}>
        Блог
      </Link>
      <Link to="/contacts" className={linkClassName} onClick={handleClick}>
        Контакты
      </Link>
    </>
  );
};

export default Header;
