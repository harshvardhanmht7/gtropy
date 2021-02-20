import React from 'react';
import './boxes.css';

const boxes=(props)=>{
    let confirmed,recovered,active,deceased;
    
    if((Object.keys(props.alldata).length !== 0))
   { 
       recovered=props.alldata.recovered;
    deceased=props.alldata.deceased;
    active=props.alldata.active;
    confirmed=props.alldata.confirmed;
}
if((Object.keys(props.alldata).length === 0))
{
    props.boxstates.map(value=>{
        if(value.state==='Total')
        {
            recovered=value.recovered;
            active=value.active;
            deceased=value.deaths;
            confirmed=value.confirmed;
            return null;
        }
        else{
        return  null;
    }
    }) 
}

return (
    <div className="box-container" >
        <div className="confirmed"> 
        <p>Confirmed</p>
        <p>{confirmed}</p>
         </div>
        <div className="active">
        <p>Active</p>
        {active}
        </div>
        <div className="recovered">
        <p >Recovered</p>
        {recovered}
        </div>
        <div className="deceased">
        <p >Deceased</p>
        {deceased}
        </div>

    </div>
);

}

export default boxes;