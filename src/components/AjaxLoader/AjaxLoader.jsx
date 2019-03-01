import React from 'react';
import './AjaxLoader.scss';

const ldrSrc = "../../assets/images/spinner.gif";
const AjaxLoader = () => (
  <div className="ajax-ldr-backdrop" >
    <img alt="Loading" src={ldrSrc}
      className="ajax-ldr"
      title="Loading" />
  </div>
)
export default AjaxLoader;
