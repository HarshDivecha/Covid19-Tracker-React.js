import React, {useState,useEffect} from 'react';
import { fetchDailyData } from '../../api';
import{ Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';
//functional component

const Chart= ({data: {confirmed,deaths,recovered}, country}) =>{
    const [dailyData, setDailyData] = useState([]);
    useEffect(()=>{
        const fetchApi = async ()=>{
            setDailyData(await fetchDailyData());
        }
        fetchApi();
    },[]);

    // in line component 1st {} is to make is dynamic and 2nd for making it an object
    const lineChart = (
        dailyData.length
        ?(<Line
            data={{
                labels: dailyData.map( ({date})=>date ),
                datasets: [{
                    data: dailyData.map( ({confirmed})=>confirmed ),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill:true,
                }, {
                    data: dailyData.map( ({deaths})=>deaths ),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255,0,0, 0.5',
                    fill:true,
                }]
            }}
         />)
        :null
    );


    const barChart = (
        confirmed
        ?(
            <Bar
                data={{
                     labels: ['Infected', 'Recovered', 'Deaths'],
                     datasets: [{
                         label: 'People',
                         backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
                         data:[confirmed.value, recovered.value, deaths.value]
                     }]
                }}
                options={{
                    legend: {display:false},
                    title:{display:true, text: `Current state in ${country}`}
                }}
            />
        )
        :null
    )

    return (
        <div className={styles.container}>
            {country? barChart: lineChart}
        </div>
    )
}

export default Chart;


// const [dailyData, setDailyData] = useState({});
// learn useState for this.
// it just replaces
// state={
//     dailydata:{}
// }
// with a method to set state called setDailystate, in one line