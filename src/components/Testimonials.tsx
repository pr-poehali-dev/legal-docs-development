
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Что говорят клиенты о качестве нашей работы и профессионализме
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex gap-4 mb-4 items-start">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-slate-700">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const testimonials = [
  {
    name: "Андрей Смирнов",
    company: "ООО «ТехноПром»",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Благодаря юристам компании нам удалось успешно разрешить сложный арбитражный спор. Профессиональный подход и внимание к деталям помогли отстоять наши интересы в суде."
  },
  {
    name: "Елена Петрова",
    company: "Индивидуальный предприниматель",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    text: "Обратилась за помощью в регистрации ИП и получении необходимых разрешений. Все документы были подготовлены быстро и качественно, с учетом всех нюансов моего бизнеса."
  },
  {
    name: "Сергей Иванов",
    company: "АО «Инвестстрой»",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "Сотрудничаем с компанией уже больше 3 лет. За это время юристы помогли нам структурировать несколько сложных сделок и минимизировать юридические риски при заключении контрактов."
  }
];

export default Testimonials;
