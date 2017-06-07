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
            How it Works
          </TweenOne>
          <TweenOne
            animation={Object.assign({}, animation, { delay: 200 })}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            Check out one of our technical presentations.
          </TweenOne>
          <TweenOne
            key="video"
            animation={Object.assign({}, animation, { delay: 300 })}
            className={`${props.className}-video`}
            id={`${props.id}-video`}
          >
            <iframe frameBorder="0" src="http://speakerdeck.com/player/ea830897c7b94dff84e55be3b88082e9"
                    style={{
                            border: 0,
                            background: 'transparent',
                            margin: 0,
                            padding: 0,
                            borderRadius: '5px',
                            width: '710px',
                            height: '594.5px',
                          }} ></iframe>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}


export default Content;
