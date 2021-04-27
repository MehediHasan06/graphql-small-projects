import { users } from "./db";

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    user: ({ id }) => {
      return users.find((user) => user.id === id);
    },
  },
  Mutation: {
    createUser: ({ id, name, email, age }) => {
      const newUser = { id, name, email, age };

      users.push(newUser);

      return newUser;
    },
    updateUser: ({ id, name, email, age }) => {
      let newUser = users.find((user) => user.id === id);

      newUser.name = name;
      newUser.email = email;
      newUser.age = age;

      return newUser;
    },
    deleteUser: ({ id }) => {
      const userIndex = users.findIndex((user) => user.id === id);

      if (userIndex === -1) throw new Error("User not found.");

      const deletedUsers = users.splice(userIndex, 1);

      return deletedUsers[0];
    },
  },
};

export default resolvers;
