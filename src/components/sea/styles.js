import styled from 'styled-components';

import SeaBackground from '../../assets/sea/seaBackground.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(${SeaBackground});
  background-size: cover;
  height: 2160px;
  position: relative;
  overflow-x: hidden;
`
