import React from 'react';
import ReactDOM from 'react-dom';
import posed, { PoseGroup } from 'react-pose';
import axios from 'axios';
import Room from './Room.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      loading: false,
    };
  }

  componentDidMount() {
    axios.get('/rooms')
      .then((response) => {
        console.log('data', response.data);
        this.setState({
          rooms: response.data,
          loading: true,
        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  }

  render() {
    return (
      <div>
        { this.state.loading &&
          <Room names={this.state.rooms} />}
      </div>
    );
  }
}

export default App;