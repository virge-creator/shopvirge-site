// Concerns Dutch MKB companies named when hesitating on AI, from the Dialogic report
// (Sept 2025, 25 exploratory interviews, grouped Weten / Willen / Kunnen). Worded here as
// visitor worries, not as findings: the report is not representative and includes no retailers.
// Source note: second-brain `Research/Web/2026-10-20 -- Dutch MKB needs from government report.md`.

export type Lang = 'en' | 'nl';
export type Tier = 'inline' | 'faq';

/** Product history is available throughout ShopVirge, across all demo cases. */
export const productHistoryFaq = {
  en: {
    q: 'What if something goes wrong?',
    a: 'ShopVirge keeps the version history of your product details, including descriptions. You can see what changed, who made the change and when. If a change is wrong, you can restore an earlier version. That applies to changes made by you, a colleague or the AI assistant.',
  },
  nl: {
    q: 'En als er iets misgaat?',
    a: 'ShopVirge bewaart de versiegeschiedenis van je productgegevens, zoals beschrijvingen. Je ziet wat er is aangepast, door wie en wanneer. Klopt een wijziging niet? Dan kun je een eerdere versie terugzetten. Dat geldt voor wijzigingen van jou, een collega én de AI-assistent.',
  },
};

type ConcernText = { note?: string; concern?: string; answer?: string };

export interface Concern {
  /** Number in the vault report's concern table. */
  id: number;
  /**
   * inline: one short note shown next to the demo step that answers it (`note`).
   * faq: a question and answer in the FAQ accordion (`concern` + `answer`).
   */
  tier: Tier;
  en: ConcernText;
  nl: ConcernText;
  /** Recording-specific wording for the photo demo; otherwise the shared answer applies. */
  photo?: Record<Lang, ConcernText>;
}

export const concerns: Concern[] = [
  {
    id: 4, tier: 'inline',
    en: { note: 'One process, shown end to end: set numbers in, products out.' },
    nl: { note: 'Eén proces, van begin tot eind: setnummers erin, producten eruit.' },
  },
  {
    id: 1, tier: 'inline',
    en: { note: 'Recorded in a demo shop, sped up so it stays short. The steps and the result are as recorded.' },
    nl: { note: 'Opgenomen in een demoshop en versneld, zodat het kort blijft. De stappen en het resultaat zijn zoals opgenomen.' },
  },
  {
    id: 3, tier: 'inline',
    en: { note: 'The assistant creates the product. You can then check whether everything is correct. Looks good? Then you can start selling right away.' },
    nl: { note: 'De assistent maakt het product aan. Daarna kun je controleren of alles klopt. Zo prima? Dan kun je meteen starten met verkopen.' },
  },
  // FAQ concerns, in display order. Technical claims follow virge-agents docs/architecture.md.
  {
    id: 1, tier: 'faq',
    en: { concern: 'Where does the assistant get its facts, and can I see what it did?', answer: 'For LEGO it looks sets up in Rebrickable, a public LEGO database, and searches the web for what that lacks, such as the age range. It is told not to invent facts: if something is missing it asks you or leaves a placeholder. You can follow each lookup while it works, and every run is logged together with the tools it used.' },
    nl: { concern: 'Waar haalt de assistent zijn gegevens vandaan, en kan ik zien wat hij deed?', answer: 'Voor LEGO zoekt hij sets op in Rebrickable, een openbare LEGO-database, en zoekt hij op het web wat daar ontbreekt, zoals de leeftijdsaanduiding. Hij hoort geen feiten te verzinnen: ontbreekt er iets, dan vraagt hij het je of laat hij een plaatshouder staan. Je ziet elke opzoeking terwijl de assistent werkt, en elke run wordt vastgelegd met de gebruikte tools.' },
    photo: {
      en: { concern: 'Where does the assistant get its facts, and can I see what it did?', answer: 'In this recording, the assistant uses the product photo to identify the model and look up details. You can follow its steps in the chat. Check the model, specifications and description before you sell the product.' },
      nl: { concern: 'Waar haalt de assistent zijn gegevens vandaan, en kan ik zien wat hij deed?', answer: 'In deze opname gebruikt de assistent de productfoto om het model te herkennen en gegevens op te zoeken. Je kunt de stappen volgen in de chat. Controleer het model, de specificaties en de beschrijving voordat je het product verkoopt.' },
    },
  },
  {
    id: 8, tier: 'faq',
    en: { concern: 'Do I need to know how to prompt or code?', answer: 'No. You write a normal sentence, like in the recording. The assistant is connected to your shop through a standard connection (MCP). We set that up and tune the assistant’s instructions to your shop.' },
    nl: { concern: 'Moet ik kunnen prompten of programmeren?', answer: 'Nee. Je schrijft een gewone zin, zoals in de opname. De assistent is via een standaardkoppeling (MCP) met je shop verbonden. Die richten wij in, en we stemmen de instructies van de assistent af op jouw shop.' },
  },
  {
    id: 9, tier: 'faq',
    en: { concern: 'Does my data need to be in order first?', answer: 'No. It starts from a set number, so there is no data project first. Moving from another shop? A separate migration assistant can read a public Shopify or WooCommerce shop and copy product texts and prices into ShopVirge.' },
    nl: { concern: 'Moet mijn data eerst op orde zijn?', answer: 'Nee. Het begint bij een setnummer, dus er is geen datatraject vooraf. Kom je uit een andere shop? Een aparte migratie-assistent kan een openbare Shopify- of WooCommerce-shop uitlezen en productteksten en prijzen naar ShopVirge kopiëren.' },
    photo: {
      en: { concern: 'Does my data need to be in order first?', answer: 'No. This example starts with a product photo, so you do not need a finished listing first. Moving from another shop? A separate migration assistant can read a public Shopify or WooCommerce shop and copy product texts and prices into ShopVirge.' },
      nl: { concern: 'Moet mijn data eerst op orde zijn?', answer: 'Nee. Dit voorbeeld begint met een productfoto, dus je hebt nog geen volledige producttekst nodig. Kom je uit een andere shop? Een aparte migratie-assistent kan een openbare Shopify- of WooCommerce-shop uitlezen en productteksten en prijzen naar ShopVirge kopiëren.' },
    },
  },
  {
    id: 6, tier: 'faq',
    en: { concern: 'My team worries about mistakes, or about their jobs.', answer: 'The user stays in charge: right image, complete set, right price? The assistant takes over the typing, not the decisions. It works as the account you are signed in with, so it can only do what that account may do. For staff who only need to look things up, there is a read-only assistant that cannot change anything.' },
    nl: { concern: 'Mijn team is bang voor fouten, of voor hun baan.', answer: 'De gebruiker houdt de regie: juiste afbeelding, complete set, juiste prijs? De assistent neemt het typen over, niet de beslissingen. Hij werkt als het account waarmee je bent ingelogd, dus hij kan alleen wat dat account mag. Voor medewerkers die alleen iets willen opzoeken is er een assistent met alleen leesrechten die niets kan wijzigen.' },
    photo: {
      en: { concern: 'My team worries about mistakes, or about their jobs.', answer: 'You stay in charge: right model, accurate condition, right price? The assistant takes over the typing, not the decisions. It works as the account you are signed in with, so it can only do what that account may do. For staff who only need to look things up, there is a read-only assistant that cannot change anything.' },
      nl: { concern: 'Mijn team is bang voor fouten, of voor hun baan.', answer: 'Jij houdt de regie: klopt het model, is de staat goed beschreven en past de prijs? De assistent neemt het typen over, niet de beslissingen. Hij werkt als het account waarmee je bent ingelogd, dus hij kan alleen wat dat account mag. Voor medewerkers die alleen iets willen opzoeken is er een assistent met alleen leesrechten die niets kan wijzigen.' },
    },
  },
  // {
  //   id: 7, tier: 'faq',
  //   en: { concern: 'We tried AI before and it let us down.', answer: 'Fair. Start small with one batch and check every product before it goes on sale. The assistant lists its sources and shows the image it picked, so a check is quick.' },
  //   nl: { concern: 'We hebben AI eerder geprobeerd en het viel tegen.', answer: 'Terecht. Begin klein met één partij en controleer elk product voordat het in de verkoop gaat. De assistent noemt zijn bronnen en toont de afbeelding die hij koos, dus controleren gaat snel.' },
  // },
  {
    id: 2, tier: 'faq',
    en: { concern: 'Where do I even start?', answer: 'With a list of set or item numbers you already have. Bring it to a demo and we’ll look at it together.' },
    nl: { concern: 'Waar begin ik eigenlijk?', answer: 'Met een lijst set- of artikelnummers die je al hebt. Neem die mee naar een demo en we kijken er samen naar.' },
    photo: {
      en: { concern: 'Where do I even start?', answer: 'With a few photos of items you sell. Bring them to a demo and we’ll look at them together.' },
      nl: { concern: 'Waar begin ik eigenlijk?', answer: 'Met een paar foto’s van artikelen die je verkoopt. Neem ze mee naar een demo en we bekijken ze samen.' },
    },
  },
  {
    id: 10, tier: 'faq',
    en: { concern: 'We don’t have the expertise in-house.', answer: 'You don’t have to work it out alone: we look at your list with you, tune the assistant to your shop’s wording and rules, and discuss a setup that fits.' },
    nl: { concern: 'We hebben de expertise niet in huis.', answer: 'Je hoeft het niet alleen uit te zoeken: we bekijken je lijst samen met je, stemmen de assistent af op de woorden en regels van jouw shop en bespreken welke inrichting past.' },
    photo: {
      en: { concern: 'We don’t have the expertise in-house.', answer: 'You don’t have to work it out alone: we look at your photos with you, tune the assistant to your shop’s wording and rules, and discuss a setup that fits.' },
      nl: { concern: 'We hebben de expertise niet in huis.', answer: 'Je hoeft het niet alleen uit te zoeken: we bekijken je foto’s samen, stemmen de assistent af op de woorden en regels van jouw shop en bespreken welke inrichting past.' },
    },
  },
  // {
  //   id: 11, tier: 'faq',
  //   en: { concern: 'Will I end up dependent on a supplier?', answer: 'A fair question. Your products stay in your ShopVirge shop; the assistant only works through it. It uses standard protocols (an OpenAI-compatible API and MCP), and the AI model behind it is a setting we can change. In a demo we’ll go through who runs what.' },
  //   nl: { concern: 'Word ik afhankelijk van een leverancier?', answer: 'Een terechte vraag. Je producten blijven in je eigen ShopVirge-shop; de assistent werkt alleen via die shop. Hij gebruikt standaardprotocollen (een OpenAI-compatibele API en MCP), en het AI-model erachter is een instelling die wij kunnen wijzigen. In een demo lopen we door wie wat beheert.' },
  // },
];

/** Short glosses shown on tap behind a dotted-underlined word. Never the only place a caveat appears. */
export const terms: Record<string, Record<Lang, string>> = {
  recording: {
    en: 'The video is sped up so it stays short. The steps and the result in the shop are as recorded.',
    nl: 'De video is versneld, zodat hij kort blijft. De stappen en het resultaat in de shop zijn zoals opgenomen.',
  },
  demoShop: {
    en: 'A shop set up for demonstrations, not a customer’s live shop.',
    nl: 'Een shop die voor demo’s is ingericht, niet de live shop van een klant.',
  },
};
