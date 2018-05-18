export default {
  development: {
    username: 'root',
    password: 'password',
    database: 'sequelize_error_dev',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'travis',
    password: 'travis',
    database: 'sequelize_error_test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};
