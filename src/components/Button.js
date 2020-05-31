import styled from "styled-components";

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size: 1.4rem;
background: var(--secondaryRed);
background-color: ${props => (props.addTocart ? "var(--secondaryBlue)" : "var(--secondaryRed)")};
border: 0.2rem solid var(--mainRed);
border-color:${props => (props.addTocart ? "var(--mainBlue)" : "var(--mainRed)")};
color: var(--mainBlack);
border-radius: 0.5rem;
padding: 0.2 rem 0.5rem;
cursor:pointer;
margin: 0.2 0.5 0.2 0;
margin-left: 5px;
margin-bottom:5px;
transition: all 0.5s ease-in-out;
&:hover{
    background: var(--secondaryGreen);
    background-color: ${props => (props.addTocart ? "var(--secondaryGreen)" : "var(--secondaryGreen)")};
    border: 0.2rem solid var(--mainGreen);
    color: var(--mainBlack);
}
&:focus{
    outline: none;
}
`;