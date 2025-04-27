
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, href }) => {
  return (
    <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc pl-5 space-y-1 text-sm">
          {generateServiceFeatures(title).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={href}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

function generateServiceFeatures(serviceType: string): string[] {
  switch (serviceType) {
    case "Юридические консультации":
      return [
        "Устные и письменные консультации",
        "Разъяснение правовых норм",
        "Анализ юридических рисков"
      ];
    case "Подготовка документов":
      return [
        "Составление договоров",
        "Подготовка исковых заявлений",
        "Разработка корпоративных документов"
      ];
    case "Представительство в суде":
      return [
        "Ведение дел во всех инстанциях",
        "Досудебное урегулирование",
        "Исполнительное производство"
      ];
    default:
      return [
        "Профессиональный подход",
        "Индивидуальные решения",
        "Строгая конфиденциальность"
      ];
  }
}

export default ServiceCard;
