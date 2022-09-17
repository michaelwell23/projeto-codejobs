const dbConnection = require('../db');

const adminCategorias = async(req, res) => {
  const db = await dbConnection;
  const categorias = await db.all('select * from categorias');
  res.render('admin/categorias/categorias', {
    categorias,
  })
}

const adminDeleteCategorias = async(req, res) => {
  const db = await dbConnection;
  await db.run('delete from categorias where id= '+req.params.id);
  res.redirect('/admin/categorias');
}

const adminGetEditarCategoria = async(req, res) => {
  const db = await dbConnection;
  const categoria = await db.get('select * from categorias where id= '+req.params.id);
  res.render('admin/categorias/editar-categoria', {
    categoria,
  });
}

const adminPostEditarCategoria = async(req, res) => {
  const { categoria } = req.body;
  const { id } = req.params;
  const db = await dbConnection;
  await db.run(`update categorias set categoria = '${categoria}' where id = ${id}`);
  res.redirect('/admin/categorias');
}

const adminGetNovaCategoria = async(req, res) => {
  res.render('admin/categorias/nova-categoria');
}

const adminPostNovaCategoria = async(req, res) => {
  const { categoria } = req.body;
  const db = await dbConnection;
  await db.run(`insert into categorias(categoria) values('${categoria}')`)
  res.redirect('/admin/categorias');
}

module.exports = {
  adminCategorias,
  adminDeleteCategorias,
  adminGetEditarCategoria,
  adminPostEditarCategoria,
  adminGetNovaCategoria,
  adminPostNovaCategoria,
}