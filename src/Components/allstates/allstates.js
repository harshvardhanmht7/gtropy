import React from 'react';
import './allstates.css';

const allstates=(props)=>{

    const detail=props.statearray.map(value=>{
        if(value.state==='Total')
        {
            return null;
        }
        else{
        return(
        
            <tr key={value.state} > 
                <td>{value.state}</td>
                <td>{value.confirmed}</td>
                <td>{value.active}</td>
                <td>{value.recovered}</td>
                <td>{value.deaths}</td>
                </tr>
        );
    }
    }) 

return (

    <div>

        <table className="statetable">
            <thead>
            <tr>
    <th>STATE/UT</th>
    <th>CONFIRMED</th>
    <th>ACTIVE</th>
    <th>RECOVERED</th>
    <th>DECEASED</th>
        </tr>
        </thead>
 <tbody >
  {detail}
  </tbody>
  
     </table>
            
        
        
    </div>

);

}

export default allstates;