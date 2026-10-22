// Copy follows the recorded WooCommerce export → preview → approval → import.
export const woocommerceDemo = {
  "en": {
    "copy": {
      "title": "Move your WooCommerce catalog to ShopVirge",
      "description": "Watch a WooCommerce product export become five ShopVirge products. Review descriptions, prices, stock and photos, then approve the import.",
      "intro": "Keep your products. Leave the WordPress maintenance behind.",
      "video": "woocommerce",
      "other": ""
    },
    "details": {
      "input": "One WooCommerce export",
      "output": "Five products in ShopVirge",
      "inputImage": null,
      "inputFile": "woocommerce-products.csv",
      "inputLabel": "Your existing catalog",
      "outputs": null,
      "numbers": [],
      "cards": [
        "woocommerce-card-1",
        "woocommerce-card-2",
        "woocommerce-card-3",
        "woocommerce-card-4",
        "woocommerce-card-5"
      ],
      "prompt": "Help me move my WooCommerce catalog to ShopVirge. Preview woocommerce-products.csv first. Currency EUR; source prices include 21% VAT. Keep my descriptions, prices, stock, categories, tags, attributes and photos. Wait for my approval before importing.",
      "beforeCost": "",
      "before": [
        "Export the product data from WooCommerce",
        "Match categories, VAT, stock and product options",
        "Enter the names, descriptions and prices again",
        "Upload the photos and check each product"
      ],
      "problemTitle": "Another PHP emergency. Still putting off leaving WooCommerce?",
      "problemBody": "Plugin updates. Hosting updates. Another urgent PHP fix. You opened a webshop to sell products. Moving should not mean typing your entire catalog again. Start with the export you already have: let the connected AI assistant prepare the import, check the preview, and approve the move.",
      "useTitle": "You approve the products before anything is imported",
      "useBody": "This recording moves five simple products between two demo shops, including a sale item and a product with zero stock. The original product words are kept, with HTML formatting converted to readable paragraphs. Photos are copied into ShopVirge. Existing matching products are skipped, not overwritten.",
      "review": [
        "Do the texts, categories, options and photos match your products?",
        "Are the buyer prices, VAT, sale prices and stock correct?",
        "Are customers, order history, redirects, payments and shipping arranged before the live switch?"
      ],
      "faq": [
        {
          "q": "Does this move my entire shop?",
          "a": "This demo transfers the product catalog. Customer accounts, order history, subscriptions, redirects, payment and shipping settings, and the domain are not moved. We plan those separately before a live cutover."
        },
        {
          "q": "Are the photos copied, or do they still depend on WooCommerce?",
          "a": "The photos are uploaded into ShopVirge’s own image storage. The recording checks the copied photos without loading them from their source. Keep your old shop available until the export and photo transfer are complete."
        },
        {
          "q": "What about large catalogs, variants or unusual fields?",
          "a": "This first version handles up to 20 rows in a small product CSV. Variants, multiple categories, category hierarchies and special tax mappings need review. Unsupported items are reported rather than silently changed. Bring an export so we can assess your catalog."
        },
        {
          "q": "Why mention the PHP security news?",
          "a": "WordPress and WooCommerce run on PHP. ShopVirge’s application uses Python and TypeScript instead. That avoids reliance on the affected PHP runtime; it does not make any software immune to security issues. Keep the old shop patched while preparing a migration."
        },
        {
          "q": "Is the recording sped up?",
          "a": "Yes. Typing and processing are sped up; page loads and idle waiting are trimmed. The export, review, explicit approval and resulting products are real recorded actions in demo shops. No in-chat correction is needed in the selected recording."
        }
      ],
      "ctaTitle": "Ready to bring your products with you?",
      "ctaBody": "Bring your WooCommerce product export. We will check what can move directly and what needs a separate step before you switch.",
      "caption": "An actual WooCommerce export, reviewed and approved before five products are imported into ShopVirge."
    },
    "hook": "Your next update could be a new shop.",
    "notes": {
      "1": "Recorded in demo shops. Sped up, with page loads and idle waiting trimmed.",
      "3": "Nothing is written until you approve the preview.",
      "4": "An existing export becomes five catalog products, without retyping."
    },
    "news": "On 21 October 2026, PHP released fixes for two critical vulnerabilities: CVE-2026-109618 and CVE-2026-109619, both rated 9.2. That is a reason to check your hosting updates now, and a timely moment to reconsider the work your shop platform creates.",
    "concernFaq": [
      {
        "q": "Do I need to write code or complicated instructions?",
        "a": "No. Start with WooCommerce’s built-in product export and a normal message, as shown in the recording. We set up the connection to your ShopVirge shop."
      },
      {
        "q": "What happens if a product or photo fails?",
        "a": "The result reports created, skipped and failed items. A failed photo does not erase the product, and an access denial stops further writes. Check the report and correct missing items before switching your live shop."
      }
    ]
  },
  "nl": {
    "copy": {
      "title": "Van WooCommerce naar ShopVirge, met je producten mee",
      "description": "Bekijk hoe een WooCommerce-export vijf producten in ShopVirge wordt. Controleer teksten, prijzen, voorraad en foto’s en keur de import goed.",
      "intro": "Je producten mee. Het WordPress-onderhoud achter je.",
      "video": "woocommerce",
      "other": ""
    },
    "details": {
      "input": "Eén WooCommerce-export",
      "output": "Vijf producten in ShopVirge",
      "inputImage": null,
      "inputFile": "woocommerce-products.csv",
      "inputLabel": "Je bestaande catalogus",
      "outputs": null,
      "numbers": [],
      "cards": [
        "woocommerce-card-1",
        "woocommerce-card-2",
        "woocommerce-card-3",
        "woocommerce-card-4",
        "woocommerce-card-5"
      ],
      "prompt": "Help me move my WooCommerce catalog to ShopVirge. Preview woocommerce-products.csv first. Currency EUR; source prices include 21% VAT. Keep my descriptions, prices, stock, categories, tags, attributes and photos. Wait for my approval before importing.",
      "beforeCost": "",
      "before": [
        "Exporteer de producten uit WooCommerce",
        "Koppel categorieën, btw, voorraad en productopties",
        "Voer namen, teksten en prijzen opnieuw in",
        "Upload de foto’s en controleer elk product"
      ],
      "problemTitle": "Weer een PHP-noodpatch. Stel je de overstap nog uit?",
      "problemBody": "Plug-ins bijwerken. Hosting bijwerken. Nu weer een PHP-noodpatch. Je begon een webshop om te verkopen. Overstappen hoeft niet te betekenen dat je je hele catalogus opnieuw intypt. Begin met je bestaande export: laat de gekoppelde AI-assistent de import voorbereiden, controleer het overzicht en geef akkoord.",
      "useTitle": "Jij geeft akkoord voordat er iets wordt geïmporteerd",
      "useBody": "In deze opname verhuizen vijf eenvoudige producten tussen twee demoshops, waaronder een aanbieding en een product met nul voorraad. De oorspronkelijke teksten blijven behouden; HTML-opmaak wordt omgezet naar leesbare alinea’s. Foto’s worden naar ShopVirge gekopieerd. Bestaande overeenkomende producten worden overgeslagen, niet overschreven.",
      "review": [
        "Kloppen de teksten, categorieën, opties en foto’s bij je producten?",
        "Kloppen de verkoopprijzen, btw, aanbiedingen en voorraad?",
        "Zijn klanten, bestelgeschiedenis, redirects, betalingen en verzending geregeld vóór de echte overstap?"
      ],
      "faq": [
        {
          "q": "Verhuist dit mijn hele webshop?",
          "a": "Deze demo verhuist de productcatalogus. Klantaccounts, bestelgeschiedenis, abonnementen, redirects, betaal- en verzendinstellingen en je domein gaan niet mee. Die plannen we apart vóór de echte overstap."
        },
        {
          "q": "Worden de foto’s gekopieerd of blijven ze afhankelijk van WooCommerce?",
          "a": "De foto’s worden naar de eigen afbeeldingsopslag van ShopVirge geüpload. In de opname worden de gekopieerde foto’s gecontroleerd zonder ze bij de bron op te halen. Houd je oude webshop beschikbaar tot de export en foto-overdracht klaar zijn."
        },
        {
          "q": "Hoe zit het met grote catalogi, varianten of bijzondere velden?",
          "a": "Deze eerste versie verwerkt maximaal 20 regels in een klein productbestand. Varianten, meerdere categorieën, categoriehiërarchieën en bijzondere btw-koppelingen vragen om controle. Niet-ondersteunde artikelen worden gemeld in plaats van stilzwijgend aangepast. Neem een export mee, dan bekijken we jouw catalogus."
        },
        {
          "q": "Waarom noemen jullie het PHP-beveiligingsnieuws?",
          "a": "WordPress en WooCommerce draaien op PHP. De applicatie van ShopVirge gebruikt Python en TypeScript. Daardoor is die niet afhankelijk van de getroffen PHP-runtime; dat maakt software niet onkwetsbaar. Blijf je oude shop bijwerken terwijl je de overstap voorbereidt."
        },
        {
          "q": "Is de opname versneld?",
          "a": "Ja. Typen en verwerken zijn versneld; laden van pagina’s en onnodig wachten zijn ingekort. De export, controle, het expliciete akkoord en de producten zijn echt opgenomen in demoshops. In de gekozen opname is geen correctie in de chat nodig."
        }
      ],
      "ctaTitle": "Klaar om je producten mee te nemen?",
      "ctaBody": "Neem je WooCommerce-productexport mee. We bekijken wat direct mee kan en wat nog een aparte stap vraagt voordat je overstapt.",
      "caption": "Een echte WooCommerce-export, gecontroleerd en goedgekeurd voordat vijf producten in ShopVirge worden geïmporteerd."
    },
    "hook": "Je volgende update kan een nieuwe webshop zijn.",
    "notes": {
      "1": "Opgenomen in demoshops. Versneld, met ingekorte laadtijden en wachttijd.",
      "3": "Er wordt niets weggeschreven voordat jij het overzicht goedkeurt.",
      "4": "Een bestaande export wordt vijf producten, zonder alles opnieuw in te typen."
    },
    "news": "Op 21 oktober 2026 bracht PHP updates uit voor twee kritieke kwetsbaarheden: CVE-2026-109618 en CVE-2026-109619, beide met score 9,2. Een reden om nu je hostingupdates te controleren, en een goed moment om te kijken hoeveel onderhoud je webshopplatform vraagt.",
    "concernFaq": [
      {
        "q": "Moet ik code of ingewikkelde instructies schrijven?",
        "a": "Nee. Begin met de ingebouwde productexport van WooCommerce en een normaal bericht, zoals in de opname. Wij richten de koppeling met jouw ShopVirge-shop in."
      },
      {
        "q": "Wat gebeurt er als een product of foto niet lukt?",
        "a": "Het resultaat meldt aangemaakte, overgeslagen en mislukte artikelen. Een mislukte foto wist het product niet; ontbrekende toegangsrechten stoppen verdere wijzigingen. Controleer het verslag en herstel ontbrekende onderdelen voordat je live overstapt."
      }
    ]
  }
};
