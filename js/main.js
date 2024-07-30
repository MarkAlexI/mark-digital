'use strict';

const messages = {
  en: {
    "dropdown.en": 'English',
    "dropdown.ua": 'Ukrainian',
    "about.welcome": "Welcome to Mark Digital!",
    "about.description": "We specialize in developing innovative web extensions and software. Our goal is to provide you with useful tools to improve your digital experience.",
    "about.productsTitle": "Our products",
    "about.productsDescription1": "We offer both free and paid solutions. Check out our web extensions available on ",
    "about.productsDescription2": " and ",
    "about.productsDescription3": ". Your donations through ",
    "about.productsDescription4": " will help us create even more useful products.",
    "about.teamTitle": "Our team",
    "about.teamDescription": "We are currently focused on developing and improving our products. Soon you will learn more about our team and our plans for the future.",
    "about.contactsTitle": "Contacts",
    "about.contactsDescription": "Stay connected for all the news and updates. For more information, you can contact us via email or social media.",
    "addons.title": "What are web extensions?",
    "addons.description": "Web extensions are small software modules that add functionality to your web browser. They can modify the interface, add new features, or integrate other services.",
    "addons.benefitsTitle": "How are web extensions useful?",
    "addons.benefit1": "Enhance the usability of the browser.",
    "addons.benefit2": "Add new features that make working on the internet easier.",
    "addons.benefit3": "Integration with other web services and platforms.",
    "addons.benefit4": "Ability to personalize the browser to your needs.",
    "addons.customAddonsTitle": "Custom web extensions",
    "addons.customAddonsDescription1": "If you need a unique web extension for your business or personal needs, we can create it to order. We have experience in developing browser applications and are ready to help you realize your ideas.",
    "addons.customAddonsDescription2": "Contact us using the details at the bottom of the page to discuss your project.",
    "addons.exampleAddonTitle": "Example Add-on",
    "addons.exampleAddonDescription": "One of our most popular add-ons is",
    "getjoke.title": "Get Joke Extension",
    "getjoke.description1": "Integration with the web service",
    "getjoke.description2": "Get random jokes for a good mood.",
    "getjoke.screenshot": "Screenshot:",
    "getjoke.tryApi": "Try API:",
    "getjoke.getJokeButton": "Get a Joke",
    "getjoke.downloadFirefox": "Download for Firefox",
    "getjoke.downloadChrome": "Download for Chrome",
    "getjoke.error": "An error occurred while fetching the joke. Please try again later.",
    "privacy.title": "Privacy Policy",
    "privacy.intro": "1. Introduction",
    "privacy.introContent": "This privacy policy describes how we collect, use, and protect your data when using our applications. We respect your privacy and are committed to protecting your personal information.",
    "privacy.collection": "2. Information Collection",
    "privacy.collectionContent": "We do not collect any personal information when using our applications. The add-ons operate locally on your device and do not transmit any data to our servers or third parties.",
    "privacy.usage": "3. Information Usage",
    "privacy.usageContent": "Since we do not collect personal information, we have no way to use it in any manner.",
    "privacy.security": "4. Security",
    "privacy.securityContent": "We take appropriate measures to protect your information. The applications do not require access to your personal data or other confidential information.",
    "privacy.thirdParties": "5. Interaction with Third Parties",
    "privacy.thirdPartiesContent": "Our applications do not interact with any third-party companies. All features work autonomously on your device.",
    "privacy.changes": "6. Changes to the Privacy Policy",
    "privacy.changesContent": "We may update this privacy policy from time to time. All changes will be posted on this page. We recommend periodically reviewing this page to stay informed about any changes.",
    "privacy.contacts": "7. Contacts",
    "privacy.contactsContent": "If you have any questions regarding this privacy policy, please contact us using the following details:",
    "privacy.email": "Email",
    "privacy.website": "Website",
    "offer.title": "Public Offer Agreement",
    "offer.intro": "This Agreement is a public offer (proposal) by individual proprietor Oleksandr Ivanovych Markov (hereinafter referred to as the 'Provider'), addressed to any individual or legal entity willing to use the services or purchase goods offered by the Provider through the website.",
    "offer.generalProvisions": "1. General Provisions",
    "offer.generalProvisionsContent1": "1.1. This Agreement is concluded between the Provider and the User.",
    "offer.generalProvisionsContent2": "1.2. The Agreement is an official document and is published on the Provider's website.",
    "offer.generalProvisionsContent3": "1.3. The User confirms that they are acquainted with the terms of this Agreement and accept them by using the services or purchasing the goods offered on the website.",
    "offer.termsDefinitions": "2. Terms and Definitions",
    "offer.termsDefinitionsContent1": "2.1. 'User' means any individual or legal entity who has accepted the terms of this Agreement and uses the services or goods offered on the website.",
    "offer.termsDefinitionsContent2": "2.2. 'Services' means any services provided by the Provider through the website.",
    "offer.termsDefinitionsContent3": "2.3. 'Goods' means any digital products offered for sale by the Provider through the website.",
    "offer.rightsDutiesParties": "3. Rights and Duties of the Parties",
    "offer.rightsDutiesProvider": "3.1. Rights and Duties of the Provider:",
    "offer.rightsDutiesProviderContent1": "3.1.1. Provide the User with access to the Services and Goods in accordance with the terms of this Agreement.",
    "offer.rightsDutiesProviderContent2": "3.1.2. Inform the User of changes in the terms of provision of Services and Goods.",
    "offer.rightsDutiesProviderContent3": "3.1.3. Ensure the confidentiality of the User's personal data in accordance with the Privacy Policy.",
    "offer.rightsDutiesUser": "3.2. Rights and Duties of the User:",
    "offer.rightsDutiesUserContent1": "3.2.1. Use the Services and Goods in accordance with the terms of this Agreement.",
    "offer.rightsDutiesUserContent2": "3.2.2. Pay for the Services and Goods in accordance with the terms of this Agreement.",
    "offer.rightsDutiesUserContent3": "3.2.3. Not distribute or use the Goods for illegal purposes.",
    "offer.paymentProcedure": "4. Payment Procedure",
    "offer.paymentProcedureContent1": "4.1. Payment for Services and Goods is made by the User by transferring funds to the Provider's account specified on the website, or through payment systems indicated on the website.",
    "offer.paymentProcedureContent2": "4.2. Settlements between the parties are made in the national currency of Ukraine (hryvnia). If necessary, payment can be made in another currency in accordance with the terms of a separate agreement.",
    "offer.paymentProcedureContent3": "4.3. All costs associated with the transfer of funds are borne by the User.",
    "offer.paymentProcedureContent4": "4.4. Donations are voluntary and do not oblige the Provider to provide additional services or goods other than those already specified in the Agreement.",
    "offer.liabilityParties": "5. Liability of the Parties",
    "offer.liabilityPartiesContent1": "5.1. For failure or improper performance of obligations under this Agreement, the parties are liable in accordance with the current legislation of Ukraine.",
    "offer.liabilityPartiesContent2": "5.2. The Provider is not responsible for any damage that may arise for the User as a result of using web extensions and related programs.",
    "offer.liabilityPartiesContent3": "5.3. The User is responsible for complying with the laws of their country when using the Provider's web extensions and related programs.",
    "offer.liabilityPartiesContent4": "5.4. The Provider is not responsible for failure or improper performance of obligations under this Agreement if it was caused by force majeure circumstances, such as war, riots, natural disasters, fires, strikes, actions of public authorities, etc.",
    "offer.concludingProvisions": "6. Concluding Provisions",
    "offer.concludingProvisionsContent1": "6.1. The Agreement comes into force from the moment of its acceptance by the User and is valid until the parties have fully fulfilled their obligations.",
    "offer.concludingProvisionsContent2": "6.2. All disputes arising in connection with the execution of this Agreement are resolved through negotiations between the parties.",
    "offer.concludingProvisionsContent3": "6.3. If an agreement cannot be reached, the dispute is submitted to the court in accordance with the current legislation of Ukraine.",
    "offer.concludingProvisionsContent4": "6.4. This agreement is drawn up in Ukrainian. For international users, a translation of this Agreement into English may be provided. In case of discrepancies between the Ukrainian and English versions of the Agreement, the Ukrainian version takes precedence.",
    "offer.concludingProvisionsContent5": "6.5. All changes and additions to this Agreement are valid only if they are made in writing and signed by both parties or published by the Provider on the official website.",
    "offer.providerDetails": "7. Provider Details",
    "offer.providerDetailsContent1": "Individual Proprietor Oleksandr Ivanovych Markov",
    "offer.providerDetailsContent2": "TIN: 3157117350",
    "offer.providerDetailsContent3": "Registration No.: 2010350000000602837 dated 22.07.2024",
    "offer.providerDetailsContent4": "IBAN: UA623052990000026006050592532",
    "offer.providerDetailsContent5": "Single tax payer of the 3rd group, rate 5%. Not a VAT payer",
    "offer.providerDetailsContent6": "Address: Ukraine, 52800, Dnipropetrovsk region, Synelnykivskyi district, Pershotravensk city, Ukrainska street, house 18",
    "offer.providerDetailsContent7": "Email: ",
    "page404.notFound": 'Page Not Found',
    "page404.info": 'Return on main page',
    "page404.back": 'Go Home',
    "header.home": "Home",
    "header.addons": "Add-ons",
    "header.getJoke": "Get Joke Extension",
    "header.privacy": "Privacy Policy",
    "header.offer": "Public Offer Agreement",
    "footer.name": "Individual Proprietor Markov Oleksandr Ivanovych",
    "footer.email": "Email",
    "footer.copyright": "Mark Digital © 2024"
  },
  ua: {
    "dropdown.en": 'Англійська',
    "dropdown.ua": 'Українська',
    "about.welcome": "Вітаємо на Mark Digital!",
    "about.description": "Ми спеціалізуємось на розробці інноваційних веб-розширень та програмного забезпечення. Наша мета - забезпечити вас корисними інструментами для покращення вашого цифрового досвіду.",
    "about.productsTitle": "Наші продукти",
    "about.productsDescription1": "Ми пропонуємо як безкоштовні, так і платні рішення. Ознайомтесь із нашими веб-розширеннями, доступними в ",
    "about.productsDescription2": " та ",
    "about.productsDescription3": ". Ваші донати через ",
    "about.productsDescription4": " допоможуть нам створювати ще більше корисних продуктів.",
    "about.teamTitle": "Наша команда",
    "about.teamDescription": "В даний момент ми зосереджені на розробці та вдосконаленні наших продуктів. Скоро ви дізнаєтеся більше про нашу команду та наші плани на майбутнє.",
    "about.contactsTitle": "Контакти",
    "about.contactsDescription": "Залишайтеся на зв’язку, щоб бути в курсі всіх новин та оновлень. Для отримання додаткової інформації ви можете звернутися до нас через електронну пошту або соціальні мережі.",
    "addons.title": "Що таке веб-розширення?",
    "addons.description": "Веб-розширення - це невеликі програмні модулі, які додають функціональність вашому веб-браузеру. Вони можуть змінювати інтерфейс, додавати нові можливості або інтегрувати інші сервіси.",
    "addons.benefitsTitle": "Чим корисні веб-розширення?",
    "addons.benefit1": "Покращують зручність використання браузера.",
    "addons.benefit2": "Додають нові функції, що полегшують роботу в інтернеті.",
    "addons.benefit3": "Інтеграція з іншими веб-сервісами та платформами.",
    "addons.benefit4": "Можливість персоналізації браузера під свої потреби.",
    "addons.customAddonsTitle": "Створення веб-розширень під замовлення",
    "addons.customAddonsDescription1": "Якщо вам потрібно унікальне веб-розширення для вашого бізнесу чи особистих потреб, ми можемо створити його під замовлення. Маємо досвід у розробці додатків для браузерів та готові допомогти вам реалізувати ваші ідеї.",
    "addons.customAddonsDescription2": "Зв'яжіться з нами за контактними даними внизу сторінки для обговорення вашого проекту.",
    "addons.exampleAddonTitle": "Приклад адд-ону",
    "addons.exampleAddonDescription": "Один з наших найпопулярніших адд-онів -",
    "getjoke.title": "Get Joke Extension",
    "getjoke.description1": "Інтеграція з веб-сервісом",
    "getjoke.description2": "Отримання рандомних мемів для гарного настрою.",
    "getjoke.screenshot": "Скріншот:",
    "getjoke.tryApi": "Спробувати API:",
    "getjoke.getJokeButton": "Отримати жарт",
    "getjoke.downloadFirefox": "Скачати для Firefox",
    "getjoke.downloadChrome": "Скачати для Chrome",
    "getjoke.error": "Виникла помилка при отриманні жарту. Спробуйте ще раз пізніше.",
    "privacy.title": "Політика конфіденційності",
    "privacy.intro": "1. Вступ",
    "privacy.introContent": "Ця політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо ваші дані при використанні додатків. Ми поважаємо вашу приватність і зобов'язуємося захищати вашу особисту інформацію.",
    "privacy.collection": "2. Збір інформації",
    "privacy.collectionContent": "Ми не збираємо ніякої особистої інформації при використанні нашого додатків. Адд-они працюють локально на вашому пристрої та не передають жодних даних на наші сервери або третім сторонам.",
    "privacy.usage": "3. Використання інформації",
    "privacy.usageContent": "Оскільки ми не збираємо особисту інформацію, ми не маємо можливості використовувати її в будь-який спосіб.",
    "privacy.security": "4. Безпека",
    "privacy.securityContent": "Ми приймаємо відповідні заходи для захисту вашої інформації. Додатки не вимагають доступу до ваших особистих даних або інших конфіденційних інформацій.",
    "privacy.thirdParties": "5. Взаємодія з третіми сторонами",
    "privacy.thirdPartiesContent": "Наші додатки не взаємодіють з жодними сторонніми компаніями. Всі функції працюють автономно на вашому пристрої.",
    "privacy.changes": "6. Зміни до політики конфіденційності",
    "privacy.changesContent": "Ми можемо час від часу оновлювати цю політику конфіденційності. Всі зміни будуть публікуватися на цій сторінці. Ми рекомендуємо періодично переглядати цю сторінку, щоб бути в курсі будь-яких змін.",
    "privacy.contacts": "7. Контакти",
    "privacy.contactsContent": "Якщо у вас виникли питання щодо цієї політики конфіденційності, будь ласка, зв'яжіться з нами за наступними контактами:",
    "privacy.email": "Ел. пошта",
    "privacy.website": "Веб-сайт",
    "offer.title": "Договір публічної оферти",
    "offer.intro": "Цей Договір є публічною офертою (пропозицією) ФОП Марков Олександр Іванович (далі - 'Виконавець'), адресованою будь-якій фізичній або юридичній особі, яка виявила бажання скористатися послугами або придбати товари, що пропонуються Виконавцем через веб-сайт.",
    "offer.generalProvisions": "1. Загальні положення",
    "offer.generalProvisionsContent1": "1.1. Цей Договір укладається між Виконавцем та Користувачем.",
    "offer.generalProvisionsContent2": "1.2. Договір є офіційним документом і публікується на веб-сайті Виконавця.",
    "offer.generalProvisionsContent3": "1.3. Користувач підтверджує, що ознайомлений з умовами цього Договору та приймає їх шляхом використання послуг або придбання товарів, що пропонуються на веб-сайті.",
    "offer.termsDefinitions": "2. Терміни та визначення",
    "offer.termsDefinitionsContent1": "2.1. 'Користувач' - будь-яка фізична або юридична особа, яка прийняла умови цього Договору та користується послугами або товарами, що пропонуються на веб-сайті.",
    "offer.termsDefinitionsContent2": "2.2. 'Послуги' - будь-які послуги, що надаються Виконавцем через веб-сайт.",
    "offer.termsDefinitionsContent3": "2.3. 'Товари' - будь-які цифрові продукти, що пропонуються для продажу Виконавцем через веб-сайт.",
    "offer.rightsDutiesParties": "3. Права та обов'язки сторін",
    "offer.rightsDutiesProvider": "3.1. Права та обов'язки Виконавця:",
    "offer.rightsDutiesProviderContent1": "3.1.1. Надавати Користувачу доступ до Послуг та Товарів згідно з умовами цього Договору.",
    "offer.rightsDutiesProviderContent2": "3.1.2. Інформувати Користувача про зміни в умовах надання Послуг та Товарів.",
    "offer.rightsDutiesProviderContent3": "3.1.3. Забезпечити конфіденційність персональних даних Користувача згідно з Політикою конфіденційності.",
    "offer.rightsDutiesUser": "3.2. Права та обов'язки Користувача:",
    "offer.rightsDutiesUserContent1": "3.2.1. Використовувати Послуги та Товари згідно з умовами цього Договору.",
    "offer.rightsDutiesUserContent2": "3.2.2. Оплачувати Послуги та Товари згідно з умовами цього Договору.",
    "offer.rightsDutiesUserContent3": "3.2.3. Не розповсюджувати та не використовувати Товари для незаконних цілей.",
    "offer.paymentProcedure": "4. Порядок оплати",
    "offer.paymentProcedureContent1": "4.1. Оплата Послуг та Товарів здійснюється Користувачем шляхом перерахування грошових коштів на рахунок Виконавця, зазначений на веб-сайті, або через платіжні системи, вказані на веб-сайті.",
    "offer.paymentProcedureContent2": "4.2. Розрахунки між сторонами здійснюються в національній валюті України (гривня). У разі потреби, оплата може здійснюватися в іншій валюті згідно з умовами окремої угоди.",
    "offer.paymentProcedureContent3": "4.3. Усі витрати, пов'язані з переказом грошових коштів, несе Користувач.",
    "offer.paymentProcedureContent4": "4.4. Донати є добровільними та не зобов'язують Виконавця надавати додаткові послуги чи товари, окрім тих, що вже зазначені у Договорі.",
    "offer.liabilityParties": "5. Відповідальність сторін",
    "offer.liabilityPartiesContent1": "5.1. За невиконання або неналежне виконання зобов'язань за цим Договором сторони несуть відповідальність згідно з чинним законодавством України.",
    "offer.liabilityPartiesContent2": "5.2. Виконавець не несе відповідальності за будь-які збитки, що можуть виникнути у Користувача в результаті використання веб-розширень та супутніх програм.",
    "offer.liabilityPartiesContent3": "5.3. Користувач несе відповідальність за дотримання законодавства своєї країни при використанні веб-розширень та супутніх програм Виконавця.",
    "offer.liabilityPartiesContent4": "5.4. Виконавець не несе відповідальності за невиконання або неналежне виконання обов'язків за цим Договором, якщо це було спричинено дією обставин непереборної сили (форс-мажор), таких як війна, заколоти, природні катастрофи, пожежі, страйки, дії органів державної влади, тощо.",
    "offer.concludingProvisions": "6. Заключні положення",
    "offer.concludingProvisionsContent1": "6.1. Договір набирає чинності з моменту його акцепту Користувачем та діє до повного виконання зобов'язань сторонами.",
    "offer.concludingProvisionsContent2": "6.2. Усі спори, що виникають у зв'язку з виконанням цього Договору, вирішуються шляхом переговорів між сторонами.",
    "offer.concludingProvisionsContent3": "6.3. У разі неможливості досягнення згоди спір передається на розгляд до суду згідно з чинним законодавством України.",
    "offer.concludingProvisionsContent4": "6.4. Цей договір складено українською мовою. Для міжнародних користувачів може бути надано переклад цього Договору англійською мовою. У разі розбіжностей між україномовною та англомовною версіями Договору перевагу має україномовна версія.",
    "offer.concludingProvisionsContent5": "6.5. Усі зміни та доповнення до цього Договору дійсні лише в разі, якщо вони оформлені в письмовій формі та підписані обома сторонами або опубліковані Виконавцем на офіційному веб-сайті.",
    "offer.providerDetails": "7. Реквізити Виконавця",
    "offer.providerDetailsContent1": "ФОП Марков Олександр Іванович",
    "offer.providerDetailsContent2": "ІПН: 3157117350",
    "offer.providerDetailsContent3": "Реєстр.№: 2010350000000602837 від 22.07.2024",
    "offer.providerDetailsContent4": "IBAN: UA623052990000026006050592532",
    "offer.providerDetailsContent5": "Платник єдиного податку 3 група, ставка 5%. Не є платником ПДВ",
    "offer.providerDetailsContent6": "Адреса: Україна, 52800, Дніпропетровська обл., Синельниківський р - н, місто Першотравенськ, вулиця Українська, будинок 18",
    "offer.providerDetailsContent7": "Ел. пошта: ",
    "page404.notFound": 'Сторінку не знайдено',
    "page404.info": 'Повернутись на головну сторінку',
    "page404.back": 'На головну',
    "header.home": "Головна",
    "header.addons": "Адд-они",
    "header.getJoke": "Get Joke Extension",
    "header.privacy": "Політика конфіденційності",
    "header.offer": "Договір публічної оферти",
    "footer.name": "ФОП Марков Олександр Іванович",
    "footer.email": "Ел. пошта",
    "footer.copyright": "Mark Digital © 2024"
  }
};

const i18n = VueI18n.createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages,
});

const About = {
  template: `
  <section class="intro">
    <div class="container">
      <h1>{{ $t("about.welcome") }}</h1>
      <p>{{ $t("about.description") }}</p>
      
      <h2>{{ $t("about.productsTitle") }}</h2>
      <p>{{ $t("about.productsDescription1") }}<a href="https://chrome.google.com/webstore" target="_blank">Chrome Web Store</a>{{ $t("about.productsDescription2") }}<a href="https://amo.mozilla.org" target="_blank">AMO</a>{{ $t("about.productsDescription3") }}<a href="https://www.buymeacoffee.com" target="_blank">Buy Me a Coffee</a>{{ $t("about.productsDescription4") }}</p>
      
      <h2>{{ $t("about.teamTitle") }}</h2>
      <p>{{ $t("about.teamDescription") }}</p>
      
      <h2>{{ $t("about.contactsTitle") }}</h2>
      <p>{{ $t("about.contactsDescription") }}</p>
    </div>
  </section>`,
  methods: {
    sendMail() {
      window.open('mailto: mark.digital.net.100@gmail.com?subject=Vacancy&body=How do you do');
    },
  },
  mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push('/' + path);
    } else {
      this.$router.push({ path: '/' });
    }
  }
};


const Addons = {
  data() { return {} },
  template: `
    <section class="addons">
      <div class="container">
        <section class="about-addons">
          <h1>{{ $t("addons.title") }}</h1>
          <p>{{ $t("addons.description") }}</p>
        </section>
        <section class="benefits">
          <h2>{{ $t("addons.benefitsTitle") }}</h2>
          <ul>
            <li>{{ $t("addons.benefit1") }}</li>
            <li>{{ $t("addons.benefit2") }}</li>
            <li>{{ $t("addons.benefit3") }}</li>
            <li>{{ $t("addons.benefit4") }}</li>
          </ul>
        </section>
        <section class="custom-addons">
          <h2>{{ $t("addons.customAddonsTitle") }}</h2>
          <p>{{ $t("addons.customAddonsDescription1") }}</p>
          <p>{{ $t("addons.customAddonsDescription2") }}</p>
        </section>
        <section class="example-addon">
          <h2>{{ $t("addons.exampleAddonTitle") }}</h2>
          <p>{{ $t("addons.exampleAddonDescription") }} <router-link to="/getjoke">Get Joke Extension</router-link>.</p>
        </section>
      </div>
    </section>
  `
};

const GetJoke = {
  data() {
    return {
      joke: '',
    };
  },
  methods: {
    getJoke() {
      fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
        .then(response => response.json())
        .then(data => {
          if (data.type === 'single') {
            this.joke = data.joke;
          } else {
            this.joke = `${data.setup} <br> ${data.delivery}`;
          }
        })
        .catch(error => {
          this.joke = this.$t("getjoke.error");
          console.error('Error fetching joke:', error);
        });
    }
  },
  template: `
    <section class="joke-extension">
      <div class="container">
        <h1>{{ $t("getjoke.title") }}</h1>
        <p>{{ $t("getjoke.description1") }} <a href="https://v2.jokeapi.dev">JokeAPI</a>.</p>
        <p>{{ $t("getjoke.description2") }}</p>
        <br>
        <p>{{ $t("getjoke.screenshot") }}</p>
        <img src="../images/getjoke.png" alt="getjoke.png">
        <br>
        <p>{{ $t("getjoke.tryApi") }}</p>
        <button @click="getJoke">{{ $t("getjoke.getJokeButton") }}</button>
        <div v-if="joke" id="joke-display" v-html="joke"></div>
        <div class="download-buttons">
          <a href="https://addons.mozilla.org/firefox/addon/getjoke" class="download-btn">{{ $t("getjoke.downloadFirefox") }}</a>
          <a href="https://chrome.google.com/webstore/detail/get-joke-extension" class="download-btn">{{ $t("getjoke.downloadChrome") }}</a>
        </div>
      </div>
    </section>
  `
};

const Privacy = {
  template: `
    <section class="privacy-policy">
      <div class="container">
        <h1>{{ $t("privacy.title") }}</h1>
        <h2>{{ $t("privacy.intro") }}</h2>
        <p>{{ $t("privacy.introContent") }}</p>
        <h2>{{ $t("privacy.collection") }}</h2>
        <p>{{ $t("privacy.collectionContent") }}</p>
        <h2>{{ $t("privacy.usage") }}</h2>
        <p>{{ $t("privacy.usageContent") }}</p>
        <h2>{{ $t("privacy.security") }}</h2>
        <p>{{ $t("privacy.securityContent") }}</p>
        <h2>{{ $t("privacy.thirdParties") }}</h2>
        <p>{{ $t("privacy.thirdPartiesContent") }}</p>
        <h2>{{ $t("privacy.changes") }}</h2>
        <p>{{ $t("privacy.changesContent") }}</p>
        <h2>{{ $t("privacy.contacts") }}</h2>
        <p>{{ $t("privacy.contactsContent") }}</p>
        <p>{{ $t("privacy.email") }}: <a href="mailto:mark-digital.net.100@gmail.com">mark-digital.net.100@gmail.com</a></p>
        <p>{{ $t("privacy.website") }}: <router-link to="/">mark-digital.space</router-link></p>
      </div>
    </section>
  `
};

const Offer = {
  template: `
     <section class="offer">
       <div class="container">
            <h1>{{ $t("offer.title") }}</h1>
            <p>{{ $t("offer.intro") }}</p>

            <h2>{{ $t("offer.generalProvisions") }}</h2>
            <p>{{ $t("offer.generalProvisionsContent1") }}</p>
            <p>{{ $t("offer.generalProvisionsContent2") }}</p>
            <p>{{ $t("offer.generalProvisionsContent3") }}</p>

            <h2>{{ $t("offer.termsDefinitions") }}</h2>
            <p>{{ $t("offer.termsDefinitionsContent1") }}</p>
            <p>{{ $t("offer.termsDefinitionsContent2") }}</p>
            <p>{{ $t("offer.termsDefinitionsContent3") }}</p>

            <h2>{{ $t("offer.rightsDutiesParties") }}</h2>
            <h3>{{ $t("offer.rightsDutiesProvider") }}</h3>
            <ul>
                <li>{{ $t("offer.rightsDutiesProviderContent1") }}</li>
                <li>{{ $t("offer.rightsDutiesProviderContent2") }}</li>
                <li>{{ $t("offer.rightsDutiesProviderContent3") }}</li>
            </ul>

            <h3>{{ $t("offer.rightsDutiesUser") }}</h3>
            <ul>
                <li>{{ $t("offer.rightsDutiesUserContent1") }}</li>
                <li>{{ $t("offer.rightsDutiesUserContent2") }}</li>
                <li>{{ $t("offer.rightsDutiesUserContent3") }}</li>
            </ul>

            <h2>{{ $t("offer.paymentProcedure") }}</h2>
            <p>{{ $t("offer.paymentProcedureContent1") }}</p>
            <p>{{ $t("offer.paymentProcedureContent2") }}</p>
            <p>{{ $t("offer.paymentProcedureContent3") }}</p>
            <p>{{ $t("offer.paymentProcedureContent4") }}</p>

            <h2>{{ $t("offer.liabilityParties") }}</h2>
            <p>{{ $t("offer.liabilityPartiesContent1") }}</p>
            <p>{{ $t("offer.liabilityPartiesContent2") }}</p>
            <p>{{ $t("offer.liabilityPartiesContent3") }}</p>
            <p>{{ $t("offer.liabilityPartiesContent4") }}</p>

            <h2>{{ $t("offer.concludingProvisions") }}</h2>
            <p>{{ $t("offer.concludingProvisionsContent1") }}</p>
            <p>{{ $t("offer.concludingProvisionsContent2") }}</p>
            <p>{{ $t("offer.concludingProvisionsContent3") }}</p>
            <p>{{ $t("offer.concludingProvisionsContent4") }}</p>
            <p>{{ $t("offer.concludingProvisionsContent5") }}</p>

            <h2>{{ $t("offer.providerDetails") }}</h2>
            <p><span>{{ $t("offer.providerDetailsContent1") }}</span></p>
            <p>{{ $t("offer.providerDetailsContent2") }}</p>
            <p>{{ $t("offer.providerDetailsContent3") }}</p>
            <p><span>{{ $t("offer.providerDetailsContent4") }}</span></p>
            <p>{{ $t("offer.providerDetailsContent5") }}</p>
            <p>{{ $t("offer.providerDetailsContent6") }}</p>
            <p>{{ $t("offer.providerDetailsContent7") }}<a href="mailto:mark.digital.net.100@gmail.com">mark.digital.net.100@gmail.com</a></p>
          </div>
        </section>`
};

const NotFound = {
  template: `<section>
    <div class="container">
      <h2>{{ $t("page404.notFound") }}</h2>
      <p>{{ $t("page404.info") }}</p>
      <router-link to="/">&lt; {{ $t("page404.back") }} &gt;</router-link>
    </div>
  </section>`
};

const routes = [
  { path: '/', component: About },
  { path: '/addons', component: Addons },
  { path: '/getjoke', component: GetJoke },
  { path: '/privacy', component: Privacy },
  { path: '/offer', component: Offer },
  { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = Vue.createApp({
  data() {
    return {

    }
  },
});

app.component('my-header', {
  data() {
    return {};
  },
  methods: {},
  template: `
    <section class="header">
      <header>
        <nav>
          <ul>
            <li><router-link to="/">{{ $t("header.home") }}</router-link></li>
            <li><router-link to="/addons">{{ $t("header.addons") }}</router-link></li>
            <li><router-link to="/getjoke">{{ $t("header.getJoke") }}</router-link></li>
            <li><router-link to="/privacy">{{ $t("header.privacy") }}</router-link></li>
            <li><router-link to="/offer">{{ $t("header.offer") }}</router-link></li>
          </ul>
        </nav>
        <slot></slot>
      </header>
    </section>
  `
});

app.component('drop-down-langs', {
  data() {
    return {
      selectedLanguage: 'ua',
      isDropdownOpened: false
    }
  },
  template: `<div class="dropdown">
    <button class="dropdown__btn" @click="toggleDropdown">
      <img :src="myImageSource" :key="selectedLanguage" class="flag"/>
    </button>
    <transition>
      <div class="dropdown__menu" v-if="isDropdownOpened">
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'en' ? 'active' : ''" @click.prevent="changeLanguage('en')">
          <img src="/images/us.png" class="flag" /> {{ $t("dropdown.en") }}
        </a>
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'ua' ? 'active' : ''" @click.prevent="changeLanguage('ua')">
          <img src="/images/ua.png" class="flag" /> {{ $t("dropdown.ua") }}
        </a>
      </div>
    </transition>
  </div>`,
  computed: {
    myImageSource() {
      return this.selectedLanguage === 'en' ? '/images/us.png' : '/images/ua.png';
    }
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.selectedLanguage = locale;
      this.isDropdownOpened = false;
    },
    toggleDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened;

      setTimeout(() => this.isDropdownOpened = false, 3000);
    }
  }
});

app.component('my-footer', {
  template: `<footer>
    <p>{{ $t("footer.name") }}</p>
    <p>{{ $t("footer.email") }}: <a href="mailto:mark.digital.net.100@gmail.com">mark.digital.net.100@gmail.com</a></p>
    <p>{{ $t("footer.copyright") }}</p>
  </footer>`
});

app.use(router);
app.use(i18n);
app.mount('#app');
