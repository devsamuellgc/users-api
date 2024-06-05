import * as usersServices from "../services/users.services.js";
import * as logsServices from "../services/logs.services.js";
async function listUsers(req, res) {
  try {
    const users = await usersServices.listUsers();
    if (!users.length) {
      return res.json({ data: users, message: "Não há usuários cadastrados!" });
    }
    return res.json({ data: users, message: "Usuários listados com sucesso!" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
}

async function listUser(req, res) {
  const id = req.params.id;
  try {
    const user = await usersServices.listUser(id);
    if (!user.length) {
      return res.json({ data: user, message: "Usuário não existente!" });
    }
    return res.json({ data: user, message: "Usuário listado com sucesso!" });
  } catch (error) {
    return res.status(500).json({
      data: error,
      message:
        "Ops, algo de errado não está certo, tente novamente mais tarde!",
    });
  }
}

async function deleteUser(req, res) {
  const id = req.params.id;
  try {
    const user = await usersServices.listUser(id);
    if (!user.length) {
      return res.json({ data: user, message: "Usuário não localizado!" });
    }
    const response = await usersServices.removeUser(id);
    if (response > 0) {
      return res.json({
        data: user[0],
        message: "Usuário deletado com sucesso!",
      });
    }
    return res.status(500).json({ message: "Erro ao deletar o usuário!" });
  } catch (error) {
    await logsServices.createLog({
      message: error.sqlMessage,
      type: "Erro ao deletar um usuário",
      userId: "1",
    });
    return res
      .status(500)
      .json({ message: "Ops, algo deu errado, tente novamente mais tarde!" });
  }
}

async function createUser(req, res) {
  const user = req.body;
  await usersServices.createUser(user);
  return res.json({ data: user, message: "Usuário criado com sucesso!" });
}

async function login(req, res) {
  const user = req.body;
  await usersServices.login(user);
  return res.json({ message: "Login realizado com sucesso!" });
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

export { listUsers, listUser, deleteUser, createUser, login, editUser };
