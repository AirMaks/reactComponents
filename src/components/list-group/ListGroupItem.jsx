import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListGroupItem.css';

const ListGroupItem = ({
  children,
  className,
  tag: Tag,
  disabled,
  active,
}) => {
  const classes = classNames(
    'list-group-item',
    className,
    { disabled },
    { active },
  );

  if (Tag.href && Tag === 'li') {
    Tag = 'a';
  }

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
};

ListGroupItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
};

ListGroupItem.defaultProps = {
  children: null,
  className: '',
  tag: 'li',
  disabled: false,
  active: false,
};

export default ListGroupItem;
