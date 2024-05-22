import * as usersServices from "../services/users.services.js";

async function listUsers(req, res) {
  const users = await usersServices.listUsers();
  return res.json({ data: users, message: "Usuários listados com sucesso!" });
}

async function listUser(req, res) {
  const id = req.params.id;
  const user = await usersServices.listUser(id);
  return res.json({ data: user, message: "Usuário listado com sucesso!" });
}

async function deleteUser(req, res) {
  const id = req.params.id;
  const user = await usersServices.removeUser(id);
  return res.json({ data: user, message: "Usuário deletado com sucesso!" });
}

async function createUser(req, res) {
  const user = req.body;
  await usersServices.createUser(user);
  return res.json({ data: user, message: "Usuário criado com sucesso!" });
}

async function editUser(req, res) {
  const id = req.params.id;
  const user = req.body;
  const editedUser = await usersServices.editUser(id, user);
  return res.json({
    data: editedUser,
    message: "Usuário editado com sucesso!",
  });
}

export { listUsers, listUser, deleteUser, createUser, editUser };
