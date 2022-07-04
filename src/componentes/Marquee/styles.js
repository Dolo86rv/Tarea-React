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
    animation-name: marquee;
    animation: scroll  36,25s linear 0s infinite;
    animation-duration: 36,25s;
    animation-direction: normal;
    animation-fill-mode: forwards;
    animation-play-state: running;
`
export const Overlay=styled.div`
    right:0;
    top:0;
    transform:rotateZ(180deg);

`