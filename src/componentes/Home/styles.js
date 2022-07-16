import styled from "styled-components";

export const Seccion1=styled.div`
     margin:0 auto;
     width:100%;
     display:flex;
     
` 
export const Arrow=styled.div`
   position: sticky;
   color:#ffffff;
   cursor:pointer;
    &:hover {
     -webkit-transform: scale(1.2);
     transform: scale(1.1);
     color:#ffffff;
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