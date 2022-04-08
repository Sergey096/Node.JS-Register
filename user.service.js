const connection = require("../../config/database");

module.exports = {
  create: (data, callBack) => {
    connection.query(
      `insert into users(firstName, lastName, email, password) 
                values(?,?,?,?)`,
      [
        data.first_name,
        data.last_name,
        data.email,
        data.password,
      ],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getUserByUserEmail: (email, callBack) => {
    connection.query(
      `select * from users where email = ?`,
      [email],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  getUsers: callBack => {
    connection.query(
      `select id,firstName,lastName,email from users`,
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
};