import { nanoid } from "nanoid";

class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

// Here we're tryinh to set a object where we can dump some data.

// empty object where we can get any key-value pair and we'll send the id as key and others as the value

// Above code is just a boilerplate. To just dump the data.

//In the resolver, will we work with the methods we mentioned in the schema
const courseholder = {};

const resolvers = {
  // query type method
  getCourse: ({ id }) => {
    return new Course(id, courseholder[id]);
  },
  // mutation type method
  createCourse: ({ input }) => {
    let id = nanoid();
    courseholder[id] = input;
    return new Course(id, input);
  },
};
// const resolvers = {
//     getCourse : ({ id }) => {
//         return new Course(id, courseholder[id])
//     },
//     createCourse: ({ input }) => {
//         courseholder[id] = input
//         return new Course(id, input)
//     }
// }

export default resolvers;
