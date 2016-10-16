import React, {PropTypes} from 'react';
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
const Text = ({className, onChange, onEnter, placeholder, value}) => (
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

Text.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

Text.defaultProps = {
    className: '',
};

export default Text;