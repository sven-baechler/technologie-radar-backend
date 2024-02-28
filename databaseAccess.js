const mysql = require('mysql');

class databaseAccess {
    constructor(connectionConfig) {
        this.connectionConfig = connectionConfig;
    }

    // Verbindung zur Datenbank herstellen
    async connect() {
        this.connection = mysql.createConnection(this.connectionConfig);
        await new Promise((resolve) => {
            this.connection.connect(function(err) {
                if (err) throw err;
                else resolve();
            });
        })
    }

    // Verbindung zur Datenbank trennen
    async disconnect() {
        await new Promise((resolve, reject) => {
            this.connection.end((err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }
    
    // Liest alle Technologien aus der Tabelle
    async getTechnologien() {
        const sql = 'SELECT * FROM Technologien';
        return new Promise((resolve, reject) => {
            this.connection.query(sql, function (err, result) {
                if (err) reject(err);
                else if (result && typeof result === 'object') resolve(result);
                else reject(new Error('no technologien found'));
            });
        });
    }
    
    // Liest alle publizierten Technologien aus der Tabelle
    async getPublishedTechnologien() {
        const sql = 'SELECT * FROM Technologien WHERE publiziert=true';
        return new Promise((resolve, reject) => {
            this.connection.query(sql, function (err, result) {
                if (err) reject(err);
                else if (result && typeof result === 'object') resolve(result);
                else reject(new Error('no published technologien found'));
            });
        });
    }
    
    // Liest die Technologie mit der ID aus dem Parameter aus der Tabelle
    async getTechnologie(id) {
        const sql = 'SELECT * FROM Technologien WHERE id=?';
        return new Promise((resolve, reject) => {
            this.connection.query(sql, id, function (err, result) {
                if (err) reject(err);
                else if (result[0] && typeof result[0] === 'object') resolve(result[0]);
                else reject(new Error(`no technologie found with id=${id}`));
            });
        });
    }

    // fügt eine neue Technologie hinzu
    async insertTechnologie(technologie) {
        const { name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, insUser, updUser, insTime, updTime } = technologie;

        const sql = 'INSERT INTO Technologien (name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, INS_USER, UPD_USER, INS_TIME, UPD_TIME) ' +
        'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, insUser, updUser, insTime, updTime], function (err, result) {
                if (err) reject(err);
                else if (result.insertId && typeof result.insertId === 'number') resolve(result.insertId);
                else reject(new Error('failed to insert technologie'));
            });
        });
    }

    // bearbeitet eine existierende Technologie
    async updateTechnologie(technologie) {
        const { id, name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, updUser, updTime } = technologie;

        const sql = 'UPDATE Technologien SET name=?, kategorie=?, ring=?, beschreibungTechnologie=?, beschreibungEinordnung=?, publiziert=?, publikationsDatum=?, UPD_USER=?, UPD_TIME=? WHERE id=?';
        return new Promise((resolve, reject) => {
            this.connection.query(sql, [name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, updUser, updTime, id], function (err, result) {
                if (err) reject(err);
                //else if (result.insertId && typeof result.insertId === 'number') resolve(result.insertId);
                else if (result) resolve(result);
                else reject(new Error('failed to update technologie'));
            });
        });
    }
}

// export constructor
module.exports = databaseAccess;
