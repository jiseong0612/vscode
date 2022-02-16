"use strict";

class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "ellie" && pw === "dream") {
          resolve(id);
        } else {
          reject(new Error("not found"));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "ellie") {
          resolve({ name: "ellie", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter ur id");
const pw = prompt("enter ur pw");

userStorage
  .loginUser(id, pw)
  .catch(console.log)
  .then(userStorage.getRoles)
  .catch(console.log)
  .then((user) => alert(`${user.name} you have ${user.role} role`));
