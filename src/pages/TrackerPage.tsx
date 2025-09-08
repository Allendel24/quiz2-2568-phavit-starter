// import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
// import { v4 as uuidv4 } from "uuid";

// type FoodItem = {
//   id: string;
//   name: string;
//   price: number | string;
//   quantity: number | string;
//   category: string;
// };

export default function FoodTracker() {
  // const [opened, setOpened] = useState(false);
  // const [items, setItems] = useState<FoodItem[]>([]);
  // const categories = ["Main Course", "Drink", "Dessert"];

  // const handleAdd = () => {
  //   //make a new array based on old "tasks" and add newTask as last one
  //   const newItem: FoodItem = {
  //     id: uuidv4(),
  //     // name:,
  //     // price:,
  //     // quantity:,
  //     // category:

  //   };
  //   setItems((prev) => [...prev, newItem]);
  // };

  // const deleteItem = (foodId: string) => {
  //   const newFoods = items.filter((item: FoodItem) => item.id !== foodId);
  //   setItems(newFoods);
  // };



  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button
      // onClick={handleAdd()}
      >
        Add Food Item
      </Button>
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total: { } Baht</Title>
      <Stack my="sm">{
        /* Type additional text here. */
        <div>
          <p>Main Course: { } Baht</p>
          <p>Drink: { } Baht</p>
          <p>Dessert: { } Baht</p>
        </div>
      }</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}
