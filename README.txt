HOCKEY BENCH MANAGER 3.3.2 — bestanden voor GitHub Pages
=========================================================

Speeltijd en banktijd bijhouden tijdens een hockeywedstrijd.
Adres: https://bartvanherck79.github.io/HockeyBenchManager/
Vragen of ideeën: bvherck79@gmail.com


WAT IS ER NIEUW IN 3.3.2
------------------------
- Kaart geven via de knop Kaart: na het kiezen van de speler kies je
  meteen de kaart. Vroeger opende het volledige spelerscherm met eerst
  de wissel.
- Einde van een straf: de speler blijft minstens 15 seconden in de
  strafzone staan, knipperend in het groen met "mag terug!", zodat
  duidelijk is dat die terug het veld in mag. Daarna gaat hij vanzelf
  naar het veld. Tik je op de speler, dan kan je hem ook meteen terug
  het veld in of naar de bank sturen. De speeltijd telt in elk geval
  vanaf het einde van de straf.
- Wedstrijdtijd bijstellen: Meer -> Wedstrijdtijd bijstellen. Kies
  minuten en seconden en tik op Verlengen (er blijft meer tijd over) of
  Inkorten (er blijft minder tijd over). Je ziet meteen hoeveel tijd er
  nog rest. Dat vervangt "minuut bijtellen/aftrekken", wat verwarrend was
  nu de klok aftelt.
- Wisselen door op een speler te tikken: bij de spelers op het veld zie
  je nu ook hoeveel keer ze al op de bank zaten en hoelang in totaal
  (bv. "12:40 gespeeld · 2× bank · 6:10 op de bank"). Ook in de knop
  Wissel. Op de spelerskaart staat "Keer op de bank".
- Volledig verloop: onder Meer staat "Volledig verloop". Je ziet de
  laatste 30 gebeurtenissen, met "Laad meer" voor de rest. Ook wie
  meekijkt heeft onderaan een knop Verloop.


DE BESTANDEN IN DIT PAKKET
--------------------------
Enkel wat veranderd is:

  index.html                GEWIJZIGD in 3.3.2
  sw.js                     GEWIJZIGD in 3.3.2
  README.txt                GEWIJZIGD in 3.3.2

Ongewijzigd, dus laten staan:
  firestore.rules (sinds 3.3.0, hoeft niet opnieuw in Firebase)
  manifest.webmanifest en alle iconen (sinds 3.0.0)


INSTALLEREN
-----------
1. Upload index.html, sw.js en README.txt naar de repository
   HockeyBenchManager.
2. Open de app en tik op Vernieuwen in de blauwe balk. Doe dat niet
   midden in een wedstrijd.


GOED OM TE WETEN
----------------
- De 15 seconden "mag terug" lopen op de wedstrijdklok. Staat de klok
  stil, dan blijft de speler knipperen tot de klok weer loopt of tot je
  op hem tikt.
- "Keer op de bank" telt vanaf deze versie. Bij een wedstrijd die al
  bezig was voor de update, zie je enkel de tijd op de bank.


GETEST
------
Kaart via de knop Kaart, einde straf (knipperen, na 5 seconden nog in de
strafzone, na 15 seconden op het veld, speeltijd vanaf het einde van de
straf), bank-info in beide wisselschermen, wedstrijdtijd verlengen en
inkorten met 1:15, en het volledige verloop met Laad meer. De tests van
3.1.1, 3.2 en 3.3 zijn opnieuw geslaagd.


EERDERE VERSIES
---------------
3.3.1  Spelers overnemen enkel uit dezelfde club.
3.3.0  Prullenbak, waarschuwing voor dubbele wedstrijden, nieuw seizoen.
3.2.0  Spelers beheren zonder wedstrijd, live meekijken, bediening
       overnemen.
3.1.1  Uitnodigen met een link, opslag nakijken, sneller opstarten.
3.1.0  Teams delen met codes, clubdatabank, ledenlijst.
3.0.0  Aanmelden met Google, gegevens in de cloud, offline werken.
