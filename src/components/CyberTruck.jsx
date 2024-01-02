import React, { useEffect, useState } from 'react';
// import './style.css';  // Import the CSS styles

function MoussCybertruck() {
    const [carXPosition, setCarXPosition] = useState(22);  // Initial car position
    const [lightsXPosition, setLightsXPosition] = useState(0);  // Initial lights position

    useEffect(() => {
        // Handle mouse movement to move the car and lights
        const handleMouseMove = (event) => {
        const w = window.innerWidth;
        const x = event.clientX;
        const xPerc = Math.ceil((x / w) * 100);
        const xSpectrum = normVal(xPerc, -200, 200);

        setCarXPosition(xSpectrum + 22);
        setLightsXPosition(xSpectrum * 0.4);  // Adjust lights movement
        };

        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup function to remove event listener
        return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const normVal = (percentage, min, max) => {
        // Helper function to normalize a value between -100% and 100%
        return 1 * ((percentage / 100) * (max - min) + min).toFixed(0);
    };

  return (
    <div className="fixed-svg">
          <img className="img-absolute" src="https://img.freepik.com/free-vector/peisage-autumn-park-near-city_1268-15481.jpg?w=740&t=st=1704201973~exp=1704202573~hmac=1dba8c5f3925f156720bcd778c202e0093fd28494ee1393bbd5cd3646fd572b0" alt="City 1" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" className="svg-truck">
               <defs>
                    <linearGradient id="darkGrad" gradientTransform="rotate(90)">
                         <stop offset="5%" stop-color="#fefffe" />
                         <stop offset="20%" stop-color="#fefffe" />
                    </linearGradient>
                    <linearGradient id="lightGrad">
                         <stop offset="50%" stop-color="#000" />
                         <stop offset="100%" stop-color="#fff" />
                    </linearGradient>
                    <linearGradient id="skyGrad" gradientTransform="rotate(90)">
                         <stop offset="0%" stop-color="rgba(0,0,0,0)" />
                         <stop offset="50%" stop-color="rgba(0,0,0,0)" stop-opacity="0" />
                         <stop offset="95%" stop-color="#fff" />
                    </linearGradient>
                    <linearGradient id="skyGrad2" gradientTransform="rotate(90)">
                         <stop offset="0%" stop-color="rgba(0,0,0,0)" stop-opacity="0" />
                         <stop offset="100%" stop-color="#fff" stop-opacity="0.8" />
                    </linearGradient>
                    <linearGradient id="grassGrad" gradientTransform="rotate(90)">
                         <stop offset="0%" stop-color="orange" />
                         <stop offset="70%" stop-color="yellow" />
                    </linearGradient>
                    <linearGradient id="grassGradFront" gradientTransform="rotate(90)">
                         <stop offset="5%" stop-color="orange" />
                         <stop offset="60%" stop-color="#c6e24d" />
                    </linearGradient>
                    <linearGradient id="gravelGrad" gradientTransform="rotate(90)">
                         <stop offset="0%" stop-color="#c6e24d" />
                         <stop offset="60%" stop-color="orange" />
                    </linearGradient>
                    <linearGradient id="windowGrad" gradientTransform="rotate(-8)">
                         <stop offset="0%" stop-color="rgba(20,50,50,0.8)" />
                         <stop offset="15%" stop-color="rgba(20,50,50,0.8)" />
                         <stop offset="50%" stop-color="rgba(20,50,50,0.95)" />
                    </linearGradient>
                    <linearGradient id="tireGrad">
                         <stop offset="0%" stop-color="#000" />
                         <stop offset="50%" stop-color="#444" />
                         <stop offset="100%" stop-color="#000" />
                    </linearGradient>
                    <filter id="blur1" x="-100%" y="-100%" width="300%" height="300%">
                         <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
                    </filter>
                    <filter id="blur2" x="-100%" y="-100%" width="300%" height="300%">
                         <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    </filter>
                    <filter id="blur3" x="-100%" y="-100%" width="300%" height="300%">
                         <feGaussianBlur in="SourceGraphic" stdDeviation="0.7" />
                    </filter>
                    <filter id="blur4" x="-100%" y="-100%" width="300%" height="300%">
                         <feGaussianBlur in="SourceGraphic" stdDeviation="0.3" />
                    </filter>
                    <mask id="light">
                         <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
                         <path id="lightPath" d="M 228.3 58 L 450 53 v30 L 228.3 64.6z" fill="url(#lightGrad)" />
                    </mask>
               </defs>
               <g opacity="1" >
                    {/* <!-- sky --> */}
                    <rect id="sky" height="50" width="100%" fill="url('#skyGrad')" y="0" />
          
                    {/* <!-- mountains --> */}
                    <g id="mountain1" filter="url(#blur2)">
                         {/* <!-- mountain 1 --> */}
                         <path id="mtn1" d="M 56 50 L 140 50 L 111 19 L 100 15 L 90 17 L 79 25 Z" fill="white" />
                         {/* <!-- mountain 2 --> */}
                         <path id="mtn2" d="M 17 50 L 90 50 L 78 23 L 50 17 L 34 27 Z" fill="yellow" filter="brightness(80%)" />
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="370 0" to="-150 0" dur="20s" begin="-2s" repeatCount="indefinite" />
                    </g>
                    <g id="mountain2" filter="url(#blur1)">
                         <path id="mtn3" d="M 118 50 L 60 50 L 72 33 L 83 27 L 102 30 L 114 43 Z" fill="yellow" filter="brightness(90%)" />
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="370 0" to="-150 0" dur="20.1s" begin="-12s" repeatCount="indefinite" />
                    </g>
                    <g id="mountain3" transform="scale(0.7 0.7) translate(180 25)" filter="url(#blur1)">
                         <use href="#mtn3" filter="brightness(78%)">
                              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="320 0" to="-270 0" dur="14.1s" begin="-3s" repeatCount="indefinite" />
                         </use>
                    </g>
          
                    {/* <!-- sky gradient overlay --> */}
                    <rect id="skyOverlay" height="50" width="100%" fill="url('#skyGrad2')" y="0" />
          
                    {/* <!-- top gravel --> */}
                    <rect height="7" width="100%" fill="url('#gravelGrad')" y="60.5" />
                    {/* <!-- top grass --> */}
                    <rect height="10.5" width="100%" fill="url('#grassGrad')" y="50" />
          
                    {/* <!-- grass base --> */}
                    <rect height="20" width="100%" fill="url('#grassGradFront')" y="80" />
          
                    {/* <!-- road --> */}
                    <g>
                         <rect height="10" width="100%" fill="#92918f" y="70" />
                         <line x1="0" x2="600" y1="75" y2="75" stroke="#fff" stroke-width="0.75" stroke-dasharray="8 6">
                              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="-196 0" dur="0.9s" repeatCount="indefinite" />
                         </line>
                    </g>
          
                    {/* <!-- gutter --> */}
                    <g>
                         <rect height="2" width="100%" fill="#716662" y="68" />
                         <rect height="0.5" width="100%" fill="tan" y="67.5" />
                    </g>
          
                    {/* <!-- brush --> */}
                    <g>
                         <path filter="url(#blur4)" id="brush1" d="M 100 63 Q 101 60 97 58 Q 100 60 100 63 Q 101 58 107 54 Q 101 60 100 63 Q 102 58 107 58 Q 102 60 100 63" fill="orange" />
                         <path filter="url(#blur4)" id="brush2" d="M 70 63 Q 68 60 66 59 Q 70 60 70 63 Q 71 58 67 55 Q 70 60 70 63 Q 72 58 75 58 Q 72 60 70 63 Q 72 59 71 55 Q 71 57 70 63" fill="orange" />
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="330 0" to="-106 0" dur="2.2s" repeatCount="indefinite" />
                    </g>
          
                    <use href="#brush1" filter="brightness(120%)">
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="330 0" to="-106 0" dur="2.22s" begin="-1.9s" repeatCount="indefinite" />
                    </use>
                    <use href="#brush1" filter="brightness(90%)">
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="330 0" to="-106 0" dur="2.25s" begin="-0.8s" repeatCount="indefinite" />
                    </use>
                    <use href="#brush2" filter="brightness(90%)">
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="330 0" to="-106 0" dur="2.29s" begin="-0.67s" repeatCount="indefinite" />
                    </use>
          
                    <g>
                         <path id="grass1" d="M 100 100 Q 97 97 92 95 Q 100 96 100 100 Q 101 92 94 90 Q 100 95 100 100 Q 103 92 107 95 Q 103 95 100 100 Q 103 94 100 88 Q 101 91 100 100 M 200 100 Q 197 97 192 95 Q 200 96 200 100 Q 201 92 194 90 Q 200 95 200 100 Q 203 92 207 95 Q 203 95 200 100 Q 203 94 202 90 Q 201 91 200 100" fill="yellow" />
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="420 0" to="-200 0" dur="1.5s" begin="-1s" repeatCount="indefinite" />
                    </g>
                    <use href="#grass1" filter="brightness(80%)">
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="420 0" to="-200 0" dur="1.6s" begin="-2s" repeatCount="indefinite" />
                    </use>
                    <use href="#grass1" filter="brightness(90%)">
                         <animateTransform attributeName="transform" attributeType="XML" type="translate" from="420 0" to="-200 0" dur="1.55s" begin="-1.5s" repeatCount="indefinite" />
                    </use>
                    <g transform="scale(1.2 1.2) translate(-50 -16)">
                         <use href="#grass1" filter="brightness(120%)">
                              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="420 0" to="-200 0" dur="1.8s" begin="-.33s" repeatCount="indefinite" />
                         </use>
                         <use href="#grass1">
                              <animateTransform attributeName="transform" attributeType="XML" type="translate" from="420 0" to="-200 0" dur="1.8s" begin="-1.33s" repeatCount="indefinite" />
                         </use>
                    </g>
          
                    <g id="car" class="cybertruck" stroke="#222" stroke-width="0.2" transform={`translate(${carXPosition}, 0)`}>
                         <ellipse cx="177" cy="77" rx="50" ry="4.5" fill="#000" filter="url(#blur2)" />
                         {/* <!-- far tires --> */}
                         <circle fill="#000" cx="150" cy="69" r="9" />
                         <circle fill="#000" cx="210" cy="69" r="9" />
                         {/* <!-- undercarriage --> */}
                         <path fill="#000" d="M 223.8 68.9 l -19.3 2 h -64.6 l -3.7 -1.3 l 0.5 -5 l 4.3 -6.1 l 10.9 0 l 5.1 6.8 l 0.5 0.7 l 0.3 2.3 h 47 l 0.3 -2.2 l 4.7 -7 l 10.3 0.4 l 3.7 5.3 z" />
                         {/* <!-- trim --> */}
                         <path fill="#111" d="M 228 64.7 l -4.2 0.1 l -3.7 -5.3 l -10.3 -0.4 l -4.7 7 l -0.3 2.2 h -47 l -0.3 -2.3 l -5.6 -7.5 h -10.9 l -4.3 6.1 l -7.9 -0.6 l 0 -0.9 l 6.5 0.5 l 4.7 -6.9 l 13 0.2 l 5.8 8.4 l 44.3 0.9 l 5.6 -8.7 l 12.1 0.4 l 4.2 6.3 l 3 -0.2 z" />
                         {/* <!-- bumpers --> */}
                         <path fill="#333" d="M 227.4 68 l -3.6 1 v -4.2 l 4.6 -0.1 l 0 1.6 z" />
                         <path fill="#222" d="M 204.5 70.9 h -47.3 l -0.2 -5.6 l 0.5 0.7 l 0.3 2.3 h 47 z" />
                         <path fill="#333" d="M 136.2 69.8 l -9.4 -3.5 l -0.3 -2 l 0.3 -0.3 l 2 0 l 7.9 0.6 z" />
                         {/* <!-- main body --> */}
                         <g class="carBody">
                              <path fill="#666" d="M 225 57 l -99.6 -5.6 l 1.6 11.6 l 8.3 0.6 l 4.7 -6.9 l 13 0.2 l 5.8 8.4 l 44.3 0.9 l 5.6 -8.7 l 12.1 0.4 l 4.2 6.3 z" />
                              <path fill="#555" d="M 225 64.2 l 3.2 -0.2 l 0.3 -5.4 l -3.5 -0.9 z" />
                              <path fill="#999" d="M 228.2 57.8 l -42.1 -14.2 l -60.7 7.8 l 99.6 5.6 l 0 0.2 l 3.2 0.8 z" />
                         </g>
                         {/* <!-- windows --> */}
                         <path fill="#222" d="M 214.5 54.5 l -51.2 -3.5 l 0.3 -3.9 l 22.4 -2.5 z" />
                         <g fill="#333">
                              <path d="M 212.4 54.1 l -8.8 -0.6 l -1 -2.8 z" />
                              <path d="M 199.7 53.2 l -16 -1.1 l -1.8 -6.7 l 4.1 -0.4 l 12.5 4.3 z" />
                              <path d="M 180.7 51.8 l -15.3 -1 l -0.2 -3.5 l 14.6 -1.6 z" />
                         </g>
                         {/* <!--headlight--> */}
                         <path fill="#ff0" d="M 228.3 58.6 l -3.3 -0.9 v -0.5 l 3.3 0.8 z" />
                         {/* <!-- door lines --> */}
                         <g fill="none" stroke="#000" stroke-width="0.2">
                              <path d="M 163.5 68.3 l 0 -2.9 l -0.6 -11.9 l 0.4 -2.5" />
                              <path d="M 183.5 68.4 l 0 -2.6 l -0.5 -11.2 l -0.3 -2.2" />
                              <path d="M 202.9 68.3 l 0.2 -2.1 l 0.1 -10.4 l -0.4 -2.1" />
                              {/* <!-- door handles --> */}
                              <path d="M 188.6 55.8 l -4.1 -0.1 l 0 -0.8 l 4 0.2 z" />
                              <path d="M 168.4 54.7 l -4 -0.1 l -0.1 -0.8 l 4.1 0.2 z" />
                         </g>
                         {/* <!-- near wheels --> */}
                         {/* <!-- front --> */}
                         <g class="frontWheel">
                              <circle fill="#111" cx="214.5" cy="70" r="9" />
                              <circle fill="#222" cx="214.5" cy="70" r="6.5" />
                              <circle fill="none" cx="214.5" cy="70" r="4" stroke-width="4" stroke="#333" stroke-dasharray="0 1.75 0" />
                              <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 214.5 70; 360 214.5 70" dur="100ms" begin="0s" repeatCount="indefinite" />
                         </g>
                         {/* <!-- rear --> */}
                         <g class="rearWheel">
                              <circle fill="#111" cx="146.5" cy="70" r="9" />
                              <circle fill="#222" cx="146.5" cy="70" r="6.5" />
                              <circle fill="none" cx="146.5" cy="70" r="4" stroke-width="4" stroke="#333" stroke-dasharray="0 1.75 0" />
                              <animateTransform attributeName="transform" attributeType="XML" type="rotate" values="0 146.5 70; 360 146.5 70" dur="100ms" begin="0s" repeatCount="indefinite" />
                         </g>
                    </g>
          
                    
                    <rect id="darkOverlay" height="200%" width="200%" fill="url('#darkGrad')" opacity="0.7" mask="url(#light)" />
          
                    <g id="lights" transform={`translate(${lightsXPosition}, 0)`}>
                         <ellipse cx="126" cy="52.2" rx="1" ry="1.5" fill="#f00" filter="url(#blur1)" />
                         <ellipse cx="226.5" cy="58" rx="3" ry="1" fill="#fff" filter="url(#blur1)" />
                    </g>
               </g>
          </svg>
     </div>
  );
}

export default MoussCybertruck;
