import {useMatches} from '@remix-run/react';
import { useState, createContext, useContext } from "react";

export const UserContext = createContext();

export function Layout({children, title}) {
  const [totalCartItem, setTotalCartItem] = useState(10);
  return (
    <div>
      <div style = {{backgroundColor: 'black', height: '51px', padding: '5px'}} >
        <div >
          <a href="/" style = {{fontSize: '35px', textDecoration: 'none', color: 'white'}}>
            {title}
          </a>
        </div>
        <div style={{float: 'right',marginTop: '-30px'}}>
          <span>
            <a href="/" style = {{fontSize: '20px', textDecoration: 'none', color: 'white',marginRight: '20px'}}>
              Home
            </a>
          </span>
          <span>
            <a id = 'cartField' href="/cart" style = {{fontSize: '20px', textDecoration: 'none', color: 'white',marginRight: '20px'}}>
              Cart{totalCartItem}
            </a>
          </span>
        </div>
      </div>
      <br/>
      <main style = {{fontSize: '20px', padding: '5px'}}>
        <UserContext.Provider value={{totalCartItem,setTotalCartItem}}>
          {children}
        </UserContext.Provider>
      </main>
    </div>
  );
}
