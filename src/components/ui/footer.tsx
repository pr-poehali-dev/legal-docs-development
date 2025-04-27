
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* О компании */}
          <div>
            <h3 className="text-xl font-bold mb-4">ЮристПро</h3>
            <p className="text-slate-300 mb-4">
              Профессиональная юридическая компания с опытом работы более 10 лет в различных отраслях права.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={18} />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-slate-300 hover:text-white hover:bg-slate-800">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </Button>
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-lg font-bold mb-4">Услуги</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/services/consultations" className="hover:text-white transition-colors">
                  Юридические консультации
                </Link>
              </li>
              <li>
                <Link to="/services/documents" className="hover:text-white transition-colors">
                  Подготовка документов
                </Link>
              </li>
              <li>
                <Link to="/services/court" className="hover:text-white transition-colors">
                  Представительство в суде
                </Link>
              </li>
              <li>
                <Link to="/services/business" className="hover:text-white transition-colors">
                  Юридическое сопровождение бизнеса
                </Link>
              </li>
              <li>
                <Link to="/services/registration" className="hover:text-white transition-colors">
                  Регистрация компаний
                </Link>
              </li>
            </ul>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Навигация</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  Команда
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-lg font-bold mb-4">Контакты</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex">
                <MapPin size={18} className="mr-2 flex-shrink-0 mt-1" />
                <span>123456, г. Москва, ул. Юридическая, д. 1, офис 123</span>
              </li>
              <li>
                <a href="tel:+79991234567" className="flex hover:text-white transition-colors">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <span>+7 (999) 123-45-67</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@juristpro.ru" className="flex hover:text-white transition-colors">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <span>info@juristpro.ru</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ЮристПро. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="text-slate-400 text-sm hover:text-white transition-colors">
              Условия использования
            </Link>
            <Link to="/privacy" className="text-slate-400 text-sm hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
