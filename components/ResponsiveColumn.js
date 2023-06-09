import styled from 'styled-components';

const ResponsiveColumn = styled.div`
  width: ${(props) => 100 * props.width['default']}%;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  ${(props) =>
    Object.keys(props.width)
      .filter((key) => key !== 'default')
      .map((size) => `
      @media (min-width: ${size}px) {
        width: ${100 * props.width[size]}%;
      }
    `
  )}
`;

export default ResponsiveColumn;
