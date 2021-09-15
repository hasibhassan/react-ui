import Button from './react-button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'default', 'large', 'xl'],
      control: { type: 'inline-radio' },
    },
    // rounded: {
    //   control: { type: boolean },
    // },
  },
}

export const Primary = { args: { label: 'Click me!' } }
export const Rounded = { args: { label: 'Rounded btn!', isRounded: true } }
