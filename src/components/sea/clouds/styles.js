import styled from 'styled-components';

export const CloudsContainer = styled.div`
  position: absolute;
  top: 1500px;
  height: 550px;
  width: 100vw;
  z-index: 3;
`

export const Cloud = styled.img`
  position: absolute;
  width: 1000px;

  &.left {
    left: -1000px;
  }

  &.right {
    top: 50px;
    right: -1000px;
  }
`
