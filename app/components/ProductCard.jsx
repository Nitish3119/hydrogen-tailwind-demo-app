import { Link } from '@remix-run/react';
import { Image, Money } from '@shopify/hydrogen';

export default function ProductCard({ product }) {
  const { price, compareAtPrice } = product.variants?.nodes[0] || {};
  const updatedPrice = {amount: `${price.amount}`, currencyCode: 'USD'};
  const isDiscounted = compareAtPrice?.amount > price?.amount;

  return (
    <>
      <div className="listing-section s" style = {{backgroundColor: '#b19f9f'}}>
        <Link to={`/products/${product.handle}`}>
          <div className="product s" style = {{backgroundColor: 'white'}}>
            <div className="image-box s">
              <div className="images">
                <Image
                  data={product.variants.nodes[0].image}
                  alt={product.title}
                  width = {280}
                  style = {{borderRadius: '5%',marginLeft: '33.5px',marginTop: '12px'}}
                />
              </div>
            </div>
            <div className="text-box s" style = {{backgroundColor: '#282222',color: 'white'}}>
              <h2 className=" headd item s" style={{minHeight: '50px'}}>
                <b style = {{fontSize: '14px'}}>{product.title}</b>
              </h2>
              <h3 className=" headd price s" style = {{color: 'powderblue'}}>
                <Money withoutTrailingZeros data={updatedPrice}/>
              </h3>
              <p className="description s">
                {isDiscounted && (
                  <label style = {{color: 'green'}}>
                    Sale🎉🎉
                  </label>
                )}
              </p>
              <p className="description s" style = {{marginTop: '-5px'}}>
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
