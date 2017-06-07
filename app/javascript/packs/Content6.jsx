import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon } from 'antd';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content5',
  };

  getBlockChildren = (item, i) =>
    (<li
      key={i}
      id={`${this.props.id}-block${i}`}
    >
      <span>
        <Icon type={item.img} />
      </span>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = Object.assign({}, this.props);
    const isMode = props.isMode;
    const dataSource = [
      { img: 'cloud-download-o', title: 'Fetching from the Cloud', content: 'Optinally enable AutoUpdate at compile time, after distribution it will fetch the latest version string from the cloud when ran.' },
      { img: 'question', title: 'Prompting the User', content: 'When a new version is detected, it prints a message to stderr asking whether to update. Defaults to no after 10s timeout.' },
      { img: 'swap', title: 'In-place Update', content: 'When updating started, the executable downloads the new version to a temporary directory, and replaces itself with it.' },
    ];
    const ulChildren = dataSource.map(this.getBlockChildren);
    delete props.isMode;
    const queue = isMode ? 'bottom' : 'left';
    const imgAnim = isMode ? { y: 30, opacity: 0, delay: 400, type: 'from', ease: 'easeOutQuad' }
      : { x: 30, opacity: 0, type: 'from', ease: 'easeOutQuad' };
    return (
      <div {...props} className="content-template-wrapper content5-wrapper">
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            className={`${props.className}-text`}
            key="text"
            type={queue}
            leaveReverse
            ease={['easeOutQuad', 'easeInQuad']}
            id={`${props.id}-textWrapper`}
          >
            <h1
              key="h1"
              id={`${props.id}-title`}
            >
              AutoUpdate
            </h1>
            <p
              key="p"
              id={`${props.id}-content`}
            >
              Combined with cloud services provided by Enclose.IO, you could keep your users up to date with your latest release.
            </p>
            <QueueAnim
              component="ul"
              key="ul" type={queue}
              id={`${props.id}-ul`}
              ease="easeOutQuad"
            >
              {ulChildren}
            </QueueAnim>
          </QueueAnim>
          <TweenOne
            className={`${props.className}-img`}
            key="img"
            animation={imgAnim}
            id={`${props.id}-img`}
            resetStyleBool
          >
            <img width="100%" src={window.gif2} />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
