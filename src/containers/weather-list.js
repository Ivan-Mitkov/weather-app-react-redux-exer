import React, {Component} from 'react';
import {connect} from 'react-redux';


class WeatherList extends Component{
    renderWeather(cityData){
        return(
            //add key to the top element
            <tr key={cityData.city.name}>
                <td>
                    {cityData.city.name}
                </td>
            </tr>
        )
    }
   
    render(){
        return(
            <table className='table table-hover'>
            <thead>
                <tr>
                    <th>
                    City
                    </th>
                    <th>
                    Temperature
                    </th>
                    <th>
                   Pressure
                    </th>
                    <th>
                   Humidity
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
        )
    }
}
//weather form reducer/index
function mapStateToProps({weather}){
    return {weather:weather};
}

export default connect(mapStateToProps)(WeatherList);
