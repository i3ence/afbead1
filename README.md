Work in Progress

# Alalmazások Fejlesztése 1. beadandó

Készítette: Zsiga Bence Krisztián


## Követelményanalízis

###Feladat:

####Funkcionális elvárások:
+ legalább két modellt, egy-sok kapcsolatban
+ legalább 1 űrlapot
+ legalább 1 listázó oldalt
+ legyen lehetőség új felvételére
+ legyen lehetőség meglévő szerkesztésére
+ legyen lehetőség meglévő törlésére

####Nem funkcionális követelmények
+ legyenek benne csak hitelesítés után elérhető funkciók
+ perzisztálás fájlba történjen
+ közzététel Herokun

###Használatieset-modell

####Szerepkörök:
Vendég:
+ regisztráció
+ bejelentkezés

Felhasználó
+ TODO-k listázása
+ TODO-k feltöltése, törlése, szerkesztése
+ kilépés

####Használati eset diagram:
![modell](/docs/imgs/hemodell.png "Használatieset-modell")

Folyamatok pontos menete: legalább 1 folyamat kifejtése.
Egy TODO feltöltésének menete:
+ belépés (az oldal átirányít a listára)
+ feltöltés megkezdése (a lista alján található gombbal)
+ feltöltés végelgesítése (kötelező mezők kitöltésével)
![folyamatábra](/docs/imgs/folyamatabra.png "Folyamatábra")

## Tervezés

1. Architektúra terv
  +  Oldaltérkép
    + Főoldal
      + Bejelentkezés
        + Regisztráció
      + Listázás
        + Új TODO hozzáadása

  + Végpontok
    + GET /: Főoldal
    + GET /login: Bejelentkezési oldal
    + POST /login: Bejelentkezési adatok beküldése
    + GET /login/signup: Regisztrációs oldal
    + POST /login/signup: Regisztrációs adatok beküldése
    + GET /todos/list: Listázási oldal
    + GET /todos/new: Új TODO-feltöltése oldal
    + POST /todos/new: Új TODO beküldése
    + GET /edit/:id: TODO szerkesztése oldal (ugyanaz, mint todos/new)
    + POST edit/:id: Szerkesztett TODO beküldése
    + GET delete/:id: Kijelölt TODO törlése


2. Felhasználóifelület-modell
  + Oldalvázlatok
![index](/docs/imgs/index.jpg "index")
![list](/docs/imgs/list.jpg "list")
![new](/docs/imgs/new.jpg "new")

3. Osztálymodell
  + Adatmodell és Adatbázisterv
  + ![datamodel](/docs/imgs/datamodel.png "datamodel")

4. Dinamikus működés
  + Szekvenciadiagram
  + ![szekvenciadiagram](/docs/imgs/seq_diag.png "szekvenciadiagram")

##Implementáció

+ Fejlesztői környezet
  + Cloud9 IDE (c9.io)
+ Könyvtárstruktúra
  + config: Waterline.js beállításai
  + controllers: Kérések irányítása, feldolgozása
  + models: osztálymodellek
  + node_modules: telepített npm modulok
  + test: tesztfájlok
  + views: Handlebars sémák

##Tesztelés
+ Tesztelési környezet bemutatása
  + Egységteszt: mocha.js-sel, user modelre.
  + Funkcionális felületi teszt: zombie.js

![teszt](/docs/imgs/mochazombie.png "futtatott teszt")

##Felhasználói Dokumentáció
+ Követelmények
  + 2GB memória
  + 1GB HDD
+ Letöltés a 'git clone https://github.com/i3ence/afbead1.git' paracssal
+ Az alkalmazás használata:
  + A belépés menüpontot választva beléphetünk korában megadott adatainkkal. Ha még ezt nem tettük volna meg, regisztrálásra is lehetőségünk van, az oldal alján található gombbal.
  + Belépés után láthatóvá válik a feladatok listája. Itt szabadon adhatunk hozzá, szerkeszthetünk vagy törölhetünk feladatokat.
    + Feladat hozzáadását az alsó 'Új feladat feltöltése' gombbal kezdhetjük meg. Ekkor egy új oldalon a feladat nevét (kötelező!) megadva, már be is küldhetjünk azt. Ha szeretnénk kiegészíteni, pontosítani, használjuk a leírás mezőt.
    + A szerkesztés a hozzáadáshoz hasonló  módon működik a feladat sorában található linkre kattintással. Ekkor már nem változtathatunk feladatunk nevén. Így állíthatjuk állapotát teljesítettre is.
    + A törlést a feladat melletti gombbal hajthatjuk végre.
  + Az alkalmazás lehetőséget nyújt a fiókból való kilépésre is, ezt ajánlott megtenni, ha befejeztük az oldal használatát.
