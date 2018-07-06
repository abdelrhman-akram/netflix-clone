import React, { Component } from 'react';
import './makeProfileCreate.css';
import icon from './profilePicture.jpg'

class UserCreate extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            ppUrl: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
    }
    handleChange(event) {
        this.setState({username: event.target.value});
    }
    handleChange2(event) {
        this.setState({ppUrl: event.target.value});
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 id = "title" className="App-title">Add Profile</h1>
                    <h6 id = "description"><font color="#808080">Add a profile for a new person</font></h6>
                </header>
                <div className= "profileInfo">
                    <div className= "profilePicture">
                        <img src={icon} id="PP" alt = "Mahmoud 3li" onClick={()=>{alert("was3 2edak");}}/>
                    </div>
                    <div className="username">
                        <input id = "user_name" type="text" value={this.state.username} onChange={this.handleChange}
                        />
                        <input id = "urlText" type="text" value={this.state.ppUrl} onChange={this.handleChange2}
                        />
                    </div>
                </div>
                <div>
                    <button>Ok</button>
                    <button>Cancel</button>
                </div>
            </div>
        );
    }
}
export default UserCreate;