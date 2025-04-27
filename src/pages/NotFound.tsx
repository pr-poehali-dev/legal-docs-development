
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="container px-4 py-16 text-center">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Страница не найдена</h2>
          <p className="text-slate-600 mb-8">
            Запрашиваемая страница не существует или была перемещена.
          </p>
          <Button asChild size="lg">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
