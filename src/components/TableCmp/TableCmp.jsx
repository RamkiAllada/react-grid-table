import React, {
  Component
} from 'react';
import ReactTable from "react-table";
import AjaxLoader from "../AjaxLoader/AjaxLoader.jsx";

import {
  tableData
} from '../../services/sievoData';
import "react-table/react-table.css";
import "./TableCmp.scss";

class TableCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      columns: null,
    };
  }
  componentDidMount() {
    tableData().then(data =>
      this.setState({
        data,
        columns: Object.keys(data.filter((proj, index) => {
          return (index === 0)
        })[0]).map((item, index) => {
          return {
            'Header': item,
            accessor: item,
            filterable: index === 1 ? true : false,
            sortable: index === 0 ? true : false,
            filterMethod: (filter, row, column) => {
              return row[filter.id].toLowerCase().includes(filter.value.toLowerCase())
            }
          }
        })
      })
    )
  }
  render() {
    const {
      data,
      columns
    } = this.state;
    return (
      <div className="App" >
        {
          data.length === 0 && <AjaxLoader />
        }
        {
          data.length > 0 &&
          <ReactTable
            data={data}
            resolveData={
              data => data.map(row => {
                row['start date'] = `${new Date(row['start date']).getDate() > 9 ? new Date(row['start date']).getDate() : '0' + new Date(row['start date']).getDate()} - ${new Date(row['start date']).getMonth() + 1 > 9 ? new Date(row['start date']).getMonth() + 1 : '0' + (new Date(row['start date']).getMonth() + 1)} - ${new Date(row['start date']).getFullYear()}`;
                row['currency'] = `${row['currency'] !== 'NULL' ? row['currency'] : ''}`;
                return row
              })
            }
            showPagination={false}
            filterable={true}
            minRows={0}
            noDataText='No records found'
            columns={columns}
            resizable={false}
            className="-striped -highlight" />
        }
      </div >
    );
  }
}

export default TableCmp;
