import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonSecondary from '../components/ButtonSecondary';

storiesOf('ButtonSecondary', module)
  .add(
    'default',
    () => (
      <ButtonSecondary/>
    )
    );