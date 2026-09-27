HOCKEY BENCH MANAGER 3.0.0 — bestanden voor GitHub Pages
=========================================================

Speeltijd en banktijd bijhouden tijdens een hockeywedstrijd.
Vroeger heette de app Bankwacht. Speciaal gemaakt voor Anneliese van KHC Dragons.

Nieuw adres: https://bartvanherck79.github.io/HockeyBenchManager/
Het oude adres (/Bankwacht/) blijft voorlopig gewoon werken.


WAT IS ER NIEUW IN 3.0
----------------------
- Je meldt je aan met Google. Je gegevens staan in de cloud (Firebase),
  niet meer enkel op je telefoon. Op elk toestel waar je aanmeldt zie je
  dezelfde teams en wedstrijden.
- Een wijziging op het ene toestel verschijnt binnen een paar seconden op
  het andere.
- Zonder internet werkt de app gewoon verder. Wijzigingen blijven op het
  toestel staan en gaan door zodra er weer verbinding is. Een oranje
  bolletje op de menuknop betekent: er moet nog iets doorgaan.
- Profiel met voornaam en achternaam. Wat je noteert, komt met je naam in
  het logboek (bv. "Anneliese V.").
- Een team bestaat nu uit club + teamnaam + seizoen, bv.
  "KHC Dragons – U12 D1" in 2026–2027. Elk seizoen is een nieuw team.
- Bij een nieuw team waarschuwt de app als je in hetzelfde seizoen al een
  team met die naam hebt.
- Gegevens overnemen uit Bankwacht: vanuit een back-up, of automatisch als
  de oude gegevens in dezelfde browser staan.


DE BESTANDEN
------------
  index.html                de app
  sw.js                     offline werken en updates
  manifest.webmanifest      naam en icoon op het beginscherm
  firestore.rules           de databankregels (NIET uploaden, zie stap 3)
  README.txt                dit bestand
  apple-touch-icon-v5.png, icon-192-v5.png, icon-512-v5.png,
  favicon-16-v5.png, favicon-32-v5.png, favicon-64-v5.png   iconen

firestore.rules mag ook mee in de repository, het kan geen kwaad, maar
het werkt pas als je het in Firebase plakt.


INSTALLEREN — EENMALIG
----------------------
Stap 1. Nieuwe repository
  Maak op GitHub een nieuwe repository met de naam HockeyBenchManager
  (publiek). Hernoem de oude Bankwacht-repository NIET.

Stap 2. Bestanden en GitHub Pages
  Upload alle bestanden in de hoofdmap van de nieuwe repository.
  Ga naar Settings -> Pages. Kies bij Source "Deploy from a branch",
  branch "main", map "/ (root)" en bewaar.
  Na een paar minuten staat de app op het nieuwe adres.

Stap 3. Databankregels in Firebase
  Ga naar console.firebase.google.com -> project Hockey Bench Manager
  -> Firestore Database -> tabblad Regels (Rules).
  Vervang alles wat daar staat door de inhoud van firestore.rules
  en klik op Publiceren (Publish).
  Zonder deze stap zegt de app: "De databank weigert de toegang".

(Google-login en het toegelaten domein bartvanherck79.github.io heb je
al ingesteld.)


EERST TESTEN, DAN PAS OVERSTAPPEN
---------------------------------
Doe deze test voor je Bankwacht loslaat. Gebruik testgegevens.

1. Open het nieuwe adres op een computer. Meld aan, vul je naam in,
   maak een testteam en een testwedstrijd.
2. Open het adres op je telefoon in de browser. Meld aan met hetzelfde
   Google-account. Je moet hetzelfde testteam zien.
3. Zet de app op het beginscherm van een iPhone en meld daar aan.
   DIT IS DE BELANGRIJKSTE TEST. Aanmelden met Google vanuit een app op
   het iPhone-beginscherm is bekend als lastig. Blijft het hangen, tik
   dan op "Blijft het hangen? Probeer de andere manier". Lukt het ook
   dan niet, laat het weten: dan zoeken we een andere oplossing voor we
   verder gaan.
4. Wijzig iets op het ene toestel en kijk of het op het andere verschijnt.
5. Zet vliegtuigmodus aan, doe een wissel, zet vliegtuigmodus uit. De
   wissel moet op het andere toestel verschijnen.
6. Wis het testteam weer (Teams -> Wijzig).


OVERSTAPPEN VAN BANKWACHT
-------------------------
1. Open de oude Bankwacht-app -> menu -> Back-up -> Tekst kopiëren
   (of Bestand opslaan).
2. Open Hockey Bench Manager en meld aan. Kies "Back-up terugzetten" en
   plak de tekst (of kies het bestand).
3. Vul de club in (bv. KHC Dragons) en kijk de teamnamen na. Staat de
   clubnaam vooraan in een teamnaam, dan haalt de app die weg:
   "KHC Dragons U12" wordt club "KHC Dragons" en team "U12".
4. Controleer of alle wedstrijden er staan.
5. Pas daarna mag het oude Bankwacht-icoon van het beginscherm. Niet
   eerder: op een iPhone verdwijnen de oude gegevens met dat icoon.

Staan de oude gegevens in dezelfde browser (bv. Safari of Chrome, niet
de app op het beginscherm), dan toont de app zelf "Gegevens uit
Bankwacht overnemen".


UPDATEN OP JE TELEFOON
----------------------
Zoals voorheen: bovenaan verschijnt een blauwe balk "Nieuwe versie klaar".
Tik op Vernieuwen. Er wordt nooit vanzelf overgeschakeld, dus ook nooit
midden in een wedstrijd.


WAAR STAAN JE GEGEVENS
----------------------
In Firebase (Google), in het project hockey-bench-manager, op servers in
Europa. Enkel wie aangemeld is, ziet zijn eigen teams.
Het icoon van je beginscherm verwijderen kost geen gegevens meer, behalve
wijzigingen die door gebrek aan internet nog niet doorgestuurd waren
(oranje bolletje op de menuknop).
Een back-up via het menu kan nog steeds, als extra kopie.


GRENZEN VAN 3.0
---------------
- Alleen jij ziet je teams. Teamgenoten toevoegen komt in 3.1 (teamcodes).
- Gebruik je hetzelfde account op twee toestellen tegelijk tijdens een
  wedstrijd, dan wint de laatste wijziging. Eén toestel bedient, de rest
  kijkt mee: dat komt in 3.2.
- Wie aan een nieuw toestel begint, heeft de eerste keer internet nodig.
- Aanmelden met Microsoft komt later.
- De databankregels konden niet vooraf getest worden in een testomgeving
  van Firebase. De rest van de app is doorgetest met een nagebootste
  databank (zie hieronder). Meldt de app "geweigerd" of "geen toegang",
  laat het weten.


GETEST
------
Doorgetest met een nagebootste Firebase en twee toestellen tegelijk:
gegevens uit Bankwacht 2.8.0 overnemen, aanmelden, profiel, nieuwe
wedstrijd, wissels en doelpunten, live bijwerken op het tweede toestel,
offline werken en daarna doorsturen, herladen tijdens een lopende
wedstrijd, wedstrijd en team wissen, dubbelcheck bij een nieuw team,
afmelden, en een tweede account dat niets van het eerste ziet.
Terwijl de klok loopt schrijft de app niets; enkel bij een actie (wissel,
doelpunt, kaart...) gaat er één schrijfactie naar de databank.


EERDERE VERSIES (als Bankwacht)
-------------------------------
2.8.0  Bank gesorteerd op wachttijd, straftijdbalk gesorteerd.
2.7.0  Klok telt af per helft, extra tijd, speler verwijderen.
2.6.0  Spelers toevoegen aan een lopende wedstrijd.
2.5.0  Zelf controleren op updates, blauwe balk.
2.4.0  Knop "Installeer als app".
2.3.0  Stickicoon.
2.2.0  Namen aanpassen door te tikken.
2.1.0  Selectie basis/bank, spelers overnemen uit vorig seizoen.
2.0.0  Seizoenen, doelpunten, strafalarm, offline, back-up.
