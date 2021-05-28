import './App.scss';
import API from "./API"
import { Component } from 'react';

class App extends Component{

  state = {
    user: null,
  }


  async componentDidMount(){
    const response = await API.get("/");
    let user = await response.data.results[0];
    console.log(user);

    this.setState({user: user});
  }

  render(){
    let user = this.state.user;
    return (
      <div className="App">
        {
        (!user)?(
        <h1>Carregando...</h1>
        ) : 
        (
          <div className="user" key={user.login.uuid}>
            <div className="photo">
              <img src={user.picture.large} />
            </div>
            <div className="info">
              <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
              <h2>@{user.login.username}</h2>
            </div>
          </div>
        ) 
        }
      </div>
    );
  }
}

export default App;
