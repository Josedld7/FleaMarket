// import jwt from "jsonwebtoken";
import Jwt from "jsonwebtoken";
import Role from "../models/roles.js";
import Users from "../models/users.js";
import { SECRET } from "../../config.js";
import { send_Mail } from "../nodemailer/mail.js";

// registro de usuario, se comprueba email y password
export const userRegister = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      username,
      email,
      password,
      country,
      city,
      addres,
      telephone,
      roles,
    } = req.body;

    const newUser = new Users({
      firstname,
      lastname,
      username,
      email,
      password: await Users.encryptPassword(password),
      country,
      city,
      addres,
      telephone,
    });

    if (roles) {
      //si llega roles busca en el model de Roles el que coincida y asigna al usuario el id de ese role
      const findRole = await Role.find({ name: { $in: roles } });
      newUser.roles = findRole.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" }); // sino llega asigna el role user por defecto
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save(); // guarda el nuevo usuario con el respectivo role

    await send_Mail(email, "registro", firstname, lastname);

    const token = Jwt.sign({ id: savedUser._id }, SECRET, {
      //encripta el token de acuerdo al id q tiene el usuario
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

// login para usuarios ya registrados, se comprueba email y password
export const userLogin = async (req, res) => {
  try {
    // se busca el user cuyo email coincida con el email q llega
    const findUser = await Users.findOne({ email: req.body.email }).populate(
      "roles"
    );
    // sino se encuentra el user arroja un error
    if (!findUser)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await Users.comparePassword(
      // se comparan los password
      req.body.password,
      findUser.password
    );

    if (!matchPassword)
      // sino coinciden los password, no le envio un token
      return res.status(401).json({
        token: null,
        message: "Password no es valido",
      });

    const token = Jwt.sign({ id: findUser._id }, SECRET, {
      // pero si coinciden le envio el token
      expiresIn: 96400, // 24 hours
    });

    res.json({
      token,
      id: findUser._id,
      name: findUser.firstname,
      username: findUser.username,
      email: findUser.email,
      country: findUser.country,
      city: findUser.city,
      role: findUser.roles
        ? findUser.roles.map((r) => r.name).toString()
        : "user",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
