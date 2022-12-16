import styled from 'styled-components';

export const IslandsContainer = styled.div`
  position: absolute;
  z-index: 4;
  width: 100vw;
  height: 480px;
  top: 1500px;
`

export const Island = styled.img`
  position: absolute;

  &.left {
    top: 200px;
    left: -610px;
  }

  &.right {
    top: 0px;
    right: -250px;

    &.two {
        top: 370px;
        right: -570px;
    }
  }
`
