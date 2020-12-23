import React from 'react';

import { Cards,Chart,CountryPicker } from './components';
import styles from './App.module.css'
import {fetchData} from './api'
import covidImage from './images/covid_image.png'

class App extends React.Component{

    state={
        data: {},
        country:'',
    }

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData})
    }

    handleCountryChange = async(country) =>{
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country:country})
        //1 fetch data
        //2 set state
    }

    render(){
        const {data,country} = this.state;
        return(
            <div className={styles.container}>

                <img src={covidImage} className={styles.image}/>

                <Cards data={data}/>
                <CountryPicker handleCountryChange = {this.handleCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;