import {useMatches} from '@remix-run/react';
import '../styles/layout.css';
export function Layout({children, title}) {

  return (
    <div>
      <div style = {{backgroundColor: '#407c7d', height: '51px', padding: '5px'}} >
        <div className="container">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text style = {{textAnchor: "middle", x: "200px", y: "200px"}}>Webiedev</text>
            </symbol>

            <g className = "g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </svg>
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
