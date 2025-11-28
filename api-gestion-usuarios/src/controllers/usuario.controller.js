// Archivo: src/controllers/usuario.controller.js

// 1. IMPORTACIÓN DEL MODELO
// Para poder interactuar con la tabla 'Usuarios' en la base de datos,
// importamos el modelo que Sequelize creó para nosotros.
// La ruta '../models' funciona porque salimos de 'controllers', luego de 'src' y entramos a 'models'.
const { Usuario } = require('../../models');

// =================================================================
// ------------------ OPERACIONES CRUD -----------------------------
// =================================================================

// 2. CREAR un nuevo usuario (CREATE)
// `async` indica que esta función contendrá operaciones asíncronas.
// `(req, res)` son los objetos de Petición (Request) y Respuesta (Response) que Express nos da.
const createUsuario = async (req, res) => {
  // `try...catch` es un bloque para manejar errores. Si algo falla en el `try`,
  // el código salta al `catch` para que la aplicación no se bloquee.
  try {
    // `req.body` contiene los datos que el cliente envía en el cuerpo de la petición (en formato JSON).
    // `Usuario.create()` es un método de Sequelize que crea una nueva fila en la tabla 'Usuarios'.
    // `await` pausa la ejecución de la función hasta que la promesa de `create` se resuelva.
    const nuevoUsuario = await Usuario.create(req.body);

    // `res.status(201)` envía el código de estado HTTP "201 Created", que es el estándar para una creación exitosa.
    // `.json()` envía la respuesta en formato JSON.
    res.status(201).json({
      message: 'Usuario creado exitosamente.',
      usuario: nuevoUsuario,
    });
  } catch (error) {
    // Si ocurre un error, enviamos un estado "500 Server Error" y el mensaje del error.
    res.status(500).json({ message: 'Error al crear el usuario', error: error.message });
  }
};

// 3. OBTENER todos los usuarios (READ)
const getAllUsuarios = async (req, res) => {
  try {
    // `Usuario.findAll()` es un método de Sequelize que busca y devuelve todas las filas de la tabla.
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios); // `200 OK` es el estado estándar para una petición exitosa.
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error: error.message });
  }
};

// 4. OBTENER un usuario por su ID (READ)
const getUsuarioById = async (req, res) => {
  try {
    // `req.params` contiene los parámetros de la ruta. Si la ruta es `/usuarios/:id`,
    // `req.params.id` contendrá el valor que el cliente ponga en lugar de `:id`.
    const { id } = req.params;

    // `Usuario.findByPk()` (Find By Primary Key) es un método optimizado para buscar por ID.
    const usuario = await Usuario.findByPk(id);

    // Si `findByPk` no encuentra un usuario, devuelve `null`.
    if (!usuario) {
      // Si no hay usuario, devolvemos "404 Not Found". Es importante manejar este caso.
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    res.status(200).json(usuario);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el usuario', error: error.message });
  }
};

// 5. ACTUALIZAR un usuario por su ID (UPDATE)
const updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Primero, buscamos el usuario para asegurarnos de que exista.
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }

    // `usuario.update()` actualiza el objeto que encontramos con los datos del `req.body`.
    // Sequelize es inteligente y solo actualizará los campos que vengan en el body.
    await usuario.update(req.body);

    res.status(200).json({ message: 'Usuario actualizado exitosamente.', usuario });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el usuario', error: error.message });
  }
};

// 6. BORRAR un usuario por su ID (DELETE)
const deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    // `Usuario.destroy()` elimina filas que coincidan con la condición `where`.
    // Devuelve el número de filas eliminadas.
    const numFilasEliminadas = await Usuario.destroy({
      where: { id: id },
    });

    // Si el número de filas eliminadas es 1, significa que se borró con éxito.
    if (numFilasEliminadas === 1) {
      res.status(200).json({ message: 'Usuario eliminado exitosamente.' });
    } else {
      // Si es 0, significa que no se encontró un usuario con ese ID.
      res.status(404).json({ message: `No se pudo eliminar el usuario con id=${id}. Quizás no fue encontrado.` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error: error.message });
  }
};


// 7. EXPORTACIÓN DE LAS FUNCIONES
// Exportamos todas las funciones para que el archivo de rutas pueda importarlas.
module.exports = {
  createUsuario,
  getAllUsuarios,
  getUsuarioById,
  updateUsuario,
  deleteUsuario,
};