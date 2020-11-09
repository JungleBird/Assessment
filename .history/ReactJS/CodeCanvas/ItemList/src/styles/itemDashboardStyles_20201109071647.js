import styled from 'styled-components';
import * as colors from './colorSheet.js';

export const TitleText = styled.div`
  font-size: 1em;
  color: ${colors.white};
`;

export const SubtitleText = styled.div`
  font-size: 1em;
  color: ${colors.lightgray};
`;

export const TextArea = styled.span`
  background-color: ${colors.night};
  border-radius: 0.5em;
  line-height: 2em;
  color: white;
  padding: 1em;
  width: 100%;
  height: auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  ${TextArea} {
    margin: 0.5em 1em 0.5em 1em;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${TitleText} {
    font-size: 1.5em;
  }

  ${SubtitleText} {
    font-size: 20px;
  }
`;

export const HeaderBoxList = styled.div`
  ${HeaderBox} {
    border-bottom: 0.1rem solid ${colors.lightgray};
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
  padding:0.5em;
  gap: 0.5em;
`;

export const AppContainer = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: ${colors.black};
`;






