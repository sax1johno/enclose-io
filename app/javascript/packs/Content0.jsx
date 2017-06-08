import React, { PropTypes } from 'react';
import { Button, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  render() {
    const props = Object.assign({}, this.props);
    delete props.isMode;
    return (
      <OverPack
        replay
        playScale={[0.3, 0.1]}
        {...props}
      >
        <QueueAnim
          type={['bottom', 'top']}
          delay={200}
          className={`${props.className}-wrapper`}
          key="text"
          id={`${props.id}-wrapper`}
        >
          <span
            className="title"
            key="title"
            id={`${props.id}-title`}
          >
            <img width="100%" src={window.minqi_pan.intro_png} />
          </span>
          <p
            style={{ fontFamily: 'roboto, helvetica, sans-serif', fontWeight: 300, fontSize: 45 }}
            key="content"
            id={`${props.id}-content`}
          >
            Enclose.IO
          </p>
          <p key="button" id={`${props.id}-button`}>
            Compiling your application into a single executable.
          </p>
        </QueueAnim>
        <TweenOne
          animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className={`${props.className}-icon`}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}

Content.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
};

Content.defaultProps = {
  className: 'banner0',
};

export default Content;
