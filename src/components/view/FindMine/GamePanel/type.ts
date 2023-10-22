export enum ElementState {
  closed,
  gem,
  bomb,
  rest,
  explore
}

export interface GameProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status: ElementState,
}
