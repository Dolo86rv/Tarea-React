import styled from "styled-components";

export const Container=styled.div`
  overflow: hidden;
  display: flex; !important;
  flex-direction: row; !important;
  position: relative;
  width:100%;
  background-color:#3eb1c8;
  height:48px;
  color:#ffffff;
  align-items:center;
  &:hover {
    --pause-on-hover: running;
    --pause-on-click: running;
  }
`

export const Marquee1=styled.div`
   flex: 0 0 auto;
   min-width:100%;
   z-index:1;
   animation: scroll 30.15s linear 0s infinite;
   animation-play-state:running;
   animation-delay:0s;
   animation-direction:normal;
`
export const Overlay=styled.div`
    right:0;
    top:0;
    transform:rotateZ(180deg);

`