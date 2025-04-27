
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="mb-6 text-blue-900">
            <span className="text-9xl font-bold">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Страница не найдена</h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto">
            Извините, запрашиваемая вами страница не существует или была перемещена.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">Вернуться на главную</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contacts">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
