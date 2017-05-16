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

const githubURL = "https://github.com/AngusYuan/apartment-price-system";

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
  <div>
  <div className="row">
    <div className="col s12 m8 l6">
    <h5 className="z-depth-5" className="card-panel teal lighten-2">Apartment Number</h5>
    <p>Show how many apartment news per day</p>
    <CalendarHeatmap
      values={this.state.heatmap
      }
      classForValue={ClickClassForValue}
      titleForValue={TitleForValue}
      onClick={OnClick}
    />
    </div>
     <div className="col s12 m8 l6">
     <h5 className="z-depth-5" className="card-panel teal lighten-2">Apartment Price</h5>
     <p>Show average price per day</p>
     <CalendarHeatmap
       values={this.state.heatmap
       }
       classForValue={ClickClassForValue}
       titleForValue={TitleForValue}
       onClick={OnClick}
     />
      </div>
    </div>

  <footer className="page-footer">
  <div className="container">
    <div className="row">
      <div className="col l6 s12">
        <h5 className="white-text">Project Detail</h5>
        <p className="grey-text text-lighten-4">You can use link here to see my project on github</p>
      </div>
      <div className="col l4 offset-l2 s12">
        <h5 className="white-text">Link</h5>
        <ul>
          <li><a className="grey-text text-lighten-3" href={githubURL}>github</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
  );
}
}

export default Heatmap;
