import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Целевые регистрации в вебинар или воронку через
                <span className="text-blue-600"> Telegram Ads</span> за 5–10
                дней
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                без слива бюджета и без паники
              </p>
              <p className="text-lg text-gray-500 mb-8 max-w-2xl">
                Приведу целевую аудиторию в твой вебинар, бот или форму
                регистрации — с результатами, которые легко отслеживать
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Получить стратегию
              </Button>
            </div>
            <div className="hidden lg:block">
              <img
                src="/img/18c7ab9c-98ee-4656-863a-2fa5b98a3393.jpg"
                alt="Telegram Ads Dashboard"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Что сейчас не так
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Icon
                  name="TrendingDown"
                  size={48}
                  className="text-red-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl text-gray-900">
                  Нет стабильного трафика
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Аудитория не приходит регулярно, сложно планировать запуски
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Icon
                  name="Users"
                  size={48}
                  className="text-orange-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl text-gray-900">
                  Регистрации идут слабо
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Качество трафика низкое, конверсии не радуют
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <Icon
                  name="DollarSign"
                  size={48}
                  className="text-red-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl text-gray-900">
                  Бюджет уходит впустую
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Деньги тратятся, а результата нет — нервы на пределе
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Как я это решаю
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Анализ продукта и ЦА
              </h3>
              <p className="text-gray-600">
                Изучаю твой продукт и целевую аудиторию
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Гипотезы по каналам
              </h3>
              <p className="text-gray-600">
                Создаю стратегию по каналам и креативам
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Прозрачный запуск
              </h3>
              <p className="text-gray-600">
                Запускаю кампании с детальной аналитикой
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Оптимизация
              </h3>
              <p className="text-gray-600">Улучшаю результаты и масштабирую</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Кейсы
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Онлайн-школа английского
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Регистрации:</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      +847
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Стоимость лида:</span>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      127 ₽
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Конверсия:</span>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800"
                    >
                      12.4%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Курс по инвестициям
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Регистрации:</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      +1,234
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Стоимость лида:</span>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      89 ₽
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Конверсия:</span>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800"
                    >
                      18.7%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  Марафон похудения
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Регистрации:</span>
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      +2,156
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Стоимость лида:</span>
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 text-blue-800"
                    >
                      67 ₽
                    </Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Конверсия:</span>
                    <Badge
                      variant="secondary"
                      className="bg-purple-100 text-purple-800"
                    >
                      24.1%
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Тарифы
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors duration-300">
              <CardHeader className="text-center pb-4">
                <Icon
                  name="Zap"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl text-gray-900">Тест</CardTitle>
                <CardDescription className="text-gray-600">
                  Попробуй возможности
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    от 15 000 ₽
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Анализ продукта и ЦА
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    1-2 рекламных кампании
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Базовая аналитика
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-300 relative hover:border-blue-400 transition-colors duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white">Популярный</Badge>
              </div>
              <CardHeader className="text-center pb-4">
                <Icon
                  name="Target"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl text-gray-900">
                  Оптимальный запуск
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Для серьёзных результатов
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    от 35 000 ₽
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Полный анализ и стратегия
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    3-5 рекламных кампаний
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Детальная аналитика
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Оптимизация кампаний
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors duration-300">
              <CardHeader className="text-center pb-4">
                <Icon
                  name="Crown"
                  size={48}
                  className="text-purple-600 mx-auto mb-4"
                />
                <CardTitle className="text-2xl text-gray-900">
                  Под ключ
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Максимальный результат
                </CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">
                    от 70 000 ₽
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Всё из тарифа "Оптимальный"
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Неограниченные кампании
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Креативы и копирайтинг
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Персональная поддержка
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Выбрать тариф
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Получите подарок при первом обращении
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Калькулятор запуска или 3 гипотезы для теста — бесплатно
            </p>
            <div className="bg-white rounded-lg shadow-xl p-8 max-w-md mx-auto">
              <Icon
                name="Gift"
                size={64}
                className="text-blue-600 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Бесплатные материалы
              </h3>
              <ul className="text-left space-y-2 mb-6 text-gray-700">
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Калькулятор бюджета запуска
                </li>
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  3 готовые гипотезы для теста
                </li>
                <li className="flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={16}
                    className="text-green-500 mr-2"
                  />
                  Чек-лист по настройке
                </li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Получить бесплатно
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Хочешь трафик уже через 3 дня?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Заполни бриф — я предложу стратегию под твой запуск
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Заполнить бриф
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
