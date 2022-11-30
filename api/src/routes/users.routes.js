import express from "express";
import {
  // createUser,
  deleteUser,
  getUsers,
  updateUser,
  getUserByid
} from "../controllers/users.controllers.js";
import {verifyAdminRole, verifyToken}  from "../middleware/auth.middlewares.js";

const router = express();

//[verifyToken, verifyAdminRole]

// route que me trae todo los usuarios
router.get("/users",  getUsers);

// route que me actualiza los datos de usuarios
router.put("/user/:id", /* verifyToken, */ updateUser);

// route que me trae un usuario por iD 
router.get("/user/:id", /* verifyToken, */ getUserByid);

//ruta que elimina un usuario
router.delete("/users/:id", [verifyToken, verifyAdminRole], deleteUser);

export default router;
