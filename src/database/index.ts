import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database"; // Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  if (newOptions.host === "database") {
    console.log("connection database is equal");
  }
  createConnection({
    ...options,
  });
});