const sqlite = require('sqlite');

const dbConnection = sqlite.open('banco.sqlite', { Promise });

const init = async () => {
  const db = await dbConnection;
  await db.run(
    'create table if not exists categorias (id INTEGER PRIMARY KEY, categoria TEXT);'
  );
}

init();
module.exports = dbConnection
