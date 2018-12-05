import React from 'react';

const wirte = () => {
  document.getElementById('posting').style.display = 'flex';
}

class Navi extends React.Component {
    render() {
      return (
<ul>
  <li><a href="#home"> Home </a></li>
  <li><a href="#news"> News </a></li>
  <li><a href="#contact"> Contact </a></li>
  <li id="write" onClick={wirte}><a className="active" href="#about" >Add Post</a></li>
</ul>
      );
    }
  }

export default Navi;
