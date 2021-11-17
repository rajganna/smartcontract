import styled from 'styled-components';
import {BorderRad, Colors, Gradients, Shadows, Sizes, Transitions} from './stylesheets';
import {Button} from "@material-ui/core";

export const Page = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding-top: ${Sizes.headerHeight};
  height: 100%;
  min-height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding-left: 14px;
  padding-right: 14px;
`

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 24px;
`

export const Text = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

export const TextInline = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`

export const TextBold = styled(Text)`
  font-weight: 700;
`

export const HeaderContainer = styled(Container)`
  max-width: 1200px;
`

export const MainContent = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - ${Sizes.headerHeight});
  overflow: hidden;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
  }
`

export const Section = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 24px;
  margin-bottom: 60px;
`

export const SectionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;

  ${Title} {
    margin-bottom: 0;
  }
`

export const ContentRow = styled.div`
  display: block;

  & + & {
    margin-top: 16px;
  }
`

export const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${Colors.White};
  border-radius: ${BorderRad.s};
  box-shadow: ${Shadows.main};
  padding: 32px 32px;
`
export const Label = styled.span`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
`

export const TitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: ${Colors.Gray['300']} 1px solid;
  padding: 16px;
`

export const BalanceWrapper = styled.div`
  color: ${Colors.Gray['600']};
  font-size: 14px;
`

export const Input = styled.input`
  height: 100%;
  width: 120px;
  padding: 0 0 0 24px;
  border: 0;
  border-radius: ${BorderRad.m};
  -moz-appearance: textfield;
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-background-clip: text;
  }
`

export const AddressInput = styled(Input)`
  width: 401px;
  padding: 0 0 0 38px;
`

export const InputRow = styled.div`
  height: 44px;
  display: flex;
  margin: 0 auto;
  color: ${Colors.Gray['600']};
  align-items: center;
  border: ${Colors.Gray['300']} 1px solid;
  border-radius: ${BorderRad.m};
  overflow: hidden;
  transition: ${Transitions.all};
  &:hover,
  &:focus-within {
    border-color: ${Colors.Black[900]};
  }
`

export const FormTicker = styled.div`
  padding: 0 8px;
`

export const SmallButton = styled(Button)`
  display: flex;
  justify-content: center;
  min-width: 95px;
  height: 100%;
  padding: 8px 24px;
  &:disabled {
    color: ${Colors.Gray['600']};
    cursor: unset;
  }
  &:disabled:hover,
  &:disabled:focus {
    background-color: unset;
    color: unset;
  }
`

export const LabelRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0 24px 0;
`
