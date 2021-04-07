import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroup.css';

const ListGroup = ({
  children, className, horizontal, tag: Tag,
}) => {
  const classes = classNames(
    'list-group',
    className,
    { horizontal },
  );

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  horizontal: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

ListGroup.defaultProps = {
  children: null,
  className: '',
  horizontal: false,
  tag: 'ul',
};

export default ListGroup;
