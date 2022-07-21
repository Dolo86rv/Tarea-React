import styled from "styled-components";

export const Arrow=styled.div`
   position: sticky;
   color:#ffffff;
   cursor:pointer;
    &:hover {
     -webkit-transform: scale(1.2);
     transform: scale(1.1);
     color:#ffffff;
    }
`
export const Seccion2=styled.div`
     width:100%;
     padding:64px 16px 48px 16px;  
` 
export const Box=styled.div`
   display:flex;
   align-items:center;
   height:74px;
   padding-left:24px;
   padding-right:24px;
   background-color:var(--white);
   border-width:1px; 
   box-shadow:var(--tw-shadow); 
   border-color:var(--c-service);
   border-radius:6px;
   margin:8px;
` 
export const Box1=styled.div`
   display:flex;
   background-color:var(--blue-footer);
   border-radius:6px;
   align-items:center;
   width:64px;
   height:64px;
   justify-content:center;
   margin-left:56px;
   margin-right:56px;
`
export const Box2=styled.div`
     background-color:var(--white);
     border-radius:6px;
     box-shadow:var(--tw-shddow-1);
     border-width:1px;
     border-color:var(--c-box);
     max-width:330px;
     max-height:307px;
     padding-left:27px;
     padding-right:27px;
     padding-top:48px;
     padding-bottom:48px;
     margin:8px;
`
export const Img=styled.div`
     width:514px;
     min-height:100%;
     position:relative;
     overflow:hidden;
     margin-top:48px;
     margin-bottom:60px;
     margin-left:112px;
     border-radius:6px;
`