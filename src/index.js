// Archivo: src/index.js
require("dotenv").config();

const express = require("express");
const cors = require("cors"); // ✅ IMPORTANTE
const { sequelize } = require("../models");

// RUTAS
const usuarioRoutes = require("./routes/usuario.routes");
const reparacionesRouter = require("./routes/reparaciones.routes");
const productosRouter = require("./routes/productos.routes");
const categoriasRouter = require("./routes/categorias.routes");
const historialEstadosRouter = require("./routes/historial_estados.routes");
const proveedoresRouter = require("./routes/proveedores.routes");
const ubicacionesRouter = require("./routes/ubicaciones.routes");

const app = express();
const PORT = process.env.PORT || 3000;

// ✅ MIDDLEWARES (ORDEN IMPORTANTE)
app.use(cors()); // 🔥 ESTO ARREGLA TODO
app.use(express.json());

// Ruta prueba
app.get("/api", (req, res) => {
  res.send("API funcionando correctamente");
});

// RUTAS
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/reparaciones", reparacionesRouter);
app.use("/api/productos", productosRouter);
app.use("/api/categorias", categoriasRouter);
app.use("/api/historial_estados", historialEstadosRouter);
app.use("/api/proveedores", proveedoresRouter);
app.use("/api/ubicaciones", ubicacionesRouter);

// SERVIDOR
app.listen(PORT, async () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
  }
});
