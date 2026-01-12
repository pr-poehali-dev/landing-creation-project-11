import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: 'Персональный брендинг',
      description: 'Создание уникального образа эксперта и позиционирование на рынке',
      icon: 'Sparkles',
      features: ['Стратегия позиционирования', 'Создание контента', 'Визуальный стиль', 'Tone of voice']
    },
    {
      title: 'Коучинг 1:1',
      description: 'Индивидуальные сессии для достижения ваших целей и прорывов',
      icon: 'Target',
      features: ['Личная трансформация', 'Бизнес-цели', 'Преодоление блоков', 'План действий']
    },
    {
      title: 'Онлайн-курсы',
      description: 'Авторские программы для масштабирования вашей экспертности',
      icon: 'GraduationCap',
      features: ['Создание программы', 'Упаковка курса', 'Продажи и воронки', 'Автоматизация']
    }
  ];

  const results = [
    { metric: '250+', label: 'Довольных клиентов' },
    { metric: '87%', label: 'Достигли целей' },
    { metric: '15+', label: 'Лет опыта' },
    { metric: '4.9★', label: 'Средний рейтинг' }
  ];

  const pricingPlans = [
    {
      name: 'Консультация',
      price: '15 000',
      duration: '1 сессия',
      features: [
        'Разбор текущей ситуации',
        'Определение точек роста',
        'План действий на 30 дней',
        'Поддержка в чате 7 дней'
      ],
      highlight: false
    },
    {
      name: 'Трансформация',
      price: '85 000',
      duration: '3 месяца',
      features: [
        '12 индивидуальных сессий',
        'Персональная стратегия',
        'Домашние задания и практики',
        'Безлимитная поддержка в чате',
        'Доступ к закрытому сообществу',
        'Бонус: мини-курс в подарок'
      ],
      highlight: true
    },
    {
      name: 'VIP Сопровождение',
      price: '250 000',
      duration: '6 месяцев',
      features: [
        'Безлимитные сессии',
        'Полное бизнес-сопровождение',
        'Личный куратор 24/7',
        'Участие в закрытых мастермайндах',
        'Нетворкинг с топ-экспертами',
        'Все материалы и курсы',
        'Гарантия результата'
      ],
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 px-4 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 animate-glow" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <Badge className="mb-6 text-lg px-6 py-2" variant="secondary">
            <Icon name="Zap" size={16} className="mr-2" />
            Персональный коучинг для экспертов
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 gradient-text leading-tight">
            Превратите экспертность в прибыльный бизнес
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Помогаю коучам, авторам и экспертам создать сильный личный бренд и масштабировать доход через онлайн
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all hover:scale-105">
              <Icon name="Rocket" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-card/50">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть кейсы
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              Услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите формат работы, который подходит вам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer border-2 animate-scale-in ${
                  activeService === idx ? 'gradient-border shadow-2xl shadow-primary/50' : 'border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setActiveService(idx)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
                <CardHeader className="relative">
                  <div className="w-16 h-16 mb-4 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center">
                    <Icon name={service.icon as any} size={32} className="text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              Результаты в цифрах
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные достижения моих клиентов
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {results.map((result, idx) => (
              <Card 
                key={idx}
                className="text-center p-8 bg-gradient-to-br from-card to-card/50 border-2 border-primary/30 hover:border-primary transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-5xl md:text-6xl font-heading font-bold gradient-text mb-2">
                  {result.metric}
                </div>
                <div className="text-muted-foreground">{result.label}</div>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 overflow-hidden animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
            <CardContent className="relative p-8 md:p-12">
              <div className="max-w-3xl mx-auto">
                <Icon name="Quote" size={48} className="text-primary/50 mb-4" />
                <blockquote className="text-2xl md:text-3xl font-heading mb-6 leading-relaxed">
                  "За 3 месяца работы доход вырос в 4 раза. Научилась упаковывать экспертность и продавать свои услуги без стыда и навязчивости"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold">
                    АМ
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Анна Михайлова</div>
                    <div className="text-muted-foreground">Карьерный коуч</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
              Тарифы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Инвестируйте в свое развитие и получите результат
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={idx}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 animate-scale-in ${
                  plan.highlight 
                    ? 'gradient-border shadow-2xl shadow-primary/50 scale-105' 
                    : 'border-2 border-border hover:border-primary/50'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {plan.highlight && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-accent to-primary">
                      <Icon name="Star" size={14} className="mr-1" />
                      Популярный
                    </Badge>
                  </div>
                )}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-heading mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-heading font-bold gradient-text">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">₽</span>
                  </div>
                  <CardDescription className="text-base">{plan.duration}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${
                      plan.highlight 
                        ? 'bg-gradient-to-r from-primary via-accent to-secondary' 
                        : ''
                    }`}
                    variant={plan.highlight ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 border-2 border-primary/30 animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            
            <CardContent className="relative p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 gradient-text">
                Готовы к трансформации?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Запишитесь на бесплатную 30-минутную консультацию и получите персональный план развития
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-all hover:scale-105">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Записаться на консультацию
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <a href="mailto:coach@example.com" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-card/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">coach@example.com</span>
                </a>
                <a href="https://t.me/yourcoach" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-card/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Send" size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Telegram</span>
                </a>
                <a href="https://instagram.com/yourcoach" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-card/50 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name="Instagram" size={24} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            © 2024 Все права защищены
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Оферта
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
