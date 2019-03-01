import {
  endPoints
} from '../endpoints/endpoints';

/**
 * fetch the data
 */
export const tableData = () => {
  return fetch(
    endPoints.tableData
  ).then(res => res.json()).then(data => data)
}
