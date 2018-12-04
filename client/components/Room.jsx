import React from 'react';
import posed, { PoseGroup } from 'react-pose';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
  },
  hover: {
    scale: 1.1,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
  },
});

const Example = () => <Box />;

const Room = (props) => (
    <div id="room_container">
        {
          props.names.map((i,key) => {
            return <Box id="box" key={key}>{i.name}</Box>;
        })}
    </div>
)

export default Room;
