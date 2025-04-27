
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ЮрКонсультант</h3>
            <p className="text-slate-300 mb-4">
              Профессиональная юридическая помощь и консультации от опытных специалистов
            </p>
            <p className="text-slate-300">
              © {new Date().getFullYear()} ООО "ЮрКонсультант"
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-slate-300">
              <li>г. Москва, ул. Юридическая, д. 12</li>
              <li>Телефон: +7 (999) 123-45-67</li>
              <li>Email: info@urconsultant.ru</li>
              <li>Время работы: Пн-Пт с 9:00 до 18:00</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-white transition">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white transition">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-white transition">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-slate-300 hover:text-white transition">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
