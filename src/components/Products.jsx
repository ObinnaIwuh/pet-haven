import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    icon: "🥩",
    name: "Premium Dog Food",
    category: "Dogs",
    price: "₦18,500",
    description: "Balanced nutrition for healthy and active dogs.",
  },
  {
    id: 2,
    icon: "🦴",
    name: "Puppy Starter Pack",
    category: "Dogs",
    price: "₦12,000",
    description: "Essential nutrition for growing puppies.",
  },
  {
    id: 3,
    icon: "🐟",
    name: "Premium Cat Food",
    category: "Cats",
    price: "₦15,000",
    description: "Nutritious meals specially made for cats.",
  },
  {
    id: 4,
    icon: "🍖",
    name: "Cat Treats",
    category: "Cats",
    price: "₦7,500",
    description: "Tasty treats your cat will love.",
  },
  {
    id: 5,
    icon: "🌾",
    name: "Bird Seed Mix",
    category: "Birds",
    price: "₦6,500",
    description: "A nutritious seed blend for pet birds.",
  },
  {
    id: 6,
    icon: "🐠",
    name: "Tropical Fish Food",
    category: "Fish",
    price: "₦5,500",
    description: "Complete nutrition for tropical aquarium fish.",
  },
];

function Products() {
  return (
    <section className="section products-section" id="shop">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">OUR PRODUCTS</span>
          <h2>Featured Pet Essentials</h2>
          <p>
            Quality products selected to support happy and healthy pets.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;