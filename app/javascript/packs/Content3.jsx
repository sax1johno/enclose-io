import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Icon } from 'antd';

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  getDelay = e => e % 3 * 100 + Math.floor(e / 3) * 100 + 300;

  render() {
    const props = Object.assign({}, this.props);
    delete props.isMode;
    const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const blockArray = [
      { icon: 'hourglass', title: 'Faster', content: 'No need to download hundreds of files via npm or gem to distribute your application. Just toss a single file.' },
      { icon: 'appstore', title: 'Portable', content: 'Pack your apps into standard executables that work on computers without Node.js or Ruby installed.' },
      { icon: 'lock', title: 'Lockdown', content: 'Protect your source code from being viewed or tampered with. Confine dependencies into a single box.' },
      { icon: 'solution', title: 'EdgeCutting', content: 'Write softwares using latest libs and language features, without worrying about user\'s installed versions.' },
      { icon: 'clock-circle-o', title: 'AutoUpdate', content: 'After being distributed, enable the software to easily upgrade itself by downloading and replacing itself.' },
      { icon: 'meh-o', title: 'Jealousy', content: 'Newer languages like Go compiles a project into a nice executable, why can\'t good ol\' Node.js and Ruby?' },
    ];
    const children = blockArray.map((item, i) => {
      const id = `block${i}`;
      const delay = this.getDelay(i);
      const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
      const childrenAnim = Object.assign({}, liAnim, { x: '+=10', delay: delay + 100});
      return (<TweenOne
        component="li"
        animation={liAnim}
        key={i}
        id={`${props.id}-${id}`}
      >
        <TweenOne
          animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          className="img"
          key="img"
        >
          <Icon type={item.icon} />
        </TweenOne>
        <div className="text">
          <TweenOne key="h1" animation={childrenAnim} component="h1">
            {item.title}
          </TweenOne>
          <TweenOne key="p" animation={Object.assign({}, childrenAnim, { delay: delay + 200 })} component="p">
            {item.content}
          </TweenOne>
        </div>
      </TweenOne>);
    });
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            key="h1"
            animation={oneAnim}
            component="h1"
            id={`${props.id}-title`}
            reverseDelay={100}
          >
             Why Compiling?
          </TweenOne>
          <TweenOne
            key="p"
            animation={Object.assign({}, oneAnim, { delay: 100 })}
            component="p"
            id={`${props.id}-titleContent`}
          >
            Here are the reasons why we started the project.
          </TweenOne>
          <QueueAnim
            key="ul"
            type="bottom"
            className={`${props.className}-contentWrapper`}
            id={`${props.id}-contentWrapper`}
          >
            <ul key="ul">
              {children}
            </ul>
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}


export default Content;
