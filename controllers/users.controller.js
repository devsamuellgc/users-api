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

export { listUsers, listUser, deleteUser };
