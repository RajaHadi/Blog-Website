// src/posts.js (or wherever your posts data is stored)
import I1 from "../../public/IMG1.png"
import I2 from "../../public/img2.jpg"
import I3 from "../../public/IMG5.jpg"
import I4 from "../../public/img4.png"
import I5 from "../../public/img5.png"
import I6 from "../../public/img6.jpg"
export const posts = [
    {
      slug: "nextjs-routing",
      title: "Understanding Next.js Routing",
      content: "Next.js simplifies routing by using file-based routing. Each file in the pages folder becomes a route. This means developers can focus on building their apps without worrying about configuring routes manually.",
      date: "2024-12-01",
      category: "Next.js",
      image: I2 // Image URL
    },
    {
      slug: "nextjs-ssr",
      title: "Server-Side Rendering with Next.js",
      content: "SSR in Next.js allows you to render pages on the server at request time, ensuring fresh and dynamic content is delivered to the user.",
      date: "2024-12-10",
      category: "Next.js",
      image: I1 // Image URL
    },
    {
      slug: "nextjs-api",
      title: "Building APIs with Next.js",
      content: "Next.js enables developers to create API routes within their application with ease. These routes can be used for server-side logic, database interactions, or anything else a typical API does.",
      date: "2024-12-20",
      category: "Next.js",
      image: I3// Image URL
    },
    {
      slug: "learning-react-hooks",
      title: "Learning React Hooks",
      content: "React Hooks are a new addition to React that allow developers to use state and other features without writing a class. Hooks provide a more functional and concise way to manage state, side effects, and more.",
      date: "2024-12-25",
      category: "Other",
      image: I4// Image URL
    },
    {
      slug: "guide-to-tailwind-css",
      title: "A Guide to Tailwind CSS",
      content: "Tailwind CSS is a utility-first CSS framework that provides low-level, composable utility classes. It allows developers to style their applications without having to write custom CSS, resulting in faster development.",
      date: "2024-12-28",
      category: "Other",
      image: I5// Image URL
    },
    {
      slug: "building-restful-api",
      title: "How to Build a RESTful API",
      content: "A RESTful API follows REST principles, providing standardized methods of communication between clients and servers. RESTful APIs are stateless, use HTTP methods like GET, POST, PUT, DELETE, and return data in JSON format.",
      date: "2024-12-30",
      category: "Other",
      image:I6 // Image URL
    }
  ];
  
  