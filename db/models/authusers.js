
module.exports = (sequelize, DataTypes) => {
  const AuthUsers = sequelize.define('AuthUsers', {
    username: {
      type: DataTypes.STRING,
      required: true,
    },
    googleId: {
      type: DataTypes.STRING,
      required: true,
    },
  }, {});
  // eslint-disable-next-line no-unused-vars
  AuthUsers.associate = (models) => {
    // associations can be defined here
  };
  return AuthUsers;
};
