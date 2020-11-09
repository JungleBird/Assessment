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
  color: ${colors.white};
`;

export const SubtitleText = styled.div`
  font-size: ${size.normal};
  color: ${colors.lightgray};
`;

export const TextArea = styled.span`
  color: ${colors.white};
  background-color: ${colors.night};
  border-radius: ${spacing.small};
  line-height: ${spacing.xlarge};
  padding: ${spacing.medium};
  width: 100%;
  height: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  ${TextArea} {
    margin: ${spacing.small} ${spacing.medium} ${spacing.small} ${spacing.medium};
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${spacing.medium};
  cursor: pointer;
`;

export const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${HeaderWrapper}{
    gap: ${spacing.small};
    cursor: arrow;
  }

  ${TitleText} {
    font-size: ${size.large};
  }

  ${SubtitleText} {
    font-size: ${size.normal};
  }
`;

export const HeaderListWrapper = styled.div`
  ${HeaderWrapper} {
    border-bottom: ${size.thin} solid ${colors.lightgray};
  }
`;

export const Column = styled.div(props => ({
  flex: props.size || 1,
  background: colors.space,
  overflow: 'auto'
}));

export const Grid = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  padding:${spacing.small};
  gap: ${spacing.small};
`;

export const AppContainer = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: ${colors.black};
`;