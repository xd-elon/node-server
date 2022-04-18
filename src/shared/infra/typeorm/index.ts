import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const defaultOtions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOtions, {
      host,
    })
  );
};
