import React from 'react';
import {Link, useFetcher} from '@remix-run/react';
import {flattenConnection, Image, Money} from '@shopify/hydrogen-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


export function CartLineItems({linesObj, cart}) {
  const lines = flattenConnection(linesObj);
  return (
    <div className="space-y-8">
      {lines.map((line) => {
        return <LineItem key={line.id} lineItem={line} cart={cart}/>;
      })}
    </div>
  );
}

function LineItem({lineItem, cart}) {
  const {merchandise, quantity} = lineItem;

  return (
    <div>
      <div style = {{width: '20%', float: 'left', minHeight: '120px', padding: '5px'}}>
        <Image data={merchandise.image} width={110} height={110} alt="image" />
      </div>
      <div style = {{width: '50%', float: 'left', minHeight: '120px', padding: '5px',marginLeft: '1%'}}>
        <Link to={`/products/${merchandise.product.handle}`}>
          {merchandise.product.title}
        </Link>
        <div>{merchandise.title}</div>
        <div>Qty: {quantity}</div>
        <ItemRemoveButton lineIds={[lineItem.id]} />
      </div>
      <div style = {{width: '20%', float: 'left', minHeight: '120px', padding: '5px',marginLeft: '1%'}}>
        <Money data={lineItem.cost.totalAmount} />
      </div>
    </div>
  );
}

function ItemRemoveButton({lineIds}) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value="REMOVE_FROM_CART" />
      <input type="hidden" name="linesIds" value={JSON.stringify(lineIds)} />
      <button
        className="bg-white border-black text-black hover:text-white hover:bg-black rounded-md font-small text-center my-2 max-w-xl leading-none border w-10 h-10 flex items-center justify-center"
        type="submit"
        style = {{backgroundColor: 'white'}}
      >
        <FontAwesomeIcon icon={faTrash} className="icn" />
      </button>
    </fetcher.Form>
  );
}

export function CartSummary({cost}) {
  return (
    <div>
      <div>
        <div style={{float:'left',width:'50%'}}>Subtotal</div>
        <div style={{textAlign:'right'}}>
          {cost?.subtotalAmount?.amount ? (
          <Money data={cost?.subtotalAmount} />
          ) : (
          '-'
          )}
        </div>
      </div>
      <div style={{marginTop:'10px'}}>
        <div style={{float:'left',width:'50%'}}>Shipping estimate</div>
        <div style={{textAlign:'right',color:'green',marginBottom:'20px'}}>Free and carbon neutral</div>
      </div>
    </div>
  );
}

export function CartActions({checkoutUrl}) {
  if (!checkoutUrl) return null;

  return (
    <center><div style={{backgroundColor:'black',width:'80%',textAlign:'center',minHeight:'33px',paddingTop:'6px',borderRadius:'6px'}}>
      <a href={checkoutUrl} style={{textDecoration:'none',color:'white'}}>
        Continue to Checkout
      </a>
    </div></center>
  );
}
