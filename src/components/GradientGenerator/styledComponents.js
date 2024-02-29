import Styled from 'styled-components'

export const BgContainer = Styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background-image: linear-gradient(${props => props.gradientImage});
`

export const ResponsiveContainer = Styled.div`
    width: 100%;
    max-width: 1110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Heading = Styled.h1`
    font-family: 'Roboto';
    font-size: 24px;
    color: #ededed;
    text-align: center;
`

export const CustomText = Styled.p`
    font-family: 'Roboto';
    font-size: 16px;
    color: #ededed;
`

export const DirectionItemsList = Styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-wrap: wrap;
`

export const InputForm = Styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputContainer = Styled.div`
    display: flex;
    justify-content: center;
`

export const CustomContainer = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
`

export const CustomColor = Styled.p`
    font-family: 'Roboto';
    font-size: 14px;
    color: #ffffff79;
    margin-bottom: 24px;
`

export const CustomInput = Styled.input`
    height: 42px;
    width: 76px;
    border: none;
    outline: none;
    background-color: transparent;
`

export const GenerateButton = Styled.button`
    background-color: #00c9b7;
    color: #1e293b;
    font-family: 'Roboto';
    font-size: 14px;
    border: none;
    border-radius: 5px;
    padding: 6px 16px;
    margin-top: 24px;
`
