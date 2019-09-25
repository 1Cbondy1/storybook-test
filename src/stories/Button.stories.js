import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';

storiesOf('Button', module)
  .add(
    'default',
    () => (
      <Button/>
    ),
    {
      'in-dsm': {
        id: '5d8a61799dbb232667bf415c'
      }
    }
    );