import type { Meta, StoryObj } from '@storybook/react';

import PageLoading from './PageLoading';

const meta: Meta<typeof PageLoading> = {
  title: 'Shared/Component/PageLoading',
  component: PageLoading,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
