const dbConnection = require('../db');

const getAllVagas = async(req, res) => {
  const db = await dbConnection;
  const categoriasDB = await db.all('select * from categorias;');
  const vagas = await db.all('select * from vagas;');
  const categorias = categoriasDB.map((cat) => {
    return {
      ...cat,
      vagas: vagas.filter((vaga) => vaga.categoria === cat.id),
    };
  });
  res.render('pageVagas', {
    categorias,
  });
}

const getOneVaga = async (req, res) => {
  const db = await dbConnection;
  const vaga = await db.get('select * from vagas where id = ' + req.params.id);
  res.render('vaga', {
    vaga,
  });
}

const adminVagas = async(req, res) => {
  const db = await dbConnection;
  const vagas = await db.all('select * from vagas;');
  res.render('admin/vagas/vagas', {
    vagas,
  })
}

const adminDeleteVaga = async(req, res) => {
  const db = await dbConnection
  await db.run('delete from vagas where id= '+req.params.id);
  res.redirect('/admin/vagas/vagas');
}

const adminGetNovaVaga = async(req, res) => {
  const db = await dbConnection;
  const categorias = await db.all('select * from categorias;');
  res.render('admin/vagas/nova-vaga', {
    categorias
  });
}

const adminPostNovaVaga = async(req, res) => {
  const { titulo, descricao, categoria} = req.body 
  const db = await dbConnection;
  await db.run(`insert into vagas(categoria, titulo, descricao) values(${categoria},'${titulo}','${descricao}')`)
  res.redirect('/admin/vagas/vagas');
}

const adminGetEditarVaga = async(req, res) => {
  const db = await dbConnection;
  const categorias = await db.all('select * from categorias;');
  const vaga = await db.get('select * from vagas where id = '+req.params.id)
  res.render('admin/vagas/editar-vaga', {
    categorias,
    vaga
  })
}

const adminPostEditarVaga =  async (req, res) => {
  const { titulo, descricao, categoria} = req.body 
  const { id } = req.params;
  const db = await dbConnection;
  await db.run(`update vagas set categoria = '${categoria}', titulo = '${titulo}', descricao = '${descricao}' where id = ${id}`)
  res.redirect('/admin/vagas/vagas');
}

module.exports = {
  getAllVagas,
  getOneVaga,
  adminVagas,
  adminDeleteVaga,
  adminGetNovaVaga,
  adminPostNovaVaga,
  adminGetEditarVaga,
  adminPostEditarVaga,
}