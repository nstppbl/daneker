import type { Lang } from "@/lib/i18n"

/* Content added from the company presentation (DANEKER-PRS-001). */

type Block = { title: string; items: string[] }
type Item = { title: string; body: string }

export type ExtraDict = {
  diff: { kicker: string; title: string; intro: string; cols: Block[]; footer: string }
  path: {
    kicker: string
    title: string
    items: { year: string; org: string; body: string }[]
    statValue: string
    statLabel: string
    cosinusTitle: string
    cosinusBody: string
    quote: string
  }
  projects: { kicker: string; title: string; items: (Item & { meta: string })[]; note: string }
  certs: { kicker: string; title: string; items: { vendor: string; course: string }[] }
  survey: { kicker: string; title: string; intro: string; cols: Block[]; footer: string; cta: string }
  case: { kicker: string; title: string; situation: string; steps: (Item & { n: string })[]; footer: string }
  scope: { kicker: string; title: string; intro: string; cols: Block[]; footer: string }
}

const certItems = [
  { vendor: "Honeywell", course: "Safety Manager: Advanced (SM-4555)" },
  { vendor: "Honeywell", course: "Safety Manager: online modifications (SM-4554)" },
  { vendor: "HIMA", course: "HIQuad X: engineering & communications" },
  { vendor: "Sensia", course: "ICS Triplex Trusted: engineering (T8063)" },
  { vendor: "Schneider", course: "Triconex TriStation 1131" },
  { vendor: "Schneider", course: "Triconex Firmware Manager" },
  { vendor: "Yokogawa", course: "ProSafe-RS: maintenance" },
  { vendor: "Yokogawa", course: "Centum VP: engineering" },
  { vendor: "Siemens", course: "SINAMICS S120: service & commissioning" },
  { vendor: "Siemens", course: "SIMATIC S7: programming (ST-7PRO1)" },
  { vendor: "AVEVA", course: "Application Server, Historian, InTouch HMI" },
]

const ru: ExtraDict = {
  diff: {
    kicker: "Чем мы отличаемся",
    title: "Те же работы, но с пониманием, как должно быть",
    intro:
      "Бригаду для монтажа или наладки в Атырау найти можно. Разница в том, что мы работали на этих системах со стороны заказчика и знаем, каким должен быть результат, а не только как его сдать.",
    cols: [
      {
        title: "Опыт со стороны заказчика",
        items: [
          "Приёмка работ подрядчиков на крупных проектах региона",
          "Знаем, где обычно прячутся недоделки и как они всплывают на пуске",
          "Документы оформляем так, чтобы их приняли, а не переделывали",
        ],
      },
      {
        title: "Работа по стандартам",
        items: [
          "IEC 61511 и IEC 61508: системы ПАЗ",
          "IEC 60079: взрывозащита",
          "ISA 18.2, ISA 5.4, ISA 20: сигнализации и документация",
          "NAMUR NE 43 и NE 107: диагностика приборов",
        ],
      },
      {
        title: "Инженерная глубина",
        items: [
          "Расчёты и обоснования, а не только замена вышедшего из строя",
          "Разбор причины, а не устранение симптома",
          "Обучаем ваш персонал по ходу работы",
        ],
      },
    ],
    footer: "Мы одинаково спокойно работаем руками на объекте и отвечаем на вопрос, почему сделано именно так.",
  },
  path: {
    kicker: "Наш путь",
    title: "Десять лет на стороне заказчика, подрядчика и эксплуатации",
    items: [
      { year: "2015", org: "Полимерное производство", body: "Пуск линии БОПП-плёнки, Siemens S7 и Sinamics" },
      { year: "2016–2019", org: "Атырауский НПЗ", body: "Обслуживание АСУ ТП, пуск комплекса глубокой переработки нефти" },
      { year: "2019–2021", org: "KMG Automation", body: "Triconex и Foxboro под ключ: трубопровод KGDBN, производство МТБЭ" },
      { year: "2021–2026", org: "Тенгизшевройл", body: "Проект FGP и действующий завод: приёмка, FAT, SAT, пуск систем защит" },
      { year: "2026", org: "DANEKER", body: "Своя инженерная компания по КИП и АСУ ТП в Атырау" },
    ],
    statValue: "200+",
    statLabel: "обученных специалистов",
    cosinusTitle: "Cosinus Education",
    cosinusBody:
      "Учебный центр КИП и автоматизации в Атырау, который основал наш ведущий инженер. Начинали с бесплатных занятий по выходным, сейчас свой класс и учебные стенды.",
    quote:
      "Мы видели проекты с трёх сторон: как подрядчик собирали и пускали системы, как заказчик принимали чужие, как эксплуатация жили с последствиями.",
  },
  projects: {
    kicker: "Опыт команды",
    title: "Проекты, которые члены команды вели до DANEKER",
    items: [
      {
        meta: "2018 · Атырауский НПЗ",
        title: "Вывод из консервации водородного компрессора K-651",
        body: "Установка параксилола. Triconex, Bently Nevada, контроль оборотов Braun.",
      },
      {
        meta: "2019–2020 · КПО, KGDBN",
        title: "RTU на базе Triconex Trident для нового трубопровода",
        body: "Tie-in 108, BVS-1, BVS-2, KPC. Полный цикл: инжиниринг, сборка, FAT, пуск.",
      },
      {
        meta: "2021 · ШХК",
        title: "Система управления и защит производства МТБЭ",
        body: "Foxboro FCP280 и Tricon CX. Полный цикл от инжиниринга до пуска.",
      },
      {
        meta: "2021–2026 · Тенгизшевройл",
        title: "Системы защит на FGP и действующем заводе",
        body: "Приёмка, FAT, SAT, C&E. Honeywell SM, ICS Triplex, HIMA. Есть рекомендательное письмо.",
      },
    ],
    note: "Опыт личный: проекты выполнены в составе других компаний. Каждый проект можем показать подробнее на встрече.",
  },
  certs: { kicker: "Сертификаты команды", title: "Инженеры обучены у производителей систем", items: certItems },
  survey: {
    kicker: "С чего начать",
    title: "Обследование без обязательств",
    intro:
      "Вам не нужно принимать решение сегодня. Есть шаг, который ничего не стоит и показывает, есть ли предмет для работы.",
    cols: [
      {
        title: "Что предлагаем",
        items: [
          "Приезжаем на объект и смотрим участок, который вас беспокоит",
          "Или разбираем удалённо: выгрузку сигнализаций, документы по контуру, перечень приборов",
        ],
      },
      {
        title: "Что вы получаете",
        items: [
          "Короткое заключение: что видим, что требует внимания, что срочно",
          "Оценку объёма и порядка стоимости, если работа нужна",
          "Понимание, что можно закрыть своими силами",
        ],
      },
      {
        title: "Условия",
        items: [
          "Бесплатно и без обязательств",
          "Соглашение о конфиденциальности до передачи данных",
          "Дальше решаете вы, мы не возвращаемся с напоминаниями",
        ],
      },
    ],
    footer: "Один выезд обычно отвечает на больше вопросов, чем месяц переписки.",
    cta: "Заказать обследование",
  },
  case: {
    kicker: "Как это выглядит на практике",
    title: "Разбор типовой ситуации: датчик врёт, замена не помогает",
    situation: "Показания прибора не совпадают с реальностью, замена не дала результата.",
    steps: [
      { n: "01", title: "Обследование", body: "Выезжаем на объект, смотрим узел вживую: монтаж, отбор, линию, условия работы." },
      { n: "02", title: "Сбор данных", body: "Документация по контуру, история отказов, настройки прибора и системы." },
      { n: "03", title: "Анализ", body: "Отделяем проблему прибора от проблемы монтажа, настройки или линии связи." },
      { n: "04", title: "Работа", body: "Устраняем причину: настройка, переделка узла, замена, изменение конфигурации." },
      { n: "05", title: "Отчёт", body: "Что было, что сделано, что проверять дальше и на что обратить внимание." },
    ],
    footer: "Начинаем всегда с обследования. Узел лучше один раз увидеть, чем три раза о нём спросить.",
  },
  scope: {
    kicker: "Если задача шире нашего профиля",
    title: "Берёмся разобраться в любом случае",
    intro:
      "У предприятия редко бывает задача ровно по одной специальности. Мы не отказываем на входе: сначала разбираемся, что нужно, потом решаем, как это закрыть.",
    cols: [
      {
        title: "Делаем сами",
        items: [
          "Всё, что относится к КИПиА, АСУ ТП и слаботочной электрике",
          "Монтаж, наладка, настройка, диагностика, документация, обучение",
        ],
      },
      {
        title: "Привлекаем партнёров",
        items: [
          "Работы, требующие отдельной аккредитации или лицензии",
          "Механика, строительная часть, электрика высокого напряжения",
          "Ответственность за результат остаётся на нас",
        ],
      },
      {
        title: "Говорим прямо",
        items: [
          "Если задача не наша, скажем сразу и подскажем, к кому обратиться",
          "Лучше потерять один заказ, чем сделать плохо и потерять предприятие",
        ],
      },
    ],
    footer: "Спрашивайте про любую задачу. Хуже всего, если мы промолчим и вы будете искать решение сами.",
  },
}

const kz: ExtraDict = {
  diff: {
    kicker: "Біздің айырмашылығымыз",
    title: "Сол жұмыстар, бірақ қалай болуы керегін түсіне отырып",
    intro:
      "Атырауда монтаж немесе баптау бригадасын табуға болады. Айырмашылығы: біз бұл жүйелерде тапсырыс беруші жағында жұмыс істедік және нәтиже қандай болуы керегін білеміз, тек оны қалай тапсыруды емес.",
    cols: [
      {
        title: "Тапсырыс беруші жағындағы тәжірибе",
        items: [
          "Өңірдің ірі жобаларында мердігерлер жұмысын қабылдау",
          "Кемшіліктер қайда жасырынатынын және іске қосуда қалай шығатынын білеміз",
          "Құжаттарды қайта жасамайтындай етіп рәсімдейміз",
        ],
      },
      {
        title: "Стандарттар бойынша жұмыс",
        items: [
          "IEC 61511 және IEC 61508: апатқа қарсы қорғау жүйелері",
          "IEC 60079: жарылыстан қорғау",
          "ISA 18.2, ISA 5.4, ISA 20: дабылдар және құжаттама",
          "NAMUR NE 43 және NE 107: аспаптар диагностикасы",
        ],
      },
      {
        title: "Инженерлік тереңдік",
        items: [
          "Тек істен шыққанды ауыстыру емес, есептеулер мен негіздемелер",
          "Белгіні емес, себепті жою",
          "Жұмыс барысында сіздің қызметкерлеріңізді оқытамыз",
        ],
      },
    ],
    footer: "Біз нысанда қолмен жұмыс істеуге де, неге дәл осылай жасалғанын түсіндіруге де бірдей дайынбыз.",
  },
  path: {
    kicker: "Біздің жолымыз",
    title: "Тапсырыс беруші, мердігер және пайдалану жағында он жыл",
    items: [
      { year: "2015", org: "Полимер өндірісі", body: "БОПП-пленка желісін іске қосу, Siemens S7 және Sinamics" },
      { year: "2016–2019", org: "Атырау МӨЗ", body: "АБЖ ҚП қызмет көрсету, мұнайды терең өңдеу кешенін іске қосу" },
      { year: "2019–2021", org: "KMG Automation", body: "Triconex және Foxboro кілтпен: KGDBN құбыры, МТБЭ өндірісі" },
      { year: "2021–2026", org: "Теңізшевройл", body: "FGP жобасы және жұмыс істеп тұрған зауыт: қабылдау, FAT, SAT, қорғау жүйелерін іске қосу" },
      { year: "2026", org: "DANEKER", body: "Атыраудағы БӨАжА және АБЖ ҚП бойынша өз инженерлік компаниямыз" },
    ],
    statValue: "200+",
    statLabel: "оқытылған маман",
    cosinusTitle: "Cosinus Education",
    cosinusBody:
      "Атыраудағы БӨАжА және автоматтандыру оқу орталығын біздің жетекші инженеріміз құрған. Демалыс күнгі тегін сабақтардан бастадық, қазір өз сыныбымыз және оқу стендтеріміз бар.",
    quote:
      "Біз жобаларды үш жақтан көрдік: мердігер ретінде жүйелерді жинап, іске қостық, тапсырыс беруші ретінде басқалардікін қабылдадық, пайдалану ретінде салдарымен өмір сүрдік.",
  },
  projects: {
    kicker: "Команда тәжірибесі",
    title: "Команда мүшелері DANEKER-ге дейін жүргізген жобалар",
    items: [
      {
        meta: "2018 · Атырау МӨЗ",
        title: "K-651 сутегі компрессорын консервациядан шығару",
        body: "Параксилол қондырғысы. Triconex, Bently Nevada, Braun айналым бақылауы.",
      },
      {
        meta: "2019–2020 · КПО, KGDBN",
        title: "Жаңа құбыр үшін Triconex Trident негізіндегі RTU",
        body: "Tie-in 108, BVS-1, BVS-2, KPC. Толық цикл: инжиниринг, жинау, FAT, іске қосу.",
      },
      {
        meta: "2021 · ШХК",
        title: "МТБЭ өндірісін басқару және қорғау жүйесі",
        body: "Foxboro FCP280 және Tricon CX. Инжинирингтен іске қосуға дейінгі толық цикл.",
      },
      {
        meta: "2021–2026 · Теңізшевройл",
        title: "FGP және жұмыс істеп тұрған зауыттағы қорғау жүйелері",
        body: "Қабылдау, FAT, SAT, C&E. Honeywell SM, ICS Triplex, HIMA. Ұсыным хат бар.",
      },
    ],
    note: "Тәжірибе жеке: жобалар басқа компаниялар құрамында орындалған. Әр жобаны кездесуде толығырақ көрсете аламыз.",
  },
  certs: { kicker: "Команда сертификаттары", title: "Инженерлер жүйе өндірушілерінде оқыған", items: certItems },
  survey: {
    kicker: "Неден бастау керек",
    title: "Міндеттемесіз зерттеу",
    intro: "Бүгін шешім қабылдаудың қажеті жоқ. Ештеңе тұрмайтын және жұмыс тақырыбы бар-жоғын көрсететін қадам бар.",
    cols: [
      {
        title: "Не ұсынамыз",
        items: [
          "Нысанға келіп, сізді алаңдатқан учаскені қараймыз",
          "Немесе қашықтан талдаймыз: дабылдар, контур құжаттары, аспаптар тізімі",
        ],
      },
      {
        title: "Не аласыз",
        items: [
          "Қысқа қорытынды: не көріп тұрмыз, неге назар аудару керек, не шұғыл",
          "Жұмыс қажет болса, көлем мен құнның бағасы",
          "Өз күшіңізбен не жабуға болатынын түсіну",
        ],
      },
      {
        title: "Шарттар",
        items: [
          "Тегін және міндеттемесіз",
          "Деректерді бергенге дейін құпиялылық келісімі",
          "Әрі қарай өзіңіз шешесіз, біз еске салумен оралмаймыз",
        ],
      },
    ],
    footer: "Бір барып көру әдетте бір ай хат алмасудан көп сұраққа жауап береді.",
    cta: "Зерттеуге тапсырыс беру",
  },
  case: {
    kicker: "Іс жүзінде қалай көрінеді",
    title: "Типтік жағдайды талдау: датчик қате көрсетеді, ауыстыру көмектеспейді",
    situation: "Аспап көрсеткіштері шындыққа сәйкес келмейді, ауыстыру нәтиже бермеді.",
    steps: [
      { n: "01", title: "Зерттеу", body: "Нысанға барып, торапты өз көзімізбен көреміз: монтаж, сынама алу, желі, жұмыс жағдайы." },
      { n: "02", title: "Деректер жинау", body: "Контур құжаттамасы, істен шығу тарихы, аспап пен жүйе баптаулары." },
      { n: "03", title: "Талдау", body: "Аспап мәселесін монтаж, баптау немесе байланыс желісі мәселесінен ажыратамыз." },
      { n: "04", title: "Жұмыс", body: "Себепті жоямыз: баптау, торапты қайта жасау, ауыстыру, конфигурацияны өзгерту." },
      { n: "05", title: "Есеп", body: "Не болды, не жасалды, әрі қарай нені тексеру және неге назар аудару керек." },
    ],
    footer: "Әрқашан зерттеуден бастаймыз. Торапты үш рет сұрағаннан бір рет көрген жақсы.",
  },
  scope: {
    kicker: "Егер міндет біздің бейіннен кең болса",
    title: "Кез келген жағдайда анықтауға кірісеміз",
    intro:
      "Кәсіпорында міндет сирек бір ғана мамандыққа сәйкес келеді. Біз бірден бас тартпаймыз: алдымен не қажет екенін анықтаймыз, содан кейін қалай жабатынымызды шешеміз.",
    cols: [
      {
        title: "Өзіміз жасаймыз",
        items: ["БӨАжА, АБЖ ҚП және әлсіз токты электрикаға қатысты бәрі", "Монтаж, баптау, диагностика, құжаттама, оқыту"],
      },
      {
        title: "Серіктестерді тартамыз",
        items: [
          "Жеке аккредиттеу немесе лицензия қажет жұмыстар",
          "Механика, құрылыс бөлігі, жоғары вольтты электрика",
          "Нәтиже үшін жауапкершілік бізде қалады",
        ],
      },
      {
        title: "Тура айтамыз",
        items: [
          "Міндет біздікі болмаса, бірден айтамыз және кімге жүгіну керегін ұсынамыз",
          "Нашар жасап кәсіпорынды жоғалтқаннан бір тапсырысты жоғалтқан жақсы",
        ],
      },
    ],
    footer: "Кез келген міндет туралы сұраңыз. Ең жаманы, біз үндемей, сіз шешімді өзіңіз іздесеңіз.",
  },
}

const en: ExtraDict = {
  diff: {
    kicker: "What sets us apart",
    title: "The same work, done by people who know how it should be",
    intro:
      "You can find a crew for installation or commissioning in Atyrau. The difference is that we have worked on these systems on the owner's side and know what the result should be, not just how to hand it over.",
    cols: [
      {
        title: "Owner-side experience",
        items: [
          "Acceptance of contractor work on major projects in the region",
          "We know where defects hide and how they surface at start-up",
          "Documents prepared to be accepted, not reworked",
        ],
      },
      {
        title: "Standards-based work",
        items: [
          "IEC 61511 and IEC 61508: safety instrumented systems",
          "IEC 60079: explosion protection",
          "ISA 18.2, ISA 5.4, ISA 20: alarms and documentation",
          "NAMUR NE 43 and NE 107: instrument diagnostics",
        ],
      },
      {
        title: "Engineering depth",
        items: [
          "Calculations and justification, not just replacing what failed",
          "Fixing the cause, not the symptom",
          "Training your staff as we go",
        ],
      },
    ],
    footer: "We are equally at home working hands-on in the field and explaining why it was done this way.",
  },
  path: {
    kicker: "Our path",
    title: "Ten years on the owner, contractor and operations side",
    items: [
      { year: "2015", org: "Polymer plant", body: "BOPP film line start-up, Siemens S7 and Sinamics" },
      { year: "2016–2019", org: "Atyrau Refinery", body: "DCS maintenance, deep oil conversion complex start-up" },
      { year: "2019–2021", org: "KMG Automation", body: "Turnkey Triconex and Foxboro: KGDBN pipeline, MTBE plant" },
      { year: "2021–2026", org: "Tengizchevroil", body: "FGP project and operating plant: acceptance, FAT, SAT, safety system start-up" },
      { year: "2026", org: "DANEKER", body: "Our own I&C and automation engineering company in Atyrau" },
    ],
    statValue: "200+",
    statLabel: "specialists trained",
    cosinusTitle: "Cosinus Education",
    cosinusBody:
      "An I&C and automation training centre in Atyrau founded by our lead engineer. It started as free weekend classes and now has its own classroom and training rigs.",
    quote:
      "We have seen projects from three sides: as a contractor we built and started systems, as the owner we accepted others', as operations we lived with the consequences.",
  },
  projects: {
    kicker: "Team experience",
    title: "Projects our team members delivered before DANEKER",
    items: [
      {
        meta: "2018 · Atyrau Refinery",
        title: "Recommissioning of hydrogen compressor K-651",
        body: "Paraxylene unit. Triconex, Bently Nevada, Braun speed monitoring.",
      },
      {
        meta: "2019–2020 · KPO, KGDBN",
        title: "Triconex Trident RTUs for a new pipeline",
        body: "Tie-in 108, BVS-1, BVS-2, KPC. Full cycle: engineering, assembly, FAT, start-up.",
      },
      {
        meta: "2021 · ShKhK",
        title: "Control and safety system for an MTBE plant",
        body: "Foxboro FCP280 and Tricon CX. Full cycle from engineering to start-up.",
      },
      {
        meta: "2021–2026 · Tengizchevroil",
        title: "Safety systems on FGP and the operating plant",
        body: "Acceptance, FAT, SAT, C&E. Honeywell SM, ICS Triplex, HIMA. Reference letter available.",
      },
    ],
    note: "Personal experience: projects were delivered as part of other companies. We can walk you through any of them in a meeting.",
  },
  certs: { kicker: "Team certifications", title: "Engineers trained by the system vendors", items: certItems },
  survey: {
    kicker: "Where to start",
    title: "A no-obligation site survey",
    intro: "You don't need to decide today. There is a step that costs nothing and shows whether there is work to be done.",
    cols: [
      {
        title: "What we offer",
        items: [
          "We visit the site and look at the area that concerns you",
          "Or review remotely: alarm logs, loop documents, instrument list",
        ],
      },
      {
        title: "What you get",
        items: [
          "A short conclusion: what we see, what needs attention, what is urgent",
          "An estimate of scope and cost if work is needed",
          "Clarity on what you can handle in-house",
        ],
      },
      {
        title: "Terms",
        items: [
          "Free and without obligation",
          "NDA signed before any data is shared",
          "You decide what's next, we won't chase you",
        ],
      },
    ],
    footer: "One site visit usually answers more questions than a month of emails.",
    cta: "Request a survey",
  },
  case: {
    kicker: "How it works in practice",
    title: "A typical case: the sensor reads wrong and replacing it doesn't help",
    situation: "The instrument reading doesn't match reality and a replacement changed nothing.",
    steps: [
      { n: "01", title: "Survey", body: "We go to site and look at the installation: mounting, impulse lines, wiring, process conditions." },
      { n: "02", title: "Data", body: "Loop documents, failure history, instrument and system settings." },
      { n: "03", title: "Analysis", body: "We separate an instrument problem from installation, configuration or wiring." },
      { n: "04", title: "Fix", body: "We remove the cause: configuration, rework, replacement or system changes." },
      { n: "05", title: "Report", body: "What happened, what was done, what to check next and what to watch." },
    ],
    footer: "We always start with a survey. Better to see the installation once than ask about it three times.",
  },
  scope: {
    kicker: "If the task goes beyond our scope",
    title: "We'll look into it either way",
    intro:
      "A plant rarely has a task that fits exactly one discipline. We don't turn you away at the door: first we work out what's needed, then how to cover it.",
    cols: [
      {
        title: "We do ourselves",
        items: ["Everything in I&C, process automation and low-voltage electrical", "Installation, commissioning, configuration, diagnostics, documentation, training"],
      },
      {
        title: "We bring in partners",
        items: [
          "Work that requires separate accreditation or licensing",
          "Mechanical, civil and high-voltage electrical work",
          "Responsibility for the result stays with us",
        ],
      },
      {
        title: "We speak plainly",
        items: [
          "If it isn't our job, we'll say so and point you to the right people",
          "Better to lose one order than do poor work and lose a client",
        ],
      },
    ],
    footer: "Ask about any task. The worst outcome is if we stay silent and you look for a solution alone.",
  },
}

export const extraDictionaries: Record<Lang, ExtraDict> = { ru, kz, en }
