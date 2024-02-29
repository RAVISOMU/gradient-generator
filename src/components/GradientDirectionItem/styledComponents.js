import Styled from 'styled-components'

export const CustomButton = Styled.button`
    background-color: #ffffff;
    opacity: 1;
    color: #1e293b;
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 500;
    padding: 6px 16px;
    border: none;
    border-radius: 5px;
    width: 130px;
    margin-right: 6px;
    margin-bottom: 12px;
    opacity: ${props => (props.isActive ? 1 : 0.5)};
`
