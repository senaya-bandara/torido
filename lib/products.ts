export const PRODUCTS = [
  {
    id: "tshirt-1",
    name: "Let's Go Boys T-Shirt White",
    price: "LKR 850",
    colors: [
      {
        name: "White",
        image: "/product9.png",
      },
      {
        name: "Gray",
        image: "/product4.png",
      },
    ],
    image: "/product9.png",
    badge: "COD",
    description:
      "Soft premium cotton tee designed for everyday play.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-2",
    name: "Little Tiger Boys T-Shirt Green",
    price: "LKR 850",
    colors: [
      {
        name: "Green",
        image: "/product2.png",
      },
    ],
    image: "/product2.png",
    badge: "COD",
    description:
      "Comfortable printed tee with a playful unicorn design.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-3",
    name: "Torido Boys T-Shirt Maroon",
    price: "LKR 850",
    colors: [
      {
        name: "Maroon",
        image: "/product3.png",
      },
      {
        name: "White",
        image: "/product8.png",
      },
      {
        name: "Black",
        image: "/product7.png",
      },
    ],
    image: "/product3.png",
    badge: "COD",
    description:
      "Comfortable printed tee with a playful unicorn design.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-4",
    name: "Let's Go Boys T-Shirt Black Gray",
    price: "LKR 850",
    colors: [
      {
        name: "Gray",
        image: "/product9.png",
      },
      {
        name: "White",
        image: "/product4.png",
      },
    ],
    image: "/product4.png",
    badge: "COD",
    description:
      "Soft premium cotton tee designed for everyday play.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-5",
    name: "Space Explorer Boys T-Shirt Gray",
    price: "LKR 850",
    colors: [
      {
        name: "Gray",
        image: "/product5.png",
      },
    ],
    image: "/product5.png",
    badge: "COD",
    description:
      "Comfortable printed tee with a playful unicorn design.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-6",
    name: "Little Jumbo Boys T-Shirt Black",
    price: "LKR 850",
    colors: [
      {
        name: "Black",
        image: "/product6.png",
      },
    ],
    image: "/product6.png",
    badge: "COD",
    description:
      "Comfortable printed tee with a playful unicorn design.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-7",
    name: "Torido Boys T-Shirt White",
    price: "LKR 850",
    colors: [
      {
        name: "Maroon",
        image: "/product3.png",
      },
      {
        name: "White",
        image: "/product8.png",
      },
      {
        name: "Black",
        image: "/product7.png",
      },
    ],
    image: "/product8.png",
    badge: "COD",
    description:
      "Soft premium cotton tee designed for everyday play.",
    sizes: ["S", "M", "L"],
  },

  {
    id: "tshirt-8",
    name: "Torido Boys T-Shirt Black",
    price: "LKR 850",
    colors: [
      {
        name: "Maroon",
        image: "/product3.png",
      },
      {
        name: "White",
        image: "/product8.png",
      },
      {
        name: "Black",
        image: "/product7.png",
      },
    ],
    image: "/product7.png",
    badge: "COD",
    description:
      "Comfortable printed tee with a playful unicorn design.",
    sizes: ["S", "M", "L"],
  },
];

/*
  BEST SELLERS
  These reference the actual products above.
  They do NOT create separate products.
*/

export const BEST_SELLERS = [
  PRODUCTS.find((p) => p.id === "tshirt-1")!,
  PRODUCTS.find((p) => p.id === "tshirt-2")!,
  PRODUCTS.find((p) => p.id === "tshirt-3")!,
  PRODUCTS.find((p) => p.id === "tshirt-5")!,
];

/*
  NEW ARRIVALS
  These also reference the actual products above.
*/

export const NEW_ARRIVALS = [
  PRODUCTS.find((p) => p.id === "tshirt-4")!,
  PRODUCTS.find((p) => p.id === "tshirt-5")!,
  PRODUCTS.find((p) => p.id === "tshirt-6")!,
  PRODUCTS.find((p) => p.id === "tshirt-7")!,
];
