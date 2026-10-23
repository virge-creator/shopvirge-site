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
      "problemTitle": "Spending more time maintaining your shop than selling?",
      "problemBody": "Plugin updates, hosting updates, security fixes. You opened a webshop to sell products, not to manage servers. ShopVirge is a managed service: we run and update the stack for you. And moving should not mean typing your entire catalog again. Start with the export you already have: let the connected AI assistant prepare the import, check the preview, and approve the move.",
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
          "a": "This demo transfers the product catalog. For redirects, we can import a list of your old URLs and set up redirects where needed, so links and search results keep working. Need more, such as order history or customer accounts? Contact us and we will plan that with you before the live switch."
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
          "q": "Does switching mean I never have to think about security again?",
          "a": "Every webshop needs security updates. With ShopVirge, we handle hosting, updates and monitoring. Keep your current WooCommerce shop updated while preparing the move: ask your hosting provider whether the security fixes have been installed. Moving your products is a separate step."
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
    "news": "On 21 October 2026, websites were temporarily taken offline because of security flaws in PHP, the software behind WordPress and WooCommerce. NOS and BBC reported on the disruption. PHP released security updates that day. For your shop, the next step is simple: ask your hosting provider whether those updates have been installed.",
    "concernFaq": [
      {
        "q": "Do I need to write code or complicated instructions?",
        "a": "No. Start with WooCommerce’s built-in product export and a normal message, as shown in the recording. We set up the connection to your ShopVirge shop."
      },
      {
        "q": "What happens if a product or photo fails?",
        "a": "The result reports created, skipped and failed items. A failed photo does not erase the product, and an access denial stops further writes. Check the report and correct missing items before switching your live shop."
      }
    ],
    "newsSources": [
      {
        "href": "https://nos.nl/artikel/2636090-zoveel-sites-in-een-klap-plat-hoe-kan-dat-en-zijn-je-gegevens-veilig",
        "label": "NOS: why websites went offline (Dutch)"
      },
      {
        "href": "https://www.bbc.co.uk/news/articles/cmx23d0k57d3o",
        "label": "BBC: the international impact"
      },
      {
        "href": "https://www.php.net/archive/2026.php#2026-10-21-5",
        "label": "PHP: the original security update"
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
      "problemTitle": "Ben je meer tijd kwijt aan onderhoud dan aan verkopen?",
      "problemBody": "Plug-ins bijwerken, hosting bijwerken, beveiligingsupdates. Je begon een webshop om te verkopen, niet om servers te beheren. ShopVirge is een beheerde dienst: wij beheren en updaten alles voor je. En overstappen hoeft niet te betekenen dat je je hele catalogus opnieuw intypt. Begin met je bestaande export: laat de gekoppelde AI-assistent de import voorbereiden, controleer het overzicht en geef akkoord.",
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
          "a": "Deze demo verhuist de productcatalogus. Voor redirects kunnen we een lijst met je oude URL’s importeren en waar nodig doorverwijzingen instellen, zodat links en zoekresultaten blijven werken. Wil je meer meenemen, zoals bestelgeschiedenis of klantaccounts? Neem contact met ons op, dan plannen we dat samen vóór de echte overstap."
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
          "q": "Hoef ik na de overstap nooit meer aan beveiliging te denken?",
          "a": "Elke webshop heeft beveiligingsupdates nodig. Bij ShopVirge regelen wij de hosting, updates en monitoring. Blijf je huidige WooCommerce-shop bijwerken terwijl je de overstap voorbereidt: vraag je hostingpartij of de beveiligingsupdates zijn geïnstalleerd. Je producten verhuizen is een aparte stap."
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
    "news": "Op 21 oktober 2026 gingen websites tijdelijk uit de lucht door beveiligingslekken in PHP, de software achter WordPress en WooCommerce. NOS en BBC berichtten over de problemen. PHP bracht die dag beveiligingsupdates uit. Voor jouw webshop is de volgende stap simpel: vraag je hostingpartij of die updates zijn geïnstalleerd.",
    "concernFaq": [
      {
        "q": "Moet ik code of ingewikkelde instructies schrijven?",
        "a": "Nee. Begin met de ingebouwde productexport van WooCommerce en een normaal bericht, zoals in de opname. Wij richten de koppeling met jouw ShopVirge-shop in."
      },
      {
        "q": "Wat gebeurt er als een product of foto niet lukt?",
        "a": "Het resultaat meldt aangemaakte, overgeslagen en mislukte artikelen. Een mislukte foto wist het product niet; ontbrekende toegangsrechten stoppen verdere wijzigingen. Controleer het verslag en herstel ontbrekende onderdelen voordat je live overstapt."
      }
    ],
    "newsSources": [
      {
        "href": "https://nos.nl/artikel/2636090-zoveel-sites-in-een-klap-plat-hoe-kan-dat-en-zijn-je-gegevens-veilig",
        "label": "NOS: waarom websites uit de lucht gingen"
      },
      {
        "href": "https://www.bbc.co.uk/news/articles/cmx23d0k57d3o",
        "label": "BBC: de gevolgen wereldwijd (Engels)"
      },
      {
        "href": "https://www.php.net/archive/2026.php#2026-10-21-5",
        "label": "PHP: de oorspronkelijke beveiligingsupdate (Engels)"
      }
    ]
  }
};
