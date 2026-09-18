const categories = [
  {
    icon: "🐶",
    name: "Dogs",
    description: "Food, treats and essentials for dogs.",
  },
  {
    icon: "🐱",
    name: "Cats",
    description: "Everything your cat needs to stay happy.",
  },
  {
    icon: "🐦",
    name: "Birds",
    description: "Quality food and care products for birds.",
  },
  {
    icon: "🐠",
    name: "Fish",
    description: "Food and essentials for your aquarium.",
  },
];

function Categories() {
  return (
    <section className="section categories-section" id="categories">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">SHOP BY CATEGORY</span>
          <h2>Find What Your Pet Needs</h2>
          <p>
            Explore our selection of products made for different types
            of pets.
          </p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.name}>
              <div className="category-icon">{category.icon}</div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <a href="#shop">View Products →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;