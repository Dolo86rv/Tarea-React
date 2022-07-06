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
    --font_size: 10px;
     
    --blue: #3eb1c8;
    --blue1: #01426a;
    --blue2: #3eb1c8;
    --blue3:#002554;
    --gris_fondo:#f6f8fc;
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
*, :after, :before {
   box-sizing: border-box;
} 
div {
   display: block;
}
`
