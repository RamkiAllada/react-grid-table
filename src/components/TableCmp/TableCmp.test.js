import React from 'react';
import ReactDOM from 'react-dom';
import TableCmp from './TableCmp';
import {
  tableData
} from '../../services/sievoData';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( < TableCmp / > , div);
  ReactDOM.unmountComponentAtNode(div);
});

/**
 * test case to check if the api is working
 */
test('should return an array with results', () => {
  tableData().then(data => {
    expect(data).array();
  })
});
