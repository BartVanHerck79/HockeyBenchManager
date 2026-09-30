HOCKEY BENCH MANAGER 3.3.1 — bestanden voor GitHub Pages
=========================================================

Speeltijd en banktijd bijhouden tijdens een hockeywedstrijd.
Adres: https://bartvanherck79.github.io/HockeyBenchManager/
Vragen of ideeën: bvherck79@gmail.com


WAT IS ER NIEUW IN 3.3.1
------------------------
- Spelers overnemen bij een nieuw team: de app biedt enkel nog teams van
  dezelfde club aan. Het team met dezelfde naam uit een vorig seizoen
  staat bovenaan.
- Is er geen ander team van die club, dan opent de app meteen de lege
  spelerslijst.
- De uitleg zegt nu duidelijk dat spelers gekopieerd worden: daarna staan
  beide spelerslijsten los van elkaar.

Ter info: spelers van verschillende teams lopen nooit door elkaar. Elk
team heeft zijn eigen spelerslijst, wedstrijden en statistieken. Wie de
U15 en de U19 helpt, heeft twee aparte teams.


DE BESTANDEN IN DIT PAKKET
--------------------------
Enkel wat veranderd is:

  index.html                GEWIJZIGD in 3.3.1
  sw.js                     GEWIJZIGD in 3.3.1
  README.txt                GEWIJZIGD in 3.3.1

Ongewijzigd, dus laten staan:
  firestore.rules (sinds 3.3.0, hoeft niet opnieuw in Firebase)
  manifest.webmanifest en alle iconen (sinds 3.0.0)


INSTALLEREN
-----------
1. Upload index.html, sw.js en README.txt naar de repository
   HockeyBenchManager.
2. Open de app en tik op Vernieuwen in de blauwe balk.


GETEST
------
Team van een nieuwe club: geen spelers van een andere club aangeboden.
Team van een bestaande club: enkel teams van die club, het team met
dezelfde naam bovenaan. De tests van 3.1.1, 3.2 en 3.3 zijn opnieuw
geslaagd.


EERDERE VERSIES
---------------
3.3.0  Prullenbak, waarschuwing voor dubbele wedstrijden, nieuw seizoen.
3.2.0  Spelers beheren zonder wedstrijd, live meekijken, bediening
       overnemen.
3.1.1  Uitnodigen met een link, opslag nakijken, sneller opstarten.
3.1.0  Teams delen met codes, clubdatabank, ledenlijst.
3.0.0  Aanmelden met Google, gegevens in de cloud, offline werken.
