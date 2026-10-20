// Concerns Dutch MKB companies named when hesitating on AI, from the Dialogic report
// (Sept 2025, 25 exploratory interviews, grouped Weten / Willen / Kunnen). Worded here as
// visitor worries, not as findings: the report is not representative and includes no retailers.
// Source note: second-brain `Research/Web/2026-10-20 -- Dutch MKB needs from government report.md`.

export type Lang = 'en' | 'nl';
export type Group = 'weten' | 'willen' | 'kunnen';
export type NodeId = 'see' | 'hand' | 'ask' | 'made' | 'check' | 'faq' | 'start';

// Process spine, in the order the story walks it. Each id matches a `data-story-node` on the demo page.
export const nodes: Record<NodeId, Record<Lang, string>> = {
  see: { en: 'Watch', nl: 'Kijk mee' },
  hand: { en: 'By hand', nl: 'Met de hand' },
  ask: { en: 'One message', nl: 'Eén bericht' },
  made: { en: 'Products made', nl: 'Producten' },
  check: { en: 'You check', nl: 'Jij controleert' },
  faq: { en: 'FAQ', nl: 'Vragen' },
  start: { en: 'Your list', nl: 'Jouw lijst' },
};
export const nodeOrder = Object.keys(nodes) as NodeId[];

export const groups: Record<Group, { label: Record<Lang, string>; dot: string; border: string }> = {
  weten: { label: { en: 'Not sure yet', nl: 'Nog onzeker (weten)' }, dot: 'bg-brand-light', border: 'border-brand-light' },
  willen: { label: { en: 'Not convinced', nl: 'Nog niet overtuigd (willen)' }, dot: 'bg-pink-400', border: 'border-pink-400' },
  kunnen: { label: { en: 'Not equipped', nl: 'Nog niet toegerust (kunnen)' }, dot: 'bg-teal-400', border: 'border-teal-400' },
};

export interface Concern {
  /** Number in the vault report's concern table. */
  id: number;
  group: Group;
  node: NodeId;
  en: { concern: string; answer: string };
  nl: { concern: string; answer: string };
}

// Listed in story order (follows the process spine), not report order.
export const concerns: Concern[] = [
  {
    id: 4, group: 'weten', node: 'see',
    en: { concern: 'What could AI actually do in my shop?', answer: 'One job, shown end to end: set numbers go in, products come out. Start with one task, not a strategy.' },
    nl: { concern: 'Wat kan AI concreet doen in mijn shop?', answer: 'Eén taak, van begin tot eind: setnummers erin, producten eruit. Begin met één taak, niet met een strategie.' },
  },
  {
    id: 5, group: 'willen', node: 'hand',
    en: { concern: 'Is it worth the effort?', answer: 'Entering five sets by hand takes around 10 minutes each: almost an hour. That is our estimate, not a measurement. Multiply it by the sets waiting on your shelf.' },
    nl: { concern: 'Is het de moeite waard?', answer: 'Vijf sets met de hand invoeren kost zo’n 10 minuten per set: bijna een uur. Dat is onze inschatting, geen meting. Vermenigvuldig het met het aantal sets dat nog op je plank ligt.' },
  },
  {
    id: 8, group: 'kunnen', node: 'ask',
    en: { concern: 'I don’t have the skills for this.', answer: 'The message in the recording is one plain sentence with five set numbers. No prompt tricks, no code.' },
    nl: { concern: 'Ik heb de kennis hiervoor niet.', answer: 'Het bericht in de opname is één gewone zin met vijf setnummers. Geen promptkunstjes, geen code.' },
  },
  {
    id: 9, group: 'kunnen', node: 'ask',
    en: { concern: 'My data isn’t in order.', answer: 'It starts from a set number. No data project and no spreadsheet clean-up first.' },
    nl: { concern: 'Mijn data is niet op orde.', answer: 'Het begint bij een setnummer. Geen datatraject en niet eerst een spreadsheet opschonen.' },
  },
  {
    id: 1, group: 'weten', node: 'made',
    en: { concern: 'Will it really deliver?', answer: 'This is a screen recording in a demo shop: five set numbers became five products. The waiting time was cut; the steps and the result are as recorded.' },
    nl: { concern: 'Levert het echt wat op?', answer: 'Dit is een schermopname in een demoshop: vijf setnummers werden vijf producten. De wachttijd is eruit geknipt; de stappen en het resultaat zijn zoals opgenomen.' },
  },
  {
    id: 3, group: 'weten', node: 'check',
    en: { concern: 'Won’t AI promise more than it can do?', answer: 'It drafts the listing; it doesn’t decide for you. Images and details can be wrong, so you check them before you sell.' },
    nl: { concern: 'Belooft AI niet meer dan het kan?', answer: 'Het stelt de vermelding op; het beslist niet voor jou. Afbeeldingen en gegevens kunnen fout zijn, dus je controleert ze voor je verkoopt.' },
  },
  {
    id: 6, group: 'willen', node: 'check',
    en: { concern: 'My team worries about mistakes, or about their jobs.', answer: 'The seller stays in charge: right image, complete set, right price? The assistant takes over the typing, not the decisions.' },
    nl: { concern: 'Mijn team is bang voor fouten, of voor hun baan.', answer: 'De verkoper houdt de regie: juiste afbeelding, complete set, juiste prijs? De assistent neemt het typen over, niet de beslissingen.' },
  },
  {
    id: 7, group: 'willen', node: 'faq',
    en: { concern: 'We tried AI before and it let us down.', answer: 'Fair. Start small with one batch and check every product. The FAQ says where the details come from and what was cut from the recording.' },
    nl: { concern: 'We hebben AI eerder geprobeerd en het viel tegen.', answer: 'Terecht. Begin klein met één partij en controleer elk product. De veelgestelde vragen zeggen waar de gegevens vandaan komen en wat uit de opname is geknipt.' },
  },
  {
    id: 2, group: 'weten', node: 'start',
    en: { concern: 'Where do I even start?', answer: 'With a list of set or item numbers you already have. Bring it to a demo and we’ll look at it together.' },
    nl: { concern: 'Waar begin ik eigenlijk?', answer: 'Met een lijst set- of artikelnummers die je al hebt. Neem die mee naar een demo en we kijken er samen naar.' },
  },
  {
    id: 10, group: 'kunnen', node: 'start',
    en: { concern: 'We don’t have the expertise in-house.', answer: 'You don’t have to work it out alone: we look at your list with you and discuss a setup that fits your shop.' },
    nl: { concern: 'We hebben de expertise niet in huis.', answer: 'Je hoeft het niet alleen uit te zoeken: we bekijken je lijst samen met je en bespreken welke inrichting bij je shop past.' },
  },
  {
    id: 11, group: 'kunnen', node: 'start',
    en: { concern: 'Will I end up dependent on a supplier?', answer: 'A fair question, so ask us directly. In a demo we’ll go through who runs what and what stays yours.' },
    nl: { concern: 'Word ik afhankelijk van een leverancier?', answer: 'Een terechte vraag, dus stel hem gerust. In een demo lopen we door wie wat beheert en wat van jou blijft.' },
  },
];

export const ui: Record<Lang, Record<string, string>> = {
  en: {
    handle: 'Your concerns?', region: 'Walk through common concerns about AI', close: 'Close',
    introTitle: 'Thinking about AI for your shop?',
    intro: 'Walk through the worries businesses commonly have, and see where in this demo each one gets answered.',
    start: 'Start the story', prev: 'Previous', next: 'Next', shownAt: 'Shown at', spine: 'The process in this demo',
  },
  nl: {
    handle: 'Jouw zorgen?', region: 'Loop door veelgehoorde zorgen over AI', close: 'Sluiten',
    introTitle: 'Denk je aan AI voor je shop?',
    intro: 'Loop door de zorgen die bedrijven vaak hebben en zie waar in deze demo elk daarvan een antwoord krijgt.',
    start: 'Start het verhaal', prev: 'Vorige', next: 'Volgende', shownAt: 'Te zien bij', spine: 'Het proces in deze demo',
  },
};
