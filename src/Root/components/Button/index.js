import React, {PropTypes} from 'react';

/**
 * Button
 * @param text
 * @param className
 * @param onClick
 * @constructor
 */
const Button = ({text, className, onClick}) => (
    <a
        className={`button ${className}`}
        href='javascript:void(0)'
        onClick={onClick}
    >
        {text}
    </a>
);

Button.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: '',
};

export default Button;