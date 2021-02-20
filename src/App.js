
import './App.css';
import React, { Component } from 'react';
import Allstates from './Components/allstates/allstates';
import Modal from './Components/Modal/Modal';
import Donut from './Components/charts/Donut/donut';
import Map from './Components/Map/map';
import Boxes from './Components/Boxes/boxes';
import objCodec from 'object-encode';

import LZUTF8  from 'lzutf8';

class  App extends Component {

  state={
    covidstates:[],
    alldata:{},
    salt : ')*myNewAWESOME-salt254@%^&%',
     t1:0,
     t2:0,
     time:0,
     backdropclick:1
  }

componentDidMount(){
  fetch('https://api.covid19india.org/data.json').then(Response=>Response.json())
  .then(res=>{

    this.state.t1=new Date().getTime();
    res=objCodec.encode_object( res, 'utf8', this.state.salt );
    var input = new Buffer(res);
    var output = LZUTF8.compress(input);                        // Compressed here.
    
     output = LZUTF8.decompress(output);
    res=output;

    res=objCodec.decode_object( res, 'utf8', this.state.salt );    //Decompressed here

    this.state.t2=new Date().getTime();
         let t=this.state.t2-this.state.t1;
         this.setState({time:t});
         
    let arr=[];
    arr=res.statewise;

    this.setState({covidstates:arr});
  }).catch(err=>{
    console.log(err);
  })
}



assign(current){
  this.setState({alldata:current});

}

backdrophandler(){
  this.setState({backdropclick:0});
}


  render(){

    

  return (
    <div className="App">
      
    
    
      <div className="container">

      <div className='first'>
      <div className="three">
      <Donut  alldata={this.state.alldata}  chartstates={this.state.covidstates} />
      </div>
      
      <Allstates  statearray={this.state.covidstates}/>
      </div>
    
      <div className="second">
        <Boxes alldata={this.state.alldata} boxstates={this.state.covidstates}  />
      <Map  className ="map"  onassign={(data)=>this.assign(data)}  mapstates={this.state.covidstates}/>
    </div>
    
      </div>

      <Modal  click={()=>this.backdrophandler()} time={this.state.time} clickval={this.state.backdropclick} />
     
    </div>
  );
}
}

export default App;
