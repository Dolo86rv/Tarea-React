import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --fondo:#eff3f8;
    --div1: #3eb1c8;
    --toolbox:#212529;

    --white: #ffffff;
    --white1: #f4f4f7;

    --family:"Untitled Sans";
    --family1: "Futura Std";
    --fsize: 32px;
     
    --blue: #3eb1c8;
    --blue1: #01426a;
    --blue2: #3eb1c8;
    --blue3:#002554;
    --gris:#f6f8fc;
 }
html{
   background-color:var(--fondo);
}
  .hoverable {
    position: static;
  }

  .hoverable > a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  .hoverable:hover .mega-menu {
    display: block;
  }
`
