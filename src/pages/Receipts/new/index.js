import React from 'react';
import NewReciept from './NewReciept';

const RecieptForm = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <NewReciept initialValues={{
          radioGroup: 'male',
          a: true,
          checked: true,
          disabledChecked: true,
          radioOnOff: 'on',
          radioDisabledOnOff: 'on'
        }} />
      </div>
    </div>
  </div>
);

export default RecieptForm;