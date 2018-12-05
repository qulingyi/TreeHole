import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const randomColor = require('randomcolor');


randomColor({
  luminosity: 'bright',
  format: 'rgb',
});

const Box = posed.div({
  hoverable: true,
  pressable: true,
  draggable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  // press: {
  //   scale: 1.1,
  //   boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  // },
});

const Example = () => <Box />;

const cssHSL = () => randomColor();

const like = (e) => {
  e.target.style.color = '#e2264d';
};

const clickComment = (e) => {
  document.getElementById('commenting').left = `${e.target.left}`;
}

const comment_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLqrnTKDEX8p9d8RlVnwviDYVOkFHSqjW1UZPzHypNYPiL7Pllw';

const Room = (props) => {
    return (<div id="room_container">
        {
          props.names.map((i,key) => {
            return (<Box id="box" style={{border: `3px solid ${cssHSL()}`}} key={key}>
            <p id="text">{i.name}</p>
            {i.img && <img id="img" src={i.img}></img>}
            <div id="like_comment">
            <label onClick={like}>❤</label>
            <img id="comment" src={comment_img} onClick={clickComment}></img>
            </div>
            </Box>);
            
        })}
    </div>)
}

export default Room;
