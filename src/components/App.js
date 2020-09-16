import React, { Component } from "react";
import '../styles/App.scss';
import logo from '../img/logo.png';
import s from '../styles/App.scss';
import UserForm from './UserForm';
import UserTable from './UserTable';

const usersJson = require('../users.json');

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            users: this.userToArray(usersJson)
        }

        this.delete = this.delete.bind(this);
        this.createUser = this.createUser.bind(this);
    }

    userToArray(users) {
        let usersArray = []
        for (const key in users) {
            usersArray.push([key, users[key].name, users[key].tel]);
        }
        return usersArray;
    }

    delete(el) {
        let usersArray = this.state.users;
        usersArray.splice(el-1, 1);
        for (let i = el-1; i < usersArray.length; i++) {
            usersArray[i][0] = i + 1;
        }
        this.setState({users: usersArray});
    }

    createUser(user) {
        let usersArray = [...this.state.users, [this.state.users.length + 1, ...user]];
        this.setState({users: usersArray});
    }
    render() {
        return (
            <React.Fragment>
                <header className="container-fluid">
                    <div className="container-lg">
                        <img src={logo} alt="DTtermo"/>
                    </div>
                </header>
                <div className={'root container-fluid'}>
                    <UserForm createUser={this.createUser} />
                    <hr />
                    <UserTable users={this.state.users} delete={this.delete} />
                </div>
                <footer>
                    <p>By Roman Zaitsev</p>
                </footer>
            </React.Fragment>
        );
    }
}

export default App;