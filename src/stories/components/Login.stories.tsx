import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Login } from '../../components/Forms/Login/index';

export default {
  title: 'component/Forms/Login',
  component: Login,
} as Meta;

const Template: Story = () => <Login />;

export const DefaultLogin = Template.bind({});