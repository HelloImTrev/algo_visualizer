import React from "react";

class SortingVisualizor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.setArray();
  }

  setArray() {
    const newArray = [];
    for (let i = 0; i < 150; i++) {
      newArray.push(getRandomNum(5, 550));
    }

    this.setState({ array: newArray });
  }

  render() {
    const { array } = this.state;

    return (
      <div className="bar-container">
        {array.map((value, index) => {
          return (
            <div className="bar" style={{height: value, width: '7px'}} key={index} />
          );
        })}
      </div>
    );
  }
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizor;
