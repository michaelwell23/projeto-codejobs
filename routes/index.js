const { Router } = require('express');
const { home, homeAdmin } = require('../controllers/home');
const {
  getAllVagas,
  getOneVaga,
  adminVagas,
  adminDeleteVaga,
  adminGetNovaVaga,
  adminPostNovaVaga,
  adminGetEditarVaga,
  adminPostEditarVaga,
} = require('../controllers/vagas');

const {
  adminCategorias,
  adminDeleteCategorias,
  adminGetEditarCategoria,
  adminPostEditarCategoria,
  adminGetNovaCategoria,
  adminPostNovaCategoria,
} = require('../controllers/categorias');

const routes = Router();

routes.get('/', home);
routes.get('/admin', homeAdmin);

routes.get('/vagas', getAllVagas);
routes.get('/vaga/:id', getOneVaga);

routes.get('/admin/vagas', adminVagas);
routes.get('/admin/vagas/delete/:id', adminDeleteVaga);
routes.get('/admin/vagas/nova', adminGetNovaVaga);
routes.post('/admin/vagas/nova', adminPostNovaVaga);
routes.get('/admin/vagas/editar/:id', adminGetEditarVaga);
routes.post('/admin/vagas/editar/:id', adminPostEditarVaga);

routes.get('/admin/categorias', adminCategorias);
routes.get('/admin/categorias/delete/:id', adminDeleteCategorias);
routes.get('/admin/categorias/editar/:id', adminGetEditarCategoria);
routes.post('/admin/categorias/editar/:id', adminPostEditarCategoria);
routes.get('/admin/categorias/nova', adminGetNovaCategoria);
routes.post('/admin/categorias/nova', adminPostNovaCategoria);

module.exports = routes;
