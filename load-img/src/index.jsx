import "./webpack.jpg";
import "./index.less"
import React from 'react';
import ReactDOM from 'react-dom/client'
import responsiveImage from 'responsive-loader!!./webpack.jpg?sizes[]=300,sizes[]=600,sizes[]=1024,sizes[]=2048';

const element = <div>
    <div id="main"></div>
    <picture>
        <source srcSet={responsiveImage.srcSet} type='image/webp' />
        <img
        src={responsiveImage.src}
        srcSet={responsiveImage.srcSet}
        width={responsiveImage.width}
        height={responsiveImage.height}
        sizes='(min-width: 1024px) 1024px, 100vw'
        loading="lazy"
        />
    </picture>    
</div>

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(element);