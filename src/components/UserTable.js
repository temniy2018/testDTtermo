import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import s from '../styles/App.scss';

class UserTable extends Component {
    render() {
        return (
            <div className='container-lg mt-4'>
                {this.props.users.map(el => (
                    <div className='row flex-div mt-2 mb-2 table'>
                        <span className='col-12 col-sm-1 text-center'>{el[0]}</span>
                        <span className='col-12 col-sm-5 text-center'>{el[1]}</span>
                        <span className='col-12 col-sm-5 text-center'>{el[2]}</span>
                        <span className='col-2 col-sm-1 text-center btn btn-primary' onClick={() => this.props.delete(el[0])}><FontAwesomeIcon icon={faTrash} /></span>
                    </div>
                ))}
            </div>
        )
    }
}

export default UserTable;