// @flow

import React from 'react';
import keycode from 'keycode';

/**
 * Text
 * @param className
 * @param onChange
 * @param onEnter
 * @param placeholder
 * @param value
 * @constructor
 */
type propTypes = {className?: string, onChange: Function, onEnter: Function, placeholder: string, value?: string};
const Text = ({className = '', onChange, onEnter, placeholder, value}: propTypes) => (
    <input
        type='text'
        className={`text-field ${className}`}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        value={value}
        onKeyDown={e => {if (keycode(e) === 'enter') onEnter(e.target.value);}}
        autoFocus
    />
);

export default Text;