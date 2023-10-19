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
  iconPosition?: string
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
  margin-bottom: 10px;
`

export const InputGroupStyle = styled.div`
  & > :not(:first-child) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  };
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`

type InputWidth = {
  width?: string
}

export const InputStyle = styled.input<InputWidth>`
  background-color: #11202d;
  height: 40px;
  padding-left: 10px;
  padding-right:30px;
  border: 2px solid #304452;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.12);
  color: #aeb9d2;
  font-size: 14px;
  border-radius: 5px;
  width: ${props => props.width};
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
  width: 17px;
  height: 17px;
`

type LabelInput = {
  fontSize: string,
  padding: string
}

export const InputLabel = styled.label<Partial<LabelInput>>`
  margin-bottom: 4px;
  font-size: ${props => props.fontSize || '15px'};
  padding: ${props => props.padding || ''}
`

export const InputLabelDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
