import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Promo, PromoProps } from '../../components/Promo/index';

export default {
  title: 'component/Promo',
  component: Promo,
} as Meta;

const Template: Story<PromoProps> = (args) => <Promo {...args} />;

export const DefaultPromo = Template.bind({});
DefaultPromo.args = {
  description: 'Hello Promo'
};
