import React from 'react';

export default (props) => {
    const { type, className, placeholder, update, field, errors, required } = props;
    // debugger;
    return(
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={update(field)} />
    );
}