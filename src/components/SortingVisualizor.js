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
    for (let i = 0; i < 100; i++) {
      newArray.push(getRandomNum(5, 1000));
    }

    this.setState({ array: newArray });
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        {array.map((value, index) => {
          return (
            <div className="bar" key={index}>
              {value}
            </div>
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
