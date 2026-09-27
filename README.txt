HOCKEY BENCH MANAGER 3.1.0 — bestanden voor GitHub Pages
=========================================================

Speeltijd en banktijd bijhouden tijdens een hockeywedstrijd.
Vroeger heette de app Bankwacht. Speciaal gemaakt voor Anneliese van KHC Dragons.

Adres: https://bartvanherck79.github.io/HockeyBenchManager/


WAT IS ER NIEUW IN 3.1
----------------------
- Teams delen. Meerdere mensen werken samen in hetzelfde team en zien
  dezelfde spelers en wedstrijden.
- Teamcodes, zoals STICK-42. Een hoofdgebruiker maakt ze aan via
  Menu -> Leden -> Code aanmaken en stuurt ze door. Een code werkt één
  keer en hoogstens 24 uur. Elke nieuwe persoon heeft een eigen code nodig.
- "Team toevoegen" vraagt nu: heb je een code, of maak je een nieuw team?
- Clubdatabank. Clubs worden gedeeld tussen alle gebruikers. Typ je een
  naam die er hard op lijkt ("K.H.C. Draggons"), dan vraagt de app
  "Bedoel je KHC Dragons?".
- Bestaat jouw team al bij iemand anders (zelfde club, zelfde seizoen,
  bijna dezelfde naam), dan zegt de app dat, en bij wie je een code kan
  vragen (bv. "vraag een code aan Anneliese V.").
- Clubnaam verbeteren: Team aanpassen -> Club. Dat mag iedereen die een
  team in die club heeft. De nieuwe naam geldt meteen voor alle teams van
  die club, bij iedereen. Elke wijziging wordt bijgehouden.
- Ledenlijst per team (Menu -> Leden, of op het teamscherm).
  Hoofdgebruikers kunnen leden uit het team zetten en anderen
  hoofdgebruiker maken. Een team kan meerdere hoofdgebruikers hebben.
- Team verlaten. De laatste hoofdgebruiker moet eerst iemand anders
  aanduiden. Het laatste lid krijgt de vraag om het team te verwijderen.
- Je bestaande teams worden bij de eerste start automatisch aan een club
  gekoppeld. Je hoeft niets te doen.


DE BESTANDEN IN DIT PAKKET
--------------------------
Enkel wat veranderd is:

  index.html                GEWIJZIGD in 3.1.0
  sw.js                     GEWIJZIGD in 3.1.0
  firestore.rules           GEWIJZIGD in 3.1.0 (plakken in Firebase)
  README.txt                GEWIJZIGD in 3.1.0

Ongewijzigd sinds 3.0.0, dus laten staan:
  manifest.webmanifest en alle iconen (*-v5.png)


INSTALLEREN — IN DEZE VOLGORDE
------------------------------
Stap 1. EERST de databankregels
  console.firebase.google.com -> Hockey Bench Manager -> Firestore
  Database -> tabblad Regels (Rules). Vervang alles door de inhoud van
  firestore.rules en klik op Publiceren (Publish).
  Waarom eerst: de nieuwe app schrijft clubs, codes en een teamoverzicht.
  Met de oude regels wordt dat geweigerd. De oude app (3.0) werkt wel
  gewoon met de nieuwe regels.

Stap 2. Dan de bestanden
  Upload index.html, sw.js, firestore.rules en README.txt naar de
  repository HockeyBenchManager en vervang de bestaande versies.

Stap 3. Updaten op je telefoon
  Open de app. Bovenaan verschijnt de blauwe balk "Nieuwe versie klaar".
  Tik op Vernieuwen.


TESTEN
------
Je hebt een tweede Google-account nodig (van jezelf of iemand anders).

1. Account 1: open je team -> Leden -> Code aanmaken -> Code doorsturen.
2. Account 2 (ander toestel, of een privévenster op de computer):
   meld aan, vul een naam in, kies Team toevoegen -> Nieuw team aanmaken
   en typ dezelfde club en teamnaam met een tikfout. De app moet vragen
   of je de bestaande club bedoelt, en daarna melden dat het team al
   bestaat, met de naam van de hoofdgebruiker.
3. Account 2: kies "Ik heb een code", vul de code in en word lid.
   Je ziet nu dezelfde spelers en wedstrijden.
4. Probeer dezelfde code nog eens met een derde account (of na het
   verlaten van het team): de app moet zeggen dat ze al gebruikt is.
5. Account 1: Leden -> tik op account 2 -> Hoofdgebruiker maken.
   Daarna: Uit het team zetten. Bij account 2 verdwijnt het team.
6. Team aanpassen -> Club: verbeter de clubnaam. Bij het andere account
   verschijnt de nieuwe naam.

Meldt de app ergens "geweigerd" of "lukte niet", stuur dan een
schermafbeelding.


GOED OM TE WETEN
----------------
- Lid worden, codes aanmaken, leden beheren en clubnamen verbeteren kan
  enkel met internet. Wedstrijden bijhouden kan ook zonder.
- Wie aangemeld is, kan de clublijst zien en het teamoverzicht: club,
  teamnaam, seizoen en de voornaam + initiaal van de hoofdgebruikers.
  Spelers, wedstrijden en de volledige ledenlijst zien enkel de leden.
- Twee clubs samenvoegen kan nog niet. Maakt iemand toch een tweede
  versie van een club aan, laat het weten.
- Met meerdere mensen tegelijk op dezelfde wedstrijd werken: de laatste
  wijziging wint. Eén toestel dat bedient en de rest dat meekijkt, komt
  in 3.2. Spreek tot dan af wie er ingeeft.
- Codes kunnen niet opgelijst of opgezocht worden, enkel één voor één
  geprobeerd. Met ongeveer 3.600 mogelijke codes, één keer bruikbaar en
  maximaal 24 uur geldig, is dat voor een clubapp voldoende.


GETEST
------
Doorgetest met een nagebootste Firebase, drie accounts en een
nabootsing van de databankregels: bestaande 3.0-teams automatisch
koppelen aan een club, code aanmaken, dubbele club herkennen
("K.H.C. Draggons" -> KHC Dragons), bestaand team herkennen met de naam
van de hoofdgebruiker, lid worden met een code, gebruikte en verlopen
codes weigeren, hoofdgebruiker aanduiden, clubnaam verbeteren (en
weigeren voor wie geen team in die club heeft), samen aan een wedstrijd
werken, lid uit het team zetten, team verlaten, en daarna gewoon verder
werken. Ook alle tests van 3.0 zijn opnieuw geslaagd.
De echte Firebase-regels konden niet in de officiële testomgeving van
Firebase getest worden. Daarom: eerst testen zoals hierboven.


EERDERE VERSIES
---------------
3.0.0  Aanmelden met Google, gegevens in de cloud, live bijwerken,
       offline werken, profiel, teams met club + teamnaam + seizoen,
       gegevens overnemen uit Bankwacht.
2.8.0  (Bankwacht) Bank gesorteerd op wachttijd.
2.7.0  Klok telt af per helft, extra tijd, speler verwijderen.
2.6.0  Spelers toevoegen aan een lopende wedstrijd.
2.5.0  Zelf controleren op updates, blauwe balk.
2.0.0  Seizoenen, doelpunten, strafalarm, offline, back-up.
