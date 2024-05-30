import { Box, Container, VStack, Heading, Text, SimpleGrid, Image, Flex, Input, Select, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";
import { useState } from "react";

const sampleProducts = [
  {
    id: 1,
    name: "Smartphone",
    description: "Latest model with advanced features",
    image: "https://via.placeholder.com/150",
    price: 699,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Laptop",
    description: "High performance laptop for work and play",
    image: "https://via.placeholder.com/150",
    price: 999,
    category: "Electronics",
  },
  {
    id: 3,
    name: "Smartwatch",
    description: "Stay connected on the go",
    image: "https://via.placeholder.com/150",
    price: 199,
    category: "Accessories",
  },
  {
    id: 4,
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones",
    image: "https://via.placeholder.com/150",
    price: 299,
    category: "Accessories",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery);
    return matchesCategory && matchesPrice && matchesSearch;
  });

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
        <Flex width="100%" justifyContent="space-between" mb={4}>
          <Select placeholder="Select category" onChange={handleCategoryChange} width="30%">
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
          </Select>
          <Box width="60%">
            <Text>Price Range: ${priceRange[0]} - ${priceRange[1]}</Text>
            <Slider
              min={0}
              max={1000}
              step={50}
              defaultValue={[0, 1000]}
              onChangeEnd={handlePriceChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={6} index={0} />
              <SliderThumb boxSize={6} index={1} />
            </Slider>
          </Box>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>
                  {product.name}
                </Heading>
                <Text mb={4}>{product.description}</Text>
                <Text fontWeight="bold">${product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;