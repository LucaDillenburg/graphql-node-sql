module.exports = {
    dialect: 'postgres',
    database: 'nodedatabase',
    username: 'postgres',
    password: null,
    host: 'localhost',
    port: '5432',
    define: {
        timestamps: true,
        underscored: true,
    }
};
