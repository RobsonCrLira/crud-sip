require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
});

export const host = process.env.DB_HOST;
export const username = process.env.DB_USER;
export const password = process.env.DB_PASS;
export const database = process.env.DB_NAME;
export const dialect = process.env.DB_DIALECT || "postgres";
export const operatorsAliases = false;
export const logging = false;
export const define = {
  timestamps: true,
  underscored: true,
  underscoredAll: true
};