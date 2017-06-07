import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content7',
  };

  getBlockChildren = (item, i) =>(
    <li key={i} id={`${this.props.id}-block${i}`}>
      <div className="icon">
        <img src={item.icon} width="100%" />
      </div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
    </li>);

  render() {
    const props = Object.assign({}, this.props);
    delete props.isMode;
    const dataSource = [
      { icon: window.windows_png, title: 'Windows', content: 'Windows support is one of our top priorities. By compiling your project to one exe file, you just made distribution to Windows user a single download away. Non-technical users never have to deal with Node.js and npm, or Ruby and gem installations any more.' },
      { icon: window.macos_png, title: 'macOS', content: 'todo' },
      { icon: window.linux_png, title: 'Linux', content: 'While AppImage, a similar project, supports only Linux with kernels that enabled SquashFS, we put no such restrictions. We embedded SquashFS I/O abilities into your product via libsquash, so your product could run on a wider spectrum of Linux distributions.' },
    ];
    const listChildren = dataSource.map(this.getBlockChildren);
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{ y: '+=30', opacity: 0, type: 'from' }}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            Distribute to Multiple OS
          </TweenOne>
          <QueueAnim
            component="ul" type="bottom" key="block" leaveReverse
            id={`${props.id}-contentWrapper`}
          >
            {listChildren}
          </QueueAnim>
        </OverPack>
      </div>
    );
  }
}

export default Content;
