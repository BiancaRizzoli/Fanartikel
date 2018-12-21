# Fanartikel
Um den Webserver zu starten braucht man:

- NodeJS
- XAMP

Konfiguration:

- Die Datenbank unter /fanartikel/fanartikel.db importieren
- Xamp Server starten 
- npm start in die NodeJS Konsole eingeben

Success!

ToDo:
- Filter einfügen
- Haupseite Logik
- DB Bug #1451 - Kann Eltern-Zeile nicht löschen oder aktualisieren: eine Fremdschlüsselbedingung schlägt fehl (`fanartikel`.`artikelfandoms`, CONSTRAINT `artikelfandoms_ibfk_1` FOREIGN KEY (`ArtID`) REFERENCES `artikel` (`ArtID`))
