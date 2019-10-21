import React from 'react';
import EditClient from './EditClient';

const ClientForm = () => (
  <div>
    <div className="row">
      <div className="col-md-12">
        <EditClient initialValues={{
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

export default ClientForm;