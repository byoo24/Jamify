import React from 'react';

export default (props) => {
    const { type, className, placeholder, update, field, errors, required } = props;
    return(
        <input
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={update(field)} />
    );
}