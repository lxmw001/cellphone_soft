import React from 'react';
import { Route } from 'react-router-dom';
// import ClientList from './list/ClientList';
// import EditClient from './edit/EditClient';
import ReceiptTable from './list';
import RecieptForm from './new';
const Components = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/list`} component={ReceiptTable} />
    <Route path={`${match.url}/new`} component={RecieptForm} />
  </div>
);

export default Components;