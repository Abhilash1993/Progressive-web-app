import React, {PropTypes} from 'react';
import './landing.less';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }
  render() {
    const {state,props} = this;
    return (
      <div className="landing-root">
        hey
      </div>
      )
    }
}

export default Landing;
