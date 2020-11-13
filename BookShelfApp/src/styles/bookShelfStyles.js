import styled from 'styled-components';
import * as colors from './colorSheet.js';

const spacing = {
    small:  '0.5em',
    medium: '1.0em',
    large:  '1.5em',
    xlarge: '2.0em'  
  }
  
const size = {
    thin:   '0.1em',
    small:  '0.5em',
    normal: '1.0em',
    large:  '1.5em'
}

export const TitleText = styled.div`
  font-size: ${size.normal};
  color: ${colors.black};
`;

export const SubText = styled.div`
  font-size: ${size.normal};
  color: ${colors.lightgray};
`;

export const BookShelfWrapper = styled.div`
display: flex;
flex: 1;
flex-direction: row;
`;

export const BookHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.medium};
`;

export const BookImageWrapper = styled.div`
  display: box;
  padding: ${spacing.medium};
`;

export const BookShelfContainer = styled.div`
    display: flex
    width: 100%;
    height: 100vh;
`;