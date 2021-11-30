import { Dialect, Sequelize } from "sequelize";
import dabaseConfig from "../config/database.js";

const db = new Sequelize(
    dabaseConfig.database!,
    dabaseConfig.username!,
    dabaseConfig.password!,
    {
        dialect: dabaseConfig.dialect as Dialect,
        host: dabaseConfig.host,
        port: +dabaseConfig.port!,
        define: dabaseConfig.define,
    }
);

export default db;
