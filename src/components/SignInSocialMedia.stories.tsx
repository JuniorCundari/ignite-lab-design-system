import { Meta, StoryObj } from '@storybook/react'
import { SignInSocialMedia, SignInSocialMediaProps } from './SignInSocialMedia'

export default {
  title: 'Components/SignInSocialMedia',
  component: SignInSocialMedia,
  args: {
    children: 'SignIn with an account',
  },
  argTypes: {}
} as Meta<SignInSocialMediaProps>

export const Default: StoryObj<SignInSocialMediaProps> = {}
