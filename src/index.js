
// Archivo: src/index.js
require('dotenv').config();
// Las variables de entorno ya están disponibles aquí
const historialEstadosRouter = require('./routes/historial_estados.routes');
const proveedoresRouter = require('./routes/proveedores.routes');
const ubicacionesRouter = require('./routes/ubicaciones.routes');
const categoriasRouter = require('./routes/categorias.routes');

const express = require('express');
const { sequelize } = require('../models');
// 1. IMPORTAMOS NUESTRAS RUTAS
const usuarioRoutes = require('./routes/usuario.routes');
const reparacionesRouter = require('./routes/reparaciones.routes')
const productosRouter = require('./routes/productos.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// 2. MIDDLEWARE
// Este middleware es crucial. Le dice a Express que cualquier petición que venga
// con un `Content-Type: application/json` debe ser parseada y su contenido
// puesto a disposición en `req.body`. Sin esto, `req.body` sería `undefined`.
app.use(express.json());

// Ruta de bienvenida para verificar que el API está viva
app.get('/api', (req, res) => {
  res.send('¡Bienvenido al API de Gestión de Usuarios!');
});

// 3. MONTAR LAS RUTAS
// Le decimos a nuestra aplicación que todas las rutas definidas en `usuarioRoutes`
// deben estar precedidas por el prefijo `/api/usuarios`.
// Ejemplo: La ruta GET '/' en usuario.routes.js se convierte en GET '/api/usuarios'.
// La ruta GET '/:id' se convierte en GET '/api/usuarios/:id'.
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/reparaciones', reparacionesRouter);
app.use('/api/productos', productosRouter);
app.use('/api/categorias', categoriasRouter);
app.use('/api/historial_estados', historialEstadosRouter);
app.use('/api/proveedores', proveedoresRouter);
app.use('/api/ubicaciones', ubicacionesRouter);




// 4. INICIAR EL SERVIDOR
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  try {
    // `authenticate()` es un método de Sequelize para probar la conexión a la BD.
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida correctamente.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
});