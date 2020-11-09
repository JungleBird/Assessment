import styled from 'styled-components';

const white = '#F9F8FE';
const lightgray = '#565461';
const night = '#292734';
const space = '';

export const TitleText = styled.div`
  font-size: 1em;
  color: ${white};
`;

export const SubtitleText = styled.div`
  font-size: 1em;
  color: ${lightgray};
`;

export const TextArea = styled.span`
  background-color: ${night};
  border-radius: 0.5em;
  line-height: 2em;
  color: white;
  padding: 1em;
  width: 100%;
  height: auto;
`;

export const ContentBox = styled.div`
  display: flex;
  ${TextArea} {
    margin: 0.5em 1em 0.5em 1em;
  }
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
`;

export const ItemCardBox = styled.div`
  display: flex;
  flex-direction: column;

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
  padding:0.5em;
  gap: 0.5em;
`;

export const AppContainer = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: #111111;
`;






