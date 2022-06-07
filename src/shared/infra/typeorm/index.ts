import { Connection, createConnection, getConnectionOptions } from "typeorm";

export default async (host = "database"): Promise<Connection> => {
  const defaultOtions = await getConnectionOptions();

  return createConnection(
    Object.assign(defaultOtions, {
      host: process.env.NODE_ENV === "test" ? "localhost" : host,
      database:
        process.env.NODE_ENV === "test"
          ? "rentxdb_test"
          : defaultOtions.database,
    })
  );
};
