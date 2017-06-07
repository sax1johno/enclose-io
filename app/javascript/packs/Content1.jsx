import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {
  static defaultProps = {
    className: 'content0',
  };

  render() {
    const props = Object.assign({}, this.props);
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'right',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '-=30', opacity: 0, type: 'from' },
    }
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={ window.intro_nodec_png } />
            </span>
          </TweenOne>
          <QueueAnim
            className={`${props.className}-text`}
            type={animType.queue}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              <a href="https://github.com/pmq20/node-compiler">Node.js Compiler</a>
            </h1>
            <p key="p" id={`${props.id}-content`}>
              Ahead-of-time (AOT) Compiler designed for Node.js <br />
              <ul>
                <li>- Compiling your Node.js application into a single executable.</li>
                <li>- Dynamic require and C++ modules Fully Supported</li>
                <li>- Open Source, MIT Licensed</li>
              </ul>
              <iframe style={{marginTop: 10}} src="https://ghbtns.com/github-btn.html?user=pmq20&repo=node-compiler&type=star&count=true" frameBorder="0" scrolling="0" width="170px" height="20px"></iframe>
            </p>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
