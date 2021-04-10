import React, {useEffect, useState} from 'react'
import Bars from './components/Bars'
import Pies from './components/Pies'
import axios from 'axios';
import './App.css'


const Chart = () => {

    const [confirmedpeople, setconfirmedpeople] = useState('')
    const [recoveredpeople, setrecoveredpeople] = useState('')
    const [deathspeople, setdeathspeople] = useState('')
    const [show, setshow] = useState(true);

    const changeState=()=>{
        setshow(!show)
    }

    const url= `https://covid19.mathdro.id/api`;
    const fetchData= async()=>{
        try {
            const datas= await axios.get(url)
            console.log(datas)
            setconfirmedpeople(datas.data.confirmed.value)
            setrecoveredpeople(datas.data.recovered.value)
            setdeathspeople(datas.data.recovered.value)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData()
    })


    return (
        <>
            <ul className="ul-list">
                <li onClick={changeState}>Bar</li>
                <li onClick={changeState}>Pie</li>
            </ul>
           {show ? <Bars con={confirmedpeople} rec={recoveredpeople} det={deathspeople} />:<Pies con={confirmedpeople} rec={recoveredpeople} det={deathspeople} />} 
           <div className='content-container'>
               <p>Above <span>{show ? 'Bar' : 'Pie'}</span> Chart shows the present condition of Corona Virus in the World</p>
               <p>As you can see, TOTAL CASES ARE: {confirmedpeople}, TOTAL RECOVERED ARE: {recoveredpeople}, TOTAL DEATHS ARE: {deathspeople}</p>
           </div>

        </>
    )
}

export default Chart
