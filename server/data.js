import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Kris",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      // _id: "1",
      name: "Nike Shirt",
      slug: "nike-shirt",
      category: "Shirts",
      image: "/images/p1.jpg", // 679px x 829px
      price: 100,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Shirt",
    },
    {
      // _id: "2",
      name: "Adidas Shirt",
      slug: "adidas-shirt",
      category: "Shirts",
      image: "/images/p2.jpg",
      price: 75,
      countInStock: 0,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description: "High Quality Shirt",
    },
    {
      // _id: "3",
      name: "Puma Shirt",
      slug: "puma-shirt",
      category: "Shirts",
      image: "/images/p3.jpg",
      price: 95,
      countInStock: 15,
      brand: "Puma",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Shirt",
    },
    {
      // _id: "4",
      name: "Nike Pants",
      slug: "nike-pants",
      category: "Pants",
      image: "/images/p4.jpg",
      price: 100,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Pants",
    },
    {
      // _id: "5",
      name: "Adidas Pants",
      slug: "adidas-pants",
      category: "Pants",
      image: "/images/p5.jpg",
      price: 100,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "High Quality Pants",
    },
  ],
};

export default data;
