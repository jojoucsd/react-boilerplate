/**
*
* SampleForm
*
*/

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withNotes } from '@storybook/addon-notes';
import SampleForm from '../';

const componentPath = localStorage.filename.split('/stories/')[0].split('./')[1];
storiesOf(componentPath, module)
  .add('Normal state',
    withNotes('Notes for Normal state')(
      () => (
        <SampleForm onSubmit={action('SampleForm was clicked')} />
      )
    )
  )
  .add('Other state',
    withNotes('Notes for Other state')(
      () => (
        <SampleForm onSubmit={action('SampleForm was clicked')} />
      )
    )
  );