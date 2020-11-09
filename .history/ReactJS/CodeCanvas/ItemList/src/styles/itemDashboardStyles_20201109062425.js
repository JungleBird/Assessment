import styled from 'styled-components';

export const TitleText = styled.div`
  font-size: 1em;
  color: #FFFFFF;
`;

export const SubtitleText = styled.div`
  font-size: 1em;
  color: #565461;
`;

export const TextArea = styled.span`
  background-color: #292734;
  border-radius: 0.5em;
  line-height: 2;
  color: white;
  padding: 1.5em;
  width: 100%;
  height: auto;
`;

export const ContentBox = styled.div`
  display: flex;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ItemCardBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

  ${TitleText} {
    font-size: 1.5em;
  }

  ${SubtitleText} {
    font-size: 20px;
  }
`;
export const HeaderList = styled.div`
  ${HeaderBox} {
    border-bottom: 0.1rem solid #484651;
  }
`;

export const Column = styled.div(props => ({
  flex: props.size || 1,
  background: '#23212E',
  overflow: 'auto'
}));

export const Grid = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  gap: 0.5em;
  padding:0.5em;
`;

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #111111;
`;






