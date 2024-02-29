import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachDirection, isActive, onChangeActiveButton} = props
  const {displayText, value} = eachDirection

  const onClickButton = () => {
    onChangeActiveButton(value)
  }

  return (
    <li>
      <CustomButton onClick={onClickButton} isActive={isActive}>
        {displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
