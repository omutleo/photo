// data.js - База данных поставщиков из Excel файла

const database = {
    "Общая": [
        {
            name: "ООО \"Арвэл\"",
            contact: "Екатерина 8-905-202-90-07",
            email: "arvelspb@mail.ru",
            products: "СпецОдежда (Постельное белье)",
            payment: "предоплата"
        },
        {
            name: "ООО \"ТехноАвиа\"",
            contact: "Дежин Максим 622-15-60 доб. 5809, 8-921-306-24-08",
            email: "dezhin@spb.technoavia.ru",
            products: "Спец.ОДЕЖДА",
            payment: "предоплата"
        },
        {
            name: "ООО \"МатрасОптТорг\"",
            contact: "Анна Жирова 8 812-989-15-18",
            email: "info@matrasopttorg.ru",
            products: "МАТРАСЫ",
            payment: "предоплата"
        },
        {
            name: "ИП ЦИРШ",
            contact: "Жирова Анна 8 (952) 589-15-18",
            email: "9891518@mail.ru",
            products: "СпецОдежда (Постельное белье)",
            payment: "предоплата"
        },
        {
            name: "ООО \"ТД ФОРТ\"",
            contact: "Сидорова Ирина 606-60-60 (доб. 2080), 8-963-325-43-76",
            email: "is.tdfort@mail.ru",
            products: "Спец.ОДЕЖДА",
            payment: "предоплата"
        }
    ],
    "Электрика": [
        {
            name: "ООО \"ГАРАНТ\"",
            contact: "Каменкова Наталья 8-960-239-72-26",
            email: "kamenkova@garantgroup.com",
            products: "Электрика + Кабель + Комплектующие",
            payment: "отсрочка 30 дней"
        },
        {
            name: "ООО \"ПРАЙД СПб\"",
            contact: "Голубева Светлана 8-911-176-20-68",
            email: "svetlana@td-pride.ru",
            products: "Электрика + Кабель + Комплектующие",
            payment: "отсрочка 30 дней"
        },
        {
            name: "ООО \"МИНИМАКС\"",
            contact: "Григорьев Максим 8 (952) 364-25-30",
            email: "grigorevms@minimaks.ru",
            products: "Электрика + Кабель + Комплектующие",
            payment: "отсрочка 45 дней"
        }
    ],
    "Склады": [
        {
            name: "ООО \"ЭТМ\"",
            contact: "Петрова Светлана 8-904-551-12-97",
            email: "petrova_ss@etm.ru",
            products: "Склад СПб. Ул. Трефолева",
            payment: "60 дней, 10 м/р"
        },
        {
            name: "ООО \"ПРАЙД-СПБ\"",
            contact: "Немчинова Александра 8-911-143-46-63",
            email: "nemchinova@td-pride.ru",
            products: "Склад СПб.ул. Митрофаньевский тупик д.1Д",
            payment: "30 дней, 1 м/р"
        }
    ],
    "Одежда": [
        {
            name: "ООО \"Арвэл\"",
            contact: "Екатерина 8-905-202-90-07",
            email: "arvelspb@mail.ru",
            products: "СпецОдежда (Постельное белье)",
            payment: "предоплата"
        },
        {
            name: "ООО \"ТехноАвиа\"",
            contact: "Щенников Михаил 7 (812) 622-15-60 доб. 58-001",
            email: "shchennikov@spb.technoavia.ru",
            products: "Спец.ОДЕЖДА",
            payment: "отсрочка 30 дней"
        }
    ],
    "Отделка": [
        {
            name: "ООО \"СИЛТА\"",
            contact: "Ксения Фалалеева 8-921-889-58-87",
            email: "k.falaleeva@silta.ru",
            products: "РАСХОДНИКИ",
            payment: "отсрочка 30 дней"
        },
        {
            name: "ООО \"САПЛАТ\"",
            contact: "Кучеров Павел 981-74-41, 8-904-519-91-98",
            email: "saplatspb@yandex.ru",
            products: "РАСХОДНИКИ",
            payment: "Предоплата 100%"
        }
    ],
    "Ханиуэлл": [
        {
            name: "ООО \"Хит Комплект\"",
            contact: "Ткаченко Алексей 7-917-511-00-38",
            email: "atk@vfz.su",
            products: "Honeywell",
            payment: "-"
        },
        {
            name: "ООО \"ПРАЙД СБ\"",
            contact: "Немчинова Александра 8-911-143-46-63",
            email: "nemchinova@td-pride.ru",
            products: "Honeywell",
            payment: "-"
        }
    ],
    "Сантехника": [
        {
            name: "ООО «Сантехкомплект»",
            contact: "Шпак Наталья 648 02 02 доб. 4115",
            email: "shpak_na@santech.ru",
            products: "Сантехника, БОЛЛЕР, Люк чугунный",
            payment: "-"
        },
        {
            name: "ООО « ГК Сантехкомплект- НЕВА»",
            contact: "Сорокина Светлана 702-10-80 доб. 209",
            email: "141@stkneva.com",
            products: "Сантехника",
            payment: "-"
        }
    ],
    "Расходники": [
        {
            name: "ООО \"СИЛТА\"",
            contact: "Ксения Фалалеева 8-921-889-58-87",
            email: "k.falaleeva@silta.ru",
            products: "РАСХОДНИКИ",
            payment: "отсрочка 30 дней"
        },
        {
            name: "ООО \"САПЛАТ\"",
            contact: "Кучеров Павел 981-74-41, 8-904-519-91-98",
            email: "saplatspb@yandex.ru",
            products: "РАСХОДНИКИ",
            payment: "Предоплата 100%"
        }
    ]
};

const categoryIcons = {
    "Общая": "fa-boxes",
    "Электрика": "fa-bolt",
    "Склады": "fa-warehouse",
    "Одежда": "fa-tshirt",
    "Отделка": "fa-paint-roller",
    "Ханиуэлл": "fa-shield-alt",
    "Сантехника": "fa-faucet",
    "Расходники": "fa-tools"
};

