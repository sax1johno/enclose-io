import React from 'react';
import TweenOne from 'rc-tween-one';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

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
        <img src={item.img} width="100%" />
      </span>
      <h2>{item.title}</h2>
      <p>{item.content}</p>
    </li>);


  render() {
    const props = Object.assign({}, this.props);
    const isMode = props.isMode;
    const dataSource = [
      { img: 'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png', title: 'todo', content: 'todo，todo，todo，todo。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png', title: 'todo', content: 'todo，todo，todo。\ntodo，todo。' },
      { img: 'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png', title: 'todo', content: 'todo、todo、todo，todo、todo、todo。' },
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
            <img width="100%" src="https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png" />
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
