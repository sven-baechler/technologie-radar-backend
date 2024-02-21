const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Server is running on port ${port}`)});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/technologien', (req, res) => {
    const technologien = [
        { id: 1, name: 'Angular', kategorie: 0, ring: 0, beschreibungTechnologie: 'Angular Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung Angular', publiziert: false, publikationsDatum: new Date() },
        { id: 2, name: 'C#', kategorie: 1, ring: 1, beschreibungTechnologie: 'C# Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung C#', publiziert: false, publikationsDatum: new Date() },
        { id: 3, name: 'HTML', kategorie: 2, ring: 2, beschreibungTechnologie: 'HTML Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung HTML', publiziert: false, publikationsDatum: new Date() },
        { id: 4, name: 'CSS', kategorie: 3, ring: 3, beschreibungTechnologie: 'CSS Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung CSS', publiziert: false, publikationsDatum: new Date() },
        { id: 5, name: 'CSS', kategorie: 0, ring: 0, beschreibungTechnologie: 'new', beschreibungEinordnung: 'new', publiziert: false, publikationsDatum: new Date() }
    ];
   
    //res.json({ message: 'Hello, World!' });
    res.json(technologien);
});

// TODO-sven: funktioniert nunig
app.get('/api/technologien/{{id}}', (req, res) => {
    const technologien = [
        { id: 1, name: 'Angular', kategorie: 0, ring: 0, beschreibungTechnologie: 'Angular Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung Angular', publiziert: false, publikationsDatum: new Date() },
        { id: 2, name: 'C#', kategorie: 1, ring: 1, beschreibungTechnologie: 'C# Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung C#', publiziert: false, publikationsDatum: new Date() },
        { id: 3, name: 'HTML', kategorie: 2, ring: 2, beschreibungTechnologie: 'HTML Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung HTML', publiziert: false, publikationsDatum: new Date() },
        { id: 4, name: 'CSS', kategorie: 3, ring: 3, beschreibungTechnologie: 'CSS Beschreibung', beschreibungEinordnung: 'Beschreibung Einordnung CSS', publiziert: false, publikationsDatum: new Date() },
        { id: 5, name: 'CSS', kategorie: 0, ring: 0, beschreibungTechnologie: 'new', beschreibungEinordnung: 'new', publiziert: false, publikationsDatum: new Date() }
    ];
   
    //res.json({ message: 'Hello, World!' });
    res.json(technologien);
});
