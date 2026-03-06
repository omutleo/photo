
const database = [
    {
        name: "Да, поставим",
        equipment: "Техника автоматизации",
        contact: "Мария ИВЬЕВА",
        email: "sale9@da-postavim.ru",
        comments: "Endress+ Hauser, PARKER, Phoenix contact, Rockwell, Siemens, ABB, Schneider Electric, Allen-Bradley, Omron, Tetra Pak, Alfa Laval, Wago, Fanuc, Sick, Pepper+Fuchs, Norgen, IFM, Balluff, FESTO, Rittal, SEW-Eurodrive, Danfoss, B&R, Emerson, PILZ"
    },
    {
        name: "Вент Эл",
        equipment: "Техника автоматизации",
        contact: "Александр Васьков",
        email: "415@vent-el.ru",
        comments: "ФМР, ФРНК, ППУ, ФПП, Кондиционеры, сплит-системы - Haier, Lessar, Quattroclima, Tosot, Fujitsu, BALLU, Electrolux, Дренажные помпы - SAUERMANN, Aspen, Siccom, Пневматическое оборудование - фитинги, цилиндры, трубки, отводы, присоски, распределители: SMC, FESTO, MacValves, CAMOZZI, Ремни приводные - SPA, SPB, XPZ, Вентиляторы - EBMPAPST, Ostberg, SHUFT, Systemair, ВКК, ВР-80, ВР-75, ВР 86-77, Воздуховоды, фасонные элементы, Электрика - автоматы ABB, Schneider Electric, лампы и светильники Philips, Osram, Foton, кабель ВВГ, NYM, ПВС, ШВВП, Электроприводы - Belimo, Lufberg, ENSO, Nanotek, Двигатели - АИР, АИС, Siemens, Теплообменники, калориферы КСк, КПсК"
    },
    {
        name: "ООО Глобал автоматикс",
        equipment: "Техника автоматизации",
        contact: "Евгения Коваленко",
        email: "e.kovalenko@simatix.ru",
        comments: "Siemens, Phoenix contact, SICK, Schneider Electric, АВВ, Pepperl+fuchs, Rittal, WAGO, Beckhoff, SEW Eurodrive"
    },
    {
        name: "Корвет Нева",
        equipment: "Оснащение лабораторий",
        contact: "Никита Игоревич Зезуль",
        email: "nikita.korvet-neva@mail.ru",
        comments: "оснащением лабораторий различного профиля"
    },
    {
        name: "Миллаб",
        equipment: "Оснащение лабораторий",
        contact: "Максим Стрелков",
        email: "mas@millab.ru",
        comments: "Наша компания является авторизированным дистрибьютором лабораторного, аналитического и промышленного оборудования. Я специализируюсь на вакуумном и климатическом оборудовании."
    },
    {
        name: "Химмед",
        equipment: "Хим реактивы",
        contact: "Кондратьев Алексей",
        email: "chimmed@mail.ru",
        comments: "Хим реактивы, Смесь Pesticide Mix of 12 comp. 2133,2 mg/l 10 х 10 мл PSTMIX0055."
    },
    {
        name: "Реарус",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@rearus.ru",
        comments: "Химические реактивы и растворители как отечественных, так и иностранных производителей для всего спектра лабораторных исследований. Лабораторные весы. Аналитические приборы и хроматография. Электро-химические приборы. Анализаторы влажности. Автоматические дозаторы."
    },
    {
        name: "ChemExpress",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@chem-ex.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "LabStore",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "mail@labstore.ru",
        comments: "Химические реактивы и растворители как отечественных, так и иностранных производителей для всего спектра лабораторных исследований. Лабораторные весы. Аналитические приборы и хроматография. Электро-химические приборы. Анализаторы влажности. Автоматические дозаторы."
    },
    {
        name: "Лен Реактив",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@lenreactiv.ru",
        comments: "Химические реактивы и растворители"
    },
    {
        name: "Гранада",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@granada-lab.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "НаукаShop",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@nauka-shop.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "Пущинские",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@laboratorii.com",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "Гермеон",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "magazin@germeon.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "Реаторг",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "savina@reatorg.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "Диа-М",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@dia-m.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "Формула",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "Store@formula-re.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "РеактивШоп",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "info@reaktivshop.ru",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "АльфаЛаб",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info1@alfa-lab.com",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "ХимБаза",
        equipment: "Хим реактивы",
        contact: "Менеджер продаж",
        email: "zakaz@himbaza.com",
        comments: "Химические реактивы и растворители посуда"
    },
    {
        name: "МиниМед",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@minimed.ru",
        comments: "колбы, пипетки, мензурки, посуда и оснащение"
    },
    {
        name: "Симакс",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@simax.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "ЭталонТара",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@etalon-tara.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "Экросхим",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "sale@ecohim.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "ЛабГипермарк",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "shop+6134910@5drops.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "Энергоник",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "sales@energonic.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "ApexLab",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@apexlab.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "Русхим",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@rushim.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "NikoLAb",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@nikolab.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "LAB REAKTIV",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "zakaz@labreaktiv.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "ООО ПСК",
        equipment: "Запчасти",
        contact: "Далер Гадоев",
        email: "dgadoev@yandex.ru",
        comments: "Насосное оборудование, Теплообменники, Автоматика, Запорная арматура"
    },
    {
        name: "fixzip.ru",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "info@fixzip.ru",
        comments: "Запчасти Miele"
    },
    {
        name: "et-e.ru",
        equipment: "Запчасти",
        contact: "Николай",
        email: "sale2@eu-t-o.ru",
        comments: "Закупки трудных запчастей из-за границы"
    },
    {
        name: "pnevmex",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "9724704@mail.ru",
        comments: "Пневмораспределитель"
    },
    {
        name: "sibpnevmo",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "sibpnevmo@ya.ru",
        comments: "Пневмораспределитель"
    },
    {
        name: "чип дип",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "sales@chipdip.ru",
        comments: "Запчасти для техники и электроники"
    },
    {
        name: "privod-ufa.ru",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "sales@privod-ufa.ru",
        comments: "Autonics, Camozzi, Delta Battery, Delta Electronics, Inc, SMC, Festo, Innovert, Innolevel, Innovari, Innocont, IDS Drive, Instart, Kipvalve, Piezus, Weintek, Веспер, Кипприбор, Мегеон, Мотор-редукторы, Овен, Прома, Росма, Рэлсиб, Термодат, Физтех, Электродвигатели"
    },
    {
        name: "kolba24.ru",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "contract@kolba24.ru",
        comments: "Лабораторная посуда Лабораторное оборудование Лабораторные аксессуары"
    },
    {
        name: "pipetman.ru",
        equipment: "Оснащение лабораторий",
        contact: "Менеджер продаж",
        email: "info@pipetman.ru",
        comments: "Eppendorf, Ленпипет, Biohit, Vitlab"
    },
    {
        name: "industriation.ru",
        equipment: "Запчасти",
        contact: "Артём Казьмин",
        email: "azk@industriation.ru",
        comments: "Пневматическое оборудование Пневматическое оборудование Festo - Продолжаем поставки всей линейки. Naval Compressors - американская пневматика, поддерживаемая на складе на постоянной основе. Пневматическое оборудование Camozzi, SMC, XCPC, Pneumax и т.д. Запорная и трубопроводная арматура Genebre, Zetkama, Rushwork - поддерживаем большой складской запас; Контрольно-измерительное оборудование ОВЕН - поставляем оборудование напрямую с завода в минимальные сроки; Оригинальные подшипники SKF, FAG, ISB - более 10 000 наименований; Узлы машин (цепи, звездочки, шкивы, ремни и т.д.) - поставляем оборудование производителей CHIARAVALLI, PIZZIRANI, SIT, ТЕК-КОМ."
    },
    {
        name: "stepmotor.ru",
        equipment: "Запчасти",
        contact: "Максим Виноградов",
        email: "sale2@stepmotor.ru",
        comments: "SEW Eurodrive, Grundfoss, Siemens, Sick, Omron, ABB, Allen-Bradley, Schneider Electric, Telemecanique, Phoenix Contact, Kollmorgen, Endress+Hauser, B&R, Pepper+Fuchs, General Electric, Emerson Rosemount, EagleBurgmann, Bihl+Wiedemann, Bei Sensors, HBM Messtechnik, HYDAC, Stromag, Anderson Negele, WAGO (клеммы)"
    },
    {
        name: "ООО ТехнолюксПлюс",
        equipment: "Запчасти",
        contact: "Сергей Щербаков",
        email: "techadvancelab8@gmail.com",
        comments: "Аналитические, стандартные и сертифицированные стандартные образцы, ISO-17025, ISO-17034, Производители: USP, EP, LGC, TLC, EDQM, Dr.Ehrenstorfer, Carl Roth, Glentham, Merck, Sigma-Aldrich, Supelco, TRC, HPC, PHR, CPAchem, Himedia, Fapas, Muva, Pharmaffiliates, Лабораторные мембранные и шприцевые фильтры. Материалы: MCE (смесь целлюлозы), RC (восстановленная целлюлоза), CN, CA, PTFE, PVDF, PES, NY (нейлон), GF (стеклянные). Стерильные и не стерильные, в индивидуальной упаковке и в ленте для диспенсеров Millipore и Sartorius. С сеткой для подсчета колоний и без сетки, белые, чёрные. Размер пор и диаметры фильтров в большом ассортименте. Хроматография. ВЭЖХ (HPLC), газовая хроматография (GC), тонкослойная хроматография (TLC) Производители: Agilent, Waters, YMC, Phenomenex. Феррулы, капилляры, детекторные ячейки. Лабораторный пластик. Планшеты, пипетки, наконечники для автоматических пипеток (с фильтром и без), чашки Петри, пробирки, пробирки Эппендорфа. Без ДНК, ДНКаз"
    },
    {
        name: "Prosistemika",
        equipment: "Запчасти",
        contact: "Джейгало Илья",
        email: "s2@prosistemika.ru",
        comments: "Siemens, Omron, SICK, IFM, Beckhoff, Allen-Bradley, Mitsubishi electric, APC by Schneider Electric, FANUC импортное промышленное оборудование, панели оператора, частотники, датчики, модули, реле, двигатели, вентиляторы, выключатели, реле, блоки питания, контакторы"
    },
    {
        name: "ООО ЕвроМеханика",
        equipment: "Запчасти",
        contact: "Вячеслав",
        email: "sales2@euromehanika.ru",
        comments: "Запчасти для промышленного оборудования, приводные роликовые цепи, звездочки, подшипники, ремни, натяжители, приводные ремни. DITTON, RENOLD, RETEZY, INA, SKF, NSK, NTN, SNR, мотор-редукторы BAUER, натяжители и виброопоры TECNIDEA CIDUE"
    },
    {
        name: "ООО Озбэттериз",
        equipment: "Запчасти",
        contact: "Бунцев Евгений",
        email: "e.byntsev@1ak.ru",
        comments: "АКБ: от тяговых для складской техники до промышленных для ИБП и слаботочки, аккумуляторы, зу, зарядные устройства"
    },
    {
        name: "ООО Макс Мемори",
        equipment: "Запчасти",
        contact: "Машков Алексей",
        email: "ma@maxmemory.ru",
        comments: "карты памяти, карта памяти, ssd, usb, флешка, sd card, hdd, ридер, card reader"
    },
    {
        name: "teko-com.ru",
        equipment: "Запчасти",
        contact: "Альфия Саматовна",
        email: "333@teko-com.ru",
        comments: "ТЕКО, Индуктивный датчик ISB"
    },
    {
        name: "skbis.ru",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "lir@skbis.ru",
        comments: "ЛИР, Инкрементальный энкодер, преобразователь угловых перемещений"
    },
    {
        name: "ООО ПЭКиА",
        equipment: "Запчасти",
        contact: "Григорьев Сергей",
        email: "info@pekia.ru",
        comments: "Микросхемы, контроллеры, блоки управления и многое другое"
    },
    {
        name: "ООО ТекенТруп",
        equipment: "Запчасти",
        contact: "Кирилл",
        email: "kirill.pochernin@teckentrup.biz",
        comments: "запчасти cerulen, korber, rocke, itm, csi ( varios ( hauni )), аспирациональные ленты"
    },
    {
        name: "Промышленная автоматизация",
        equipment: "Запчасти",
        contact: "Иван Байкалов",
        email: "bi@industriation.ru",
        comments: "Пневматическое оборудование Festo, AirTac, Metal Work, Camozzi, Aignep, SMC, NCCN, Запорная и трубопроводная арматура Genebre, Zetkama, Goetze, Fobos, Rushwork, SIEMENS, OMRON, ОВЕН, Bosch Rexroth Kippribor, Meyertec, Sick, ABB, Schneider, Allen Bradley, Mean Well, IBEDA, GCE, Swagelok, WiTT, Cavagna Group, Delta, Оригинальные подшипники SKF, FAG, NSK, LDI, Charavalli, Pizzirani, SATI, ISB"
    },
    {
        name: "О-рингс",
        equipment: "Уплотнения",
        contact: "Максим Кравченко",
        email: "sales@o-ring.su",
        comments: "Уплотнение, уплтонение, кольцо, EPDM, ring, o-ring, o-ring"
    },
    {
        name: "Газ-Аналитик",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "zakaz@gaz-analitik.ru",
        comments: "Газоанализаторы, сигнализаторы, Сенсоры, Тепловизоры, Продукция Testo, Пожарные извещатели, Алкотестеры, реагенты, Хроматографы"
    },
    {
        name: "ЭРСТВАК",
        equipment: "Запчасти",
        contact: "Михаил Шабалов",
        email: "m.shabalov@erstvak.com",
        comments: "Вихревые, роторные и турбовоздуходувки EVL, ERB, Turbomax, Винтовые компрессоры ESC, ESK, Пластинчато-роторные насосы и компрессоры VP, PVP, PP, RS, Водокольцевые насосы ELRPX, ELRSX, вакуумная и компрессорная техника"
    },
    {
        name: "Амертенд",
        equipment: "Масло",
        contact: "Менеджер продаж",
        email: "info@amertend.ru",
        comments: "Масло Klüberoil, масла"
    },
    {
        name: "ООО СИНТАГРИС",
        equipment: "Масло",
        contact: "Осинин Евгений",
        email: "zakaz@norgos.com",
        comments: "Масло Klüberoil, масла"
    },
    {
        name: "ООО КДП",
        equipment: "Запчасти",
        contact: "Ермаков Егор",
        email: "ermakov.e@cficom.ru",
        comments: "промышленное оборудование, газовая пружина, пружины, демпфер"
    },
    {
        name: "Deomera",
        equipment: "Оборудование",
        contact: "Дмитрий Михайлов",
        email: "info@deomera.ru",
        comments: "тестер сопротивления, мультиметр, манометр, барометр, измерительные приборы (акип, APPA, sew, teledyne LeCroy, Keysight, Boont)"
    },
    {
        name: "Sonel",
        equipment: "Оборудование",
        contact: "Менеджер продаж",
        email: "sales@sonel.ru",
        comments: "тестер сопротивления, мультиметр, измерительные приборы, sonel mic"
    },
    {
        name: "Bestfilament",
        equipment: "Запчасти",
        contact: "Иван Москвичев",
        email: "spb@bestfilament.ru",
        comments: "пластик для принтера, 3d 3D, фотополимеры"
    },
    {
        name: "ПромХимРесурс",
        equipment: "Запчасти",
        contact: "Юрий Корженевский",
        email: "rti@rti-spb.com",
        comments: "EPDM, кольцо прямоугольного сечения (прокладка), уплотнение"
    },
    {
        name: "Seep-trade",
        equipment: "Запчасти",
        contact: "Елизавета Быстрова",
        email: "welcome@seep.pro",
        comments: "Siemens, Omron, Schneider Electric"
    },
    {
        name: "Мдикам",
        equipment: "Запчасти",
        contact: "Анастасия Шаповалова",
        email: "sale9@mdicam.ru",
        comments: "Оптовая продажа электронных компонентов и производство электроники по контракту"
    },
    {
        name: "OfiTrade",
        equipment: "Запчасти",
        contact: "Вылегжанин Павел",
        email: "pavel.vylegzhanin@ofitrade.ru",
        comments: "Профессиональная офисная техника, картриджы"
    },
    {
        name: "Пять Капель",
        equipment: "Оборудование",
        contact: "Данилов Давид",
        email: "op@5drops.ru",
        comments: "пробирки, лабороторное оборудование, посуда, банки и склянки штативы, ПЦР и ИФА"
    },
    {
        name: "ООО ЭКСПЕРТ НК",
        equipment: "Оборудование",
        contact: "Евгения Новохатько",
        email: "baulina@expertnk.ru",
        comments: "приборы и средства нк, твердомер"
    },
    {
        name: "Сенсотек",
        equipment: "Оборудование",
        contact: "Александр Назаров",
        email: "a.nazarov@sensotek.ru",
        comments: "Стационарный считыватель кодов, DMR, DMLN, Линза KIT"
    },
    {
        name: "RRC",
        equipment: "Оборудование",
        contact: "Владислав Сергеев",
        email: "sergeev_v@rrc.ru",
        comments: "MATRIX 210, CBX500, Ремкомплект узла скана CBL"
    },
    {
        name: "ЧИЗ",
        equipment: "Оборудование",
        contact: "Менеджер продаж",
        email: "chiz@chiz.ru",
        comments: "Плита поверочная, измерительные приборы, метрология"
    },
    {
        name: "ДиКом",
        equipment: "Оборудование",
        contact: "Татьяна Байнова",
        email: "boynova@dikom.ru",
        comments: "Мебель, верстак, проффесиональная мебель, экран, тумба, консоль"
    },
    {
        name: "ТрекМарк",
        equipment: "Оборудование",
        contact: "Виктор Бабенцев",
        email: "v.babencev@trekmark.ru",
        comments: "Верификатор, работа с data matrix, qr, штрих-код"
    },
    {
        name: "Руссотех",
        equipment: "Запчасти",
        contact: "Никита Аксенов",
        email: "ana@russotex.com",
        comments: "Siemens, Phoenix contact, SICK, festo"
    },
    {
        name: "Телеком-селл",
        equipment: "Запчасти",
        contact: "Богдан Матышевский",
        email: "bm@telecom-sell.ru",
        comments: "автоматизация Siemens, Hirschman, Schnider Electric, ABB, APC, Allen-Bradley, Fanuc, Omron, Pepperl+Fuchs. Weidmuller, Wago, IFM"
    },
    {
        name: "Erg-l",
        equipment: "Запчасти",
        contact: "Менеджер продаж",
        email: "zak.electrika@yandex.ru",
        comments: "розетки, выключатель и рамки Legrand"
    },
    {
        name: "promsis.spb.ru",
        equipment: "Запчасти",
        contact: "менеджер продаж",
        email: "v.merkuryev@promsis.spb.ru",
        comments: "SIEMENS, СИМЕНС, СИМАТИК"
    },
    {
        name: "simecs.ru",
        equipment: "Запчасти",
        contact: "менеджер продаж",
        email: "aleksey.matveev@simecs.ru",
        comments: "SIEMENS, СИМЕНС, СИМАТИК"
    },
    {
        name: "mege.ru",
        equipment: "Запчасти",
        contact: "менеджер продаж",
        email: "m.zaharov@mege.ru",
        comments: "SIEMENS, СИМЕНС, СИМАТИК"
    },
    {
        name: "ООО Инструмент 3Д",
        equipment: "Оборудование",
        contact: "менеджер продаж",
        email: "elite-tools@yandex.ru",
        comments: "биенеметр, ACB, Alarm, AmPro, ASW, Bahco, Benning, Bernstein, Bessey, Beta, BLUE-MASTER, Boehm, Brennenstuhl, Brinco, BW International, Caldervale Technology Ltd, Chicago Pneumatic, DOGHER, E/D/E GmbH, EDS Industrial, Edsy, Elite-Tools, EMG, Eschenbach, EuroPress, Exact Giess und Quanz GmbH, Facom, Felco, Fluke, Format Tools, Fortis Tools, Forum Tools, Ert, Gesipa, GRATTEC, Halder, Haupa, HellermannTyton, Hepco-Becker, Heyco, Hi-Force, Holmatro, Ingersoll Rand, Jokari, Kawasaki Tools, Keil, KIBLER WERKZEUGE GMBH, Kinex, Klauke, Knipex, Ko-ken Tool Co., KSTools, Kukko, Turnus, Leica Lessmann, Martor Matador, Metalminotti, Mob Peddinghaus, Mozart, Narex, Nexus, Noga, Norbar, NWS, Orbis, Parat, PB Swiss Tools, Pica-Marker GmbH, Picard, Piher, PRESSMASTER, Proxxon, GmbH REED REIPALab, Rennsteig, Ridgid Rothenberger, Ruko, Sata, Schut, Shaviv, Slide Sledge Sola, Stabila, Stahlwille, Tecnogi, Testboy, Toku, Red Rooster, Turnus, Kukko, Unior, Usag, Volkel, Weicon, Weidmüller, Wera, Wiha, Witte, York, Zenten, Инструмент Format, Инструмент FPT - Инструмент Wiha"
    },
    {
        name: "ООО ИНДАСТРИАЛ ТУЛЗ",
        equipment: "Оборудование",
        contact: "Асабеков Александр",
        email: "03@markiratory.ru",
        comments: "маркиратор лазерный, маркераторы"
    },
    {
        name: "fdmartel.ru",
        equipment: "Запчасти",
        contact: "Виктор Трофимчук",
        email: "info@fdmartel.ru",
        comments: "адгезивы"
    },
    {
        name: "Shop Ametek",
        equipment: "Оборудование",
        contact: "менеджер продаж",
        email: "zakaz@ametek.shop",
        comments: "мотор вакуумный, сквозные проточные двигатели"
    },
    {
        name: "ООО ЭЛИЗ",
        equipment: "Запчасти",
        contact: "Дреко В. А",
        email: "dreko@eliz.ru",
        comments: "профиль виге"
    },
    {
        name: "ООО ГАНГУТ",
        equipment: "Оборудование",
        contact: "Дмитрий Матвеев",
        email: "dmitry.matveev@gangut.ru",
        comments: "Прибор для измерения угла установки ракеля, Ракельные ножи"
    },
    {
        name: "ООО ТоррЭС",
        equipment: "Оборудование",
        contact: "Алексей СУЛИМ",
        email: "sa@torr-es.com",
        comments: "линейка харлингера, измерительные приборы"
    },
    {
        name: "ООО А3-И",
        equipment: "Запчасти",
        contact: "Сергей Королев",
        email: "skorolev@a3-eng.com",
        comments: "мера твердости VH, приборы контроля, контроль"
    },
    {
        name: "ООО Промтехнологии",
        equipment: "Запчасти",
        contact: "Александр",
        email: "info@promtech-test.ru",
        comments: "Ультразвуковой твердомер ТКМ-459С, Толщиномеры"
    },
    {
        name: "chipfarm.ru",
        equipment: "Запчасти",
        contact: "менеджер продаж",
        email: "info@chipfarm.ru",
        comments: "Выключатели нагрузки, воздушные автоматические выключатели"
    },
    {
        name: "ООО ПК Паритет",
        equipment: "Запчасти",
        contact: "менеджер продаж",
        email: "denis21.paritet@yandex.ru",
        comments: "низковольтная электротехническая продукция, Schneider Electric, ABB, Phoenix Contact, Siemens"
    },
    {
        name: "1SIEMENS.RU (ООО Тим Групп)",
        equipment: "Запчасти",
        contact: "Клокова Елена",
        email: "zakaz@1siemens.ru",
        comments: "FESTO, Schneider Electric, SICK, ABB, Omron и др. (контакторы, модули в/в, реле, блоки питания, КИП, панели оператора, двигатели, редукторы, siemens"
    },
    {
        name: "ООО Полихимтех",
        equipment: "Хим реактивы",
        contact: "Ольга Бирюкова",
        email: "9918315626@mail.ru",
        comments: "ВОДНЫЙ РАСТВОР ПРОПИЛЕНГЛИКОЛЯ (10-90%) ВОДНЫЙ РАСТВОР ЭТИЛЕНГЛИКОЛЯ (10-90%) ТЕПЛОНОСИТЕЛЬ (для систем отопления/охлаждения) ХЛАДОНОСИТЕЛЬ (для систем кондиционирования), пропиленгликоль, этиленгликоль, диэтиленгликоль (ДЭГ), параформальдегид марка А (параформ), глицерин ПК-94, сырец кормовой (сырой натуральный), уксусная кислота 99%, 70%, лимонная кислота, карбамид, ортофосфорная кислота 85%, 2-этилгексанол, спирт изопропиловый (ИПС), лауретсульфат натрия SLES 70, растворители номерные, теплоноситель, тосол, антифриз, флотореагент оксаль Т-66, медный купорос"
    },
    {
        name: "ООО ГАРАНТ",
        equipment: "Запчасти",
        contact: "Бережной Сергей",
        email: "berezhnoy@garantgroup.com",
        comments: "ДКС Электрика Кабель Комплектующие"
    },
    {
        name: "ООО ПРАЙД СПб",
        equipment: "Оборудование",
        contact: "Немчинова Александра",
        email: "nemchinova@td-pride.ru",
        comments: "Электрика Кабель Комплектующие"
    },
    {
        name: "ООО Русский Свет",
        equipment: "Оборудование",
        contact: "Зайцева Анна",
        email: "smo6@spb1.russvet.ru",
        comments: "ДКС Электрика Кабель Комплектующие"
    },
    {
        name: "ООО ТД Толедо",
        equipment: "Оборудование",
        contact: "Волкова Галина",
        email: "volkova.g@toledo24.ru",
        comments: "ДКС Электрика Кабель Комплектующие"
    },
    {
        name: "ООО Элкон Электро Спб",
        equipment: "Оборудование",
        contact: "Шульгин Михаил",
        email: "shulgin_mi@el-com.ru",
        comments: "ДКС Электрика Кабель Комплектующие"
    },
    {
        name: "XCom-shop",
        equipment: "Оборудование",
        contact: "Вадим Ахмеров",
        email: "v.ahmerov@xcomspb.ru",
        comments: "Компьютер, компьютерная техника, смартфоны, телефоны, мониторы, карта памяти, ноутбуки, планшеты"
    },
    {
        name: "Форофис",
        equipment: "Оборудование",
        contact: "Менеджер",
        email: "shop@foroffice.ru",
        comments: "Шредеры, картриджы, мфу, принтеры, компьютеры, оргтехника"
    },
    {
        name: "ООО ПК-АРЕНА",
        equipment: "Оборудование",
        contact: "Менеджер",
        email: "sale@pc-arena.ru",
        comments: "Компьютер, компьютерная техника, сетевое оборудование, мониторы, карта памяти"
    },
    {
        name: "ООО Регард",
        equipment: "Оборудование",
        contact: "Сергей Сарвилин",
        email: "s@regard.ru",
        comments: "Компьютер, компьютерная техника, смартфоны, телефоны, мониторы, карта памяти, сетевое оборудование, ноутбуки, планшеты"
    },
    {
        name: "ООО ДЖИЭСМСТОР",
        equipment: "Оборудование",
        contact: "Менеджер",
        email: "mail@gsm-store.ru",
        comments: "смартфоны, телефоны, ноутбуки, планшеты"
    },
    {
        name: "Lite-Mobile",
        equipment: "Оборудование",
        contact: "Менеджер",
        email: "sales@lite-mobile.ru",
        comments: "смартфоны, телефоны, ноутбуки, планшеты"
    },
    {
        name: "ООО "УРМКС"",
        equipment: "Оборудование",
        contact: "Фокин Дмитрий",
        email: "d.fokin@urmks.ru",
        comments: "шкаф лвж, лабораторная мебель, термошкафы"
    },
    {
        name: "Промышленная мебель ESD",
        equipment: "Оборудование",
        contact: "Ксенофонтов Кирилл",
        email: "zakaz@mebelesd.ru",
        comments: "шкаф лвж, лабораторная мебель, термошкафы"
    },
    {
        name: "ЗиМ",
        equipment: "Оборудование",
        contact: "Розова Надежда",
        email: "zim@zimcom.ru",
        comments: "блок ЛВЖ, модульные здания"
    }
];

const categoryIcons = {
    "Техника автоматизации": "fa-cogs",
    "Оснащение лабораторий": "fa-flask",
    "Хим реактивы": "fa-vial",
    "Запчасти": "fa-wrench",
    "Оборудование": "fa-industry",
    "Масло": "fa-oil-can",
    "Уплотнения": "fa-ring"
};

