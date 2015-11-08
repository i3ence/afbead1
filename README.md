Work in Progress

# Alalmazások Fejlesztése 1. beadandó
------

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

####Használatieset-modell

#####Szerepkörök:
Vendég:
+ regisztráció
+ bejelentkezés

Felhasználó
+ TODO-k listázása
+ TODO-k feltöltése, törlése, szerkesztése
+ kilépés

#####Használati eset diagram:
![modell](/docs/imgs/hemodell.png "Használatieset-modell")

Folyamatok pontos menete: legalább 1 folyamat kifejtése.
Egy TODO feltöltésének menete:
+ belépés (az oldal átirányít a listára)
+ feltöltés megkezdése (a lista alján található gombbal)
+ feltöltés végelgesítése (kötelező mezők kitöltésével)

## Tervezés
