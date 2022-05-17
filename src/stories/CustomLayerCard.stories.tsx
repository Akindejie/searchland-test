import { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CustomLayerCard from './CustomLayerCard';

export default {
  /* 👇 The title prop is required.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'CustomLayerCard',
  component: CustomLayerCard,
  argTypes: {
    handleCheck: { action: 'handleCheck' },
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomLayerCard>;

const Template: ComponentStory<typeof CustomLayerCard> = (args) => (
  <CustomLayerCard {...args} />
);

export const Unselected = Template.bind({});
Unselected.args = {};

export const Hover = Template.bind({});
Hover.args = {};

export const Selected = Template.bind({});
Selected.args = {
  checked: true,
};
