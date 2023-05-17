import ProductCard from './ProductCard';

export default function ProductGrid({collection, url}) {

  return (
    <section>
      <div>
        {collection.products.nodes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
