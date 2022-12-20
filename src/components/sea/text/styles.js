import styled from 'styled-components';

export const TextContainer = styled.div`
  position: absolute;
  top: 1500px;
  height: 550px;
  width: 100vw;
  z-index: 2;
`

export const Text = styled.img`
  position: absolute;

  &.left {
    left: -450px;
  }

  &.right {
    right: -650px;
  }
`
