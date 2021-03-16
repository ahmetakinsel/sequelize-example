module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING
    })
};

// (models) this is where we define fields,types and other relevant information concerning a table and its definition 
//We are exporting a function that will return a model instance.
