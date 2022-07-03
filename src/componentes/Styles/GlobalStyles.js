import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --fondo:#eff3f8;
    --div1: #3eb1c8;
    --toolbox:#212529;

    --white: #ffffff;
    --white1: #f4f4f7;

    --font-family-secondary: "SesameFutura";
    --font-family-primary: "Futura Std";
    --fsize: 32px;
     
    --blue: #3eb1c8;
    --blue1: #01426a;
    --blue2: #3eb1c8;
    --blue3:#002554;
    --gris:#f6f8fc;

    --font-weight-light:400;

    --font-size-7:24px;
  
    --tipo-headding-1:
    --typo-heading-l: var(--font-weight-light) var(--font-size-7) var(--font-family-primary);
 }
html{
   background-color:var(--fondo);
   min-height:100%;
}
*{
   padding:0;
   margin:0;
   box-sizing:border-box;
} 
`
