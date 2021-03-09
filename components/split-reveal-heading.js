import { Component } from "react";
import gsap from 'gsap';

class SplitRevealHeading extends Component {
  constructor(props){
    super(props);
    this.toSplit = null;
  }

  componentDidMount(){
    var tl = gsap.timeline(), 

    childSplit = new SplitText(this.toSplit, {
      type: "lines",
      linesClass: "split-child"
    });
    
    var parentSplit = new SplitText(this.toSplit, {
      type: "lines",
      linesClass: "split-parent"
    });

    tl.from(childSplit.lines, {
      duration: 1,
      yPercent: 110,
      ease: "power4",
      stagger: 0.1,
      delay: 0.65
    });
  }

  render(){
    return (
      <h1 className="split" ref={h1 => this.toSplit = h1}>{ this.props.text }</h1>
    )
  }
}

export default SplitRevealHeading