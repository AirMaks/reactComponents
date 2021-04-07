import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TabBarNav from './TabBarNav';
import './TabBar.css';

class TabBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: null,
    };
  }

  componentDidMount() {
    const { children = [] } = this.props;
    const activeTab = this.getChildrenLabels(children)[0];

    this.setActiveTab(activeTab);
  }

    getChildrenLabels = children => children.map(({ props }) => props.label)

    setActiveTab = activeTab => {
      const { activeTab: currentTab } = this.state;
      if (currentTab !== activeTab) {
        this.setState({
          activeTab,
        });
      }
    }

    renderTabs = () => {
      const { children = [] } = this.props;
      const { activeTab } = this.state;

      return this.getChildrenLabels(children).map(navLabel => (
        <TabBarNav
          key={navLabel}
          navLabel={navLabel}
          className={classNames({ active: activeTab === navLabel })}
          onChangeActiveTab={this.setActiveTab}
        />
      ));
    }

    render() {
      const { activeTab } = this.state;
      const { children, className, vertical } = this.props;

      const classes = classNames(
        'tab-bar',
        className,
        { vertical },
      );
      return (
        <div className={classes}>
          <div className="tab-bar-nav">
            {this.renderTabs()}
          </div>
          <div className="tab-container">
            {React.Children.map(children, child => React.cloneElement(child, { activeTab }))}
          </div>
        </div>
      );
    }
}
TabBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

TabBar.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default TabBar;
