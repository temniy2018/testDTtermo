import React, {Component} from 'react';
import s from '../styles/App.scss';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            errors: {},
            values: {},
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({values: {...this.state.values, [name]: value}})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            errors: {
                name: !this.state.values.name ? 'Введите ФИО' : null,
                tel: !this.state.values.tel || !/^\d[\d\(\)\ -]{4,14}\d$/.test(this.state.values.tel) ? 'Введите корректный номер телефона' : null
        }
        });
        this.setState({
            errors: {
                name: !this.state.values.name ? 'Введите ФИО' : null,
                tel: !this.state.values.tel || !/^\d[\d\(\)\ -]{4,14}\d$/.test(this.state.values.tel) ? 'Введите корректный номер телефона' : null
            }
        }, () => {
            if (!this.state.errors.name && !this.state.errors.tel) {
            this.props.createUser([this.state.values.name, this.state.values.tel]);
        }
    });
    }

    render() {
        return (
            <form>
                <fieldset className='container-lg'>
                    <div className='row flexDiv mt-5'>
                        <div className='col-md-4 col-12 d-flex flex-wrap'>
                            <label htmlFor='name' className='col-sm-6'>ФИО</label>
                            <input 
                                name='name' 
                                id='name' 
                                placeholder='ФИО' 
                                className='col-sm-6'  
                                onChange={this.handleChange}  
                            />
                            <span className='col-12 error mt-1'>{this.state.errors.name}</span>
                        </div>
                        <div className='col-md-4 col-12 d-flex flex-wrap'>
                            <label htmlFor='tel' className='col-sm-6'>Телефон</label>
                            <input 
                                name='tel' 
                                id='tel' 
                                placeholder='Телефон' 
                                className='col-sm-6'
                                onChange={this.handleChange}     
                            />
                            <span className='col-12 error mt-1'>{this.state.errors.tel}</span>
                        </div>
                        <div className='col-md-1'/>
                        <button className='col-md-3 col-6 btn btn-primary mt-1 mb-1' type='submit' onClick={this.handleSubmit}>Создать</button>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default UserForm;