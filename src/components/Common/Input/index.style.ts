import styled from 'styled-components';

export type InputButton = {
  name: string,
  onClick: () => void,
}

export type SelectOption = {
  value: number,
  title: number
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string,
  label?: string,
  classes?: string,
  rightLabel?: string,
  buttons?: InputButton[],
  options?: SelectOption[],
  iconPosition?: string,
  backgroundColor?: string
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string,
  type?: string,
  icon?: string,
  options?: SelectOption[]
}

export const InputDiv = styled.div<InputWidth>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${props => props.width || '100%'};
  margin-bottom: 12px;
`

export const InputGroupStyle = styled.div`
  & > :not(:first-child) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  };
  & > :not(:last-child) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
  };
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`

type InputWidth = {
  width?: string,
  backgroundColor?: string
}

export const InputStyle = styled.input<InputWidth>`
  background-color: ${props => props.backgroundColor ? '#304452' : '#11202d' };
  padding: .625rem;
  padding-right:30px;
  border: 2px solid #304452;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.12);
  color: ${props => props.color ? '#fff' : '#aeb9d2'};
  border-radius: 5px;
  width: ${props => props.width};
  transition-duration: .2s;
  line-height: 1.25rem;
  font-size: .875rem;
  font-weight: 500;
  font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;
  &:hover {
    border-color: #576f85;
  };
  &:focus {
    color: #fff;
    border-color: #576f85;
    outline: 0
  }
`

export const SelectStyle = styled.select`
  background-color: #11202d;
  height: 45px;
  padding-left: 10px;
  padding-right:30px;
  border: 2px solid #304452;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.12);
  color: #aeb9d2;
  font-size: 14px;
  border-radius: 5px;
  width: 100%;
  margin-top: 1px;
  font-weight: 500;
  transition-duration: .2s;
  font-family: inherit;
  &:hover {
    border-color: #576f85;
  };
  &:focus {
    color: #fff;
    border-color: #576f85;
    outline: 0
  }
`

type IconPosition = {
  position?: string
}

export const Icon = styled.img<IconPosition>`
  position: absolute;
  right: ${props => props.position || '13px'};
  width: 16px;
  height: 16px;
`

type LabelInput = {
  fontSize: string,
  padding: string
}

export const InputLabel = styled.label<Partial<LabelInput>>`
  margin-bottom: 4px;
  ${props => props.fontSize && 'margin-right: -1px;'}
  font-size: ${props => props.fontSize || '.875rem'};
  padding: ${props => props.padding || ''};
  font-weitght: 500
`

export const InputLabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
