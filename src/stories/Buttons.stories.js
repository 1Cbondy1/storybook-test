import React from 'react';
import { storiesOf } from '@storybook/react';

import Buttons from '../components/Buttons';

storiesOf('Buttons', module)
  .add(
    'default',
    () => (
      <Buttons/>
    ),
    {
      'in-dsm': {
        id: '5d8a61799dbb232667bf415c'
      }
    }
    );