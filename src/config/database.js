module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'ale@2001',
  database: 'sqlnode',
  define: {
    timestamps: true,
    underscored: true, // snake case
  },
};

// created_at, updated_at
