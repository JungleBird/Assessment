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
  height: '100%',
  width: props.width || '30%'
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
  background-color: #292734;
`;

export const ItemCardBox = styled.div`
  margin: 10px;
`;

export const HeaderList = styled.div`
  background-color: #23212E;
  margin: 10px 10px 5px 10px;
`;

export const HeaderBox = styled.div`
  border: 1px solid white;
`;

export const TitleText = styled.div`
  font-size: 28px;
  color: #FFFFFF;
`;

export const SubtitleText = styled.div`
  font-size: 22px;
  color: gray;
`;

export const TextArea = styled.div`
  font-size: 14px;
  color: white;
  padding: 15px;
  width: 100%;
  height: 500px;
`;
