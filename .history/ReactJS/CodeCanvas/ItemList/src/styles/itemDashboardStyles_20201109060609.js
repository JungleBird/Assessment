import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: #111111;
`;

export const Column = styled.div(props => ({
  flex: props.size || 1,
  background: '#23212E'
}));


export const Grid = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  gap: 0.5em;
  padding:0.5em;
`;

export const ContentBox = styled.div`
  display: flex;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const HeaderList = styled.div`
  ${HeaderBox} {
    border-bottom: 0.1rem solid #484651;
  }
`;

export const TitleText = styled.div`
  font-size: 1em;
  color: #FFFFFF;
`;

export const SubtitleText = styled.div`
  font-size: 1em;
  color: #565461;
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

export const TextArea = styled.div`
  background-color: #292734;
  border-radius: 0.5em;
  font-size: 14px;
  line-height: normal;
  color: white;
  padding: 15px;
  height: auto;
`;
