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

// Adapting based on props
export const PropsBox = styled.div(props => ({
  background: props.background,
  height: '50px',
  width: '50px'
}));

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #111111;
`;

export const Column = styled.div(props => ({
  background: '#23212E',
  margin: '15px',
  height: '100%',
  width: props.width || '50%'
}));

/*
export const Column = styled.div`
  float: left;
  width: ${props => props.width} || 40%;
  height: ${props => props.height} || 300px;
  padding: 10px;
  background-color: #23212E;
  box-sizing: border-box;
`;
*/

export const ContentBox = styled.div`
  display: flex;
  padding: 15px;
`;

export const ItemCardBox = styled.div`
`;

export const HeaderList = styled.div`
`;

export const HeaderBox = styled.div`
  padding: 15px;
  border-bottom: 1px solid #484651;
`;

export const TitleText = styled.div`
  font-size: 20px;
  color: #FFFFFF;
`;

export const SubtitleText = styled.div`
  font-size: 16px;
  color: #565461;
`;

export const TextArea = styled.div`
  background-color: #292734;
  font-size: 14px;
  color: white;
  padding: 15px;
  width: 100%;
  height: 500px;
`;
