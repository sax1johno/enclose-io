import React from 'react';
import { Icon } from 'antd';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

class Content extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'content4',
  };

  getChildrenToRender = (item, i) => {
    const id = `block${i}`;
    return (<li
      key={i}
      id={`${this.props.id}-${id}`}
    >
      <div className="content-wrapper">
        <span><a href={item.href}><img src={item.img} height="100%" /></a></span>
        <p>{item.content}</p>
      </div>
    </li>);
  }

  getEnterAnim = (e, isMode) => {
    const index = e.index;
    const delay = isMode ? index * 50 + 200 : index % 4 * 100 + Math.floor(index / 4) * 100 + 300;
    return { y: '+=30', opacity: 0, type: 'from', delay };
  };

  render() {
    const props = Object.assign({}, this.props);
    const isMode = props.isMode;
    delete props.isMode;
    const dataArray = [
    ];
    const childrenToRender = dataArray.map(this.getChildrenToRender);
    return (
      <div
        {...props}
        className="content4-wrapper"
      >
      <footer id="footer">
      <ul>
      	<li>
        	<h2>
            <Icon type="github" />
            GitHub
        	</h2>
        	<div>
        		<a target="_blank " href="https://github.com/pmq20/node-compiler"><span>Node.js Compiler</span></a>
        	</div>
        	<div>
        		<a target="_blank " href="https://github.com/pmq20/ruby-compiler"><span>Ruby Compiler</span></a>
        	</div>
        	<div>
        		<a target="_blank " href="https://github.com/pmq20/enclose-io"><span>Enclose.IO</span></a>
        	</div>
      	</li>
      	<li>
        	<h2>
            <Icon type="share-alt" />
            <span>Dependencies</span>
          </h2>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="https://github.com/pmq20/libsquash"><span>Libsquash</span></a>
            <span> - </span><span>Portable, user-land SquashFS that can be easily linked and embedded</span>
        	</div>
        	<div>
        		<a href="http://squashfs.sourceforge.net/"><span>SquashFS</span></a>
            <span> - </span><span>A compressed read-only filesystem for Linux</span>
        	</div>
      	</li>
      	<li>
        	<h2><i className="anticon anticon-link"></i>
        	<span>Links</span></h2>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="https://eggjs.org/">Egg</a><span> - </span><span>Enterprise Node.js Framework</span>
        	</div>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="https://alinode.aliyun.com/">Alinode</a><span> - </span><span>Node.js Performance Managing</span>
        	</div>
        	<div>
        		<a href="http://ant.design/">Ant Design</a><span> - </span><span>UI Design Language</span>
        	</div>
        	<div>
        		<a href="https://antv.alipay.com/">AntV</a><span> - </span><span>Data Visualization</span>
        	</div>
      	</li>
      	<li>
        	<h2>
            <Icon type="team" />
        	  <span>Authors</span>
          </h2>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="http://www.minqi-pan.com/">Minqi Pan</a>
        	</div>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="https://github.com/SounderLiu">Shengyuan Liu</a>
        	</div>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="https://github.com/lexor90">Alessandro Agosto</a>
        	</div>
        	<div>
        		<a target="_blank" rel="noopener noreferrer" href="http://blog.xiaoba.me/">Yuwei Ba</a>
        	</div>
      	</li>
      </ul>
      </footer>
      </div>
    )
  }
}


export default Content;
