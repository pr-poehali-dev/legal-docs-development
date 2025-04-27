
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Scale, FileText, Users, Building, BookOpen, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Услуги */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Мы предлагаем полный спектр юридических услуг для решения ваших задач
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard 
                title="Юридические консультации" 
                description="Профессиональные консультации по любым юридическим вопросам"
                icon={<Users className="h-6 w-6 text-primary" />}
                href="/services/consultations"
              />
              <ServiceCard 
                title="Подготовка документов" 
                description="Составление и проверка юридических документов любой сложности"
                icon={<FileText className="h-6 w-6 text-primary" />}
                href="/services/documents"
              />
              <ServiceCard 
                title="Представительство в суде" 
                description="Защита интересов клиентов во всех судебных инстанциях"
                icon={<Scale className="h-6 w-6 text-primary" />}
                href="/services/court"
              />
              <ServiceCard 
                title="Корпоративное право" 
                description="Полное юридическое сопровождение бизнеса"
                icon={<Building className="h-6 w-6 text-primary" />}
                href="/services/corporate"
              />
              <ServiceCard 
                title="Договорное право" 
                description="Разработка, анализ и сопровождение договоров"
                icon={<BookOpen className="h-6 w-6 text-primary" />}
                href="/services/contracts"
              />
              <ServiceCard 
                title="Защита интеллектуальной собственности" 
                description="Регистрация и защита объектов интеллектуальной собственности"
                icon={<ShieldCheck className="h-6 w-6 text-primary" />}
                href="/services/intellectual"
              />
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/services">Все услуги</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Преимущества */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Наши преимущества, которые делают сотрудничество с нами эффективным и комфортным
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">⚖️</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Опыт и профессионализм</h3>
                <p className="text-slate-600">Наши юристы имеют многолетний опыт работы в различных отраслях права</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🔒</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Конфиденциальность</h3>
                <p className="text-slate-600">Гарантируем полную конфиденциальность всей информации наших клиентов</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Оперативность</h3>
                <p className="text-slate-600">Соблюдаем сроки и оперативно реагируем на запросы и изменения</p>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        {/* Контакты */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-800 to-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Нужна юридическая помощь?</h2>
                <p className="mb-8 text-blue-100">
                  Свяжитесь с нами, чтобы получить бесплатную консультацию по вашему вопросу
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
                    <Link to="/contacts">Оставить заявку</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                    <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
