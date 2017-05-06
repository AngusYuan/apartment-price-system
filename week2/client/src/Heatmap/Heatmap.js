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

render() {
  return(
    <div className='heatmap'>
    <CalendarHeatmap
      values={[
        { date: '2017-01-01', count: 1 },
        { date: '2017-01-03', count: 4 },
        { date: '2016-12-06', count: 2 },
      ]}
      classForValue={ClickClassForValue}
      titleForValue={TitleForValue}
      onClick={OnClick}
    />
     </div>
  );
}
}

export default Heatmap;
