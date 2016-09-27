/**
 * @fileOverview Dot
 */
import React, { Component, PropTypes } from 'react';
import pureRender from '../util/PureRender';
import classNames from 'classnames';
import { getPresentationAttributes } from '../util/ReactUtils';

@pureRender
class Dot extends Component {
  static displayName = 'Dot';

  static propTypes = {
    className: PropTypes.string,
    cx: PropTypes.number,
    cy: PropTypes.number,
    r: PropTypes.number,
  };

  render() {
    const { cx, cy, r, className, labelData, value } = this.props;
    const layerClass = classNames('recharts-dot', className);

    if (cx === +cx && cy === +cy && r === +r) {
      return (
        <circle
          {...getPresentationAttributes(this.props)}
          className={layerClass}
          cx={cx}
          cy={cy}
          r={r}
          onClick={() => {
            if(typeof this.props.onClick == 'function')
              this.props.onClick(labelData,value);
          }}
        />
      );
    }

    return null;
  }
}

export default Dot;
