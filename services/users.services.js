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

export { listUsers, listUser, removeUser };
