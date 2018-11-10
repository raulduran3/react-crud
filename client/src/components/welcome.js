import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <div className="jumbotron">
      <h1 className="display-3">CRUD WEB PANEL</h1>
      <p>Raul Test App</p>
      <p><Link className="btn btn-primary btn-lg" to="/posts" role="button">Come in bro</Link></p>
    </div>
  </div>
);
