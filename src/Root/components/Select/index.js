// @flow

import React from 'react';
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
type propTypes = {options: [], defaultValue: string, id: string, className: string, onChange: Function, label: string};
const Select = ({options, defaultValue, id, className, onChange, label}: propTypes) => {
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

export default Select;
