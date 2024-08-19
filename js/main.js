import { getAnalytics, firebase, db, addDoc, collection, serverTimestamp } from './firebase-config.js';
import messages from './messages.js';

const mainLocale = (function() {
  return window.navigator.language == 'uk-UA' || window.navigator.language == 'ru-RU' ? 'ua' : 'en';
})();

const i18n = VueI18n.createI18n({
  legacy: false,
  locale: mainLocale,
  fallbackLocale: 'en',
  messages,
});

const AboutPage = {
  template: `
  <section class="intro">
    <div class="container">
      <h1>{{ $t("about.welcome") }}</h1>
      <p>{{ $t("about.description") }}</p>
      
      <h2>{{ $t("about.productsTitle") }}</h2>
      <p>{{ $t("about.productsDescription1") }}<a href="https://chrome.google.com/webstore/detail/gaefccmkkolgdkabjfekngcmagioflne" target="_blank">Chrome Web Store</a>{{ $t("about.productsDescription2") }}<a href="https://addons.mozilla.org/firefox/addon/getjoke" target="_blank">Addons Mozilla Org (AMO)</a>{{ $t("about.productsDescription3") }}</p>
      
      <h2>{{ $t("about.principlesTitle") }}</h2>
      <p>{{ $t("about.principlesDescription") }}</p>
      
      <h2>{{ $t("about.contactsTitle") }}</h2>
      <p>{{ $t("about.contactsDescription") }}</p>
    </div>
  </section>`,
  methods: {
    sendMail() {
      window.open('mailto: markdigital100@outlook.com?subject=Vacancy&body=How do you do');
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

const AddonsPage = {
  data() {
    return {

    }
  },
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
        <section class="order">
          <h2>{{ $t("addons.orderTitle") }}</h2>
          <p>{{ $t("addons.orderTime") }}</p>
          <p>{{ $t("addons.orderPrice") }}</p>
          <button class="submit-button" @click="openPopup">{{ $t("order.btnText") }}</button>
          <popup-form ref="popupForm"></popup-form>
        </section>
      </div>
    </section>
  `,
  methods: {
    openPopup() {
      this.$refs.popupForm.openPopup('addons');
    }
  }
};

const GetJokePage = {
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
    },
    openPopup() {
      this.$refs.popupForm.openPopup('getjoke');
    }
  },
  template: `
    <section class="joke-extension">
      <div class="container">
        <h1>{{ $t("getjoke.title") }}</h1>
        <p>{{ $t("getjoke.description1") }} <a href="https://v2.jokeapi.dev" target="_blank">JokeAPI</a>.</p>
        <p>{{ $t("getjoke.description2") }}</p>
        <br>
        <p>{{ $t("getjoke.screenshot") }}</p>
        <img src="../images/getjoke.png" alt="getjoke.png">
        <br>
        <p>{{ $t("getjoke.tryApi") }}</p>
        <button class="btn-api" @click="getJoke">{{ $t("getjoke.getJokeButton") }}</button>
        <div v-if="joke" id="joke-display" v-html="joke"></div>
        <div class="download-buttons">
          <a href="https://addons.mozilla.org/firefox/addon/getjoke" target="_blank" class="download-btn">{{ $t("getjoke.downloadFirefox") }}</a>
          <a href="https://chrome.google.com/webstore/detail/gaefccmkkolgdkabjfekngcmagioflne" target="_blank" class="download-btn">{{ $t("getjoke.downloadChrome") }}</a>
        </div>
        <section class="order">
          <h2>{{ $t("addons.orderTitle") }}</h2>
          <p>{{ $t("addons.orderTime") }}</p>
          <p>{{ $t("addons.orderPrice") }}</p>
          <button class="submit-button" @click="openPopup">{{ $t("order.btnText") }}</button>
          <popup-form ref="popupForm"></popup-form>
        </section>
      </div>
    </section>
  `
};

const WidgetPage = {
  data() {
    return {
      widgetScreenshot: '/images/widget.png',
      scriptElement: null
    }
  },
  template: `
    <section class="widget-page">
      <div class="container">
        <section class="about-widgets">
          <h1>{{ $t("widgets.title") }}</h1>
          <p>{{ $t("widgets.description") }}</p>
          <p>{{ $t("widgets.customWidgetText") }}</p>
        </section>
        <section class="widget-benefits">
          <h2>{{ $t("widgets.benefitsTitle") }}</h2>
          <ul>
            <li>{{ $t("widgets.benefit1") }}</li>
            <li>{{ $t("widgets.benefit2") }}</li>
            <li>{{ $t("widgets.benefit3") }}</li>
            <li>{{ $t("widgets.benefit4") }}</li>
          </ul>
        </section>
        <section class="practical-example">
          <h2>{{ $t("widgets.exampleTitle") }}</h2>
          <p>{{ $t("widgets.exampleDescription") }}</p>
          <img :src="widgetScreenshot" alt="Currencies Widget Screenshot">
          <a href="https://github.com/MarkAlexI/currenciesWidget" target="_blank">{{ $t("widgets.downloadLink") }}</a>
        </section>
        <section class="order">
          <h2>{{ $t("widgets.orderTitle") }}</h2>
          <p>{{ $t("widgets.orderTime") }}</p>
          <p>{{ $t("widgets.orderPrice") }}</p>
          <button class="submit-button" @click="openPopup">{{ $t("order.btnText") }}</button>
          <popup-form ref="popupForm"></popup-form>
        </section>
      </div>
    </section>
  `,
  methods: {
    openPopup() {
      this.$refs.popupForm.openPopup('widgets');
    }
  },
  mounted() {
    this.scriptElement = document.createElement('script');
    this.scriptElement.src = '/js/currenciesWidget.min.js';
    this.scriptElement.async = true;

    document.body.appendChild(this.scriptElement);
  },
  beforeUnmount() {
    if (this.scriptElement) {
      document.body.removeChild(this.scriptElement);
      this.scriptElement = null;
    }

    const currencyWidgetField = document.getElementById('currency_widget_field');
    if (currencyWidgetField) {
      const parentDiv = currencyWidgetField.closest('div');
      if (parentDiv && parentDiv.parentNode) {
        parentDiv.parentNode.removeChild(parentDiv);
      }
    }
  }
};

const WebsitesPage = {
  data() {
    return {
      converterScreenshot: '/images/converter.png',
      portfolioScreenshot: '/images/portfolio.png'
    };
  },
  template: `
    <section class="websites-page">
      <div class="container">
        <section class="intro">
          <h1>{{ $t("websites.title") }}</h1>
          <p>{{ $t("websites.description") }}</p>
        </section>
        <section class="examples">
          <h2>{{ $t("websites.examplesTitle") }}</h2>
          <div class="example">
            <h3>{{ $t("websites.converterTitle") }}</h3>
            <p>{{ $t("websites.converterDescription") }}</p>
            <img :src="converterScreenshot" alt="Converter Screenshot">
          </div>
          <div class="example">
            <h3>{{ $t("websites.portfolioTitle") }}</h3>
            <p>{{ $t("websites.portfolioDescription") }}</p>
            <img :src="portfolioScreenshot" alt="Portfolio Screenshot">
          </div>
        </section>
        <section class="benefits">
          <h2>{{ $t("websites.benefitsTitle") }}</h2>
          <ul>
            <li>{{ $t("websites.benefit1") }}</li>
            <li>{{ $t("websites.benefit2") }}</li>
            <li>{{ $t("websites.benefit3") }}</li>
            <li>{{ $t("websites.benefit4") }}</li>
          </ul>
        </section>
        <section class="contact">
          <h2>{{ $t("websites.contactTitle") }}</h2>
          <p>{{ $t("websites.contactDescription") }}</p>
        </section>
        <section class="order">
          <h2>{{ $t("websites.orderTitle") }}</h2>
          <p>{{ $t("websites.orderTime") }}</p>
          <p>{{ $t("websites.orderPrice") }}</p>
          <button class="submit-button" @click="openPopup">{{ $t("order.btnText") }}</button>
          <popup-form ref="popupForm"></popup-form>
        </section>
      </div>
    </section>
  `,
  methods: {
    openPopup() {
      this.$refs.popupForm.openPopup('websites');
    }
  }
};

const ServerTechnologiesPage = {
  data() {
    return {
      lykkeStoreScreenshot: '/images/lykke-store.png'
    };
  },
  template: `
    <section class="server-technologies-page">
      <div class="container">
        <section class="intro">
          <h1>{{ $t("serverTechnologies.title") }}</h1>
          <p>{{ $t("serverTechnologies.description") }}</p>
        </section>
        <section class="examples">
          <h2>{{ $t("serverTechnologies.examplesTitle") }}</h2>
          <div class="example">
            <h3>{{ $t("serverTechnologies.lykkeStoreTitle") }}</h3>
            <p>{{ $t("serverTechnologies.lykkeStoreDescription") }}</p>
            <img :src="lykkeStoreScreenshot" alt="Lykke Store Screenshot">
          </div>
        </section>
        <section class="skills">
          <h2>{{ $t("serverTechnologies.skillsTitle") }}</h2>
          <ul>
            <li>{{ $t("serverTechnologies.skillNode") }}</li>
            <li>{{ $t("serverTechnologies.skillMongoDB") }}</li>
            <li>{{ $t("serverTechnologies.skillSQLite3") }}</li>
            <li>{{ $t("serverTechnologies.skillPostgreSQL") }}</li>
          </ul>
        </section>
        <section class="contact">
          <h2>{{ $t("serverTechnologies.contactTitle") }}</h2>
          <p>{{ $t("serverTechnologies.contactDescription") }}</p>
        </section>
      </div>
    </section>
  `
};

const PrivacyPage = {
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
        <p>{{ $t("privacy.email") }}: <a href="mailto:markdigital100@outlook.com" target="_blank">markdigital100@outlook.com</a></p>
        <p>{{ $t("privacy.website") }}: <router-link to="/">mark-digital.space</router-link></p>
      </div>
    </section>
  `
};

const OfferPage = {
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
          <p><span>{{ $t("offer.providerDetailsContent5") }}</span></p>
          <p>{{ $t("offer.providerDetailsContent6") }}</p>
          <p>{{ $t("offer.providerDetailsContent7") }}</p>
          <p>{{ $t("offer.providerDetailsContent8") }}<a href="mailto:markdigital100@outlook.com" target="_blank">markdigital100@outlook.com</a></p>
        </div>
      </section>`
};

const NotFoundPage = {
  template: `<section>
    <div class="container">
      <h2>{{ $t("page404.notFound") }}</h2>
      <p>{{ $t("page404.info") }}</p>
      <router-link to="/">&lt; {{ $t("page404.back") }} &gt;</router-link>
    </div>
  </section>`
};

const routes = [
  { path: '/', component: AboutPage },
  { path: '/addons', component: AddonsPage },
  { path: '/getjoke', component: GetJokePage },
  { path: '/widgets', component: WidgetPage },
  { path: '/privacy', component: PrivacyPage },
  { path: '/offer', component: OfferPage },
  { path: '/websites', component: WebsitesPage },
  { path: '/server-technologies', component: ServerTechnologiesPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = Vue.createApp({
  provide() {
    return {
      mainLocale: this.mainLocale
    }
  },
  data() {
    return {
      mainLocale,
      db: null,
      addDoc: null,
      collection: null,
      serverTimestamp: null,
      firebaseReady: false
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
            <li><router-link to="/widgets">{{ $t("header.widgets") }}</router-link></li>
            <li><router-link to="/websites">{{ $t("header.websites") }}</router-link></li>
            <li><router-link to="/privacy">{{ $t("header.privacy") }}</router-link></li>
            <li><router-link to="/offer">{{ $t("header.offer") }}</router-link></li>
          </ul>
        </nav>
        <slot></slot>
      </header>
    </section>
  `
});

app.component('popup-form', {
  template: `
    <div v-if="isVisible" class="popup-overlay">
      <div class="popup-content">
        <button class="close-button" @click="closePopup">X</button>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <label for="name" class="label">{{ $t('popup.name') }}</label>
            <input type="text" id="name" v-model="name" required maxlength="100" :placeholder="$t('popup.name.placeholder')" class="input">
          </div>
          <div class="input-group">
            <label for="service" class="label">{{ $t('popup.target') }}</label>
            <input type="text" id="service" v-model="service" required maxlength="200" :placeholder="$t('popup.target.placeholder')" class="input">
          </div>
          <div class="input-group">
            <label for="email" class="label">{{ $t("popup.call") }}</label>
            <input type="email" id="email" v-model="email" required maxlength="100" placeholder="yourmail@gmail.com" class="input">
          </div>
          <div class="input-group">
            <label for="phone" class="label">{{ $t("popup.phone") }}</label>
            <input type="text" id="phone" v-model="phone" required maxlength="100" placeholder="+38(050)123-45-67" class="input">
          </div>
          <div class="button-container">
            <button type="submit" class="submit-button">
              <span>{{ $t("popup.submit") }}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  data() {
    return {
      isVisible: false,
      name: '',
      service: '',
      email: '',
      phone: '',
      component: ''
    };
  },
  methods: {
    openPopup(fromPage) {
      this.isVisible = true;
      this.fromPage = fromPage;
    },
    closePopup() {
      this.isVisible = false;
      this.fromPage = '';
    },
    async submitForm() {
      try {
        await addDoc(collection(db, 'requests'), {
          name: this.name,
          service: this.service,
          email: this.email,
          phone: this.phone,
          component: this.fromPage,
          timestamp: serverTimestamp()
        });

        alert('Form submitted successfully!');
        this.closePopup();
      } catch (error) {
        console.error('Error writing document: ', error);
        alert('Failed to submit form.');
      }
    }
  }
});

app.component('drop-down-langs', {
  inject: ['mainLocale'],
  data() {
    return {
      selectedLanguage: this.mainLocale,
      isDropdownOpened: false
    }
  },
  template: `<div class="dropdown">
    <button class="dropdown__btn" @click="toggleDropdown" aria-label="toggle dropdown" >
      <img :src="myImageSource" :key="selectedLanguage" class="flag" alt="image for language" />
    </button>
    <transition>
      <div class="dropdown__menu" v-if="isDropdownOpened">
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'en' ? 'active' : ''" @click.prevent="changeLanguage('en')">
          <img src="/images/us.png" class="flag" alt="USA flag" /> {{ $t("dropdown.en") }}
        </a>
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'ua' ? 'active' : ''" @click.prevent="changeLanguage('ua')">
          <img src="/images/ua.png" class="flag" alt="UA flag" /> {{ $t("dropdown.ua") }}
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

app.component('consent-banner', {
  data() {
    return {
      isVisibleBanner: false
    }
  },
  template: `
    <div v-if="isVisibleBanner" class="consent-banner">
      {{ $t("consent.text") }}
      <div>
        <a href="/privacy" target="_blank">{{ $t("consent.detail") }}</a>
        <button class="accept-button" @click="acceptCookies">{{ $t("consent.accept") }}</button>
      </div>
    </div>
  `,
  methods: {
    showCookieConsent() {
      this.isVisibleBanner = true;
    },
    initGoogleAnalytics() {
      this.analytics = getAnalytics(firebase);
    },
    acceptCookies() {
      document.cookie = "mark_digital_cookies_accepted=true; path=/; max-age=" + (60 * 60 * 24 * 365);
      this.isVisibleBanner = false;
    }
  },
  mounted() {
    if (!document.cookie.split('; ').find(row => row.startsWith('mark_digital_cookies_accepted'))) {
      this.showCookieConsent();
    } else {
      this.initGoogleAnalytics();
    }
  }
});

app.component('my-footer', {
  template: `
    <footer>
      <p>{{ $t("footer.name") }}</p>
      <p>{{ $t("footer.email") }}: <a href="mailto:markdigital100@outlook.com" target="_blank">markdigital100@outlook.com</a></p>
      <p>{{ $t("footer.copyright") }}</p>
    </footer>
  `
});

app.use(router);
app.use(i18n);
app.mount('#app');