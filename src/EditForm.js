import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const RESET_VALUES = {id: '', max: 0, min: 0};

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tanggal: moment(),
            listBerat: Object.assign({}, RESET_VALUES),
            error: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    componentDidMount() {
        if (this.props.listOneDate) {
            this.setState({
                listBerat: this.props.listOneDate
            })
        }
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState((prevState) => {
          prevState.listBerat[name] = value;
          return { listBerat: prevState.listBerat };
        });
    }

    handleSave(e) {
        if (this.state.error || this.state.listBerat.id === '') {
            alert('Tanggal tidak boleh kosong');
            this.setState({
                error: 'tanggal cannot empty'
            })
            return;
        } 

        this.props.onSave(this.state.listBerat);
        this.setState({
          listBerat: Object.assign({}, RESET_VALUES),
          error: ''
        });

        e.preventDefault();
    }

    goToHome() {
        this.props.goHome();
        return <Redirect to = '/' />
    }

    render() {
        return (
            <div>
                <h2>BE - Berat</h2>
                <button className='link-header' onClick={this.goToHome}>Home</button>
                <form>
                    {/* <label onClick={e => e.preventDefault()}>
                        <span className="tanggal-form">Tanggal</span>
                        <br/>
                        <DatePicker 
                            className="inputField"
                            dateFormat="yyyy/MM/dd"
                            required
                        />
                    </label> */}
                    <label>
                        <span className='form-label'>Tanggal</span>
                        <input type='text' name='id' placeholder='YYYY-MM-DD' value={this.state.listBerat.id} onChange={this.handleChange} required/><br/>
                    </label>
                    <label>
                        <span className='form-label'>Berat Max</span>
                        <input type='number' name='max' placeholder='Berat max' value={this.state.listBerat.max} onChange={this.handleChange} required/><br/>
                    </label>
                    <label>
                        <span className='form-label'>Berat Min</span>
                        <input type='number' name='min' placeholder='Berat min' value={this.state.listBerat.min} onChange={this.handleChange} required/><br/><br/>
                    </label>
                    <input className="save-form" type="submit" value="Save" onClick={this.handleSave}/>
                </form>
            </div>
        )
    }
}

export default EditForm;