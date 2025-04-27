
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-blue-900 py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
            Профессиональная юридическая поддержка для ваших задач
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
            Наша команда опытных юристов предоставляет полный спектр юридических услуг
            для частных лиц и бизнеса с гарантией результата.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-slate-100">
              <Link to="/services">Наши услуги</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
