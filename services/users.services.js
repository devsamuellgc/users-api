import * as usersRepository from "../repositories/users.repository.js";

async function listUsers() {
  const users = await usersRepository.listUsers();
  return users;
}

async function listUser(id) {
  const user = await usersRepository.listUser(id);
  return user;
}

async function removeUser(id) {
  const removedUser = await usersRepository.removeUser(id);
  return removedUser;
}

async function createUser(user) {
  const createdUser = await usersRepository.createUser(user);
  return createdUser;
}

async function login(data) {
  const user = await usersRepository.listUserByEmail(data.email);
  if (data.password === user.password) {
    return true;
  }
  return false;
}

async function editUser(id, user) {
  const editedUser = await usersRepository.editUser(id, user);
  return editedUser;
}

export { listUsers, login, listUser, removeUser, createUser, editUser };
