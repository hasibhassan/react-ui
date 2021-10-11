import Button from './react-button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'default', 'large', 'xl'],
      control: { type: 'inline-radio' },
    },
    color: {
      options: ['blue', 'red'],
      control: { type: 'inline-radio' },
    },
  },
}

export const Primary = { args: { label: 'Click me!' } }

export const Rounded = {
  args: { label: 'Rounded btn!', isRounded: true },
}

export const Red = { args: { label: 'Click me!', color: 'red' } }
