import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

:root{
    --fondo:#eff3f8;
    --fondo1:#f4f4f7;
    --div1: #3eb1c8;
    --toolbox:#212529;

    --white: #ffffff;
    --white1: #f4f4f7;
     
    --blue: #3eb1c8;
    --blue1: #01426a;
    --blue2: #3eb1c8;
    --blue3:#002554;
    --gris_fondo:#f6f8fc;

    --font-family-primary: Futura Std;
    --font-family-secondary: Untitled Sans;
    --font-weight-light: 400;
    --font-weight-regular: 500;
    --font-weight-bold: 700;
    --letter-spacing-wide: 2px;
    --letter-spacing-regular: 0px;
    --font-size-1: 10px;
    --font-size-2: 12px;
    --font-size-3: 14px;
    --font-size-4: 16px;
    --font-size-5: 18px;
    --font-size-6: 20px;
    --font-size-7: 24px;
    --font-size-8: 28px;
    --font-size-9: 32px;
    --font-size-10: 36px;
    --font-size-11: 40px;
    --font-size-12: 48px;
    --font-size-13: 56px;
    --font-size-14: 64px;
    --font-size-15: 72px;
    --font-size-16: 80px;
    --line-height-1: 16px;
    --line-height-2: 18px;
    --line-height-3: 20px;
    --line-height-4: 24px;
    --line-height-5: 28px;
    --line-height-6: 32px;
    --line-height-7: 38px;
    --line-height-8: 42px;
    --line-height-9: 48px;
    --line-height-10: 52px;
    --line-height-11: 58px;
    --line-height-12: 62px;
    --line-height-13: 71px;
    --line-height-14: 80px;
    --line-height-15: 98px;
    --line-height-16: 80px
 }
html{
   background-color:var(--fondo1);
   min-height:100%;
   box-sizing: border-box;
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
