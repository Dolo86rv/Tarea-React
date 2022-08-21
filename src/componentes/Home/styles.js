import styled from "styled-components";

export const Arrow=styled.div`
   position: sticky;
   color:#ffffff;
   cursor:pointer;
    &:hover {
     -webkit-transform: scale(2);
     transform: scale(2);
     color:#ffffff;
    }
`
export const Box3=styled.div`
     width:100%;
     background: linear-gradient(180deg, var(--c-ashford) 50%, #ffffff 50%);  
     display: flex;
     flex-direction: column;
     text-align: center;
     height:500px;
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
     display:flex;
     flex-direction: column;
     background-color:var(--white);
     border-radius:6px;
     box-shadow:var(--tw-shddow-1);
     border-width:1px;
     border-color:var(--c-box);
     max-width:330px;
     height:100%;
     padding-left:24px;
     padding-right:24px;
     padding-top:48px;
     padding-bottom:48px;
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
