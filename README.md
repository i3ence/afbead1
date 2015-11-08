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

## Tervezés

###Architektúra terv
komponensdiagram
####Oldaltérkép
+ Főoldal
  + Bejelentkezés
    + Regisztráció
  + Listázás
    + Új TODO hozzáadása

####Végpontok
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


####Felhasználóifelület-modell
Oldalvázlatok
Designterv (nem kell, elég a végső megvalósítás kinézete)


Osztálymodell
Adatmodell
Adatbázisterv
Állapotdiagram


Dinamikus működés
Szekvenciadiagram
