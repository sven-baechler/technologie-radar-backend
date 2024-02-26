CREATE TABLE Technology (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    kategorie INT NOT NULL,
    ring INT,
    beschreibungTechnologie TEXT NOT NULL,
    beschreibungEinordnung TEXT,
    publiziert BOOLEAN NOT NULL,
    publikationsDatum DATETIME,
    INS_USER INT NOT NULL,
    UPD_USER INT,
    INS_TIME DATETIME NOT NULL,
    UPD_TIME DATETIME
);