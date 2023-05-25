import {useMatches} from '@remix-run/react';

export function Layout({children, title}) {

  return (
    <div>
      <div style = {{backgroundColor: '#407c7d', height: '51px', padding: '5px'}} >
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
              Cart
            </a>
          </span>
        </div>
      </div>
      <main style = {{fontSize: '20px', padding: '5px',backgroundColor: '#b19f9f'}}>
        {children}
      </main>
    </div>
  );
}
