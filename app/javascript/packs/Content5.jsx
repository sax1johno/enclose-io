import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';

class Content extends React.Component {

  static defaultProps = {
    className: 'content3',
  };

  render() {
    const props = Object.assign({}, this.props);
    const isMode = props.isMode;
    delete props.isMode;
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const videoChildren = 'https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4'
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={animation}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            todo
          </TweenOne>
          <TweenOne
            animation={Object.assign({}, animation, { delay: 200 })}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            todo，todo
          </TweenOne>
          <TweenOne
            key="video"
            animation={Object.assign({}, animation, { delay: 300 })}
            className={`${props.className}-video`}
            id={`${props.id}-video`}
          >
            {isMode ?
              (<video src={videoChildren} width="100%" loop />) :
              (<VideoPlay loop src={videoChildren} width="100%" />)}
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
