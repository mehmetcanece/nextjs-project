export interface Food {
  name: string;
  type: string;
  order?: number;
  price: number;
  description: string;
  image: string;
}

const foodData: Food[] = [
  {
    name: "Big Mac",
    type: "Burger",
    order: 1,
    price: 8.99,
    description:
      "A classic burger with cheese, lettuce, tomato, and our special sauce.",
    image: "bigmac.png",
  },
  {
    name: "Cheeseburger",
    type: "Burger",
    order: 2,
    price: 6.99,
    description: "A classic burger with cheese, lettuce, and tomato.",
    image: "foodburger.png",
  },
  {
    name: "Double Big Mac",
    type: "Burger",
    order: 3,
    price: 10.99,
    description: "Two layers of classic Big Mac goodness with extra patties.",
    image: "big-mac-double.png",
  },
  {
    name: "Hamburger",
    type: "Burger",
    order: 4,
    price: 5.99,
    description: "A simple yet delicious burger with a seasoned beef patty.",
    image: "foodburger.png",
  },
  {
    name: "McChicken",
    type: "Burger",
    order: 5,
    price: 7.49,
    description: "A crispy chicken patty with lettuce and mayonnaise.",
    image: "mcchicken.png",
  },

  {
    name: "Pepperoni Pizza",
    type: "Pizza",
    order: 1,
    price: 12.49,
    description:
      "Traditional pepperoni pizza with mozzarella cheese and homemade tomato sauce.",
    image: "zyro-image (2).png",
  },
  {
    name: "Mixed Pizza",
    type: "Pizza",
    order: 2,
    price: 15.49,
    description:
      "A mixed pizza with mozzarella cheese, corn, olives, pepper, mushroom and homemade tomato sauce.",
    image: "zyro-image (4).png",
  },
  {
    name: "BBQ Chicken Pizza",
    type: "Pizza",
    order: 3,
    price: 18.49,
    description:
      "A pizza with mozzarella cheese, special BBQ sauce, chicken and homemade tomato sauce.",
    image: "zyro-image (1).png",
  },
  {
    name: "Mixed Kebap",
    type: "Kebap",
    order: 1,
    price: 20.99,
    description: "Mixed kebap plate with lamb, chicken, rice, and vegetables.",
    image: "zyro-image (5).png",
  },
  {
    name: "Urfa Kebap",
    type: "Kebap",
    order: 2,
    price: 15.99,
    description: "Lamb meat plate with rice , and vegetables.",
    image: "urfa.png",
  },

  {
    name: "Adana Kebap",
    type: "Kebap",
    order: 3,
    price: 15.99,
    description: "Hot and spicy lamb meat plate with rice , and vegetables.",
    image: "adana.png",
  },

  {
    name: "Caesar Salad",
    type: "Salad",
    order: 1,
    price: 7.99,
    description:
      "Classic Caesar salad with romaine lettuce, croutons, parmesan cheese, and Caesar dressing.",
    image: "zyro-image.png",
  },

  {
    name: "Fresh Fruit Bowl",
    type: "Fruit",
    order: 1,
    price: 6.49,
    description: "Assortment of fresh seasonal fruits.",
    image: "zyro-image (3).png",
  },

  {
    name: "Turkish Baklava",
    type: "Dessert",
    order: 1,
    price: 8.99,
    description:
      "Traditional Turkish pastry made of layers of filo dough filled with nuts and sweetened with honey or syrup.",
    image: "zyro-image (9).png",
  },
  {
    name: "Suffle",
    type: "Dessert",
    order: 2,
    price: 7.99,
    description:
      "Decadent chocolate suffle served with a scoop of vanilla ice cream.",
    image: "zyro-image (11).png",
  },
  {
    name: "Ice Cream",
    type: "Dessert",
    order: 3,
    price: 4.99,
    description: "Creamy and delicious ice cream available in various flavors.",
    image: "zyro-image (8).png",
  },
  {
    name: "Coca Cola",
    type: "Bevarage",
    order: 4,
    price: 2.49,
    description: "Classic Coca Cola, the original refreshing soda.",
    image: "zyro-image (7).png",
  },

  {
    name: "Coca Cola Zero",
    type: "Bevarage",
    order: 5,
    price: 2.49,
    description:
      "Coca Cola Zero, the zero-sugar, zero-calorie version of Coca Cola.",
    image: "zyro-image (6).png",
  },
  {
    name: "Ice Tea",
    type: "Bevarage",
    order: 6,
    price: 3.49,
    description: "Refreshing iced tea brewed from fine tea leaves.",
    image: "zyro-image (10).png",
  },
  {
    name: "Water",
    type: "Bevarage",
    order: 7,
    price: 1.99,
    description: "Purified water served chilled.",
    image: "zyro-image (12).png",
  },
];

export default foodData;
