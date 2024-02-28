const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

function server(database) {
    //#region app initialization
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    //#endregion

    //#region endpoints
    app.get('/api/getTechnologien', (req, res) => {
        try {
            database.getTechnologien().then(
                (technologien) => {
                    res.status(201).json(technologien);
                }
            ); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    //#region endpoints
    app.get('/api/getPublishedTechnologien', (req, res) => {
        try {
            database.getPublishedTechnologien().then(
                (technologien) => {
                    res.status(201).json(technologien);
                }
            ); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    app.get('/api/getTechnologie/:id', (req, res) => {
        try {
            const id = req.params.id;

            database.getTechnologie(id).then(
                (technologie) => {
                    res.status(201).json(technologie);
                }
            ); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    
    app.post('/api/saveTechnologie', (req, res) => {
        try {
            const { id, name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum } = req.body;

            if (id === 0) {
                // insert new technologie in database
                const insUser = 0;
                const updUser = null;
                const insTime = new Date();
                const updTime = null;
                const technologie = { id, name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, insUser, updUser, insTime, updTime };

                database.insertTechnologie(technologie).then(
                    (insertId) => {
                        res.status(201).json(insertId);
                    }
                ); 
            }
            else {
                // update technologie in database
                const updUser = 0;
                const updTime = new Date();
                const publikationsDatum = publiziert ? new Date() : null;
                const technologie = { id, name, kategorie, ring, beschreibungTechnologie, beschreibungEinordnung, publiziert, publikationsDatum, updUser, updTime };

                database.updateTechnologie(technologie).then(
                    (result) => {
                        res.status(201).json(result);
                    }
                ); 
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
    //#endregion

    return app;
}

// export constructor
module.exports = server;
