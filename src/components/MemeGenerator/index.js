import {Component} from 'react'

import {
  BgContainer,
  CardContainer,
  OutputFormContainer,
  Para,
  InputFormContainer,
  Heading,
  Heading2,
  LabelEl,
  InputText,
  SelectContainer,
  SubmitBtn,
  Option,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    topTextinput: '',
    bottomTextinput: '',
    backgroundImageurl: '',
    activefontSize: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    backgroundImage: '',
    fontSize: '',
  }

  onchangeImageUrl = event => {
    this.setState({backgroundImageurl: event.target.value})
  }

  onchangeTopText = event => {
    this.setState({topTextinput: event.target.value})
  }

  onchangeBottomText = event => {
    this.setState({bottomTextinput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activefontSize: event.target.value})
  }

  renderImageView = () => {
    const {topText, bottomText, backgroundImage, fontSize} = this.state

    return (
      <OutputFormContainer backgroundImage={backgroundImage}>
        <Para fontSize={fontSize}>{topText}</Para>
        <Para fontSize={fontSize}>{bottomText}</Para>
      </OutputFormContainer>
    )
  }

  onGenerateMeme = event => {
    const {
      topTextinput,
      bottomTextinput,
      backgroundImageurl,
      activefontSize,
    } = this.state

    event.preventDefault()
    this.setState({
      topText: topTextinput,
      bottomText: bottomTextinput,
      backgroundImage: backgroundImageurl,
      fontSize: activefontSize,
    })
  }

  renderMemeGeneratorForm = () => (
    <InputFormContainer data-testid="meme">
      <Heading2>Meme Generator</Heading2>
      <LabelEl htmlFor="ImageUrl">Image URL</LabelEl>
      <InputText
        placeholder="Enter the Image URL"
        type="text"
        id="ImageUrl"
        onChange={this.onchangeImageUrl}
      />
      <LabelEl htmlFor="topText">Top Text</LabelEl>
      <InputText
        placeholder="Enter the Top Text"
        type="text"
        id="topText"
        onChange={this.onchangeTopText}
      />
      <LabelEl htmlFor="BottomText">Bottom Text</LabelEl>
      <InputText
        type="text"
        id="BottomText"
        onChange={this.onchangeBottomText}
        placeholder="Enter the Bottom Text"
      />
      <LabelEl htmlFor="fontSize">Font size</LabelEl>
      <SelectContainer id="fontSize" onChange={this.onChangeFontSize}>
        {fontSizesOptionsList.map(eachItem => (
          <Option value={eachItem.optionId} key={eachItem.optionId}>
            {eachItem.displayText}
          </Option>
        ))}
      </SelectContainer>
      <SubmitBtn type="submit" onClick={this.onGenerateMeme}>
        Generate
      </SubmitBtn>
    </InputFormContainer>
  )

  render() {
    return (
      <BgContainer>
        <CardContainer>
          <Heading>Meme Generator</Heading>
          {this.renderImageView()}
          {this.renderMemeGeneratorForm()}
        </CardContainer>
      </BgContainer>
    )
  }
}

export default MemeGenerator
