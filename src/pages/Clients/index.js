import React from 'react';
import { Route } from 'react-router-dom';
// import ClientList from './list/ClientList';
// import EditClient from './edit/EditClient';
import ClientTable from './list';
import ClientForm from './edit';
const Components = ({match}) => (
  <div className="content">
    <Route path={`${match.url}/list`} component={ClientTable} />
    <Route path={`${match.url}/edit`} component={ClientForm} />
  </div>
);

export default Components;