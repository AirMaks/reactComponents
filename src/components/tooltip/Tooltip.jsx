import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Tooltip.css';

class Tooltip extends React.Component {
  state = {
    visible: false,
  }

  show = () => {
    this.setVisibility(true);
  }

  hide = () => {
    this.setVisibility(false);
  }

  setVisibility = visible => {
    this.setState({ visible });
  }

  render() {
    const { visible } = this.state;
    const {
      children, content, style, position,
    } = this.props;
    const classes = classNames(
      'tooltip',
      position,
    );

    return (
      <span
        className="tooltip-wrapper"
      >
        {visible && <span className={classes} style={style}>{content}</span>}

        <span
          onMouseEnter={this.show}
          onMouseLeave={this.hide}
          className="target-element"
        >
          {children}
        </span>
      </span>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

};

Tooltip.defaultProps = {
  content: 'Tooltip',
  style: {},
  position: 'top',
};

export default Tooltip;
