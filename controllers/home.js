const dbConnection = require('../db');

const home = async (req, res) => {
  const db = await dbConnection;
  const categoriasDB = await db.all('select * from categorias LIMIT 3;');
  const vagas = await db.all('select * from vagas LIMIT 3;');
  const categorias = categoriasDB.map((cat) => {
    return {
      ...cat,
      vagas: vagas.filter((vaga) => vaga.categoria === cat.id),
    };
  });
  res.render('home', {
    categorias,
  });
};

const homeAdmin = (req, res) => {
  res.render('admin/home');
}

module.exports = {
  home, homeAdmin
};