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
  */
export const DashboardContainer = styled.div`
  display: table;
  clear: both;
  width: ${props => props.width} || 100%;
  background-color: #111111;
  box-sizing: border-box;
`;

export const Column = styled.div`
  float: left;
  width: ${props => props.width} || 40%;
  height: ${props => props.height} || 300px;
  padding: 15px;
  background-color: #23212E;
  box-sizing: border-box;
`;
