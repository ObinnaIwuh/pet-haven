function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-image">
        <span>{product.icon}</span>
      </div>

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <strong>{product.price}</strong>

          <button className="add-button">
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;