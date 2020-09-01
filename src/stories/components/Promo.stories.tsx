import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { PromoContent, Promo, PromoProps, ClickablePromo } from '../../components/Promo/index';

export default {
  title: 'component/Promo',
  component: Promo,
} as Meta;

// const mediumImage = '/stockimage1.jpg'
const largeImage = '/blog_image_1.jpg'

const Template: Story<PromoProps> = (args) => <PromoContent {...args} />;

export const DefaultPromo = Template.bind({});
DefaultPromo.args = {
  title: 'title here',
  description: 'Hello Promo',
  image: {alt: 'test alt', src: largeImage}
};

export const LongDescriptionShouldWrap = Template.bind({});
const longDescription = `Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test 
and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla
Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla
Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla Hello this is a test and bla`
LongDescriptionShouldWrap.args = {
  title: 'title here',
  description: longDescription,
  image: {alt: 'test alt', src: largeImage}
};


const promoClick = (args: any) => ClickablePromo({href: 'https://www.google.com'}, <PromoContent {...args} />);
export const Clickable = (args: any) => promoClick(args);
Clickable.bind({});

Clickable.args = {
  title: 'title here',
  description: longDescription,
  image: {alt: 'test alt', src: largeImage}
};
