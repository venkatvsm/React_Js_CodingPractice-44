// Style your components here
import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  font-family: 'Open Sans';
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 15px;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const OutputFormContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  width: 100%;
  height: 300px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    height: 380px;
    width: 40%;
  }
`
export const Para = styled.p`
  color: #ffffff;
  width: 90%;
  text-align: center;
  font-weight: 500;
  border-style: solid;
  font-size: ${props => props.fontSize}px;
`
export const InputFormContainer = styled.form`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 400px;
  @media screen and (min-width: 768px) {
    width: 30%;
    font-size: 18px;
  }
`
export const Heading = styled.h1`
  color: #35469c;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Heading2 = styled.h1`
  color: #35469c;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 0px;
  }
`
export const InputText = styled.input`
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  border-color: #d7dfe9;
  border-style: solid;
  border-radius: 4px;
  outline: none;
  padding-left: 10px;
  @media screen and (min-width: 768px) {
    height: 42px;
  }
`
export const LabelEl = styled.label`
  color: #7e858e;
`
export const SelectContainer = styled.select`
  width: 100%;
  height: 46px;
  margin-bottom: 10px;
  border-color: #d7dfe9;
  border-style: solid;
  border-radius: 4px;
  color: #1e293b;
  outline: none;
  @media screen and (min-width: 768px) {
    height: 42px;
  }
`

export const Option = styled.option`
  font-size: 14px;
`
export const SubmitBtn = styled.button`
  width: 150px;
  height: 46px;
  background-color: #0b69ff;
  color: #ffff;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
