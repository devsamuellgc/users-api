import * as logsRepository from "../repositories/logs.repository.js";

async function createLog(log) {
  const createdLog = await logsRepository.createLog(log);
  return createdLog;
}

export { createLog };
