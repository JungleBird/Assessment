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

export const DashboardContainer = styled.div`
  display: table;
  clear: both;
  width: ${props => props.width} || 100%;
  background-color: #111111;
  box-sizing: border-box;
`;

export const Title = styled.div`
  font-size: 28px;
  color: #FFFFFF;
  border: 1px solid white;

`;

export const Subtitle = styled.div`
  font-size: 22px;
  color: #5A5863;
  border: 1px solid white;

`;

export const Header = styled.div`
  padding: 15px 15px 0px 0px
  border: 1px solid white;
`;

export const DescriptionText = styled.div`
  background-color: #292734;
  padding: 5px
`;

export const Column = styled.div`
  float: left;
  width: ${props => props.width} || 40%;
  height: ${props => props.height} || 300px;
  padding: 15px;
  background-color: #23212E;
  box-sizing: border-box;
`;
