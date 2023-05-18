import { Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';

export default function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <>
      <div className="listing-section s">
        <Link to={`/products/${product.handle}`} style={{color: '#206A60'}}>
          <div className="product s">
            <div className="image-box s">
              <div className="images">
                <Image
                  data={product.variants.nodes[0].image}
                  alt={product.title}
                  width = {280}
                  style = {{borderRadius: '5%'}}
                />
              </div>
            </div>
            <div className="text-box s">
              <h2 class=" headd item s">
                {product.title}
              </h2>
              <h3 class=" headd price s">
                <Money withoutTrailingZeros data={price} />
              </h3>
              <p class="description s">
                {isDiscounted && (
                  <label style = {{color: 'green'}}>
                    Sale🎉🎉
                  </label>
                )}
              </p>
              <p class="description s">
                {!isDiscounted && (
                  <label style = {{color: 'green'}}>
                    In Offer Soon🎉
                  </label>
                )}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
