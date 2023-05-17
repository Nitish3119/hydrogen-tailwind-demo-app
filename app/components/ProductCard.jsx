import { Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';

export default function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <>
      <div>
        <div>
          <Image
            data={product.variants.nodes[0].image}
            alt={product.title}
            width = {300}
            style = {{borderRadius: '5%'}}
          />
        </div>
        <br />
        <Link to={`/products/${product.handle}`} style={{ float: 'left', margin: '5px', color: '#206A60'}}>
          <div style = {{maxWidth: '55%'}}>
            <h3>
              {product.title}
              {isDiscounted && (
                <label>
                  (Sale)
                </label>
              )}
            </h3>
            <div>
              <span>
                <Money withoutTrailingZeros data={price} />
                {isDiscounted && (
                  <Money
                    withoutTrailingZeros
                    data={compareAtPrice}
                  />
                )}
              </span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
