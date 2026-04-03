export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Arduino Uno R3",
    description: "The classic microcontroller board for beginners and pros alike. Perfect for robotics projects.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1553406830-8af03cf51ce4?w=400&h=300&fit=crop",
    category: "Microcontrollers",
  },
  {
    id: "2",
    name: "Raspberry Pi 5",
    description: "Powerful single-board computer with quad-core ARM processor. Ideal for AI and robotics.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1629292048402-06b4ba0e0872?w=400&h=300&fit=crop",
    category: "Microcontrollers",
  },
  {
    id: "3",
    name: "Servo Motor Pack (5x)",
    description: "High-torque micro servo motors for precise robotic arm and joint movements.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    category: "Motors",
  },
  {
    id: "4",
    name: "Ultrasonic Sensor HC-SR04",
    description: "Distance measuring sensor for obstacle avoidance. Range: 2cm to 400cm.",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
    category: "Sensors",
  },
  {
    id: "5",
    name: "Robot Chassis Kit",
    description: "2WD smart car chassis with motors, wheels, and battery holder included.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
    category: "Kits",
  },
  {
    id: "6",
    name: "LiPo Battery 3S 2200mAh",
    description: "High-capacity lithium polymer battery for drones and robots.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1619641805634-98e5c833fc24?w=400&h=300&fit=crop",
    category: "Power",
  },
];
