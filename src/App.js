import logo from './logo.svg';
import './App.css';
import React from 'react'



class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: 'Marwan Abdou',
        bio: 'A software engineer with 10 years of experience',
        imgSrc: 'https://res.cloudinary.com/practicaldev/image/fetch/s--1mtEvyef--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn.hashnode.com/res/hashnode/image/upload/v1647490619965/P1dsNgj-f1.png',
        profession: 'software engineer'
      },
      shows: false,
      mountedTime: null,
      elapsedTime: null
    };
  }


  componentDidMount() {
    this.setState({ mountedTime: Date.now() });
    this.interval = setInterval(() => {
      this.setState({ elapsedTime: Date.now() - this.state.mountedTime });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.shows && (
          <div>
             <p>Elapsed time: {this.state.elapsedTime} milliseconds</p>
            <p>Name: {this.state.person.name}</p>
            <p>Bio: {this.state.person.bio}</p>
            <p>Profession: {this.state.person.profession}</p>
            <img src={this.state.person.imgSrc} alt="react logo" />
          </div>
        )}
      </div>
    );
  }
}

export default MyComponent;
