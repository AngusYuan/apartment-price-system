import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import './Heatmap.css';

function ClickClassForValue(value) {
    if (!value) {
      return 'color-empty';
    }
      return `color-scale-${value.count}`;
    }

function TitleForValue(value) {
  if (value) {
    return `You're hovering over ${value.date.toString()} with value ${value.count}`;
  }
  }

function OnClick(value) {
    if (value) {
      alert(`Clicked on ${value.date.toString()} with value ${value.count}`);
    }
  }

class Heatmap extends React.Component{
  constructor() {
        super();
        this.state = {heatmap:null};
      }

      componentDidMount() {
      this.loadheatmap();
    }

    loadheatmap() {
        let request = new Request('http://localhost:3000/heatmap', {
          method: 'GET',
          cache: false});

        fetch(request)
          .then((res) => res.json())
          .then((heatmap) => {
            this.setState({
              heatmap: this.state.heatmap? this.state.heatmap.concat(heatmap) : heatmap,
            });
          });
      }

render() {
  return(
    <div className="row m-b-3">
    <div className="col-xs-12 col-md-6">
    <CalendarHeatmap
      values={this.state.heatmap
      }
      classForValue={ClickClassForValue}
      titleForValue={TitleForValue}
      onClick={OnClick}
    />
     </div>
     <div className="col-xs-12 col-md-6">
     <CalendarHeatmap
       values={this.state.heatmap
       }
       classForValue={ClickClassForValue}
       titleForValue={TitleForValue}
       onClick={OnClick}
     />
      </div>
      </div>
  );
}
}

export default Heatmap;
