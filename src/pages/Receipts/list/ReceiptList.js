import React from 'react';
import generateData from '../generateData';
import moment from 'moment';
import { Link } from 'react-router-dom';
const data = generateData(10);

const ReceiptList = () => (
  <div className="card">
    <div className="header">
      <div className="row">
        <div className="col-xs-8">
          <h4 className="title">Recibos</h4>
          <p className="category">Ultimos recibos</p>
          <br />
        </div>
        <div className="col-xs-4 center-vertically">
          <button
            type="button"
            rel="tooltip"
            data-placement="left"
            title=""
            className="btn btn-success float-rigth"
        data-original-title="Nuevo cliente"
          >
             <Link to="/clients/edit">Nuevo Cliente</Link>
          </button>
        </div>
      </div>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-bigboy">
        <thead>
          <tr>
            <th className="text-center"></th>
            <th>Cedula</th>
            <th className="th-description">Nombres</th>
            <th className="text-right">Apellidos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr>
              <td>
                <div className="img-container">
                  <img src={item.avatar} alt={item.name} />
                </div>
              </td>
              <td className="td-name">{item.name}</td>
              <td>{item.description}</td>
              <td className="td-number">
                {moment(item.birthdate).format('YYYY-MM-DD')}
              </td>
              <td className="td-actions">
                <button
                  type="button"
                  rel="tooltip"
                  data-placement="left"
                  title=""
                  className="btn btn-info btn-simple btn-icon"
                  data-original-title="Ver Recibo"
                >
                  <i className="fa fa-image"></i>
                </button>
                <button
                  type="button"
                  rel="tooltip"
                  data-placement="left"
                  title=""
                  className="btn btn-danger btn-simple btn-icon "
                  data-original-title="Remove Post"
                >
                  <i className="fa fa-times"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ReceiptList;
