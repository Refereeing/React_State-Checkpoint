import './App.css';
import React from 'react';
import myImage from './Colina.jpg';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
constructor () {
  super ();
    this.state = {
      Person: {
        fullName : "Referee",
        bio: "I am an enthusiastic geologist engineer. As a pastime, I am a football referee ⚽.",
        imgSrc : myImage,
        profession : "Geologist engineer ⛏"
      },
    show : true,
    counter : 0
  };
}
  handleShowPerson = () => {
    this.setState({
      show: !this.state.show
    });
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({counter: this.state.counter + 1})
    }, 1000)
  }

  render() {
    return (
    <div className="App" style={{backgroundColor:'cyan', width:'100%', height:'100vh'}}>
        <Button style={{marginTop:"10px"}} variant="outline-secondary" onClick={this.handleShowPerson}>Profile</Button>
        <div style={{color:"grey",fontWeight:"bold",fontFamily:"Time New Roman", textAlign:"center"}}>
            You have spent &nbsp;
            <span style={{color:"brown",fontWeight:"bolder", fontFamily:"Time New Roman"}} >
            {this.state.counter}  seconds 
            </span>&nbsp;looking at my profile.
        </div>   
        
        <br />
        {this.state.show && (
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", borderRadius:"20px", width:"370px", height:"auto", backgroundColor:"white", marginTop:"20px", margin:"auto"}}>
            <img style={{width:"170px", height:"auto", border:'solid 5px cyan' ,borderRadius:"50%", marginTop:"10px"}} src={this.state.Person.imgSrc} alt="whistle" height="460"></img>
            <h1 style={{color:"grey", fontWeight:"bolder", fontFamily:"Time New Roman", fontSize:"25px"}}> Full Name :{this.state.Person.fullName}</h1>
            <p style={{color:"grey", fontWeight:"bolder", fontFamily:"Time New Roman", fontSize:"20px"}}> Bio : {this.state.Person.bio}</p>
            <h1 style={{color:"grey", fontWeight:"bolder", fontFamily:"Time New Roman", fontSize:"20px"}}> Profession : {this.state.Person.profession}</h1>
            <br/>
        </div>
        )}

    </div>
    );
}
}

export default App;