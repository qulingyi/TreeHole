import React from 'react';

const axios = require('axios');

var cssHSL = "hsl(" + 360 * Math.random() + ',' +
                 (25 + 70 * Math.random()) + '%,' + 
                 (85 + 10 * Math.random()) + '%)';

class Post extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //e.preventDefault();
    let data = {
      name: e.target.parentNode.children[0].value,
      image: e.target.parentNode.children[1].value,
    }
    console.log(data);
    axios.post('/post', data); 
    location.reload();
    // this.props.post(data);
  }

  render() {
    return (
      <div id="posting">
      <textarea placeholder="Say something ?"
      style={{border: `3px solid ${cssHSL}`}}></textarea>
      <input type="text" placeholder="Your image :)"
      style={{border: `3px solid ${cssHSL}`}} />
      <input type="submit" id="submit" style={{backgroundColor: cssHSL}} 
      onClick={this.handleClick} value="Submit" />
      </div>)
  }
}

export default Post;
