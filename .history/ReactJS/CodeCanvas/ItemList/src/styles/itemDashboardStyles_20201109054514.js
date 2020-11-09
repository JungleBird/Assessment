import styled from 'styled-components';

/* NEW CODE 
.column {
    float: left;
    width: 40%;
    padding: 15px;
    margin: 15px;
    height: 300px;
  }
  
  .row:after {
    content: "";
    display: table;
    clear: both;
    background-color: #282c34;
  }
111111
23212e
292734
5a5863
  */

export const AppContainer = styled.div`
  display: flex;
  width: 100vh;
  height: 100vh;
  background-color: #111111;
`;

export const Column = styled.div(props => ({
  flex: props.size || 1,
  background: '#23212E',
  height: '100%'
}));


export const Grid = styled.div`
  display:flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  gap: 10px;
  padding:10px;
`;

export const ContentBox = styled.div`
  display: flex;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const HeaderList = styled.div`
  ${HeaderBox} {
    border-bottom: 1px solid #484651;
  }
`;

export const TitleText = styled.div`
  font-size: 18px;
  color: #FFFFFF;
`;

export const SubtitleText = styled.div`
  font-size: 16px;
  color: #565461;
`;

export const ItemCardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${TitleText} {
    font-size: 28px;
  }

  ${SubtitleText} {
    font-size: 20px;
  }
`;

/*
export const TitleText = styled.div(props => ({
  fontSize: props.fontSize || '20px',
  color: '#FFFFFF'
}));
*/

export const TextArea = styled.div`
  background-color: #292734;
  border-radius: 5px;
  font-size: 14px;
  color: white;
  padding: 15px;
  width: 100%;
  height: auto;
`;
