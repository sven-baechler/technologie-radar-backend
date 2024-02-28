const server = require('./server.js');
const databaseAccess = require('./databaseAccess.js');
require('dotenv').config();

function connectDatabase() {
    const connectionConfig = {
        host: 'localhost',
        user: 'user',
        password: 'password',
        database: 'technologie_radar',
    };

    return new databaseAccess(connectionConfig);
}

function startServer(database) {
    const port = process.env.PORT || 3000;
    server(database).listen(port, () => {
        database.connect().then(() => console.log('database connected'));
        console.log(`Server is running on port ${port}`);
    });
}

const database = connectDatabase();
startServer(database);
