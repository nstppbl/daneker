export type Lang = "ru" | "kz" | "en"

export const LANGS: { code: Lang; label: string; full: string }[] = [
  { code: "ru", label: "RU", full: "Русский" },
  { code: "kz", label: "KZ", full: "Қазақша" },
  { code: "en", label: "EN", full: "English" },
]

type ProblemCard = { tag: string; title: string; body: string }
type ServiceCard = { n: string; title: string; body: string }
type Step = { n: string; title: string; body: string; meta: string }
type ListBlock = { title: string; items: string[]; note?: string }
type Course = { tag: string; title: string; body: string; duration: string }
type Profile = { tag: string; title: string; body: string }

export type Dict = {
  nav: { services: string; training: string; about: string; contacts: string }
  tagline: string
  common: {
    leaveRequest: string
    whatWeDo: string
    getInTouch: string
    region: string
  }
  home: {
    eyebrow: string
    heroTitle: string
    heroSubtitle: string
    stats: { value: string; label: string }[]
    problemsKicker: string
    problemsTitle: string
    problems: ProblemCard[]
    servicesKicker: string
    servicesTitle: string
    servicesSubtitle: string
    services: ServiceCard[]
    trainingKicker: string
    trainingTitle: string
    trainingSubtitle: string
    trainingCols: { title: string; items: string[] }[]
    processKicker: string
    processTitle: string
    steps: Step[]
  }
  services: {
    eyebrow: string
    title: string
    intro: string
    groups: {
      kicker: string
      code: string
      heading?: string
      intro?: string
      blocks: ListBlock[]
    }[]
  }
  training: {
    eyebrow: string
    title: string
    intro: string
    programsKicker: string
    programsTitle: string
    courses: Course[]
    formatKicker: string
    formatTitle: string
    formatBlocks: ListBlock[]
    whyKicker: string
    whyTitle: string
    whyBody: string
  }
  about: {
    eyebrow: string
    title: string
    intro: string
    experience: ListBlock
    standards: ListBlock
    teamKicker: string
    teamTitle: string
    team: Profile[]
    approachKicker: string
    approachTitle: string
    approachBlocks: ListBlock[]
  }
  contacts: {
    eyebrow: string
    title: string
    intro: string
    contactBlock: ListBlock
    requisitesBlock: ListBlock
    note: string
  }
  form: {
    title: string
    desc: string
    heading: string
    enterprise: string
    contact: string
    message: string
    submit: string
    sending: string
    success: string
    error: string
  }
  footer: {
    desc: string
    sections: string
    connect: string
    copyright: string
    note: string
  }
  settings: {
    title: string
    language: string
    layout: string
    scheme: string
    layouts: { editorial: string; technical: string; minimal: string }
    schemes: { petrol: string; slate: string; graphite: string; steel: string }
  }
}

/* ============================== RUSSIAN ============================== */
const ru: Dict = {
  nav: { services: "Услуги", training: "Обучение", about: "О компании", contacts: "Контакты" },
  tagline: "Functional Safety & Automation Integrity",
  common: {
    leaveRequest: "Оставить заявку",
    whatWeDo: "Что мы делаем",
    getInTouch: "Связаться",
    region: "Выезд по Атырау и области",
  },
  home: {
    eyebrow: "Атырау · КИПиА и АСУ ТП",
    heroTitle: "КИПиА и АСУ ТП для предприятий, у которых своей службы нет или она не справляется",
    heroSubtitle:
      "Обслуживание, монтаж и пусконаладка, поиск неисправностей, настройка приборов и контроллеров, документация и обучение персонала.",
    stats: [
      { value: "24 часа", label: "Отвечаем на запрос в течение рабочих суток" },
      { value: "5 дней", label: "Отчёт и документы после завершения работ" },
      { value: "Фикс", label: "Стоимость согласуется до начала и не пересматривается" },
      { value: "As-built", label: "Документы оформляем так, чтобы архив принял с первого раза" },
    ],
    problemsKicker: "Знакомо",
    problemsTitle: "С чем к нам приходят чаще всего",
    problems: [
      {
        tag: "Отказ",
        title: "Установка встаёт, причину не находят",
        body: "Срабатывания повторяются, каждый останов это потерянные сутки. Внутри разбирались, виновного не нашли, живут с этим второй год.",
      },
      {
        tag: "Приёмка",
        title: "Подрядчик сдаёт систему, а проверить некому",
        body: "Настраивал и программировал тот же, кто поставлял. Своих специалистов такого профиля нет, а подписывать надо.",
      },
      {
        tag: "Кадры",
        title: "Специалист уволился, знания ушли с ним",
        body: "Конфигурацию знал один человек. Настроить прибор или зайти в контроллер теперь некому. Зовут вендора и ждут неделями.",
      },
      {
        tag: "Поле",
        title: "Датчик врёт, а замена не помогает",
        body: "Прибор поменяли, показания те же. Дело в настройке, монтаже, отборе или линии связи, но искать это некогда и некому.",
      },
    ],
    servicesKicker: "Услуги",
    servicesTitle: "Работы, которые нужны предприятию сейчас",
    servicesSubtitle:
      "Одна команда закрывает и полевые работы, и настройку, и документацию. Вам не нужно собирать под задачу трёх подрядчиков и сводить их между собой.",
    services: [
      { n: "01", title: "Обслуживание и сервис", body: "Плановые выезды по графику, проверка контуров, ведение реестра приборов, поддержка по вызову." },
      { n: "02", title: "Монтаж, шкафы, пусконаладка", body: "Сборка и монтаж шкафов, прокладка, loop check, шеф-надзор, пусконаладочные работы." },
      { n: "03", title: "Траблшутинг и наладка", body: "Поиск причин отказов, настройка приборов и контроллеров, диагностика промышленных сетей." },
      { n: "04", title: "Расчёты и подбор", body: "Подбор и проверка приборов, расчёт сужающих устройств, проверка решений поставщика." },
      { n: "05", title: "Документация", body: "Datasheets, instrument index, loop diagrams, кабельные журналы, приведение к as-built." },
      { n: "06", title: "Отчётность и реестры", body: "Периодические отчёты о состоянии систем, метрики сигнализаций, графики проверок и поверок." },
    ],
    trainingKicker: "Обучение",
    trainingTitle: "Учебный центр, а не курсы между делом",
    trainingSubtitle:
      "Готовим инженеров и техников КИПиА под конкретное оборудование предприятия. Занятия ведут практики, которые сами работают на этих системах.",
    trainingCols: [
      { title: "Основы", items: ["Электротехника для КИПиА", "Токовая петля 4-20 мА и логика сигнала", "Полевые приборы: устройство и настройка", "Чтение схем и документации"] },
      { title: "Практика", items: ["Основы АСУ ТП и SCADA", "Программирование контроллеров", "Промышленные сети и диагностика", "Работа на действующем учебном стенде"] },
      { title: "Формат", items: ["Корпоративная группа на вашей площадке", "Открытые группы по расписанию", "Программа под ваше оборудование", "Документ об обучении по завершении"] },
    ],
    processKicker: "Как начинаем",
    processTitle: "От разговора до отчёта",
    steps: [
      { n: "Шаг 1", title: "Разговор", body: "Описываете задачу как есть. Уточняем, что происходит и с чем связано.", meta: "30 минут" },
      { n: "Шаг 2", title: "Обследование", body: "Приезжаем и смотрим участок вживую: монтаж, отбор, линию, условия работы.", meta: "1 выезд" },
      { n: "Шаг 3", title: "Объём и смета", body: "Перечень работ, состав документов, срок и стоимость. До начала, а не по факту.", meta: "3-5 дней" },
      { n: "Шаг 4", title: "Работа и отчёт", body: "Выполняем, сдаём с документами и объясняем выводы вашим специалистам.", meta: "по договору" },
    ],
  },
  services: {
    eyebrow: "Услуги",
    title: "Что мы делаем",
    intro: "Список рабочий, а не рекламный. Если нужной позиции здесь нет, спросите: скорее всего, мы либо делаем это, либо знаем, кто делает.",
    groups: [
      {
        kicker: "Сервис",
        code: "СВ",
        blocks: [
          {
            title: "Обслуживание и сервис",
            items: ["Плановые выезды по согласованному графику", "Проверка контуров и приборов", "Ведение реестра средств измерений", "Планирование проверок и поверок", "Поддержка по телефону и выезд по вызову"],
            note: "Объём и периодичность определяются после обследования объекта.",
          },
          {
            title: "Монтаж, шкафы, пусконаладка",
            items: ["Сборка шкафов управления и КИПиА", "Монтаж приборов и кабельных трасс", "Loop check и предпусковая проверка", "Punch list и отработка замечаний", "Шеф-надзор и участие в приёмке"],
            note: "Работаем как на давальческом оборудовании заказчика, так и с подбором комплектации.",
          },
        ],
      },
      {
        kicker: "Наладка",
        code: "НЛ",
        heading: "Траблшутинг, настройка, диагностика",
        blocks: [
          {
            title: "Поиск неисправностей",
            items: ["Разбор повторяющихся отказов и ложных срабатываний", "Проверка контура целиком: прибор, линия, барьер, вход системы", "Диагностика причин обрывов связи", "Анализ по NAMUR NE 43 и NE 107"],
          },
          {
            title: "Настройка и конфигурирование",
            items: ["Конфигурирование HART-приборов", "Настройка контроллеров и параметров контуров", "Диагностика Profibus PA, Foundation Fieldbus, Modbus, PROFINET", "Восстановление и резервное копирование конфигураций"],
          },
        ],
      },
      {
        kicker: "Инженерия",
        code: "ИН",
        heading: "Расчёты, подбор и документация",
        blocks: [
          {
            title: "Расчёты и подбор",
            items: ["Подбор приборов измерения уровня, расхода, давления", "Расчёт сужающих устройств по ISO 5167 и AGA", "Sizing регулирующих клапанов, проверка на кавитацию и шум", "Независимая проверка подбора, выполненного поставщиком"],
          },
          {
            title: "Документация",
            items: ["Datasheets по ISA 20", "Instrument index, hook-up drawings", "Кабельные журналы и схемы клеммных коробок", "Loop diagrams по ISA 5.4", "Приведение комплекта к as-built"],
            note: "Документы оформляем в вашем шаблоне, если он есть, или в нашем, если его нет.",
          },
        ],
      },
      {
        kicker: "Безопасность",
        code: "БЗ",
        heading: "Системы противоаварийной защиты",
        intro: "Отдельное направление для предприятий, где есть контуры безопасности. Работаем по IEC 61511 и IEC 61508.",
        blocks: [
          {
            title: "Оценка и расчёты",
            items: ["Аудит действующих систем ПАЗ и gap-анализ", "Расчёты SIL, обоснование интервалов проверок", "Разработка требований безопасности", "Матрицы Cause & Effect и описание логики"],
          },
          {
            title: "Эксплуатация",
            items: ["Управление байпасами и изменениями", "Регламенты проверочных испытаний", "Управление сигнализациями по ISA 18.2", "Инспекция взрывозащиты по IEC 60079-17"],
            note: "Поверку средств измерений не выполняем: для неё требуется аккредитованная лаборатория. Готовим приборы и документы к поверке в аккредитованной организации.",
          },
        ],
      },
    ],
  },
  training: {
    eyebrow: "Обучение",
    title: "Готовим тех, кто потом будет это обслуживать сам",
    intro: "Курсы для служб КИПиА и АСУ ТП. Начинаем с основ, которые пропускают вендорские курсы: как формируется сигнал, откуда берутся ошибки, почему схема выглядит именно так.",
    programsKicker: "Программы",
    programsTitle: "Что можно пройти",
    courses: [
      { tag: "Основы", title: "Электротехника для КИПиА", body: "С нуля: ток, напряжение, схемы, измерения. Для тех, кто пришёл в службу без профильной базы.", duration: "3-5 дней" },
      { tag: "Основы", title: "Основы АСУ ТП и SCADA", body: "Архитектура системы, верхний уровень, работа оператора, что видит инженер.", duration: "5 дней" },
      { tag: "Практика", title: "Токовая петля и полевые приборы", body: "Как устроен сигнал 4-20 мА, откуда берутся ошибки, как настраивать и проверять приборы.", duration: "3-5 дней" },
      { tag: "Практика", title: "Промышленные сети", body: "Modbus, PROFINET, Profibus PA: устройство, диагностика, типовые неисправности.", duration: "3 дня" },
      { tag: "Практика", title: "Функциональная безопасность", body: "IEC 61511 для эксплуатации: что такое SIL, зачем проверочные испытания, роль службы.", duration: "2-3 дня" },
      { tag: "Специальные", title: "Программирование контроллеров", body: "Логика, языки программирования, отладка. Занятия на действующем стенде.", duration: "5-10 дней" },
    ],
    formatKicker: "Формат",
    formatTitle: "Как это устроено",
    formatBlocks: [
      {
        title: "Форматы",
        items: ["Корпоративная группа на площадке заказчика", "Группа в учебном классе в Атырау", "Открытые группы по расписанию для отдельных специалистов", "Программа адаптируется под оборудование предприятия"],
      },
      {
        title: "Как проходит",
        items: ["Теория короткими блоками, дальше практика", "Занятия на действующем учебном стенде", "Разбор случаев с объектов слушателей", "Проверка знаний в конце и документ об обучении"],
        note: "Сроки, стоимость и состав группы согласуются отдельно. Программу присылаем до начала.",
      },
    ],
    whyKicker: "Почему это работает",
    whyTitle: "Учат люди, которые сами делают эту работу",
    whyBody: "Преподаватели не методисты, а действующие инженеры. Поэтому на вопрос «а у нас на установке по-другому» ответ будет содержательным, а не «это выходит за рамки программы».",
  },
  about: {
    eyebrow: "О компании",
    title: "Инженеры, которые работали по обе стороны приёмки",
    intro: "DANEKER это инженерная и сервисная компания из Атырау. Мы занимаемся КИПиА и системами автоматизации: от полевых работ и наладки до документации и обучения персонала.",
    experience: {
      title: "Опыт",
      items: ["Проекты расширения месторождений и переработки в регионе", "Приёмка работ подрядчиков со стороны заказчика", "Пусконаладка и ввод систем в эксплуатацию", "Эксплуатация и обслуживание действующих производств"],
    },
    standards: {
      title: "Стандарты, по которым работаем",
      items: ["IEC 61511 и IEC 61508: системы противоаварийной защиты", "IEC 60079: взрывозащищённое оборудование", "ISA 5.4, ISA 20: документация КИПиА", "ISA 18.2: управление сигнализациями", "ISO 5167, AGA: расходоизмерение"],
    },
    teamKicker: "Команда",
    teamTitle: "Кто выполняет работу",
    team: [
      { tag: "Профиль", title: "Функциональная безопасность", body: "Расчёты, требования безопасности, аудит систем ПАЗ, сертифицированный инженер." },
      { tag: "Профиль", title: "АСУ ТП и верхний уровень", body: "SCADA, контроллеры безопасности, интеграция систем, программирование." },
      { tag: "Профиль", title: "КИПиА и метрология", body: "Полевые приборы, калибровка, реестры средств измерений, обучение." },
      { tag: "Профиль", title: "Монтаж и пусконаладка", body: "Полевые работы, шеф-надзор, ПНР, работа на объекте." },
      { tag: "Профиль", title: "Нормативы и закупки", body: "Требования законодательства, тендерные процедуры, техническая оценка." },
      { tag: "Профиль", title: "Проектирование и документация", body: "Чертежи, схемы, комплекты документации, приведение к as-built." },
    ],
    approachKicker: "Подход",
    approachTitle: "Как мы работаем",
    approachBlocks: [
      {
        title: "Что обещаем",
        items: ["Отвечаем на запрос в течение рабочих суток", "Стоимость согласуем до начала работ", "Отчёт и документы передаём в течение пяти рабочих дней", "Объясняем решение, а не просто сдаём результат"],
      },
      {
        title: "Как относимся к границам",
        items: ["Если задача не наша, говорим сразу", "Смежные работы закрываем через партнёров, договор при этом один", "Ответственность за результат остаётся на нас", "Конфиденциальность закрепляем соглашением до передачи документов"],
      },
    ],
  },
  contacts: {
    eyebrow: "Контакты",
    title: "Как с нами связаться",
    intro: "Опишите задачу в свободной форме. Если есть схема, перечень оборудования или фотографии узла, приложите: разговор будет короче и точнее.",
    contactBlock: {
      title: "Связь",
      items: ["Почта: info@daneker.kz", "Отдел работы с заказчиками: sales@daneker.kz", "Адрес: Атырау", "Часы работы: понедельник–пятница, 9:00–18:00"],
    },
    requisitesBlock: {
      title: "Реквизиты",
      items: ["Наименование: будет добавлено после регистрации", "БИН: будет добавлено", "Банковские реквизиты: по запросу"],
    },
    note: "Договоры до завершения регистрации оформляются через действующее юридическое лицо. Уточняйте при обращении.",
  },
  form: {
    title: "Расскажите, что беспокоит",
    desc: "Первый разговор ни к чему не обязывает. Опишите задачу в свободной форме, приложите схему или перечень оборудования, если они есть. Ответим в течение рабочих суток. Работаем по Атырау и области, выезд в другие регионы обсуждается отдельно.",
    heading: "Как к вам обращаться",
    enterprise: "Предприятие",
    contact: "Телефон или почта",
    message: "Что происходит",
    submit: "Отправить",
    sending: "Отправляем…",
    success: "Спасибо! Мы ответим в течение рабочих суток.",
    error: "Не получилось отправить. Напишите нам на почту:",
  },
  footer: {
    desc: "Инжиниринг и сервис систем автоматизации. Атырау и Атырауская область.",
    sections: "Разделы",
    connect: "Связь",
    copyright: "© 2026 DANEKER. Все права защищены.",
    note: "Реквизиты будут добавлены после регистрации",
  },
  settings: {
    title: "Оформление",
    language: "Язык",
    layout: "Макет",
    scheme: "Цветовая схема",
    layouts: { editorial: "Редакционный", technical: "Технический", minimal: "Минимальный" },
    schemes: { petrol: "Петроль", slate: "Сланец", graphite: "Графит", steel: "Сталь" },
  },
}

/* ============================== KAZAKH ============================== */
const kz: Dict = {
  nav: { services: "Қызметтер", training: "Оқыту", about: "Компания туралы", contacts: "Байланыс" },
  tagline: "Functional Safety & Automation Integrity",
  common: {
    leaveRequest: "Өтінім қалдыру",
    whatWeDo: "Біз не істейміз",
    getInTouch: "Хабарласу",
    region: "Атырау мен облыс бойынша шығу",
  },
  home: {
    eyebrow: "Атырау · АӨА және АБЖ ТП",
    heroTitle: "Өз қызметі жоқ немесе оның күші жетпейтін кәсіпорындарға арналған АӨА және АБЖ ТП",
    heroSubtitle:
      "Қызмет көрсету, монтаж және іске қосу-баптау, ақаулықтарды іздеу, аспаптар мен контроллерлерді баптау, құжаттама және персоналды оқыту.",
    stats: [
      { value: "24 сағат", label: "Сұранысқа бір жұмыс тәулігінде жауап береміз" },
      { value: "5 күн", label: "Жұмыс аяқталған соң есеп пен құжаттар" },
      { value: "Тұрақты", label: "Құн жұмыс басталғанға дейін келісіледі және өзгермейді" },
      { value: "As-built", label: "Құжаттарды мұрағат бірінші реттен қабылдайтындай етіп ресімдейміз" },
    ],
    problemsKicker: "Таныс",
    problemsTitle: "Бізге көбіне немен келеді",
    problems: [
      { tag: "Тоқтау", title: "Қондырғы тоқтайды, себебі табылмайды", body: "Іске қосылулар қайталанады, әрбір тоқтау — жоғалған тәулік. Ішінде талдады, кінәлі табылмады, екінші жыл осылай өмір сүруде." },
      { tag: "Қабылдау", title: "Мердігер жүйені тапсырады, ал тексеретін адам жоқ", body: "Баптаған және бағдарламалаған — жеткізген адамның өзі. Осындай бейіндегі маман жоқ, ал қол қою керек." },
      { tag: "Кадрлар", title: "Маман кетті, білім онымен бірге кетті", body: "Конфигурацияны бір адам ғана білетін. Аспапты баптау немесе контроллерге кіру енді ешкімнің қолынан келмейді. Вендорды шақырып, апталап күтеді." },
      { tag: "Дала", title: "Датчик қате көрсетеді, ауыстыру көмектеспейді", body: "Аспапты ауыстырды, көрсеткіш сол күйінде. Мәселе баптауда, монтажда, іріктеп алуда немесе байланыс желісінде, бірақ мұны іздеуге уақыт та, адам да жоқ." },
    ],
    servicesKicker: "Қызметтер",
    servicesTitle: "Кәсіпорынға дәл қазір қажет жұмыстар",
    servicesSubtitle:
      "Бір команда дала жұмыстарын да, баптауды да, құжаттаманы да жабады. Бір тапсырмаға үш мердігер жинап, оларды өзара үйлестірудің қажеті жоқ.",
    services: [
      { n: "01", title: "Қызмет көрсету және сервис", body: "Кестемен жоспарлы шығулар, контурларды тексеру, аспаптар тізілімін жүргізу, шақырту бойынша қолдау." },
      { n: "02", title: "Монтаж, шкафтар, іске қосу", body: "Шкафтарды құрастыру және монтаждау, төсеу, loop check, шеф-қадағалау, іске қосу-баптау жұмыстары." },
      { n: "03", title: "Ақаулықты жою және баптау", body: "Тоқтау себептерін іздеу, аспаптар мен контроллерлерді баптау, өнеркәсіптік желілерді диагностикалау." },
      { n: "04", title: "Есептеулер және іріктеу", body: "Аспаптарды іріктеу және тексеру, тарылтқыш құрылғыларды есептеу, жеткізуші шешімдерін тексеру." },
      { n: "05", title: "Құжаттама", body: "Datasheets, instrument index, loop diagrams, кабельдік журналдар, as-built күйіне келтіру." },
      { n: "06", title: "Есептілік және тізілімдер", body: "Жүйелер жай-күйі туралы мерзімдік есептер, сигнализация метрикалары, тексеру және салыстырып тексеру кестелері." },
    ],
    trainingKicker: "Оқыту",
    trainingTitle: "Курс арасында емес, нағыз оқу орталығы",
    trainingSubtitle:
      "АӨА инженерлері мен техниктерін кәсіпорынның нақты жабдығына сай дайындаймыз. Сабақты осы жүйелерде өзі жұмыс істейтін тәжірибешілер жүргізеді.",
    trainingCols: [
      { title: "Негіздер", items: ["АӨА үшін электротехника", "4-20 мА ток ілмегі және сигнал логикасы", "Дала аспаптары: құрылысы мен баптауы", "Схемалар мен құжаттаманы оқу"] },
      { title: "Тәжірибе", items: ["АБЖ ТП және SCADA негіздері", "Контроллерлерді бағдарламалау", "Өнеркәсіптік желілер және диагностика", "Жұмыс істеп тұрған оқу стендінде жұмыс"] },
      { title: "Формат", items: ["Сіздің алаңыңыздағы корпоративтік топ", "Кесте бойынша ашық топтар", "Сіздің жабдығыңызға арналған бағдарлама", "Аяқталған соң оқу туралы құжат"] },
    ],
    processKicker: "Қалай бастаймыз",
    processTitle: "Әңгімеден есепке дейін",
    steps: [
      { n: "1-қадам", title: "Әңгіме", body: "Тапсырманы бар күйінде айтасыз. Не болып жатқанын және немен байланысты екенін нақтылаймыз.", meta: "30 минут" },
      { n: "2-қадам", title: "Тексеру", body: "Келіп, учаскені өз көзімізбен көреміз: монтаж, іріктеп алу, желі, жұмыс жағдайлары.", meta: "1 шығу" },
      { n: "3-қадам", title: "Көлем және смета", body: "Жұмыстар тізімі, құжаттар құрамы, мерзім және құн. Факт бойынша емес, басталғанға дейін.", meta: "3-5 күн" },
      { n: "4-қадам", title: "Жұмыс және есеп", body: "Орындаймыз, құжаттарымен тапсырамыз және қорытындыларды мамандарыңызға түсіндіреміз.", meta: "шарт бойынша" },
    ],
  },
  services: {
    eyebrow: "Қызметтер",
    title: "Біз не істейміз",
    intro: "Тізім жарнамалық емес, нақты жұмыс тізімі. Керек позиция мұнда болмаса, сұраңыз: біз оны не істейміз, не кім істейтінін білеміз.",
    groups: [
      {
        kicker: "Сервис",
        code: "СВ",
        blocks: [
          {
            title: "Қызмет көрсету және сервис",
            items: ["Келісілген кестемен жоспарлы шығулар", "Контурлар мен аспаптарды тексеру", "Өлшеу құралдары тізілімін жүргізу", "Тексеру мен салыстырып тексеруді жоспарлау", "Телефон арқылы қолдау және шақырту бойынша шығу"],
            note: "Көлемі мен кезеңділігі нысанды тексергеннен кейін анықталады.",
          },
          {
            title: "Монтаж, шкафтар, іске қосу",
            items: ["Басқару және АӨА шкафтарын құрастыру", "Аспаптар мен кабель трассаларын монтаждау", "Loop check және іске қосу алдындағы тексеру", "Punch list және ескертулерді пысықтау", "Шеф-қадағалау және қабылдауға қатысу"],
            note: "Тапсырыс берушінің давальчестік жабдығымен де, комплектацияны іріктеп те жұмыс істейміз.",
          },
        ],
      },
      {
        kicker: "Баптау",
        code: "БТ",
        heading: "Ақаулықты жою, баптау, диагностика",
        blocks: [
          {
            title: "Ақаулықтарды іздеу",
            items: ["Қайталанатын тоқтаулар мен жалған іске қосылуларды талдау", "Контурды толық тексеру: аспап, желі, барьер, жүйе кірісі", "Байланыс үзілуінің себептерін диагностикалау", "NAMUR NE 43 және NE 107 бойынша талдау"],
          },
          {
            title: "Баптау және конфигурациялау",
            items: ["HART-аспаптарды конфигурациялау", "Контроллерлер мен контур параметрлерін баптау", "Profibus PA, Foundation Fieldbus, Modbus, PROFINET диагностикасы", "Конфигурацияларды қалпына келтіру және сақтық көшірмелеу"],
          },
        ],
      },
      {
        kicker: "Инженерия",
        code: "ИН",
        heading: "Есептеулер, іріктеу және құжаттама",
        blocks: [
          {
            title: "Есептеулер және іріктеу",
            items: ["Деңгей, шығын, қысым өлшеу аспаптарын іріктеу", "ISO 5167 және AGA бойынша тарылтқыш құрылғыларды есептеу", "Реттеуші клапандарды sizing, кавитация мен шуылға тексеру", "Жеткізуші орындаған іріктеуді тәуелсіз тексеру"],
          },
          {
            title: "Құжаттама",
            items: ["ISA 20 бойынша Datasheets", "Instrument index, hook-up drawings", "Кабельдік журналдар және клемма қораптарының схемалары", "ISA 5.4 бойынша Loop diagrams", "Комплектіні as-built күйіне келтіру"],
            note: "Құжаттарды сіздің үлгіңізде, ол болса, немесе біздікінде, ол болмаса, ресімдейміз.",
          },
        ],
      },
      {
        kicker: "Қауіпсіздік",
        code: "ҚЗ",
        heading: "Апаттан қорғау жүйелері",
        intro: "Қауіпсіздік контурлары бар кәсіпорындарға арналған жеке бағыт. IEC 61511 және IEC 61508 бойынша жұмыс істейміз.",
        blocks: [
          {
            title: "Бағалау және есептеулер",
            items: ["Жұмыс істеп тұрған АҚЖ жүйелерін аудиттеу және gap-талдау", "SIL есептеулері, тексеру аралықтарын негіздеу", "Қауіпсіздік талаптарын әзірлеу", "Cause & Effect матрицалары және логика сипаттамасы"],
          },
          {
            title: "Пайдалану",
            items: ["Байпастар мен өзгерістерді басқару", "Тексеру сынақтарының регламенттері", "ISA 18.2 бойынша сигнализацияларды басқару", "IEC 60079-17 бойынша жарылыстан қорғауды тексеру"],
            note: "Өлшеу құралдарын салыстырып тексеруді орындамаймыз: ол үшін аккредиттелген зертхана қажет. Аспаптар мен құжаттарды аккредиттелген ұйымда тексеруге дайындаймыз.",
          },
        ],
      },
    ],
  },
  training: {
    eyebrow: "Оқыту",
    title: "Оны кейін өзі баптайтындарды дайындаймыз",
    intro: "АӨА және АБЖ ТП қызметтеріне арналған курстар. Вендорлық курстар өткізіп жіберетін негіздерден бастаймыз: сигнал қалай қалыптасады, қателер қайдан шығады, схема неге дәл осылай көрінеді.",
    programsKicker: "Бағдарламалар",
    programsTitle: "Нені өтуге болады",
    courses: [
      { tag: "Негіздер", title: "АӨА үшін электротехника", body: "Нөлден бастап: ток, кернеу, схемалар, өлшеулер. Бейіндік базасыз қызметке келгендерге.", duration: "3-5 күн" },
      { tag: "Негіздер", title: "АБЖ ТП және SCADA негіздері", body: "Жүйе архитектурасы, жоғарғы деңгей, оператор жұмысы, инженер нені көреді.", duration: "5 күн" },
      { tag: "Тәжірибе", title: "Ток ілмегі және дала аспаптары", body: "4-20 мА сигналы қалай құрылған, қателер қайдан шығады, аспаптарды қалай баптап тексеру керек.", duration: "3-5 күн" },
      { tag: "Тәжірибе", title: "Өнеркәсіптік желілер", body: "Modbus, PROFINET, Profibus PA: құрылысы, диагностикасы, типтік ақаулықтар.", duration: "3 күн" },
      { tag: "Тәжірибе", title: "Функционалдық қауіпсіздік", body: "Пайдалануға арналған IEC 61511: SIL деген не, тексеру сынақтары неге керек, қызметтің рөлі.", duration: "2-3 күн" },
      { tag: "Арнайы", title: "Контроллерлерді бағдарламалау", body: "Логика, бағдарламалау тілдері, түзету. Жұмыс істеп тұрған стендте сабақтар.", duration: "5-10 күн" },
    ],
    formatKicker: "Формат",
    formatTitle: "Бұл қалай ұйымдастырылған",
    formatBlocks: [
      {
        title: "Форматтар",
        items: ["Тапсырыс беруші алаңындағы корпоративтік топ", "Атыраудағы оқу сыныбындағы топ", "Жеке мамандарға арналған кесте бойынша ашық топтар", "Бағдарлама кәсіпорын жабдығына бейімделеді"],
      },
      {
        title: "Қалай өтеді",
        items: ["Теория қысқа блоктармен, әрі қарай тәжірибе", "Жұмыс істеп тұрған оқу стендінде сабақтар", "Тыңдаушылар нысандарынан келген жағдайларды талдау", "Соңында білімді тексеру және оқу туралы құжат"],
        note: "Мерзімі, құны және топ құрамы бөлек келісіледі. Бағдарламаны басталғанға дейін жібереміз.",
      },
    ],
    whyKicker: "Неге бұл жұмыс істейді",
    whyTitle: "Осы жұмысты өзі істейтін адамдар оқытады",
    whyBody: "Оқытушылар — әдіскер емес, жұмыс істеп жүрген инженерлер. Сондықтан «бізде қондырғыда басқаша ғой» деген сұраққа жауап «бұл бағдарлама шеңберінен тыс» емес, мазмұнды болады.",
  },
  about: {
    eyebrow: "Компания туралы",
    title: "Қабылдаудың екі жағында да жұмыс істеген инженерлер",
    intro: "DANEKER — Атыраудан шыққан инженерлік және сервистік компания. Біз АӨА мен автоматтандыру жүйелерімен айналысамыз: дала жұмыстары мен баптаудан бастап құжаттама мен персоналды оқытуға дейін.",
    experience: {
      title: "Тәжірибе",
      items: ["Аймақтағы кен орындарын кеңейту және өңдеу жобалары", "Тапсырыс беруші тарапынан мердігер жұмыстарын қабылдау", "Іске қосу-баптау және жүйелерді пайдалануға енгізу", "Жұмыс істеп тұрған өндірістерді пайдалану және қызмет көрсету"],
    },
    standards: {
      title: "Жұмыс істейтін стандарттар",
      items: ["IEC 61511 және IEC 61508: апаттан қорғау жүйелері", "IEC 60079: жарылыстан қорғалған жабдық", "ISA 5.4, ISA 20: АӨА құжаттамасы", "ISA 18.2: сигнализацияларды басқару", "ISO 5167, AGA: шығынды өлшеу"],
    },
    teamKicker: "Команда",
    teamTitle: "Жұмысты кім орындайды",
    team: [
      { tag: "Бейін", title: "Функционалдық қауіпсіздік", body: "Есептеулер, қауіпсіздік талаптары, АҚЖ жүйелерін аудиттеу, сертификатталған инженер." },
      { tag: "Бейін", title: "АБЖ ТП және жоғарғы деңгей", body: "SCADA, қауіпсіздік контроллерлері, жүйелерді интеграциялау, бағдарламалау." },
      { tag: "Бейін", title: "АӨА және метрология", body: "Дала аспаптары, калибрлеу, өлшеу құралдарының тізілімдері, оқыту." },
      { tag: "Бейін", title: "Монтаж және іске қосу", body: "Дала жұмыстары, шеф-қадағалау, ІҚБ, нысандағы жұмыс." },
      { tag: "Бейін", title: "Нормативтер және сатып алу", body: "Заңнама талаптары, тендерлік рәсімдер, техникалық бағалау." },
      { tag: "Бейін", title: "Жобалау және құжаттама", body: "Сызбалар, схемалар, құжаттама комплектілері, as-built күйіне келтіру." },
    ],
    approachKicker: "Тәсіл",
    approachTitle: "Біз қалай жұмыс істейміз",
    approachBlocks: [
      {
        title: "Не уәде етеміз",
        items: ["Сұранысқа бір жұмыс тәулігінде жауап береміз", "Құнды жұмыс басталғанға дейін келісеміз", "Есеп пен құжаттарды бес жұмыс күні ішінде береміз", "Нәтижені жай тапсырмай, шешімді түсіндіреміз"],
      },
      {
        title: "Шекараларға көзқарас",
        items: ["Тапсырма біздікі болмаса, бірден айтамыз", "Іргелес жұмыстарды серіктестер арқылы жабамыз, шарт бір болады", "Нәтиже үшін жауапкершілік бізде қалады", "Құпиялылықты құжаттарды бергенге дейін келісіммен бекітеміз"],
      },
    ],
  },
  contacts: {
    eyebrow: "Байланыс",
    title: "Бізбен қалай байланысуға болады",
    intro: "Тапсырманы бар күйінде сипаттаңыз. Схема, жабдық тізімі немесе тораптың фотосуреттері болса, қоса беріңіз: әңгіме қысқа әрі нақты болады.",
    contactBlock: {
      title: "Байланыс",
      items: ["Пошта: info@daneker.kz", "Тапсырыс берушілермен жұмыс бөлімі: sales@daneker.kz", "Мекенжай: Атырау", "Жұмыс уақыты: дүйсенбі–жұма, 9:00–18:00"],
    },
    requisitesBlock: {
      title: "Деректемелер",
      items: ["Атауы: тіркеуден кейін қосылады", "БСН: қосылады", "Банк деректемелері: сұраныс бойынша"],
    },
    note: "Тіркеу аяқталғанға дейін шарттар қолданыстағы заңды тұлға арқылы ресімделеді. Хабарласқанда нақтылаңыз.",
  },
  form: {
    title: "Не мазалайтынын айтыңыз",
    desc: "Алғашқы әңгіме ешнәрсеге міндеттемейді. Тапсырманы еркін түрде сипаттаңыз, схема немесе жабдық тізімі болса қоса беріңіз. Бір жұмыс тәулігінде жауап береміз. Атырау мен облыс бойынша жұмыс істейміз, басқа өңірлерге шығу бөлек талқыланады.",
    heading: "Сізге қалай жүгінеміз",
    enterprise: "Кәсіпорын",
    contact: "Телефон немесе пошта",
    message: "Не болып жатыр",
    submit: "Жіберу",
    sending: "Жіберілуде…",
    success: "Рахмет! Бір жұмыс тәулігінде жауап береміз.",
    error: "Жіберу мүмкін болмады. Бізге поштаға жазыңыз:",
  },
  footer: {
    desc: "Автоматтандыру жүйелерінің инжинирингі және сервисі. Атырау және Атырау облысы.",
    sections: "Бөлімдер",
    connect: "Байланыс",
    copyright: "© 2026 DANEKER. Барлық құқықтар қорғалған.",
    note: "Деректемелер тіркеуден кейін қосылады",
  },
  settings: {
    title: "Безендіру",
    language: "Тіл",
    layout: "Макет",
    scheme: "Түс схемасы",
    layouts: { editorial: "Редакциялық", technical: "Техникалық", minimal: "Минималды" },
    schemes: { petrol: "Петроль", slate: "Тақтатас", graphite: "Графит", steel: "Болат" },
  },
}

/* ============================== ENGLISH ============================== */
const en: Dict = {
  nav: { services: "Services", training: "Training", about: "About", contacts: "Contacts" },
  tagline: "Functional Safety & Automation Integrity",
  common: {
    leaveRequest: "Leave a request",
    whatWeDo: "What we do",
    getInTouch: "Get in touch",
    region: "On-site across Atyrau and the region",
  },
  home: {
    eyebrow: "Atyrau · I&C and Process Automation",
    heroTitle: "Instrumentation and process automation for plants without an in-house team — or whose team is stretched thin",
    heroSubtitle:
      "Maintenance, installation and commissioning, troubleshooting, instrument and controller configuration, documentation and personnel training.",
    stats: [
      { value: "24 hours", label: "We respond to your request within one working day" },
      { value: "5 days", label: "Report and documents delivered after work is complete" },
      { value: "Fixed", label: "Price is agreed before work starts and is not revised" },
      { value: "As-built", label: "Documents prepared so your archive accepts them on the first pass" },
    ],
    problemsKicker: "Sound familiar",
    problemsTitle: "What people most often come to us with",
    problems: [
      { tag: "Trip", title: "The unit keeps stopping and no one finds the cause", body: "Trips repeat, and every shutdown is a lost day. It was looked into internally, no culprit found, and they have lived with it for a second year." },
      { tag: "Handover", title: "The contractor hands over a system with no one to check it", body: "The same party that supplied it also configured and programmed it. There is no in-house specialist of that profile, yet someone has to sign off." },
      { tag: "People", title: "The specialist left and the knowledge left with them", body: "One person knew the configuration. Now there is no one to set up an instrument or log into the controller. They call the vendor and wait for weeks." },
      { tag: "Field", title: "The sensor lies and replacing it does not help", body: "The instrument was swapped, the reading is the same. It is in the setup, installation, tapping point or signal line — but there is no time or person to find it." },
    ],
    servicesKicker: "Services",
    servicesTitle: "The work your plant needs right now",
    servicesSubtitle:
      "One team covers field work, configuration and documentation. You do not have to assemble three contractors for one task and coordinate them.",
    services: [
      { n: "01", title: "Maintenance and service", body: "Scheduled site visits, loop checks, keeping the instrument register, on-call support." },
      { n: "02", title: "Installation, panels, commissioning", body: "Panel assembly and installation, routing, loop checks, supervision, commissioning." },
      { n: "03", title: "Troubleshooting and tuning", body: "Root-cause analysis of failures, instrument and controller configuration, industrial network diagnostics." },
      { n: "04", title: "Calculations and selection", body: "Instrument selection and verification, orifice sizing, review of the supplier's solution." },
      { n: "05", title: "Documentation", body: "Datasheets, instrument index, loop diagrams, cable schedules, bringing the set to as-built." },
      { n: "06", title: "Reporting and registers", body: "Periodic system-condition reports, alarm metrics, inspection and verification schedules." },
    ],
    trainingKicker: "Training",
    trainingTitle: "A training center, not courses on the side",
    trainingSubtitle:
      "We prepare I&C engineers and technicians for your plant's specific equipment. Classes are run by practitioners who work on these systems themselves.",
    trainingCols: [
      { title: "Fundamentals", items: ["Electrical engineering for I&C", "4-20 mA current loop and signal logic", "Field instruments: design and setup", "Reading drawings and documentation"] },
      { title: "Practice", items: ["Process automation and SCADA basics", "Controller programming", "Industrial networks and diagnostics", "Hands-on work on a live training rig"] },
      { title: "Format", items: ["Corporate group at your site", "Open groups on a schedule", "Program tailored to your equipment", "Certificate of completion"] },
    ],
    processKicker: "How we start",
    processTitle: "From a conversation to a report",
    steps: [
      { n: "Step 1", title: "Conversation", body: "You describe the task as it is. We clarify what is happening and what it relates to.", meta: "30 minutes" },
      { n: "Step 2", title: "Survey", body: "We come and look at the site in person: installation, tapping points, the line, working conditions.", meta: "1 visit" },
      { n: "Step 3", title: "Scope and estimate", body: "List of works, set of documents, timeline and cost. Before the start, not after the fact.", meta: "3-5 days" },
      { n: "Step 4", title: "Work and report", body: "We do the work, hand it over with documents and explain the conclusions to your specialists.", meta: "per contract" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we do",
    intro: "A working list, not a marketing one. If the item you need is not here, ask: chances are we either do it or know who does.",
    groups: [
      {
        kicker: "Service",
        code: "SV",
        blocks: [
          {
            title: "Maintenance and service",
            items: ["Scheduled visits on an agreed plan", "Loop and instrument checks", "Keeping the measuring-instrument register", "Planning inspections and verifications", "Phone support and on-call visits"],
            note: "Scope and frequency are determined after a site survey.",
          },
          {
            title: "Installation, panels, commissioning",
            items: ["Assembly of control and I&C panels", "Installation of instruments and cable routes", "Loop check and pre-start verification", "Punch list and closing out remarks", "Supervision and participation in handover"],
            note: "We work both with the client's free-issue equipment and with our own selection of components.",
          },
        ],
      },
      {
        kicker: "Tuning",
        code: "TN",
        heading: "Troubleshooting, tuning, diagnostics",
        blocks: [
          {
            title: "Fault finding",
            items: ["Analysis of recurring trips and false actuations", "Checking the whole loop: instrument, line, barrier, system input", "Diagnosing causes of communication dropouts", "Analysis to NAMUR NE 43 and NE 107"],
          },
          {
            title: "Setup and configuration",
            items: ["Configuring HART instruments", "Tuning controllers and loop parameters", "Diagnostics of Profibus PA, Foundation Fieldbus, Modbus, PROFINET", "Restoring and backing up configurations"],
          },
        ],
      },
      {
        kicker: "Engineering",
        code: "EN",
        heading: "Calculations, selection and documentation",
        blocks: [
          {
            title: "Calculations and selection",
            items: ["Selecting level, flow and pressure instruments", "Orifice sizing to ISO 5167 and AGA", "Control-valve sizing, cavitation and noise checks", "Independent review of the supplier's selection"],
          },
          {
            title: "Documentation",
            items: ["Datasheets to ISA 20", "Instrument index, hook-up drawings", "Cable schedules and junction-box diagrams", "Loop diagrams to ISA 5.4", "Bringing the package to as-built"],
            note: "We prepare documents in your template if you have one, or in ours if you do not.",
          },
        ],
      },
      {
        kicker: "Safety",
        code: "SF",
        heading: "Safety instrumented systems",
        intro: "A dedicated area for plants with safety loops. We work to IEC 61511 and IEC 61508.",
        blocks: [
          {
            title: "Assessment and calculations",
            items: ["Audit of existing SIS and gap analysis", "SIL calculations, justification of proof-test intervals", "Development of safety requirements", "Cause & Effect matrices and logic descriptions"],
          },
          {
            title: "Operation",
            items: ["Bypass and change management", "Proof-test procedures", "Alarm management to ISA 18.2", "Ex inspection to IEC 60079-17"],
            note: "We do not perform metrological verification: that requires an accredited laboratory. We prepare instruments and documents for verification at an accredited organization.",
          },
        ],
      },
    ],
  },
  training: {
    eyebrow: "Training",
    title: "We train the people who will later maintain it themselves",
    intro: "Courses for I&C and automation teams. We start with the fundamentals vendor courses skip: how a signal is formed, where errors come from, why a drawing looks the way it does.",
    programsKicker: "Programs",
    programsTitle: "What you can take",
    courses: [
      { tag: "Fundamentals", title: "Electrical engineering for I&C", body: "From scratch: current, voltage, circuits, measurements. For those who joined the team without a specialist background.", duration: "3-5 days" },
      { tag: "Fundamentals", title: "Process automation and SCADA basics", body: "System architecture, the upper level, operator work, what the engineer sees.", duration: "5 days" },
      { tag: "Practice", title: "Current loop and field instruments", body: "How the 4-20 mA signal works, where errors come from, how to set up and check instruments.", duration: "3-5 days" },
      { tag: "Practice", title: "Industrial networks", body: "Modbus, PROFINET, Profibus PA: architecture, diagnostics, typical faults.", duration: "3 days" },
      { tag: "Practice", title: "Functional safety", body: "IEC 61511 for operations: what SIL is, why proof tests matter, the team's role.", duration: "2-3 days" },
      { tag: "Special", title: "Controller programming", body: "Logic, programming languages, debugging. Classes on a live rig.", duration: "5-10 days" },
    ],
    formatKicker: "Format",
    formatTitle: "How it works",
    formatBlocks: [
      {
        title: "Formats",
        items: ["Corporate group at the client's site", "Group in a training classroom in Atyrau", "Open groups on a schedule for individual specialists", "The program adapts to the plant's equipment"],
      },
      {
        title: "How it runs",
        items: ["Theory in short blocks, then practice", "Classes on a live training rig", "Working through cases from the trainees' own sites", "A knowledge check at the end and a certificate"],
        note: "Timelines, cost and group composition are agreed separately. We send the program before it starts.",
      },
    ],
    whyKicker: "Why it works",
    whyTitle: "Taught by people who do this work themselves",
    whyBody: "The instructors are not methodologists but working engineers. So when you ask \"but on our unit it is different,\" the answer is substantive, not \"that is beyond the scope of the program.\"",
  },
  about: {
    eyebrow: "About",
    title: "Engineers who have worked on both sides of the handover",
    intro: "DANEKER is an engineering and service company from Atyrau. We work in instrumentation and automation systems: from field work and commissioning to documentation and personnel training.",
    experience: {
      title: "Experience",
      items: ["Field-expansion and processing projects in the region", "Acceptance of contractors' work on the client's side", "Commissioning and putting systems into operation", "Operation and maintenance of running facilities"],
    },
    standards: {
      title: "Standards we work to",
      items: ["IEC 61511 and IEC 61508: safety instrumented systems", "IEC 60079: explosion-protected equipment", "ISA 5.4, ISA 20: I&C documentation", "ISA 18.2: alarm management", "ISO 5167, AGA: flow measurement"],
    },
    teamKicker: "Team",
    teamTitle: "Who does the work",
    team: [
      { tag: "Profile", title: "Functional safety", body: "Calculations, safety requirements, SIS audits, certified engineer." },
      { tag: "Profile", title: "Automation and upper level", body: "SCADA, safety controllers, systems integration, programming." },
      { tag: "Profile", title: "Instrumentation and metrology", body: "Field instruments, calibration, measuring-instrument registers, training." },
      { tag: "Profile", title: "Installation and commissioning", body: "Field work, supervision, commissioning, on-site work." },
      { tag: "Profile", title: "Regulations and procurement", body: "Statutory requirements, tender procedures, technical evaluation." },
      { tag: "Profile", title: "Design and documentation", body: "Drawings, diagrams, documentation packages, bringing to as-built." },
    ],
    approachKicker: "Approach",
    approachTitle: "How we work",
    approachBlocks: [
      {
        title: "What we promise",
        items: ["We respond to a request within one working day", "We agree the cost before work starts", "We deliver the report and documents within five working days", "We explain the solution, not just hand over the result"],
      },
      {
        title: "How we treat boundaries",
        items: ["If a task is not ours, we say so up front", "We cover adjacent work through partners, under a single contract", "Responsibility for the result stays with us", "We fix confidentiality by agreement before handing over documents"],
      },
    ],
  },
  contacts: {
    eyebrow: "Contacts",
    title: "How to reach us",
    intro: "Describe the task in free form. If you have a drawing, an equipment list or photos of the assembly, attach them: the conversation will be shorter and more precise.",
    contactBlock: {
      title: "Contact",
      items: ["Email: info@daneker.kz", "Customer relations: sales@daneker.kz", "Address: Atyrau", "Hours: Monday–Friday, 9:00–18:00"],
    },
    requisitesBlock: {
      title: "Company details",
      items: ["Name: to be added after registration", "BIN: to be added", "Bank details: on request"],
    },
    note: "Until registration is complete, contracts are executed through an operating legal entity. Please confirm when you get in touch.",
  },
  form: {
    title: "Tell us what's troubling you",
    desc: "The first conversation commits you to nothing. Describe the task in free form and attach a drawing or an equipment list if you have them. We respond within one working day. We work across Atyrau and the region; visits to other regions are discussed separately.",
    heading: "How to reach you",
    enterprise: "Company",
    contact: "Phone or email",
    message: "What's happening",
    submit: "Send",
    sending: "Sending…",
    success: "Thank you! We'll reply within one working day.",
    error: "Couldn't send. Please email us at:",
  },
  footer: {
    desc: "Engineering and service of automation systems. Atyrau and Atyrau region.",
    sections: "Sections",
    connect: "Contact",
    copyright: "© 2026 DANEKER. All rights reserved.",
    note: "Company details will be added after registration",
  },
  settings: {
    title: "Appearance",
    language: "Language",
    layout: "Layout",
    scheme: "Color scheme",
    layouts: { editorial: "Editorial", technical: "Technical", minimal: "Minimal" },
    schemes: { petrol: "Petrol", slate: "Slate", graphite: "Graphite", steel: "Steel" },
  },
}

export const dictionaries: Record<Lang, Dict> = { ru, kz, en }
