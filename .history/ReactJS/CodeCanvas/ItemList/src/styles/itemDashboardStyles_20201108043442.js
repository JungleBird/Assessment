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
  */
export const DashboardContainer = styled.div`
    display: table;
    clear: both;
    background-color: #111111;
    box-sizing: border-box;
`;

export const Column = styled.div`
    float: left;
    width: 40%;
    padding: 15px;
    margin: 15px;
    height: 300px;
    box-sizing: border-box;
`;
