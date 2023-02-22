export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Мышь Logitech G102 Lightsync черный',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h89/33418926161950/logitech-g102-lightsync-cernyj-100956618-1-Container.jpg',
    price: 10500,
    rating: 4.9,
    description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания. Конструкция корпуса обтекаемой формы гарантирует комфорт и точность движений. Система подсветки RGB с фирменной технологией LIGHTSYNC позволяет создать собственный игровой стиль с помощью 16.8 млн оттенков и анимированных эффектов. В программном обеспечении Logitech G HUB можно назначать внутриигровые команды, осуществлять контроль над процессом управления системой и настраивать функциональность клавиш.',
    link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000#!/item'
  },
  {
    id: 2,
    name: 'Клавиатура HyperX Alloy Origins 60 HKBO1S-RB-RU/G черный',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb4/haf/51500294995998/klaviatura-hyperx-alloy-origins-60-hkbo1s-rb-ru-g-103904519-1.jpg',
    price: 42880,
    rating : 4.7,
    description: 'Клавиатура проводная HyperX Alloy Origins 60 [HKBO1S-RB-RU/G] может похвастаться значительно уменьшенными размерами, что освобождает дополнительное пространство на рабочем столе для комфортного передвижения мыши. Основу данного аксессуара составили тщательно сбалансированные линейные переключатели HyperX Red, которые мгновенно откликаются на касания пользователя и выдерживают до 80 млн нажатий. В процессе создания корпуса клавиатуры проводной HyperX Alloy Origins 60 [HKBO1S-RB-RU/G] производитель использовал первоклассный металл, которому не страшны даже наиболее агрессивные воздействия извне. Используя соответствующее ПО, вы сможете персонализировать подсветку клавиш. Чтобы синхронизировать верную помощницу с ПК, достаточно подключить ее посредством соответствующего USB-разъема.',
    link: 'https://kaspi.kz/shop/p/hyperx-alloy-origins-60-hkbo1s-rb-ru-g-chernyi-103904519/?c=750000000#!/item'
  },
  {
    id: 3,
    name: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/h69/63158968057886/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg',
    price: 231500,
    rating : 4.8,
    description: 'Смарт-часы Apple Watch Series 8 45 мм Aluminum черный стильный и удобный акссесуар',
    link: 'https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item'
  },
  {
    id: 4,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg',
    price: 480550,
    rating : 5,
    description: 'Маленький чип. Грандиозный прорыв Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Ноутбук Acer Extensa 15 EX215-52 NX.EG8ER.00B черный',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h05/h56/52615655948318/acer-extensa-15-ex215-52-nx-eg8er-00b-serebristyj-105725654-1.jpg',
    price: 299990,
    rating : 4.9,
    description: 'Ноутбуки Extensa 15 разработаны для деловых людей, которым необходима достаточная вычислительная мощность и функциональность на каждый день. В них есть все, что нужно для комфортной работы, а время автономной работы достигает 9 часов.',
    link: 'https://kaspi.kz/shop/p/acer-extensa-15-ex215-52-nx-eg8er-00b-chernyi-105725654/?c=750000000#!/item'
  },
  {
    id: 6,
    name: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg',
    price: 139990,
    rating : 5,
    description: 'Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый один из лучших в своей серии. Обладает мощным процессором и видео картой.',
    link: 'https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item'
  },
  {
    id: 7,
    name: 'МФУ Canon PIXMA G2411',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/hc0/50475571675166/canon-pixma-g2411-black-1600557-1-Container.jpg',
    price: 87990,
    rating : 4.1,
    description: 'Компактное и надежное многофункциональное устройство для дома и офиса с пополняемыми чернильницами увеличенного ресурса, которые обеспечивают экономичную и производительную печать. Невероятные показатели объемов печати. Экономичная и производительная печать благодаря увеличенному ресурсу - до 12 000 страниц с 2 контейнерами для черных чернил или 7000 страниц с одним комплектом контейнеров для цветных чернил. ',
    link: 'https://kaspi.kz/shop/p/mfu-canon-pixma-g2411-1600557/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'HP LaserJet M141w 7MD74A',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h01/49526189457438/hp-laserjet-m141w-7md74a-104207206-1.jpg',
    price: 91800,
    rating : 4.5,
    description: 'Эффективное, высококачественное и доступное по цене многофункциональное устройство, которое можно разместить где угодно. Самое компактное в своем классе лазерное МФУ с быстрой печатью и приложением HP Smart для экономии времени. Простая настройка и печать материалов профессионального качества. Самое компактное МФУ',
    link: 'https://kaspi.kz/shop/p/hp-laserjet-m141w-7md74a-104207206/?c=750000000#!/item'
  },
  {
    id: 9,
    name: 'Мышь Xiaomi Mi Dual Mode Wireless Mouse Silent Edition белый',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h28/h81/33823094276126/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-belyj-101190787-1-Container.jpg',
    price: 6690,
    rating : 4.1,
    description: 'Беспроводное соединение с Bluetooth или крошечный USB-приемник 2.4 ГГц на нижней крышке мыши. Снижение шума при щелчках помогает вам наслаждаться спокойной обстановкой для вас и ваших соседей. Тихое скольжение и прокрутка с гладким резиновым колесом. ',
    link: 'https://kaspi.kz/shop/p/xiaomi-mi-dual-mode-wireless-mouse-silent-edition-belyi-101190787/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Мышь Xiaomi Wireless Mouse Lite 2 черный',
    image : 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha2/h37/63429406982174/xiaomi-wireless-mouse-lite-2-cernyj-106983694-1.jpg',
    price: 7200,
    rating : 4.3,
    description: 'Лучшая игровая мышь',
    link: 'https://kaspi.kz/shop/p/xiaomi-wireless-mouse-lite-2-chernyi-106983694/?c=750000000#!/item'
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/