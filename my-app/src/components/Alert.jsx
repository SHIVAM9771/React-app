import React, { useEffect } from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (word) {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return '';
  };

  useEffect(() => {
    if (props.alert) {
      document.body.style.overflow = 'hidden'; 
    } else {
      document.body.style.overflow = 'auto'; 
    }
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, [props.alert]);

  return (
    props.alert && (
      <div className='container my-3'>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show d-flex align-items-center`} role="alert">
          <span className="me-2 alert-icon">
            {props.alert.type === 'success' && <i className="bi bi-check-circle-fill"></i>}
            {props.alert.type === 'danger' && <i className="bi bi-exclamation-triangle-fill"></i>}
            {props.alert.type === 'warning' && <i className="bi bi-exclamation-circle-fill"></i>}
            {props.alert.type === 'info' && <i className="bi bi-info-circle-fill"></i>}
          </span>
          <div>
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
          <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    )
  );
}
