# technologie-radar-backend - Anleitung

## Packages installieren
`npm install`

## Datenbank
Mit dem Powershell-Befehl `docker-compose -f docker.yml up` werden zwei Container gestartet:
* PHPMyAdmin
* MySQL Datenbank

Die Tabelle Technologien muss mit dem Skript `CREATE_TABLE_Technologien.sql` manuell erstellt werden.

## Nodemon
Die App kann mit `nodemon main.js` gestartet werden.
