import styled from 'styled-components';

export const NetsContainer = styled.div`
  position: absolute;
  top: 0;
  height: 2160px;
  width: 100vw;
  z-index: 10;
`

export const Net = styled.img`
  position: absolute;

  &.left {
    left: 0;
  }

  &.right {
    right: 0;
  }
`
