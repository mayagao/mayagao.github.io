import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import Head from 'next/head';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  static defaultProps = {
    height: 'h6-l h5 h-auto',
  };
  onClickNext = () => {
    this.setState({
      activeIndex:
        this.state.activeIndex === 2 ? 0 : this.state.activeIndex + 1,
    });
  };
  onClickPrev = () => {
    this.setState({
      activeIndex:
        this.state.activeIndex === 0 ? 2 : this.state.activeIndex - 1,
    });
  };
  goToFirst = () => {
    this.setState({
      activeIndex: 0,
    });
  };
  goToLast = () => {
    this.setState({
      activeIndex: 2,
    });
  };

  goToMiddle = () => {
    this.setState({
      activeIndex: 1,
    });
  };

  render() {
    let content = this.props.content;

    return (
      <div className="relative">
        <Head>
          <style>{`
    @media screen and (min-width: 60em) {
     .h7-l { height: 32rem; }
    }
    .example-enter {
      opacity: 0.04;
    }
    .example-enter.example-enter-active {
      opacity: 1;
      transition: opacity 600ms ease-in;
    }
`}</style>
        </Head>
        <div className="mb4">
          <a
            onClick={this.goToFirst}
            className={`f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill ${
              this.state.activeIndex === 0 ? 'o-90 bg-white' : 'o-40'
            }`}
          >
            {content[0].title}
          </a>
          <a
            onClick={this.goToMiddle}
            className={`f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill ${
              this.state.activeIndex === 1 ? 'o-90 bg-white' : 'o-40'
            }`}
          >
            {content[1].title}
          </a>
          <a
            onClick={this.goToLast}
            className={`f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill ${
              this.state.activeIndex === 2 ? 'o-90 bg-white' : 'o-40'
            }`}
          >
            {content[2].title}
          </a>
        </div>
        <div className="items-center h-full mt5 absolute absolute--fill flex">
          <a
            onClick={this.onClickPrev}
            className="br-100 left-0 nl5 absolute  shadow shadow-1-on-hover pointer fl dib-l dn bg-white h2 items-center flex-l ph2"
          >
            <img
              className="h1 w1 o-50 glow "
              src="../../static/icons/prev.svg"
            />
          </a>
          <a
            onClick={this.onClickNext}
            className="br-100 right-0 nr5 absolute shadow shadow-1-on-hover pointer fr dib-l dn bg-white h2 items-center flex-l ph2"
          >
            <img
              className="h1 w1 o-50 glow "
              src="../../static/icons/next-b.svg"
            />
          </a>
        </div>
        <div className={`h7-l h-auto mb4`}>
          {this.state.activeIndex === 0 && content[0].content}
          {this.state.activeIndex === 1 && content[1].content}
          {this.state.activeIndex === 2 && content[2].content}
        </div>
      </div>
    );
  }
}

export default Slideshow;
