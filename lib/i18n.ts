export type Locale = "cs" | "en";

export const translations = {
  cs: {
    nav: {
      home: "Domů",
      work: "Naše práce",
      barbers: "Barbeři",
      pricing: "Ceník",
      vouchers: "Dárkové poukazy",
      gallery: "Galerie",
      contact: "Kontakt",
      book: "REZERVOVAT",
    },
    hero: {
      headline: "UMĚNÍ SPRÁVNÉHO STŘIHU",
      subheadline: "Prémiový barbershop v srdci Prahy",
      cta: "REZERVOVAT TERMÍN",
      scrollDown: "Prohlédnout naši práci",
    },
    about: {
      sectionLabel: "Náš příběh",
      title: "Kde tradice potkává dokonalost",
      body: "JZP Barbershop vznikl z vášně pro řemeslo a touhy přinést do Prahy autentický zážitek prémiového holičství. Věříme, že správný střih není jen o vlasech — je to rituál, péče o sebe a okamžik, kdy se cítíte skutečně dobře.",
      body2: "Každý klient dostane individuální přístup. Naši barbeři kombinují klasické techniky s moderními trendy, vždy s důrazem na detail a kvalitu.",
      stat1Label: "Rok otevření",
      stat1Value: "2019",
      stat2Label: "Spokojených klientů",
      stat2Value: "4800+",
      stat3Label: "Experti",
      stat3Value: "4",
    },
    work: {
      sectionLabel: "Naše práce",
      title: "Výsledky mluví za vše",
      subtitle: "Posuňte slider a sledujte proměnu",
      galleryTitle: "Galerie prací",
    },
    barbers: {
      sectionLabel: "Tým",
      title: "Vaši barbeři",
      bookWith: "Rezervovat u",
      instagram: "Instagram",
      members: [
        {
          name: "Jakub Z.",
          role: "Zakladatel & Head Barber",
          specialty: "Fade | Klasické střihy | Holení",
          instagram: "@jzp_jakub",
        },
        {
          name: "Pavel M.",
          role: "Senior Barber",
          specialty: "Textured cuts | Beard design",
          instagram: "@jzp_pavel",
        },
        {
          name: "Tomáš R.",
          role: "Barber",
          specialty: "Skin fade | Modern styles",
          instagram: "@jzp_tomas",
        },
        {
          name: "Martin K.",
          role: "Barber & Colorist",
          specialty: "Barvení | Balayage | Classic cuts",
          instagram: "@jzp_martin",
        },
      ],
    },
    pricing: {
      sectionLabel: "Ceník",
      title: "Služby & ceny",
      disclaimer: "Ceny jsou orientační. Přesná cena po konzultaci s barberem.",
      popular: "Nejoblíbenější",
      categories: [
        {
          name: "Pánské střihy",
          items: [
            { name: "Klasické stříhání", desc: "Stříhání + mytí", price: "600 Kč", popular: false },
            { name: "Klasické stříhání + masáž hlavy", desc: "Stříhání + mytí a masáž hlavy", price: "700 Kč", popular: false },
            { name: "Klasické stříhání vlasů + úprava vousů", desc: "Stříhání + úprava vousů a mytí", price: "1 000 Kč", popular: false },
            { name: "Klasické stříhání + kosmetické čištění obličeje, depilace", desc: "Stříhání + mytí, kosmetické čištění obličeje, depilace", price: "800 Kč", popular: false },
            { name: "Stříhání pouze strojkem", desc: "", price: "500 Kč", popular: false },
            { name: "Stříhání dlouhých vlasů", desc: "", price: "700 Kč", popular: false },
            { name: "Pánský střih Exclusive Experience", desc: "Střih, úprava vousů, masáž hlavy, kosmetické čištění obličeje, depilace obličeje", price: "1 450 Kč", popular: false },
          ],
        },
        {
          name: "Úprava vousů",
          items: [
            { name: "Úprava vousů", desc: "", price: "400 Kč", popular: false },
            { name: "Úprava vousů a tónování vousů", desc: "Úprava vousů a barvení", price: "700 Kč", popular: false },
          ],
        },
        {
          name: "Dětské střihy",
          items: [
            { name: "Dětský střih do 6 let", desc: "", price: "400 Kč", popular: false },
            { name: "Střih mladého muže od 6 do 12 let", desc: "", price: "500 Kč", popular: false },
          ],
        },
        {
          name: "Barvení pánských vlasů",
          items: [
            { name: "Základní barvení – krátké vlasy", desc: "", price: "800 Kč", popular: false },
            { name: "Základní barvení – střední délka", desc: "", price: "1 000 Kč", popular: false },
            { name: "Částečné zesvětlení do blond tónů", desc: "", price: "1 300 Kč", popular: false },
            { name: "Celkové zesvětlení do blond tónů", desc: "", price: "1 600 Kč", popular: false },
            { name: "Celkové zesvětlení do šedých tónů", desc: "", price: "1 800 Kč", popular: false },
            { name: "Celkové zesvětlení do stříbrných / bílých tónů", desc: "", price: "2 000 Kč", popular: false },
          ],
        },
      ],
    },
    vouchers: {
      sectionLabel: "Dárkové poukazy",
      title: "Darujte výjimečný zážitek",
      subtitle: "Ideální dárek pro každého muže — otce, partnera, přítele.",
      description:
        "Naše dárkové poukazy jsou elegantně navrženy a dostupné v digitální i fyzické podobě. Platnost 12 měsíců od data vydání.",
      buyOnline: "Koupit online",
      contact: "Kontaktovat nás",
      validFor: "Platí na všechny služby",
      validity: "12 měsíců platnost",
      giftText: "Dárkový poukaz",
    },
    videoLoop: {
      quote: "Dobrý střih se pozná po šesti týdnech.",
    },
    gallery: {
      sectionLabel: "Galerie prací",
      title: "Každý detail vypráví příběh",
      subtitle: "Klikněte pro zvětšení",
      close: "Zavřít",
      prev: "Předchozí",
      next: "Další",
      pageTitle: "Naše práce",
      pageLabel: "Galerie",
      back: "Zpět",
      backHome: "Zpět na hlavní stránku",
      viewAll: "Prohlédnout celou galerii",
      filters: {
        all: "Vše",
        fade: "Fade",
        classic: "Klasika",
        beard: "Vousy",
        shave: "Holení",
      },
    },
    reviews: {
      sectionLabel: "Recenze",
      title: "Co říkají naši klienti",
      googleRating: "4.9 ★ na Google",
      items: [
        {
          text: "Nejlepší střih za posledních deset let. Jakub opravdu poslouchá a stříhá to, co sedí mé hlavě. Ne to, co si myslím, že chci.",
          author: "David H.",
          rating: 5,
        },
        {
          text: "Přiletěl jsem z Berlína na víkend a objednal se na holení ze zvědavosti. Teď budu každou cestu do Prahy plánovat kolem křesla u JZP.",
          author: "Jonas K.",
          rating: 5,
        },
        {
          text: "Samotná masáž hlavy stojí za tu cestu. Odešel jsem o čtyřicet minut novější. Tomáš se ve fade opravdu vyzná.",
          author: "Petra M.",
          rating: 5,
        },
        {
          text: "Klidné, bezchybné, perfektně načasované. Espresso při příchodu, whisky na odchod. Takhle to má vypadat.",
          author: "Martin Š.",
          rating: 5,
        },
      ],
    },
    instagram: {
      sectionLabel: "Instagram",
      title: "Sledujte nás",
      handle: "@j.z.p.barbershop_yasin",
      cta: "Otevřít Instagram",
    },
    contact: {
      sectionLabel: "Kontakt",
      title: "Najdete nás zde",
      address: "nám. J. z Poděbrad 1382/2, 120 00 Praha 2 – Vinohrady",
      phone: "+420 608 965 058",
      email: "info@jzpbarbershop.cz",
      openingHours: "Otevírací doba",
      hours: [
        { day: "Pondělí", time: "09:00 – 20:00" },
        { day: "Úterý", time: "09:00 – 20:00" },
        { day: "Středa", time: "09:00 – 20:00" },
        { day: "Čtvrtek", time: "09:00 – 20:00" },
        { day: "Pátek", time: "09:00 – 20:00" },
        { day: "Sobota", time: "09:00 – 20:00" },
        { day: "Neděle", time: "09:00 – 20:00" },
      ],
      formName: "Vaše jméno",
      formEmail: "Váš e-mail",
      formMessage: "Vaše zpráva",
      formSend: "Odeslat zprávu",
    },
    footer: {
      claim: "Prémiový barbershop v srdci Prahy.",
      quickLinks: "Rychlé odkazy",
      followUs: "Sledujte nás",
      rights: "Všechna práva vyhrazena.",
      privacy: "Zásady ochrany osobních údajů",
      cookies: "Nastavení cookies",
    },
    cookie: {
      text: "Používáme cookies pro zlepšení vašeho zážitku na webu.",
      accept: "Přijmout",
      settings: "Nastavení",
    },
    floatingCta: "REZERVOVAT",
    notFound: {
      title: "Stránka nenalezena",
      subtitle: "Zdá se, že jste zašli příliš daleko.",
      back: "Zpět na hlavní stránku",
    },
    privacy: {
      pageLabel: "Právní informace",
      pageTitle: "Zásady ochrany osobních údajů",
      lastUpdated: "Poslední aktualizace: 26. dubna 2026",
      intro: "Vážíme si vašeho soukromí. Tento dokument popisuje, jaké osobní údaje shromažďujeme, jak je používáme a jaká máte práva podle Nařízení Evropského parlamentu a Rady (EU) 2016/679 (GDPR) a zákona č. 110/2019 Sb., o zpracování osobních údajů.",
      back: "Zpět na hlavní stránku",
      sections: [
        {
          heading: "1. Správce osobních údajů",
          body: [
            "Správcem vašich osobních údajů je společnost JZP Barbershop, provozovna nám. J. z Poděbrad 1382/2, 120 00 Praha 2 – Vinohrady.",
            "Kontaktní e-mail: info@jzpbarbershop.cz",
            "Telefon: +420 608 965 058",
          ],
        },
        {
          heading: "2. Jaké osobní údaje zpracováváme",
          body: [
            "V rámci provozu webových stránek a poskytování služeb zpracováváme následující kategorie údajů:",
          ],
          list: [
            "Identifikační údaje – jméno a příjmení",
            "Kontaktní údaje – e-mailová adresa, telefonní číslo",
            "Obsah komunikace – text zprávy odeslané přes kontaktní formulář",
            "Údaje o rezervaci – datum, čas a typ vybrané služby, zvolený barber",
            "Technické údaje – IP adresa, typ prohlížeče, údaje z cookies (viz čl. 6)",
          ],
        },
        {
          heading: "3. Účely a právní základ zpracování",
          body: [
            "Vaše údaje zpracováváme pouze pro jasně definované účely a vždy na zákonném základě podle čl. 6 odst. 1 GDPR:",
          ],
          list: [
            "Vyřízení rezervace a poskytnutí služby — plnění smlouvy (čl. 6 odst. 1 písm. b GDPR)",
            "Odpověď na zprávu z kontaktního formuláře — oprávněný zájem (čl. 6 odst. 1 písm. f GDPR)",
            "Plnění zákonných povinností (účetnictví, daňové předpisy) — právní povinnost (čl. 6 odst. 1 písm. c GDPR)",
            "Zasílání obchodních sdělení a marketingu — pouze na základě vašeho souhlasu (čl. 6 odst. 1 písm. a GDPR)",
          ],
        },
        {
          heading: "4. Doba uchování údajů",
          body: [
            "Osobní údaje uchováváme pouze po dobu nezbytně nutnou pro daný účel:",
          ],
          list: [
            "Údaje z rezervací: po dobu 3 let od poslední návštěvy",
            "Účetní doklady: 10 let dle zákona o účetnictví",
            "Zprávy z kontaktního formuláře: 1 rok od vyřízení",
            "Marketingový souhlas: do jeho odvolání",
          ],
        },
        {
          heading: "5. Předávání údajů třetím stranám",
          body: [
            "Vaše osobní údaje nepředáváme do třetích zemí mimo EU. V rámci běžného provozu spolupracujeme s prověřenými zpracovateli:",
          ],
          list: [
            "Poskytovatel hostingu webových stránek",
            "Rezervační systém",
            "Poskytovatel e-mailové služby",
            "Účetní kancelář",
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "Naše webové stránky používají cookies pro zajištění funkčnosti, analýzu návštěvnosti a zlepšení uživatelského zážitku. Cookies dělíme do tří kategorií:",
          ],
          list: [
            "Nezbytné cookies — bez nich web nemůže správně fungovat (např. uchování jazykového nastavení). Nelze odmítnout.",
            "Analytické cookies — pomáhají nám rozumět, jak návštěvníci web používají. Anonymizované, pouze na základě vašeho souhlasu.",
            "Marketingové cookies — slouží pro cílení reklam. Pouze na základě vašeho souhlasu.",
          ],
          bodyAfter: [
            "Souhlas s cookies můžete kdykoliv změnit nebo odvolat v patičce stránek (odkaz „Nastavení cookies\") nebo v nastavení svého prohlížeče.",
          ],
        },
        {
          heading: "7. Vaše práva",
          body: [
            "V souvislosti se zpracováním vašich osobních údajů máte následující práva:",
          ],
          list: [
            "Právo na přístup — vědět, jaké údaje o vás zpracováváme",
            "Právo na opravu — pokud zpracováváme nepřesné údaje",
            "Právo na výmaz („právo být zapomenut\")",
            "Právo na omezení zpracování",
            "Právo na přenositelnost údajů",
            "Právo vznést námitku proti zpracování na základě oprávněného zájmu",
            "Právo odvolat udělený souhlas",
            "Právo podat stížnost u Úřadu pro ochranu osobních údajů (www.uoou.cz)",
          ],
        },
        {
          heading: "8. Zabezpečení",
          body: [
            "Přijali jsme přiměřená technická a organizační opatření, abychom vaše údaje chránili před neoprávněným přístupem, ztrátou nebo zneužitím. Komunikace s naším webem je šifrována protokolem HTTPS.",
          ],
        },
        {
          heading: "9. Kontakt",
          body: [
            "Pokud chcete uplatnit svá práva nebo máte jakékoli dotazy ohledně zpracování osobních údajů, kontaktujte nás na e-mailu info@jzpbarbershop.cz nebo telefonicky na +420 608 965 058.",
          ],
        },
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      work: "Our Work",
      barbers: "Barbers",
      pricing: "Pricing",
      vouchers: "Gift Vouchers",
      gallery: "Gallery",
      contact: "Contact",
      book: "BOOK NOW",
    },
    hero: {
      headline: "THE ART OF THE PERFECT CUT",
      subheadline: "Premium barbershop in the heart of Prague",
      cta: "BOOK AN APPOINTMENT",
      scrollDown: "View our work",
    },
    about: {
      sectionLabel: "Our Story",
      title: "Where Tradition Meets Perfection",
      body: "JZP Barbershop was born from a passion for craft and a desire to bring an authentic premium barbershop experience to Prague. We believe that the right cut isn't just about hair — it's a ritual, self-care, and a moment when you truly feel great.",
      body2: "Every client receives individual attention. Our barbers combine classic techniques with modern trends, always with emphasis on detail and quality.",
      stat1Label: "Year Founded",
      stat1Value: "2019",
      stat2Label: "Happy Clients",
      stat2Value: "4800+",
      stat3Label: "Experts",
      stat3Value: "4",
    },
    work: {
      sectionLabel: "Our Work",
      title: "Results Speak for Themselves",
      subtitle: "Drag the slider to see the transformation",
      galleryTitle: "Gallery",
    },
    barbers: {
      sectionLabel: "Team",
      title: "Your Barbers",
      bookWith: "Book with",
      instagram: "Instagram",
      members: [
        {
          name: "Jakub Z.",
          role: "Founder & Head Barber",
          specialty: "Fade | Classic cuts | Shaving",
          instagram: "@jzp_jakub",
        },
        {
          name: "Pavel M.",
          role: "Senior Barber",
          specialty: "Textured cuts | Beard design",
          instagram: "@jzp_pavel",
        },
        {
          name: "Tomáš R.",
          role: "Barber",
          specialty: "Skin fade | Modern styles",
          instagram: "@jzp_tomas",
        },
        {
          name: "Martin K.",
          role: "Barber & Colorist",
          specialty: "Coloring | Balayage | Classic cuts",
          instagram: "@jzp_martin",
        },
      ],
    },
    pricing: {
      sectionLabel: "Pricing",
      title: "Services & Prices",
      disclaimer: "Prices are indicative. Exact price after consultation with your barber.",
      popular: "Most popular",
      categories: [
        {
          name: "Men's Haircuts",
          items: [
            { name: "Classic haircut", desc: "Cut + wash", price: "600 CZK", popular: false },
            { name: "Classic haircut + head massage", desc: "Cut + wash and head massage", price: "700 CZK", popular: false },
            { name: "Classic haircut + beard trim", desc: "Cut + beard trim and wash", price: "1 000 CZK", popular: false },
            { name: "Classic haircut + facial cleansing, depilation", desc: "Cut + wash, facial cleansing, depilation", price: "800 CZK", popular: false },
            { name: "Clipper-only haircut", desc: "", price: "500 CZK", popular: false },
            { name: "Long hair haircut", desc: "", price: "700 CZK", popular: false },
            { name: "Men's Exclusive Experience", desc: "Cut, beard trim, head massage, facial cleansing, facial depilation", price: "1 450 CZK", popular: false },
          ],
        },
        {
          name: "Beard Care",
          items: [
            { name: "Beard trim", desc: "", price: "400 CZK", popular: false },
            { name: "Beard trim & tinting", desc: "Beard trim and coloring", price: "700 CZK", popular: false },
          ],
        },
        {
          name: "Kids Haircuts",
          items: [
            { name: "Kids haircut up to 6 years", desc: "", price: "400 CZK", popular: false },
            { name: "Young men's cut 6–12 years", desc: "", price: "500 CZK", popular: false },
          ],
        },
        {
          name: "Men's Hair Coloring",
          items: [
            { name: "Basic color – short hair", desc: "", price: "800 CZK", popular: false },
            { name: "Basic color – medium length", desc: "", price: "1 000 CZK", popular: false },
            { name: "Partial blonde lightening", desc: "", price: "1 300 CZK", popular: false },
            { name: "Full blonde lightening", desc: "", price: "1 600 CZK", popular: false },
            { name: "Full lightening to grey tones", desc: "", price: "1 800 CZK", popular: false },
            { name: "Full lightening to silver / white tones", desc: "", price: "2 000 CZK", popular: false },
          ],
        },
      ],
    },
    vouchers: {
      sectionLabel: "Gift Vouchers",
      title: "Give an Exceptional Experience",
      subtitle: "The perfect gift for every man — father, partner, friend.",
      description:
        "Our gift vouchers are elegantly designed and available digitally or physically. Valid for 12 months from date of issue.",
      buyOnline: "Buy online",
      contact: "Contact us",
      validFor: "Valid on all services",
      validity: "12 months validity",
      giftText: "Gift Voucher",
    },
    videoLoop: {
      quote: "A good cut only reveals itself six weeks later.",
    },
    gallery: {
      sectionLabel: "Gallery",
      title: "Every detail tells a story",
      subtitle: "Click to enlarge",
      close: "Close",
      prev: "Previous",
      next: "Next",
      pageTitle: "Our Work",
      pageLabel: "Gallery",
      back: "Back",
      backHome: "Back to homepage",
      viewAll: "View full gallery",
      filters: {
        all: "All",
        fade: "Fade",
        classic: "Classic",
        beard: "Beard",
        shave: "Shave",
      },
    },
    reviews: {
      sectionLabel: "Reviews",
      title: "What Our Clients Say",
      googleRating: "4.9 ★ on Google",
      items: [
        {
          text: "Best haircut in a decade. Jakub actually listens and cuts what suits my head — not what I think I want.",
          author: "David H.",
          rating: 5,
        },
        {
          text: "I flew in from Berlin for the weekend and booked a shave out of curiosity. Every Prague trip now gets planned around the JZP chair.",
          author: "Jonas K.",
          rating: 5,
        },
        {
          text: "The head massage alone is worth the trip. Walked out forty minutes newer. Tomáš really knows his way around a fade.",
          author: "Petra M.",
          rating: 5,
        },
        {
          text: "Calm, flawless, perfectly timed. Espresso on arrival, whisky on the way out. This is how it should look.",
          author: "Martin Š.",
          rating: 5,
        },
      ],
    },
    instagram: {
      sectionLabel: "Instagram",
      title: "Follow Us",
      handle: "@j.z.p.barbershop_yasin",
      cta: "Open Instagram",
    },
    contact: {
      sectionLabel: "Contact",
      title: "Find Us Here",
      address: "nám. J. z Poděbrad 1382/2, 120 00 Prague 2 – Vinohrady",
      phone: "+420 608 965 058",
      email: "info@jzpbarbershop.cz",
      openingHours: "Opening Hours",
      hours: [
        { day: "Monday", time: "09:00 – 20:00" },
        { day: "Tuesday", time: "09:00 – 20:00" },
        { day: "Wednesday", time: "09:00 – 20:00" },
        { day: "Thursday", time: "09:00 – 20:00" },
        { day: "Friday", time: "09:00 – 20:00" },
        { day: "Saturday", time: "09:00 – 20:00" },
        { day: "Sunday", time: "09:00 – 20:00" },
      ],
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Your message",
      formSend: "Send message",
    },
    footer: {
      claim: "Premium barbershop in the heart of Prague.",
      quickLinks: "Quick Links",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      cookies: "Cookie Settings",
    },
    cookie: {
      text: "We use cookies to improve your browsing experience.",
      accept: "Accept",
      settings: "Settings",
    },
    floatingCta: "BOOK NOW",
    notFound: {
      title: "Page Not Found",
      subtitle: "It seems you've gone too far.",
      back: "Back to homepage",
    },
    privacy: {
      pageLabel: "Legal information",
      pageTitle: "Privacy Policy",
      lastUpdated: "Last updated: April 26, 2026",
      intro: "We respect your privacy. This document describes what personal data we collect, how we use it, and what your rights are under Regulation (EU) 2016/679 of the European Parliament and of the Council (GDPR) and Czech Act No. 110/2019 Coll. on personal data processing.",
      back: "Back to homepage",
      sections: [
        {
          heading: "1. Data Controller",
          body: [
            "The controller of your personal data is JZP Barbershop, located at nám. J. z Poděbrad 1382/2, 120 00 Prague 2 – Vinohrady.",
            "Contact email: info@jzpbarbershop.cz",
            "Phone: +420 608 965 058",
          ],
        },
        {
          heading: "2. Personal data we process",
          body: [
            "In connection with operating this website and providing our services, we process the following categories of data:",
          ],
          list: [
            "Identification data — first and last name",
            "Contact data — email address, phone number",
            "Communication content — text of messages sent through the contact form",
            "Booking data — date, time, type of selected service, chosen barber",
            "Technical data — IP address, browser type, cookie data (see section 6)",
          ],
        },
        {
          heading: "3. Purposes and legal basis of processing",
          body: [
            "We process your data only for clearly defined purposes and always on a lawful basis under Article 6(1) GDPR:",
          ],
          list: [
            "Handling reservations and providing services — performance of a contract (Art. 6(1)(b) GDPR)",
            "Responding to messages from the contact form — legitimate interest (Art. 6(1)(f) GDPR)",
            "Compliance with legal obligations (accounting, tax law) — legal obligation (Art. 6(1)(c) GDPR)",
            "Sending commercial communications and marketing — only on the basis of your consent (Art. 6(1)(a) GDPR)",
          ],
        },
        {
          heading: "4. Retention periods",
          body: [
            "We retain personal data only for the time necessary for the given purpose:",
          ],
          list: [
            "Booking data: 3 years from the last visit",
            "Accounting documents: 10 years under the Accounting Act",
            "Contact form messages: 1 year after resolution",
            "Marketing consent: until withdrawn",
          ],
        },
        {
          heading: "5. Sharing data with third parties",
          body: [
            "We do not transfer your personal data to countries outside the EU. As part of regular operations we cooperate with vetted processors:",
          ],
          list: [
            "Website hosting provider",
            "Reservation system",
            "Email service provider",
            "Accounting office",
          ],
        },
        {
          heading: "6. Cookies",
          body: [
            "Our website uses cookies to ensure functionality, analyze traffic, and improve the user experience. We classify cookies into three categories:",
          ],
          list: [
            "Essential cookies — without them the site cannot function correctly (e.g. saving your language preference). Cannot be declined.",
            "Analytics cookies — help us understand how visitors use the site. Anonymized, only with your consent.",
            "Marketing cookies — used for ad targeting. Only with your consent.",
          ],
          bodyAfter: [
            "You can change or withdraw your cookie consent at any time via the footer link \"Cookie settings\" or in your browser settings.",
          ],
        },
        {
          heading: "7. Your rights",
          body: [
            "In connection with the processing of your personal data, you have the following rights:",
          ],
          list: [
            "Right of access — to know what data we process about you",
            "Right to rectification — if we process inaccurate data",
            "Right to erasure (\"right to be forgotten\")",
            "Right to restriction of processing",
            "Right to data portability",
            "Right to object to processing based on legitimate interest",
            "Right to withdraw a granted consent",
            "Right to lodge a complaint with the Office for Personal Data Protection (www.uoou.cz)",
          ],
        },
        {
          heading: "8. Security",
          body: [
            "We have taken appropriate technical and organizational measures to protect your data against unauthorized access, loss, or misuse. Communication with our website is encrypted via HTTPS.",
          ],
        },
        {
          heading: "9. Contact",
          body: [
            "If you wish to exercise your rights or have any questions about the processing of personal data, contact us at info@jzpbarbershop.cz or by phone at +420 608 965 058.",
          ],
        },
      ],
    },
  },
} as const;

export type TranslationKey = typeof translations.cs;
