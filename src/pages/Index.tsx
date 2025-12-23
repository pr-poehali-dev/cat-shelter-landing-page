import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const pets = [
    {
      id: 1,
      name: 'Рыжик',
      age: '2 года',
      gender: 'Кот',
      image: 'https://cdn.poehali.dev/projects/658d7ae7-0800-4f59-b757-c9010f4ddad0/files/bda33546-74b7-4a1b-b600-dcf7ae48af3e.jpg',
      story: 'Рыжик был найден на улице зимой, замерзший и голодный. Сейчас он превратился в игривого и ласкового кота, который обожает сидеть на коленях и мурлыкать. Прекрасно ладит с детьми.',
      character: ['Ласковый', 'Игривый', 'Общительный']
    },
    {
      id: 2,
      name: 'Дымка',
      age: '6 месяцев',
      gender: 'Кошка',
      image: 'https://cdn.poehali.dev/projects/658d7ae7-0800-4f59-b757-c9010f4ddad0/files/0384c91c-85fa-43ee-b05e-efe4ce3c6e7c.jpg',
      story: 'Дымка - пушистое облачко счастья! Эта малышка любит играть с игрушками и исследовать каждый уголок дома. Очень активная и любознательная, станет отличным другом для семьи.',
      character: ['Активная', 'Любопытная', 'Дружелюбная']
    },
    {
      id: 3,
      name: 'Багира',
      age: '3 года',
      gender: 'Кошка',
      image: 'https://cdn.poehali.dev/projects/658d7ae7-0800-4f59-b757-c9010f4ddad0/files/e940d687-a7ef-4ab3-ba29-9cb1a2c0263c.jpg',
      story: 'Элегантная Багира попала к нам после переезда хозяев. Она спокойная, независимая, но очень привязывается к своему человеку. Идеальна для тех, кто ценит компаньонство без навязчивости.',
      character: ['Спокойная', 'Независимая', 'Верная']
    }
  ];

  const shopItems = [
    { id: 1, name: 'Игровой комплекс', price: '4500₽', icon: 'Boxes' },
    { id: 2, name: 'Лежанка-домик', price: '1800₽', icon: 'Home' },
    { id: 3, name: 'Набор игрушек', price: '650₽', icon: 'Sparkles' },
    { id: 4, name: 'Когтеточка', price: '890₽', icon: 'Package' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🐱</span>
            <span className="font-bold text-xl text-foreground">Мурлыка</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О приюте</button>
            <button onClick={() => scrollToSection('pets')} className="text-sm hover:text-primary transition-colors">Питомцы</button>
            <button onClick={() => scrollToSection('shop')} className="text-sm hover:text-primary transition-colors">Магазин</button>
            <button onClick={() => scrollToSection('help')} className="text-sm hover:text-primary transition-colors">Как помочь</button>
            <button onClick={() => scrollToSection('volunteers')} className="text-sm hover:text-primary transition-colors">Волонтёры</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('pets')} className="hidden md:flex">
            Усыновить питомца
          </Button>
        </nav>
      </header>

      <section id="hero" className="py-20 px-4 bg-gradient-to-br from-secondary via-accent to-background">
        <div className="container mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Подари дом<br />пушистому другу
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Каждый котик в нашем приюте мечтает о любящей семье. Дай шанс на счастье!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('pets')} className="gap-2">
              <Icon name="Heart" size={20} />
              Посмотреть питомцев
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('help')} className="gap-2">
              <Icon name="HandHeart" size={20} />
              Помочь приюту
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">О приюте</h2>
            <p className="text-lg text-muted-foreground">Дом, где каждая лапка находит свое счастье</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto mb-4 text-5xl">🏠</div>
                <CardTitle>Уютный дом</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Просторные комнаты с игровыми зонами и теплыми лежанками</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto mb-4 text-5xl">❤️</div>
                <CardTitle>Забота и любовь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ветеринарный уход, правильное питание и много внимания</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mx-auto mb-4 text-5xl">✨</div>
                <CardTitle>Новый старт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Помогаем найти любящую семью для каждого питомца</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pets" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши питомцы</h2>
            <p className="text-lg text-muted-foreground">Познакомьтесь с теми, кто ищет свой дом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pets.map((pet, index) => (
              <Card key={pet.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-square overflow-hidden">
                  <img src={pet.image} alt={pet.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl">{pet.name}</CardTitle>
                      <CardDescription className="text-base mt-1">{pet.gender}, {pet.age}</CardDescription>
                    </div>
                    <Icon name="Heart" size={24} className="text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{pet.story}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pet.character.map((trait) => (
                      <Badge key={trait} variant="secondary">{trait}</Badge>
                    ))}
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full gap-2">
                        <Icon name="User" size={18} />
                        Познакомиться
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-3xl">{pet.name}</DialogTitle>
                        <DialogDescription className="text-lg">{pet.gender}, {pet.age}</DialogDescription>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <img src={pet.image} alt={pet.name} className="w-full rounded-lg" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">История:</h4>
                          <p className="text-muted-foreground mb-4">{pet.story}</p>
                          <h4 className="font-semibold mb-2 text-lg">Характер:</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {pet.character.map((trait) => (
                              <Badge key={trait} variant="secondary" className="text-sm">{trait}</Badge>
                            ))}
                          </div>
                          <Button className="w-full gap-2" size="lg">
                            <Icon name="Heart" size={20} />
                            Подать заявку на усыновление
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="shop" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Магазин</h2>
            <p className="text-lg text-muted-foreground">Товары для счастливой жизни ваших питомцев</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {shopItems.map((item) => (
              <Card key={item.id} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="mx-auto mb-4 bg-accent rounded-full p-6">
                    <Icon name={item.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">{item.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full gap-2">
                    <Icon name="ShoppingCart" size={18} />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="help" className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Как помочь</h2>
            <p className="text-lg text-muted-foreground">Каждый вклад делает жизнь наших питомцев лучше</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="DollarSign" size={28} className="text-primary" />
                  <CardTitle>Финансовая помощь</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Любая сумма поможет нам покупать корм, лекарства и ухаживать за питомцами</p>
                <Button className="w-full">Поддержать рублём</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Package" size={28} className="text-primary" />
                  <CardTitle>Передать корм</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Принимаем сухой и влажный корм, наполнитель, игрушки и лежанки</p>
                <Button className="w-full" variant="outline">Узнать адрес</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Calendar" size={28} className="text-primary" />
                  <CardTitle>Временная передержка</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Возьмите котика на время - это очень поможет и приюту, и питомцу</p>
                <Button className="w-full" variant="outline">Узнать подробнее</Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Icon name="Share2" size={28} className="text-primary" />
                  <CardTitle>Распространить информацию</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">Расскажите о нас друзьям - возможно, кто-то ищет питомца</p>
                <Button className="w-full" variant="outline">Поделиться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="volunteers" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Стань волонтёром</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Мы всегда рады новым помощникам! Даже пара часов в неделю - это большая помощь для наших питомцев
            </p>
            <Card className="max-w-xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl">Что делают волонтёры?</CardTitle>
              </CardHeader>
              <CardContent className="text-left space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <p>Играют с котиками и социализируют их</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <p>Помогают с уборкой и уходом</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <p>Выгуливают питомцев на свежем воздухе</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <p>Фотографируют для соцсетей</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" size={20} className="text-primary mt-1" />
                  <p>Помогают на мероприятиях</p>
                </div>
              </CardContent>
              <CardContent>
                <Button className="w-full gap-2" size="lg">
                  <Icon name="Users" size={20} />
                  Стать волонтёром
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Контакты</h2>
            <p className="text-lg text-muted-foreground">Приходите в гости к нашим пушистикам!</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Адрес</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">г. Гатчина, Ленинградская обл.</p>
                    <p className="text-muted-foreground">ул. Котовая, 12</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Режим работы:</p>
                    <p className="text-muted-foreground">Ежедневно с 10:00 до 19:00</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Телефон:</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-muted-foreground">hello@murlyka.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Напишите нам</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <input type="text" className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="ivan@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ваше сообщение..."></textarea>
                </div>
                <Button className="w-full gap-2">
                  <Icon name="Send" size={18} />
                  Отправить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-4xl">🐱</span>
            <span className="font-bold text-2xl">Мурлыка</span>
          </div>
          <p className="text-white/80 mb-6">Приют для кошек с любовью и заботой</p>
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:text-primary">
              <Icon name="Twitter" size={24} />
            </Button>
          </div>
          <p className="text-white/60 text-sm">© 2024 Приют "Мурлыка". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;