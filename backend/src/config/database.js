require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "pool": {
      "max": 10,       // máx de conexões abertas
      "min": 0,        // não mantém conexões fixas à toa
      "idle": 10000,   // fecha conexões ociosas após 10s
      "acquire": 30000 // tempo máximo esperando conexão
    },
  },
}
