HOCKEY BENCH MANAGER 3.3.0 — bestanden voor GitHub Pages
=========================================================

Speeltijd en banktijd bijhouden tijdens een hockeywedstrijd.
Adres: https://bartvanherck79.github.io/HockeyBenchManager/
Vragen of ideeën: bvherck79@gmail.com

Dit pakket bevat ook alles van 3.2.0. Heb je 3.2.0 nog niet geïnstalleerd,
dan mag je die overslaan en meteen dit pakket gebruiken.


WAT IS ER NIEUW IN 3.3
----------------------
- Prullenbak. Een verwijderde wedstrijd of een verwijderd team gaat eerst
  naar de prullenbak (Menu -> Prullenbak), voor alle leden van het team.
  Daar kan iedereen van het team het 30 dagen terugzetten. Je ziet wie het
  verwijderde en hoeveel dagen het nog bewaard wordt. Daarna ruimt de app
  het vanzelf op. "Definitief verwijderen" kan ook meteen.
- Waarschuwing voor een dubbele wedstrijd. Maak je een wedstrijd op een
  dag waarop het team er al een heeft, dan toont de app die wedstrijd (en
  wie ze aanmaakte), met de keuze om ze te openen of toch een nieuwe te
  maken.
- Nieuw seizoen. Vanaf 1 juni vraagt de app bij "Nieuwe wedstrijd" of je
  voor het team een nieuw seizoen wil starten. Je kan de teamnaam
  aanpassen (bv. U12 naar U13), kiezen welke leden meegaan (enkel een
  hoofdgebruiker kan anderen meenemen) en welke spelers je overneemt. Het
  oude seizoen blijft bewaard. Zeg je "nee", dan vraagt de app het dat
  seizoen niet meer voor dat team.


DE BESTANDEN IN DIT PAKKET
--------------------------
Enkel wat veranderd is:

  index.html                GEWIJZIGD in 3.3.0
  sw.js                     GEWIJZIGD in 3.3.0
  firestore.rules           GEWIJZIGD in 3.3.0 (plakken in Firebase)
  README.txt                GEWIJZIGD in 3.3.0

Ongewijzigd sinds 3.0.0, dus laten staan:
  manifest.webmanifest en alle iconen (*-v5.png)


INSTALLEREN — IN DEZE VOLGORDE
------------------------------
1. Databankregels: console.firebase.google.com -> Hockey Bench Manager ->
   Firestore Database -> Regels (Rules). Vervang alles door de inhoud van
   firestore.rules en klik op Publiceren (Publish).
2. Upload index.html, sw.js, firestore.rules en README.txt naar de
   repository HockeyBenchManager.
3. Open de app en tik op Vernieuwen in de blauwe balk, op alle toestellen.


TESTEN
------
1. Verwijder een testwedstrijd (teamscherm -> Wijzig). Kijk bij een
   teamgenoot in Menu -> Prullenbak en zet ze terug.
2. Maak een wedstrijd op dezelfde dag als een bestaande: de app moet
   waarschuwen.
3. Nieuw seizoen testen kan nu al: maak een testteam in het vorige seizoen
   (2025–2026) en tik op Nieuwe wedstrijd.


GOED OM TE WETEN
----------------
- De prullenbak opent enkel met internet, omdat ze bij het team in de
  cloud staat.
- Een team in de prullenbak is voor geen enkel lid meer zichtbaar in de
  lijst. Terugzetten doet het voor iedereen terug verschijnen.
- De vraag om een nieuw seizoen komt enkel bij "Nieuwe wedstrijd", niet
  bij het openen van de app.


GETEST
------
Doorgetest met een nagebootste Firebase en databankregels, met twee
accounts: waarschuwing bij een tweede wedstrijd op dezelfde dag, wedstrijd
naar de prullenbak en terugzetten door een teamgenoot, definitief
verwijderen, team naar de prullenbak en terugzetten (met wedstrijden en
teamoverzicht), automatisch opruimen na 30 dagen, nieuw seizoen met
nieuwe teamnaam, meegenomen leden en spelers, verwijzing naar het nieuwe
seizoen vanuit het oude team, en een niet-hoofdgebruiker die geen leden
mag meenemen. Alle tests van 3.0, 3.1, 3.1.1 en 3.2 zijn opnieuw
geslaagd (aangepast waar het gedrag bewust veranderde: verwijderen gaat
nu naar de prullenbak).
De echte Firebase-regels konden niet in de officiële testomgeving van
Firebase getest worden. Daarom: eerst testen zoals hierboven.


EERDERE VERSIES
---------------
3.2.0  Spelers beheren zonder wedstrijd, live meekijken, bediening
       overnemen.
3.1.1  Uitnodigen met een link, opslag nakijken, sneller opstarten.
3.1.0  Teams delen met codes, clubdatabank, ledenlijst.
3.0.0  Aanmelden met Google, gegevens in de cloud, offline werken.
