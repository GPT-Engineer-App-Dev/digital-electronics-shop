import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Link, Flex, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/150",
    price: "$699",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    image: "https://via.placeholder.com/150",
    price: "$999",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    image: "https://via.placeholder.com/150",
    price: "$199",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    image: "https://via.placeholder.com/150",
    price: "$299",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredProducts = sampleProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Welcome to ElectroShop
        </Heading>
        <Text fontSize="lg" textAlign="center">
          Your one-stop shop for the latest electronics
        </Text>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearchChange}
          mb={4}
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;