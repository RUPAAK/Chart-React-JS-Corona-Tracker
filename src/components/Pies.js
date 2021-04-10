import React from 'react'
import {Pie} from 'react-chartjs-2';

const Pies=({con, rec, det})=>{
    return(
        <>
        <p style={{textAlign: 'center', fontSize: '24px', paddingTop: '10px'}}>PIE CHART</p>
            <Pie
                data= {{
                    labels:['Confirmed Cases', 'Recovered', 'Total Deaths'],
                    datasets: [{
                        label: 'CORONA CASES',
                        data: [con, rec, det],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                        ],
                        borderWidth: 1,
                    }]
                }}
                height= {100}
                width= {200}

                options={{
                    maintainAspectRatio: false,
                    scales: {
                        xAxes: [{
                            barPercentage: 0.3
                        }],
                        yAxes:[
                            {
                                ticks: {
                                    beginAtZero: true
                                }
                            }
                        ]
                    }
                }}
            />
        </>
    )
}

export default Pies