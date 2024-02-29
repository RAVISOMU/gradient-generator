import {Component} from 'react'

import {
  BgContainer,
  ResponsiveContainer,
  Heading,
  CustomText,
  DirectionItemsList,
  InputForm,
  CustomColor,
  CustomInput,
  CustomContainer,
  GenerateButton,
  InputContainer,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColorInput: '#8ae323',
    secondColorInput: '#014f7b',
    direction: gradientDirectionsList[0].value,
    imagevalue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColorInput: event.target.value})
  }

  onSubmit = event => {
    const {firstColorInput, secondColorInput, direction} = this.state
    event.preventDefault()
    this.setState({
      imagevalue: `to ${direction}, ${firstColorInput}, ${secondColorInput}`,
    })
  }

  onChangeActiveButton = value => {
    this.setState({direction: value})
  }

  render() {
    const {firstColorInput, secondColorInput} = this.state
    const {direction, imagevalue} = this.state
    return (
      <BgContainer data-testid="gradientGenerator" gradientImage={imagevalue}>
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <CustomText>Choose Direction</CustomText>
          <DirectionItemsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                eachDirection={eachDirection}
                key={eachDirection.directionId}
                isActive={eachDirection.value === direction}
                onChangeActiveButton={this.onChangeActiveButton}
              />
            ))}
          </DirectionItemsList>
          <CustomText>Pick the Colors</CustomText>
          <InputForm onSubmit={this.onSubmit}>
            <InputContainer>
              <CustomContainer>
                <CustomColor>{firstColorInput}</CustomColor>
                <CustomInput
                  onChange={this.onChangeFirstColor}
                  type="color"
                  value={firstColorInput}
                />
              </CustomContainer>
              <CustomContainer>
                <CustomColor>{secondColorInput}</CustomColor>
                <CustomInput
                  onChange={this.onChangeSecondColor}
                  type="color"
                  value={secondColorInput}
                />
              </CustomContainer>
            </InputContainer>
            <GenerateButton>Generate</GenerateButton>
          </InputForm>
        </ResponsiveContainer>
      </BgContainer>
    )
  }
}

export default GradientGenerator
