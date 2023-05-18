import {useMatches} from '@remix-run/react';

export function Layout({children, title}) {
  return (
    <div style={{ margin: '0px 10px 0px 10px' }} >
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
            <a href="/cart" style = {{fontSize: '20px', textDecoration: 'none', color: 'white',marginRight: '20px'}}>
              Cart
            </a>
          </span>
        </div>
      </div>
        <br/>

      <main
        id="mainContent"
        style = {{fontSize: '20px', padding: '5px'}}
      >
        {children}
      </main>
    </div>
  );
}
