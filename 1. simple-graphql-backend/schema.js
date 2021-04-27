import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Course {
    id: ID
    courseName: String!
    category: String
    price: Int
    language: String
    email: String
    teachingAssists: [TeachingAssist]
  }

  type TeachingAssist {
    firstName: String
    lastName: String
    experience: Int
  }

  
  type Query {
      getCourse(id: ID): Course
  }

  input CourseInput{
      id: ID
      courseName: String!
      category: String
      price: Int
      language: String
      email: String
      teachingAssists: [TeachingAssistInput]
  }

  input TeachingAssistInput{
      firstName: String
      lastName: String
      experience: Int
  }

  type Mutation {
      createCourse(input: CourseInput): Course
  }
`);

export default schema;

// When we get a query type, this will be resolved by the resolver. It was responsible for accepting the query and give the response. So, we will create a method "getCourse" in the resolver and it will return a course based on the input id.

// query types is to get the data and input types is to set the data.

// mutation is responsible for filling the data in the database with help of input types
