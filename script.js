const translations = {
    ru: {
        // Header navigation
        "nav-about": "О конференции",
        "nav-program": "Темы",
        "nav-speakers": "Спикеры",
        "nav-contacts": "Контакты",
        
        // Hero section
        "hero-desc": "Международная научно-практическая конференция",
        "hero-title": "Цифровое образование в эпоху искусственного интеллекта",
        "hero-meta": "📅 Алматы, Казахстан 18 марта 2026",
        "register-btn": "Зарегистрироваться",
        "hero-cta": "Узнать программу",
        
        // About section
        "nav-conf": "Конференция направлена на создание международной площадки для обмена передовым опытом в сфере цифровизации и применения ИИ в высшем образовании. Приоритеты конференции заключаются в том, чтобы определить влияние ИИ и цифровых технологий на качество обучения и управление вузами, укрепить сотрудничество между наукой, государством и EdTech-бизнесом, обсудить современные методики с акцентом на этику и безопасность данных, а также определить направления развития цифровых компетенций преподавателей.",
        
        // Info blocks buttons
        "knowledge-btn": "ЗНАНИЯ ОТ ПРАКТИКОВ",
        "leaders-btn": "ОБЩЕНИЕ С ЛИДЕРАМИ",
        "trends-btn": "ПОСЛЕДНИЕ ТЕНДЕНЦИИ И ТЕХНОЛОГИИ",
        "tools-btn": "ИНСТРУМЕНТЫ, ПРОВЕРЕННЫЕ НА ПРАКТИКЕ",
        "program-btn": "ПРОГРАММА КОНФЕРЕНЦИИ",
        "key-directions-btn": "КЛЮЧЕВЫЕ НАПРАВЛЕНИЯ",
        "dates-btn": "КЛЮЧЕВЫЕ ДАТЫ",
        "payment-btn": "РЕКВИЗИТЫ ДЛЯ ОПЛАТЫ",
        "publication-btn": "ТРЕБОВАНИЯ К ПУБЛИКАЦИИ",
        "events-btn": "МЕРОПРИЯТИЯ",
        "certificates-btn": "СЕРТИФИКАТЫ",
        
        // Info blocks content
        "knowledge-content": "Сессии ведут опытные специалисты с реальными кейсами и рекомендациями. Программа разделена на секции — вы выбираете те, что максимально подходят вашим задачам.",
        "leaders-content": "Знакомство с экспертами, инвесторами, EdTech–партнёрами и единомышленниками. Расширяйте сеть контактов и находите новые возможности для сотрудничества.",
        "trends-content": "Изучение эффективных и инновационных инструментов цифровизации и ИИ, которые помогут улучшить методы обучения, управления и развития проектов.",
        "tools-content": "Участники смогут протестировать решения и совместно реализовать примерный мини-проект с обсуждением каждого шага — от постановки задачи до результата.",
        "program-content": "Подробная программа конференции.",
        
        // Key Directions
        "direction-1-title": "1. Искусственный интеллект в образовании",
        "direction-1-1": "Персонализированные траектории обучения и автоматизация оценки",
        "direction-1-2": "Адаптивные инструменты взаимодействия, мониторинг вовлеченности и обратная связь",
        "direction-1-3": "Этика, прозрачность и безопасность применения ИИ в образовании",
        
        "direction-2-title": "2. Предикативная аналитика и машинное обучение в педагогике",
        "direction-2-1": "Прогнозирование успеваемости и динамики образовательных результатов",
        "direction-2-2": "Модели для автоматической адаптации контента и учебных материалов",
        "direction-2-3": "Практические кейсы внедрения ML-технологий в образовательную среду",
        
        "direction-3-title": "3. Системы поддержки принятия решений на основе данных",
        "direction-3-1": "Управленческие решения на основе анализа образовательных данных",
        "direction-3-2": "Аналитика образовательных данных для корректировки педагогического дизайна",
        "direction-3-3": "Интеграция разнородных данных в единую образовательную экосистему",
        
        "direction-4-title": "4. Виртуальная и дополненная реальность",
        "direction-4-1": "Влияние VR/AR на вовлеченность и качество усвоения материала",
        "direction-4-2": "Методология разработки VR/AR контента и образовательных приложений",
        
        "direction-5-title": "5. Трансформация дистанционного и гибридного обучения",
        "direction-5-1": "Педагогический дизайн эффективных онлайн- и смешанных моделей",
        "direction-5-2": "Развитие синхронных и асинхронных коммуникаций как способ формирования активного учебного сообщества",
        "direction-5-3": "Методы верификации и обеспечения академической честности в дистанционном формате",
        "direction-5-4": "Развитие цифровых компетенций педагога в условиях ИИ-поддерживаемых образовательных сред",
        
        "direction-6-title": "6. Кибербезопасность в образовательных технологиях",
        "direction-6-1": "Защита данных и конфиденциальности обучающихся",
        "direction-6-2": "Угрозы кибербезопасности для образовательных организаций",
        "direction-6-3": "Методические рекомендации для разработки безопасных EdTech-решений",
        
        "direction-7-title": "7. Обучение программированию и вычислительному мышлению",
        "direction-7-1": "Интеграция программирования в образовательные программы высшего образования",
        "direction-7-2": "Развитие вычислительного мышления как инструмента решения прикладных задач",
        
        // Key Dates
        "date-1": "Прием заявок и материалов: до 15 февраля 2026 года",
        "date-2": "Уведомление о принятии: до 20 февраля 2026 года",
        "date-3": "Публикация программы: 1 марта 2026 года",
        
        // Payment details
        "payment-text-1": "По вопросам публикаций, приема заявок и докладов обращаться в Оргкомитет конференции. Регистрационный взнос в размере 10 000 тенге (20USD) может быть перечислен на расчетный счет Алматы Менеджмент университета:",
        "payment-details": "Реквизиты для оплаты: УО «Алматы Менеджмент Университет» РНН 600400079841, КБЕ 18 БИН 971240001583 ИИК KZ406017131000053681 (тенге) KZ336017131000057687 (USD) АО «Народный Банк Казахстан» БИК HSBKKZKX 050060, г. Алматы, ул. Розыбакиева, 227",
        "payment-instructions": "В квитанции необходимо указать: ФИО участника конференции; за участие в конференции \"Цифровое образование в эпоху искусственного интеллекта\". Электронную копию квитанции высылать на e-mail: decai@almau.edu.kz",
        


// Новые ключи для русского языка 
 "publication-btn": "ТРЕБОВАНИЯ К ПУБЛИКАЦИИ",
    "publication-text-1": `Публикация материалов и сертификаты
      Электронный сборник материалов будет издан к открытию конференции и направлен участникам на e-mail, указанный при регистрации.
      Направляемые для публикации статьи оформляются в соответствии с требованиями:`,
    "publication-requirements": `Основные требования:
      
        Объем не более 5 страниц, формата А4, файл MS Word в формате .docx.
        Оригинальность текста не менее 75% (Антиплагиат или др.сервисы).
        Статья не должна быть ранее опубликована.
      `,
    "formatting-params": `Параметры статьи:
      
        Шрифт: Times New Roman, 12 pt
        Межстрочный интервал: 1,0
        Все поля: 2,0 см
        Отступ первой строки абзаца: 0,5 см
        Рисунки и таблицы должны иметь подписи и ссылки в тексте
        Страницы статьи не нумеруются
      `,
    "article-structure": `Статья должна содержать следующие элементы:
      
        Название (не более 10 слов, отражает основную идею исследования)
        Информация об авторах (указывается для каждого автора отдельно):Фамилия Имя Отчество¹, Фамилия Имя Отчество², ...¹ Ученая степень, ученое звание, кафедра, университет (указывается без сокращений), город, страна² Должность, место работы, город, страна*E-mail: author1@email.com; author2@email.com
        Аннотация (Аңдатпа, Abstract) на русском, казахском, английском языках. Аннотация должна быть информативной и краткой (150 слов), отражать цель, методы, результаты и основные выводы исследования, без сокращений, ссылок, формул.
        Ключевые слова и словосочетания («Ключевые слова:», «Түйін сөздер:», «Keywords:» не менее 5)
        Текст статьи содержит основные элементы (по формату IMRAD):I. Введение (Актуальность, проблема, цель, задачи, значимость)II. Литературный обзор (Анализ источников, пробелы, обоснование исследования)III. Методология (Дизайн, выборка, методы сбора и анализа, этика)IV. Результаты и обсуждение (Представление данных, интерпретация, новизна)V. Заключение (Выводы, значимость, перспективы)
        Благодарности (указать при наличии грантов, проектов, поддержки коллег)
        Список литературы (в формате IEEE)Номера присваиваются в порядке первого упоминания источника в тексте в квадратных скобках. Обязательно DOI (Digital Object Identifier) для статей.Примеры:[1] Автор А.А., Автор Б.Б. Название статьи // Название журнала. Год. Т. №, С. ХХ–ХХ.[2] Автор В.В. Название книги. — Город: Издательство, Год.[3] Author C.C. Paper title // Conference Proceedings. City, Year, pp. 100–105.
      `,
    "peer-review-delivery": `Материалы проходят рецензирование редакционной коллегией.
      Отправка статей на e-mail: deai.almau.edu.kz
      Все участники получат электронные сертификаты участия.`,
    "important-dates-updated": `Важные даты:
      
        * Прием заявок и материалов: до 15 февраля 2026 года
        * Уведомление о принятии: до 20 февраля 2026 года
        * Публикация программы: 1 марта 2026 года
      `,
    
        // Events section
        "event-1": "Выставка книг",
        "event-2": "Выставка онлайн-курсов",
        "event-3": "Выставка оборудования для онлайн обучения",
        "event-4": "Компании по AI",
        
        // Certificates section
        "certificates-content": "Все участники конференции получат электронные сертификаты участия. Ссылка для скачивания сертификатов будет размещена на сайте конференции.",

	  // Спикеры
  "speaker-1-name": "Рэйчел Синг-и-Тан",
  "speaker-1-desc": "Руководитель программы, преподаватель, научный сотрудник, Университет INTI International, Малайзия",
  "speaker-2-name": "Андрей Комиссаров",
  "speaker-2-desc": "Chief AI Officer корпорации \"Синергия\" и ведущий консультант по ИИ в образовании Сбер Университета",
  "speaker-3-name": "Исабаева Даража Нагашыбаевна",
  "speaker-3-desc": "Кандидат педагогических наук, и.о. профессора. Директор Управления онлайн-образования AlmaU.",
  "speaker-4-name": "Кристоф Феньвеши",
  "speaker-4-desc": "Исследователь STEAM-образования, директор Bridges Organization и др.",
  "speaker-5-name": "Эзза Мад Багури",
  "speaker-5-desc": "Старший преподаватель, Международный университет INTI, Малайзия.",
  "speaker-6-name": "Уалий Хусей",
  "speaker-6-desc": "Эксперт-ментор для EdTech-проектов и центров оценки, специализирующийся на системном масштабировании в контексте образовательных реформ на Кавказе и в Центральной Азии.",
  "speaker-7-name": "Элис Шанти",
  "speaker-7-desc": "PhD Адъюнкт-профессор Филиал Технологического университета МАРA (UiTM) в штате Негери-Сембилан Кампус Серембан 70300 Негери-Сембилан Малайзия",
  "show-more-speakers": "Показать больше",
  "show-less-speakers": "Показать меньше",

        
        // Registration section
        "registration-title": "РЕГИСТРАЦИЯ",
        "registration-subtitle": "Заполните форму ниже для участия в конференции",
        "form-name": "ФИО *",
        "form-email": "Email *",
        "form-phone": "Телефон",
        "form-country": "Страна",
        "form-organization": "Организация / Университет *",
        //"form-role": "Роль *",
        "form-role-placeholder": "Выберите роль",
        "form-role-participant": "Участник",
        "form-role-speaker": "Докладчик",
        "form-role-student": "Студент",
        "form-role-teacher": "Преподаватель",
        "form-format": "Формат участия *",
        "form-format-placeholder": "Выберите формат",
        "form-format-online": "Онлайн",
        "form-format-offline": "Офлайн",
        "form-topic": "Тема доклада *",
        "form-topic-hint": "Пожалуйста, укажите тему вашего выступления",
        "form-comments": "Дополнительные комментарии",
        "submit-btn": "Зарегистрироваться",
        "submit-loading": "Отправка...",
	 // Новые переводы для регистрации
        "registration-info": "Для участия в конференции необходимо заполнить регистрационную форму. В процессе регистрации укажите:",
        "reg-req-1": "категорию участия: участник без доклада или участник с докладом;",
        "reg-req-2": "статус участника: обучающийся, преподаватель, представитель компании.",
        
        "form-category": "Категория участия *",
        "form-category-placeholder": "Выберите категорию",
        "form-category-no-report": "Участник без доклада",
        "form-category-with-report": "Участник с докладом",
        
        "form-status": "Статус участника *",
        "form-status-placeholder": "Выберите статус",
        "form-status-student": "Обучающийся",
        "form-status-teacher": "Преподаватель",
        "form-status-company": "Представитель компании",
        
        // Обновите существующие
        "form-role": "Статус участника *", // или удалите, если используете form-status
        // ...       
 
        // Contacts section
        "contacts-title": "Контакты",
        "contacts-text1": "📍 Адрес: г. Алматы, ул. Розыбакиева, 227, кабинет 253",
        "contacts-text2": "📱 Телефон: +7 701 761 9108",
        "contacts-text3": "📧 decai@almau.edu.kz",
        "contacts-text4": "🌐 almau.edu.kz",
        
        // Footer
        "footer-text": "© Организаторы — AlmaU",
        
        // Show more button
        "show-more-speakers": "Показать больше"
    },

    en: {
        "nav-about": "About Conference",
        "nav-program": "Topics",
        "nav-speakers": "Speakers",
        "nav-contacts": "Contacts",
        
        "hero-desc": "International Scientific and Practical Conference",
        "hero-title": "Digitalization of Education in the Era of AI",
        "hero-meta": "📅 Almaty, Kazakhstan March 18, 2026",
        "register-btn": "Register",
        "hero-cta": "View Program",
        
        "nav-conf": "The conference aims to create an international platform for sharing best practices in digitalization and AI application in higher education. The conference priorities are to determine the impact of AI and digital technologies on the quality of education and university management, strengthen cooperation between science, government and EdTech business, discuss modern methods with an emphasis on ethics and data security, and determine directions for the development of teachers' digital competencies.",
        
        "knowledge-btn": "KNOWLEDGE FROM PRACTITIONERS",
        "leaders-btn": "NETWORKING WITH LEADERS",
        "trends-btn": "LATEST TRENDS AND TECHNOLOGIES",
        "tools-btn": "PRACTICE-TESTED TOOLS",
        "program-btn": "CONFERENCE PROGRAM",
        "key-directions-btn": "KEY DIRECTIONS",
        "dates-btn": "IMPORTANT DATES",
        "payment-btn": "PAYMENT DETAILS",
        "publication-btn": "PUBLICATION REQUIREMENTS",
        "events-btn": "EVENTS",
        "certificates-btn": "CERTIFICATES",
        
        "knowledge-content": "Sessions are conducted by experienced specialists with real cases and recommendations. The program is divided into sections - you choose those that best suit your tasks.",
        "leaders-content": "Networking with experts, investors, EdTech partners and like-minded people. Expand your contact network and find new opportunities for cooperation.",
        "trends-content": "Study of effective and innovative digitalization and AI tools that will help improve teaching, management and project development methods.",
        "tools-content": "Participants will be able to test solutions and jointly implement a sample mini-project with discussion of each step - from problem statement to result.",
        "program-content": "Detailed conference program.",
        
        "direction-1-title": "1. Artificial Intelligence in Education",
        "direction-1-1": "Personalized learning pathways and automated assessment",
        "direction-1-2": "Adaptive interaction tools, learner engagement monitoring, and feedback",
        "direction-1-3": "Ethics, transparency, and security of AI applications in education",
        
        "direction-2-title": "2. Predictive Analytics and Machine Learning in Pedagogy",
        "direction-2-1": "Forecasting academic performance and learning outcome dynamics",
        "direction-2-2": "Models for automatic adaptation of educational content and learning materials",
        "direction-2-3": "Practical case studies on the implementation of ML technologies in educational environments",
        
        "direction-3-title": "3. Data-Driven Decision Support Systems",
        "direction-3-1": "Management decision-making based on the analysis of educational data",
        "direction-3-2": "Learning analytics for adjusting and improving instructional design",
        "direction-3-3": "Integration of heterogeneous data into a unified educational ecosystem",
        
        "direction-4-title": "4. Virtual and Augmented Reality",
        "direction-4-1": "The impact of VR/AR on learner engagement and the quality of knowledge acquisition",
        "direction-4-2": "Methodologies for developing VR/AR content and educational applications",
        
        "direction-5-title": "5. Transformation of Distance and Hybrid Learning",
        "direction-5-1": "Instructional design of effective online and blended learning models",
        "direction-5-2": "Development of synchronous and asynchronous communication as a means of building active learning communities",
        "direction-5-3": "Methods for verification and ensuring academic integrity in distance learning formats",
        "direction-5-4": "Development of educators' digital competencies in AI-supported educational environments",
        
        "direction-6-title": "6. Cybersecurity in Educational Technologies",
        "direction-6-1": "Protection of learners' data and privacy",
        "direction-6-2": "Cybersecurity threats to educational organizations",
        "direction-6-3": "Methodological guidelines for developing secure EdTech solutions",
        
        "direction-7-title": "7. Teaching Programming and Computational Thinking",
        "direction-7-1": "Integration of programming into higher education curricula",
        "direction-7-2": "Development of computational thinking as a tool for solving applied problems",
        
        "date-1": "Submission of applications and materials: until February 15, 2026",
        "date-2": "Notification of acceptance: until February 20, 2026",
        "date-3": "Program publication: March 1, 2026",
        
        "payment-text-1": "For inquiries regarding publication and submissions, please contact the Organizing Committee. A registration fee of 10,000 KZT (20 USD) is payable to the bank account of Almaty Management University:",
        "payment-details": "Payment Details: Educational Institution \"Almaty Management University\" RNN 600400079841, KBE 18 BIN 971240001583 IBAN (KZT): KZ406017131000053681 IBAN (USD): KZ336017131000057687 JSC \"Halyk Bank of Kazakhstan\" BIC: HSBKKZKX 050060, Almaty, Rozybakiev St., 227",
        "payment-instructions": "The payment receipt must indicate: participant's full name; for participation in the conference \"Digital Education in the Era of Artificial Intelligence\". Please send a scanned copy of the receipt to: decai@almau.edu.kz",
        



    // New text for publication block 
 "publication-btn": "PUBLICATION REQUIREMENTS",
    "publication-text-1": `
      Publication of Materials and Certificates
      An electronic proceedings volume will be published by the opening of the conference and sent to participants' email addresses provided during registration.
      Manuscripts submitted for publication must be formatted according to the following requirements:
    `,
    "publication-requirements": `
      General Requirements:
      
        Length: no more than 5 pages, A4 format, MS Word file in .docx format.
        Text originality: at least 75% (Anti-Plagiarism or equivalent services).
        The manuscript must not have been previously published.
      
    `,
    "formatting-params": `
      Manuscript Parameters:
      
        Font: Times New Roman, 12 pt
        Line spacing: 1.0
        Margins: 2.0 cm on all sides
        First-line paragraph indent: 0.5 cm
        Figures and tables must have captions and references in the text
        Pages must not be numbered
      
    `,
    "article-structure": `
      The manuscript must contain the following elements:
      
        
          Title (no more than 10 words, reflecting the main idea of the research)
        
        
          Author Information (specified for each author separately):
          Surname Name Patronymic¹, Surname Name Patronymic², ...
          ¹ Academic degree, academic title, department, university (written in full), city, country
          ² Position, place of employment, city, country
          *E-mail: author1@email.com; author2@email.com
        
        
          Abstract (Аңдатпа, Abstract) in Russian, Kazakh, and English. The abstract should be informative and concise (150 words), reflecting the purpose, methods, results, and main conclusions of the research, without abbreviations, references, or formulas.
        
        
          Keywords and phrases («Ключевые слова:», «Түйін сөздер:», «Keywords:» at least 5)
        
        
          Main Text containing the essential elements (according to the IMRAD format):
          I. Introduction (Relevance, problem, purpose, objectives, significance)
          II. Literature Review (Analysis of sources, gaps, justification of the research)
          III. Methodology (Design, sample, data collection and analysis methods, ethics)
          IV. Results and Discussion (Presentation of data, interpretation, novelty)
          V. Conclusion (Conclusions, significance, prospects)
        
        
          Acknowledgements (to be indicated if there are grants, projects, or support from colleagues)
        
        
          References (in IEEE format)
          Numbers are assigned in the order of the first mention of the source in the text in square brackets. DOI (Digital Object Identifier) is mandatory for articles.
          Examples:
          [1] Author A.A., Author B.B. Title of the article // Journal Title. Year. Vol. No., Pp. ХХ–ХХ.
          [2] Author V.V. Title of the book. — City: Publisher, Year.
          [3] Author C.C. Paper title // Conference Proceedings. City, Year, pp. 100–105.
        
      
    `,
    "peer-review-delivery": `
      All materials undergo peer review by the editorial board.
      Submission email for articles: deai.almau.edu.kz
      All participants will receive electronic certificates of participation.
    `,
    "important-dates-updated": `
      Important Dates:
      
        * Submission of applications and materials: until February 15, 2026
        * Notification of acceptance: until February 20, 2026
        * Program publication: March 1, 2026
      
    `,

  
        "event-1": "Book exhibition",
        "event-2": "Online courses exhibition",
        "event-3": "Online learning equipment exhibition",
        "event-4": "AI companies",
        
        "certificates-content": "All conference participants will receive electronic certificates of participation. The link for downloading the certificates will be posted on the conference website.",

// ... другие переводы
  "speaker-1-name": "Rachel Sing-Yee Tan",
  "speaker-1-desc": "Program Leader, Lecturer, Researcher, INTI International University, Malaysia",
  "speaker-2-name": "Andrey Komissarov",
  "speaker-2-desc": "Chief AI Officer of 'Synergy' Corporation and Leading AI Consultant in Education at Sber University",
  "speaker-3-name": "Isabayeva Darazha Nagashybayevna",
  "speaker-3-desc": "PhD in Education (Candidate of Pedagogical Sciences), Acting Professor. Director of the Online Education Department at AlmaU.",
  "speaker-4-name": "Christoph Fenyvesi",
  "speaker-4-desc": "Researcher in STEAM Education,Director of Bridges Organization, etc.",
  "speaker-5-name": "Ezza Mad Baguri",
  "speaker-5-desc": "Senior Lecturer, INTI International University, Malaysia",
  "speaker-6-name": "Vali Huseyn",
  "speaker-6-desc": "Expert-mentor for EdTech projects and assessment centers, specializing in systemic scaling in the context of educational reforms in the Caucasus and Central Asia.",

  "speaker-7-name": "Alice Shanthi",
  "speaker-7-desc": "PhD Associate Professor UiTM Negeri Sembilan Branch Seremban Campus 70300 Negeri Sembilan Malaysia",
  "show-more-speakers": "Show more",
"show-less-speakers": "Show less",
  // ... другие переводы

        
        "registration-title": "REGISTRATION",
        "registration-subtitle": "Fill out the form below to participate in the conference",
        "form-name": "Full Name *",
        "form-email": "Email *",
        "form-phone": "Phone",
        "form-country": "Country",
        "form-organization": "Organization / University *",
        "form-role": "Role *",
        "form-role-placeholder": "Select role",
        "form-role-participant": "Participant",
        "form-role-speaker": "Speaker",
        "form-role-student": "Student",
        "form-role-teacher": "Teacher",
        "form-format": "Participation Format *",
        "form-format-placeholder": "Select format",
        "form-format-online": "Online",
        "form-format-offline": "Offline",
        "form-topic": "Presentation Topic *",
        "form-topic-hint": "Please specify the topic of your presentation",
        "form-comments": "Additional comments",
        "submit-btn": "Register",
        "submit-loading": "Sending...",

	 "registration-info": "To participate in the conference, you must complete the registration form. During registration, please indicate:",
        "reg-req-1": "participation category: participant without presentation or participant with presentation;",
        "reg-req-2": "participant status: student, teacher, company representative.",
        
        "form-category": "Participation Category *",
        "form-category-placeholder": "Select category",
        "form-category-no-report": "Participant without presentation",
        "form-category-with-report": "Participant with presentation",
        
        "form-status": "Participant Status *",
        "form-status-placeholder": "Select status",
        "form-status-student": "Student",
        "form-status-teacher": "Teacher",
        "form-status-company": "Company Representative",
        
        "contacts-title": "Contacts",
        "contacts-text1": "📍 Address: Almaty, Rozybakieva st., 227, office 253",
        "contacts-text2": "📱 Phone: +7 701 761 9108",
        "contacts-text3": "📧 decai@almau.edu.kz",
        "contacts-text4": "🌐 almau.edu.kz",
        
        "footer-text": "© Organizers — AlmaU",
        
        "show-more-speakers": "Show more"
    },

    kz: {
        "nav-about": "КОНФЕРЕНЦИЯ ТУРАЛЫ",
        "nav-program": "ТАҚЫРЫПТАР",
        "nav-speakers": "СПИКЕРЛЕР",
        "nav-contacts": "БАЙЛАНЫСТАР",
        
        "hero-desc": "Халықаралық ғылыми-тәжірибелік конференция",
        "hero-title": "Жасанды интеллект дәуіріндегі цифрлық білім",
        "hero-meta": "📅 Алматы, Қазақстан 18 наурыз 2026",
        "register-btn": "Тіркелу",
        "hero-cta": "Бағдарламаны білу",
        
        "nav-conf": "Конференция жоғары білім берудегі цифрландыру және ЖИ қолдану саласында алға қойылған тәжірибені алмасу үшін халықаралық алаң құруды көздейді. Конференцияның басымдықтары: ЖИ мен цифрлық технологиялардың оқыту сапасына және жоғары оқу орындарын басқаруға әсерін анықтау, ғылым, мемлекет және EdTech-бизнес арасындағы ынтымақтастықты нығайту, этика мен деректер қауіпсіздігіне назар аударып, заманауи әдістерді талқылау, сондай-ақ оқытушылардың цифрлық құзыреттіліктерін дамыту бағыттарын анықтау.",
        
        "knowledge-btn": "ТӘЖІРИБЕШІЛЕРДІҢ БІЛІМІ",
        "leaders-btn": "КӨШБАСШЫЛАРМЕН ӨЗАРА ІС-ӘРЕКЕТ",
        "trends-btn": "СОҢҒЫ ТРЕНДТЕР МЕН ТЕХНОЛОГИЯЛАР",
        "tools-btn": "ТӘЖІРИБЕДЕ СЫНАЛҒАН ҚҰРАЛДАР",
        "program-btn": "КОНФЕРЕНЦИЯ БАҒДАРЛАМАСЫ",
        "key-directions-btn": "НЕГІЗГІ БАҒЫТТАР",
        "dates-btn": "НЕГІЗГІ МЕРЗІМДЕР",
        "payment-btn": "ТӨЛЕМ ЖАСАУҒА АРНАЛҒАН ДЕРЕКТЕМЕЛЕР",
        "publication-btn": "ЖАРИЯЛАУ ТАЛАПТАРЫ",
        "events-btn": "ІС-ШАРАЛАР",
        "certificates-btn": "СЕРТИФИКАТТАР",
        
        "knowledge-content": "Сессияларды нақты істер мен ұсыныстары бар тәжірибелі мамандар жүргізеді. Бағдарлама бөлімдерге бөлінген — сіз өз міндеттеріңізге ең қолайлы болғандарын таңдайсыз.",
        "leaders-content": "Сарапшылар, инвесторлар, EdTech-серіктестер мен бір ойлы адамдармен танысу. Байланыс желісін кеңейтіп, ынтымақтастықтың жаңа мүмкіндіктерін табыңыз.",
        "trends-content": "Оқыту, басқару және жобаларды дамыту әдістерін жақсартуға көмектесетін тиімді және инновациялық цифрландыру және ЖИ құралдарын зерттеу.",
        "tools-content": "Қатысушылар шешімдерді сынап, мәселе қоюдан нәтижеге дейінгі әр қадамды талқылау арқылы үлгілік мини-жобаны бірлесіп орындай алады.",
        "program-content": "Конференцияның егжей-тегжейлі бағдарламасы.",
        
        "direction-1-title": "1. Білім берудегі жасанды интеллект",
        "direction-1-1": "Дербестендірілген оқыту траекториялары және бағалауды автоматтандыру",
        "direction-1-2": "Өзара әрекеттесудің бейімделмелі құралдары, білім алушылардың белсенділігін мониторингтеу және кері байланыс",
        "direction-1-3": "Білім беруде жасанды интеллектті қолданудың этикасы, ашықтығы және қауіпсіздігі",
        
        "direction-2-title": "2. Педагогикадағы предиктивті аналитика және машиналық оқыту",
        "direction-2-1": "Оқу үлгерімін және білім нәтижелерінің динамикасын болжау",
        "direction-2-2": "Оқу контенті мен білім беру материалдарын автоматты түрде бейімдеуге арналған модельдер",
        "direction-2-3": "Білім беру ортасында ML-технологияларды енгізудің практикалық кейстері",
        
        "direction-3-title": "3. Деректерге негізделген шешім қабылдауды қолдау жүйелері",
        "direction-3-1": "Білім беру деректерін талдау негізінде басқарушылық шешімдер қабылдау",
        "direction-3-2": "Педагогикалық дизайнды түзетуге арналған білім беру аналитикасы",
        "direction-3-3": "Әртүрлі деректерді бірыңғай білім беру экожүйесіне интеграциялау",
        
        "direction-4-title": "4. Виртуалды және толықтырылған шынайылық",
        "direction-4-1": "VR/AR технологияларының білім алушылардың қызығушылығы мен оқу материалын меңгеру сапасына әсері",
        "direction-4-2": "VR/AR контенті мен білім беру қосымшаларын әзірлеу әдіснамасы",
        
        "direction-5-title": "5. Қашықтан және гибридті оқытуды трансформациялау",
        "direction-5-1": "Тиімді онлайн және аралас оқыту модельдерінің педагогикалық дизайны",
        "direction-5-2": "Белсенді оқу қауымдастығын қалыптастыру құралы ретінде синхронды және асинхронды коммуникацияларды дамыту",
        "direction-5-3": "Қашықтан оқыту форматында академиялық адалдықты тексеру және қамтамасыз ету әдістері",
        "direction-5-4": "ЖИ-қолдауы бар білім беру орталарында педагогтердің цифрлық құзыреттерін дамыту",
        
        "direction-6-title": "6. Білім беру технологияларындағы киберқауіпсіздік",
        "direction-6-1": "Білім алушылардың деректері мен құпиялылығын қорғау",
        "direction-6-2": "Білім беру ұйымдары үшін киберқауіпсіздік қатерлері",
        "direction-6-3": "Қауіпсіз EdTech-шешімдерді әзірлеуге арналған әдістемелік ұсынымдар",
        
        "direction-7-title": "7. Бағдарламалау және есептеуіш ойлауды оқыту",
        "direction-7-1": "Бағдарламалауды жоғары білім беру бағдарламаларына интеграциялау",
        "direction-7-2": "Қолданбалы міндеттерді шешу құралы ретінде есептеуіш ойлауды дамыту",
        
        "date-1": "Өтінімдер мен материалдарды қабылдау: 2026 жылғы 15 ақпанға дейін",
        "date-2": "Қабылдау туралы хабарлама: 2026 жылғы 20 ақпанға дейін",
        "date-3": "Бағдарламаны жариялау: 2026 жылғы 1 наурыз",
        
        "payment-text-1": "Жарияланымдар, өтінімдер қабылдау және баяндамалар бойынша сұрақтармен конференцияның Ұйымдастыру комитетіне хабарласуға болады. 10 000 теңге (20 АҚШ доллары) мөлшеріндегі тіркеу жарнасы Алматы Менеджмент Университетінің есеп айырысу шотына аударылады:",
        "payment-details": "Төлем жасауға арналған деректемелер: «Алматы Менеджмент Университеті» ББМ РНН 600400079841, КБЕ 18 БИН 971240001583 ИИК: KZ406017131000053681 (теңге) KZ336017131000057687 (USD) «Қазақстан Халық Банкі» АҚ БИК: HSBKKZKX 050060, Алматы қ., Розыбакиев көш., 227",
        "payment-instructions": "Төлем түбіртегінде міндетті түрде: конференция қатысушысының ТАӘ; «Жасанды интеллект дәуіріндегі цифрлық білім беру» конференциясына қатысу үшін деген белгі көрсетілуі тиіс. Түбіртектің электрондық көшірмесін келесі электрондық поштаға жіберу қажет: decai@almau.edu.kz",
        
       



    // Новый текст для блока публикации 
"publication-btn": "ЖАРИЯЛАУ ТАЛАПТАРЫ",
    "publication-text-1": `
      Материалдарды жариялау және сертификаттар
      Конференцияның ашылуына дейін материалдардың электрондық жинағы дайындалып, тіркелу кезінде көрсетілген электрондық поштаға жіберіледі.
      Жариялауға жіберілетін мақалалар келесі талаптарға сәйкес рәсімделуі тиіс:
    `,
    "publication-requirements": `
      Негізгі талаптар:
      
        Көлемі 5 беттен аспайды, A4 форматы, MS Word файлы (.docx форматында).
        Мәтіннің түпнұсқалығы 75% -дан кем емес (Антиплагиат немесе басқа сервистер).
        Мақала бұрын жарияланбаған болуы тиіс.
      
    `,
    "formatting-params": `
      Мақала параметрлері:
      
        Қаріп: Times New Roman, 12 pt
        Жоларалық интервал: 1,0
        Барлық өрістер: 2,0 см
        Абзацтың бірінші жолының шегінісі: 0,5 см
        Суреттер мен кестелер атаулары және мәтіндегі сілтемелерімен рәсімделуі тиіс
        Мақала беттері нөмірленбейді
      
    `,
    "article-structure": `
      Мақала келесі элементтерді қамтуы тиіс:
      
        
          Тақырыбы (10 сөзден аспайды, зерттеудің негізгі идеясын көрсетуі керек)
        
        
          Авторлар туралы ақпарат (әр автор үшін жеке көрсетіледі):
          Тегі Аты Әкесінің аты¹, Тегі Аты Әкесінің аты², ...
          ¹ Ғылыми дәреже, ғылыми атақ, кафедра, университет (қысқартпаларсыз толық жазылуы), қала, ел
          ² Қызметі, жұмыс орны, қала, ел
          *E-mail: author1@email.com; author2@email.com
        
        
          Аннотация (Аңдатпа, Abstract) орыс, қазақ, ағылшын тілдерінде. Аннотация ақпаратты және қысқа болуы керек (150 сөз), зерттеудің мақсатын, әдістерін, нәтижелерін және негізгі қорытындыларын көрсетуі керек, қысқартпаларсыз, сілтемелерсіз, формулаларсыз.
        
        
          Түйін сөздер және сөз тіркестері («Ключевые слова:», «Түйін сөздер:», «Keywords:» кемінде 5)
        
        
          Мақаланың мәтіні негізгі элементтерді қамтиды (IMRAD форматы бойынша):
          I. Кіріспе (Өзектілігі, проблема, мақсат, міндеттер, маңыздылығы)
          II. Әдебиетке шолу (Дереккөздерді талдау, қажеттіліктер, зерттеуді негіздеу)
          III. Әдіснама (Дизайн, таңдау, деректерді жинау және талдау әдістері, этика)
          IV. Нәтижелер және талқылау (Деректерді ұсыну, түсіндіру, жаңалық)
          V. Қорытынды (Қорытындылар, маңыздылығы, перспективалар)
        
        
          Алғыс (гранттар, жобалар, әріптестердің қолдауы болған жағдайда көрсетіледі)
        
        
          Пайдаланылған әдебиеттер тізімі (IEEE форматында)
          Нөмірлер мәтіндегі алғашқы айтылу реті бойынша тік жақшаларда беріледі. Мақалалар үшін DOI (Digital Object Identifier) міндетті.
          Мысалдар:
          [1] Автор А.А., Автор Б.Б. Мақаланың тақырыбы // Журнал атауы. Жыл. Т. №, Б. ХХ–ХХ.
          [2] Автор В.В. Кітап атауы. — Қала: Баспа, Жыл.
          [3] Author C.C. Paper title // Conference Proceedings. City, Year, pp. 100–105.
        
      
    `,
    "peer-review-delivery": `
      Материалдар редакциялық алқаның рецензиялауынан өтеді.
      Мақалаларды жіберу электрондық поштасы: deai.almau.edu.kz
      Барлық қатысушылар қатысу сертификаттарын алады.
    `,
    "important-dates-updated": `
      Маңызды мерзімдер:
      
        * Өтінімдер мен материалдарды қабылдау: 2026 жылғы 15 ақпанға дейін
        * Қабылдау туралы хабарлама: 2026 жылғы 20 ақпанға дейін
        * Бағдарламаны жариялау: 2026 жылғы 1 наурыз
          `,




   
        "event-1": "Кітап көрмесі",
        "event-2": "Онлайн-курстар көрмесі",
        "event-3": "Онлайн оқыту жабдықтары көрмесі",
        "event-4": "ЖИ компаниялары",
        
        "certificates-content": "Конференцияның барлық қатысушыларына электрондық қатысу сертификаттары беріледі. Сертификаттарды жүктеп алу сілтемесі конференцияның сайтында орналастырылады.",

	 // ... другие переводы
  "speaker-1-name": "Рэйчел Синг-и-Тан",
  "speaker-1-desc": "Бағдарлама көшбасшысы, оқытушы, ғылыми қызметкер, INTI International University, Малайзия",
  "speaker-2-name": "Андрей Комиссаров",
  "speaker-2-desc": "\"Синергия\"«Синергия» корпорациясының Chief AI Officer-і,Сбер Университетінің білім берудегі жасанды интеллект жөніндегі жетекші кеңесшісі",
  "speaker-3-name": "Исабаева Даража Нағашыбайқызы",
  "speaker-3-desc": "Педагогика ғылымдарының кандидаты, профессор м.а. AlmaU Онлайн білім беру басқармасының директоры.",
  "speaker-4-name": "Кристоф Феньвеши",
  "speaker-4-desc": "STEAM білім беру саласының зерттеушісі, Bridges Organization директоры және т.б.",
  "speaker-5-name": "Эзза Мад Багури",
  "speaker-5-desc": "Аға оқытушы, INTI International University, Малайзия",
  "speaker-6-name": "Уалий Хусей",
  "speaker-6-desc": "EdTech жобалары мен бағалау орталықтары үшін сарапшы-ментор, Кавказ және Орталық Азиядағы білім беру реформалары аясында жүйелік масштабтауға маманданған.",
"speaker-7-name": "Элис Шанти",
"speaker-7-desc": "PhD Қауымдастырылған профессор (Доцент) МАРA Технологиялық университетінің (UiTM) Негери-Сембилан штатындағы филиалы Серембан кампусы 70300 Негери-Сембилан Малайзия",
  "show-more-speakers": "Тағы көрсету",
  "show-less-speakers": "Азырақ көрсету",
  // ... другие переводы

        
        "registration-title": "ТІРКЕЛУ",
        "registration-subtitle": "Конференцияға қатысу үшін төмендегі форманы толтырыңыз",
        "form-name": "Аты-жөні *",
        "form-email": "Email *",
        "form-phone": "Телефон",
        "form-country": "Ел",
        "form-organization": "Ұйым / Университет *",
        "form-role": "Рөл *",
        "form-role-placeholder": "Рөлді таңдаңыз",
        "form-role-participant": "Қатысушы",
        "form-role-speaker": "Баяндамашы",
        "form-role-student": "Студент",
        "form-role-teacher": "Оқытушы",
        "form-format": "Қатысу форматы *",
        "form-format-placeholder": "Форматты таңдаңыз",
        "form-format-online": "Онлайн",
        "form-format-offline": "Офлайн",
        "form-topic": "Баяндама тақырыбы *",
        "form-topic-hint": "Өз баяндамаңыздың тақырыбын көрсетіңіз",
        "form-comments": "Қосымша түсініктемелер",
        "submit-btn": "Тіркелу",
        "submit-loading": "Жіберілуде...",

	"registration-info": "Конференцияға қатысу үшін тіркеу формасын толтыру қажет. Тіркеу процесінде мынаны көрсетіңіз:",
        "reg-req-1": "қатысу санаты: баяндамасыз қатысушы немесе баяндамасы бар қатысушы;",
        "reg-req-2": "қатысушы статусы: оқушы, оқытушы, компания өкілі.",
        
        "form-category": "Қатысу санаты *",
        "form-category-placeholder": "Санатты таңдаңыз",
        "form-category-no-report": "Баяндамасыз қатысушы",
        "form-category-with-report": "Баяндамасы бар қатысушы",
        
        "form-status": "Қатысушы статусы *",
        "form-status-placeholder": "Статусты таңдаңыз",
        "form-status-student": "Оқушы",
        "form-status-teacher": "Оқытушы",
        "form-status-company": "Компания өкілі",
        
        "contacts-title": "Байланыстар",
        "contacts-text1": "📍 Мекен-жайы: Алматы қ., Розыбакиева көш., 227, 253 кабинет",
        "contacts-text2": "📱 Телефон: +7 701 761 9108",
        "contacts-text3": "📧 decai@almau.edu.kz",
        "contacts-text4": "🌐 almau.edu.kz",
        
        "footer-text": "© Ұйымдастырушылар — AlmaU",
        
        "show-more-speakers": "Көбірек көрсету"
    }
};



let currentLang = "ru";

// --------------------- Смена языка ----------------------
function changeLanguage(lang) {
    if (!translations[lang]) return;

    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll(".lang-btn").forEach(btn => {
        const active = btn.getAttribute("data-lang") === lang;
        btn.setAttribute("aria-selected", active);
        btn.style.background = active ? "#fff" : "transparent";
        btn.style.color = active ? "#0b63d8" : "#fff";
        btn.style.fontWeight = active ? "700" : "600";
    });

    localStorage.setItem("preferred-language", lang);
}

// --------------------- Сообщения формы ----------------------
function showFormMessage(message, type = "success") {
    const container = document.getElementById("form-messages");
    if (!container) return;

    container.innerHTML = `<div class="${type === "success" ? "message-success" : "message-error"}">${message}</div>`;

    container.scrollIntoView({ behavior: "smooth", block: "center" });

    if (type === "success") {
        setTimeout(() => (container.innerHTML = ""), 5000);
    }
}


// --------------------- Основной код ----------------------
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM загружен");
    
    // Установить язык
    const savedLang = localStorage.getItem("preferred-language") || "ru";
    changeLanguage(savedLang);

    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", e => {
            e.preventDefault();
            changeLanguage(btn.getAttribute("data-lang"));
        });
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(a.getAttribute("href"));
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Форма регистрации - ВНУТРИ DOMContentLoaded
    const form = document.getElementById("registration-form");
    const topicField = document.getElementById("topic-field");
    const categorySelect = document.getElementById("category");

    // Для отладки
    console.log("1. Форма регистрации:", form);
    console.log("2. Поле category:", categorySelect);
    console.log("3. Поле topic-field:", topicField);
    
    // Проверяем, существует ли поле topic в HTML
    const topicInput = document.getElementById("topic");
    console.log("4. Input topic:", topicInput);

    // Проверяем, что элементы существуют перед добавлением обработчиков
    if (categorySelect && topicField) {
        console.log("Элементы category и topic-field найдены, добавляю обработчики");
        
        categorySelect.addEventListener("change", () => {
            console.log("Событие change на categorySelect");
            
            // Получаем текущий язык для корректного сравнения
            const currentLang = localStorage.getItem("preferred-language") || "ru";
            const withReportText = translations[currentLang] ? translations[currentLang]["form-category-with-report"] : "Участник с докладом";

            console.log("Category selected:", categorySelect.value);
            console.log("Expected value for with report:", withReportText);

            if (categorySelect.value === withReportText) {
                console.log("Показываем поле темы доклада");
                topicField.style.display = "block";
                if (topicInput) {
                    topicInput.required = true;
                    console.log("Поле topic теперь обязательно");
                }
            } else {
                console.log("Скрываем поле темы доклада");
                topicField.style.display = "none";
                if (topicInput) {
                    topicInput.required = false;
                    console.log("Поле topic теперь не обязательно");
                }
            }
        });
        
        // Инициализируем состояние при загрузке
        console.log("Инициализация состояния при загрузке");
        const currentLang = localStorage.getItem("preferred-language") || "ru";
        const withReportText = translations[currentLang] ? translations[currentLang]["form-category-with-report"] : "Участник с докладом";
        
        if (categorySelect.value === withReportText) {
            topicField.style.display = "block";
            if (topicInput) topicInput.required = true;
        } else {
            topicField.style.display = "none";
            if (topicInput) topicInput.required = false;
        }
    } else {
        console.warn("Не найдены элементы category или topic-field");
        console.warn("categorySelect:", categorySelect);
        console.warn("topicField:", topicField);
    }

    if (form) {
        console.log("Форма найдена, добавляю обработчик submit");
        
        form.addEventListener("submit", async e => {
            e.preventDefault();
            console.log("Форма отправляется");

            const btn = form.querySelector('button[type="submit"]');
            const btnText = btn ? btn.querySelector(".btn-text") : null;
            const btnLoad = btn ? btn.querySelector(".btn-loading") : null;

            if (btn) {
                btn.disabled = true;
                if (btnText) btnText.style.display = "none";
                if (btnLoad) btnLoad.style.display = "inline";
            }

            const formData = new FormData(form);

            // Для отладки - выводим отправляемые данные
            console.log("Отправляемые данные формы:");
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }

            try {
                const res = await fetch("register.php", {
                    method: "POST",
                    body: formData
                });

                console.log("Статус ответа:", res.status, res.statusText);

                // сначала проверяем статус ответа
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status} - ${res.statusText}`);
                }

                // Пробуем получить ответ как текст
                const text = await res.text();
                console.log("Ответ от сервера:", text);

                if (text === "success") {
                    showFormMessage(translations[currentLang]["form-success"] || "Спасибо за регистрацию!", "success");
                    form.reset();
                    
                    // Скрываем поле темы доклада после сброса
                    if (topicField) {
                        console.log("Скрываем topicField после успешной отправки");
                        topicField.style.display = "none";
                    }

                    // Сбрасываем обязательность поля темы
                    if (topicInput) {
                        topicInput.required = false;
                        console.log("Сброшена обязательность поля topic");
                    }
                } else if (text === "error:missing_fields") {
                    showFormMessage(translations[currentLang]["form-missing-fields"] || "Заполните все обязательные поля", "error");
                } else if (text === "error:send_failed") {
                    showFormMessage(translations[currentLang]["form-error"] || "Ошибка отправки", "error");
                } else {
                    // Если ответ не распознан, показываем как есть
                    showFormMessage(translations[currentLang]["form-error"] || "Ошибка: " + text, "error");
                }

            } catch (error) {
                console.error("Ошибка при отправке:", error);
                showFormMessage(
                    translations[currentLang]["form-network-error"] || "Ошибка сети. Пожалуйста, попробуйте позже.",
                    "error"
                );
            } finally {
                if (btn) {
                    btn.disabled = false;
                    if (btnText) btnText.style.display = "inline";
                    if (btnLoad) btnLoad.style.display = "none";
                }
            }
        });
    } else {
        console.warn("Форма registration-form не найдена");
        console.warn("Проверьте HTML: есть ли элемент с id='registration-form'");
    }

    // Show more speakers
    const showMoreBtn = document.getElementById("show-more-speakers");
    const extraCards = document.querySelectorAll("#speakers-list .addl");
    let expanded = false;

    if (showMoreBtn) {
        showMoreBtn.addEventListener("click", () => {
            expanded = !expanded;
            extraCards.forEach(c => {
                if (c) c.style.display = expanded ? "block" : "none";
            });
            showMoreBtn.textContent = expanded ? "Показать меньше" : "Показать больше";
        });
    }

    // Toggle info blocks
    document.querySelectorAll(".info-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            if (content && content.classList.contains("info-content")) {
                content.style.display = content.style.display === "block" ? "none" : "block";
                btn.classList.toggle("active");
            }
        });
    });
});

// Обеспечиваем глобальную доступность функции changeLanguage
window.changeLanguage = changeLanguage;

