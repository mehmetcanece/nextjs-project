export interface Food {
  id: number;
  name: string;
  type: string;
  order?: number;
  price: number;
  description: string;
  image: string;
  ingredients: string;
}

const foodData: Food[] = [
  {
    id: 1,
    name: "Big Mac",
    type: "Burger",
    order: 1,
    price: 8.99,
    description: "A classic BigMac.",
    image: "/bigmac.png",
    ingredients:
      "Beef Patty, Special Sauce, Lettuce, Cheese, Pickles, Onions, Sesame Seed Bun",
  },
  {
    id: 2,
    name: "Cheeseburger",
    type: "Burger",
    order: 2,
    price: 6.99,
    description: "A classic cheeseburger.",
    image: "/foodburger.png",
    ingredients:
      "Beef Patty, Cheese, Lettuce, Tomato, Pickles, Onions, Sesame Seed Bun",
  },
  {
    id: 3,
    name: "Double Big Mac",
    type: "Burger",
    order: 3,
    price: 10.99,
    description: "Two layers of classic Big Mac goodness with extra patties.",
    image: "/big-mac-double.png",
    ingredients:
      "Double Beef Patty, Special Sauce, Lettuce, Cheese, Pickles, Onions, Sesame Seed Bun",
  },
  {
    id: 4,
    name: "Hamburger",
    type: "Burger",
    order: 4,
    price: 5.99,
    description: "A simple yet delicious burger.",
    image: "/foodburger.png",
    ingredients:
      "Beef Patty, Seasoning, Lettuce, Tomato, Pickles, Onions, Sesame Seed Bun",
  },
  {
    id: 5,
    name: "McChicken",
    type: "Burger",
    order: 5,
    price: 7.49,
    description: "A crispy chicken patty.",
    image: "/mcchicken.png",
    ingredients: "Chicken Patty, Lettuce, Mayonnaise, Sesame Seed Bun",
  },
  {
    id: 6,
    name: "Pepperoni Pizza",
    type: "Pizza",
    order: 1,
    price: 12.49,
    description: "Traditional pepperoni pizza.",
    image: "/zyro-image (2).png",
    ingredients: "Pepperoni, Mozzarella Cheese, Tomato Sauce, Pizza Dough",
  },
  {
    id: 7,
    name: "Mixed Pizza",
    type: "Pizza",
    order: 2,
    price: 15.49,
    description: "A mixed pizza with homemade ingredients.",
    image: "/zyro-image (4).png",
    ingredients:
      "Mozzarella Cheese, Corn, Olives, Pepper, Mushroom, Tomato Sauce, Pizza Dough",
  },
  {
    id: 8,
    name: "BBQ Chicken Pizza",
    type: "Pizza",
    order: 3,
    price: 18.49,
    description: "A BBQ Chicken Pizza which you'll never forget.",
    image: "/zyro-image (1).png",
    ingredients:
      "BBQ Sauce, Chicken, Mozzarella Cheese, Tomato Sauce, Pizza Dough",
  },
  {
    id: 9,
    name: "Mixed Kebap",
    type: "Kebap",
    order: 1,
    price: 20.99,
    description: "Mixed Turkish Kebap.",
    image: "/zyro-image (5).png",
    ingredients: "Lamb, Chicken, Rice, Vegetables",
  },
  {
    id: 10,
    name: "Urfa Kebap",
    type: "Kebap",
    order: 2,
    price: 15.99,
    description: "Traditional Urfa Kebap.",
    image: "/urfa.png",
    ingredients: "Lamb, Rice, Vegetables",
  },
  {
    id: 11,
    name: "Adana Kebap",
    type: "Kebap",
    order: 3,
    price: 15.99,
    description: "Traditional Adana Kebap. Spicy!",
    image: "/adana.png",
    ingredients: "Spicy Lamb, Rice, Vegetables",
  },
  {
    id: 12,
    name: "Caesar Salad",
    type: "Salad",
    order: 1,
    price: 7.99,
    description: "Classic Caesar salad with our special Caesar sauce.",
    image: "/zyro-image.png",
    ingredients: "Romaine Lettuce, Croutons, Parmesan Cheese, Caesar Dressing",
  },
  {
    id: 13,
    name: "Fresh Fruit Bowl",
    type: "Fruit",
    order: 1,
    price: 6.49,
    description: "Fresh fruits from garden.",
    image: "/zyro-image (3).png",
    ingredients: "Assorted Fresh Fruits",
  },
  {
    id: 14,
    name: "Turkish Baklava",
    type: "Dessert",
    order: 1,
    price: 8.99,
    description:
      "Traditional Turkish pastry made of layers of filo dough filled with nuts and sweetened with honey or syrup.",
    image: "/zyro-image (9).png",
    ingredients: "Filo Dough, Nuts, Honey or Syrup",
  },
  {
    id: 15,
    name: "Suffle",
    type: "Dessert",
    order: 2,
    price: 7.99,
    description:
      "Decadent chocolate suffle served with a scoop of vanilla ice cream.",
    image: "/zyro-image (11).png",
    ingredients: "Chocolate, Flour, Sugar, Eggs, Vanilla Ice Cream",
  },
  {
    id: 16,
    name: "Ice Cream",
    type: "Dessert",
    order: 3,
    price: 4.99,
    description: "Creamy and delicious ice cream available in various flavors.",
    image: "/zyro-image (8).png",
    ingredients: "Cream, Sugar, Flavoring",
  },
  {
    id: 17,
    name: "Coca Cola",
    type: "Beverage",
    order: 4,
    price: 2.49,
    description: "Classic Coca Cola, the original refreshing soda.",
    image: "/zyro-image (7).png",
    ingredients: "Carbonated Water, Sugar, Flavorings",
  },
  {
    id: 18,
    name: "Coca Cola Zero",
    type: "Beverage",
    order: 5,
    price: 2.49,
    description:
      "Coca Cola Zero, the zero-sugar, zero-calorie version of Coca Cola.",
    image: "/zyro-image (6).png",
    ingredients: "Carbonated Water, Artificial Sweeteners, Flavorings",
  },
  {
    id: 19,
    name: "Ice Tea",
    type: "Beverage",
    order: 6,
    price: 3.49,
    description: "Refreshing iced tea brewed from fine tea leaves.",
    image: "/zyro-image (10).png",
    ingredients: "Tea Leaves, Water, Sugar, Flavorings",
  },
  {
    id: 20,
    name: "Water",
    type: "Beverage",
    order: 7,
    price: 1.99,
    description: "Purified water served chilled.",
    image: "/zyro-image (12).png",
    ingredients: "Purified Water",
  },
];

export default foodData;
