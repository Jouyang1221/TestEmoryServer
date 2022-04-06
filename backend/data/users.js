import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@emory.edu",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Blake Mandell",
    email: "blake@emory.edu",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Kevin Seo",
    email: "kevin@emory.edu",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
