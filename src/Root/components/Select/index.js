import React, {PropTypes} from 'react';
import {config} from '~/utils';

/**
 * Select.
 * @param options
 * @param defaultValue
 * @param id
 * @param className
 * @param onChange
 * @param label
 * @returns {*}
 * @constructor
 */
const Select = ({options, defaultValue, id, className, onChange, label}) => {
    const items = options.map(item => (
        <option
            key={item.value}
            value={item.value}
            className='option'
        >
            {item.text}
        </option>
    ));

    return options.length > 1
        ?
        <div className='select-element'>
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                className={`select-field ${className || ''}`}
                value={defaultValue}
                onChange={onChange}
            >
                {items}
            </select>
        </div>

        : null;
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    defaultValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Select;
