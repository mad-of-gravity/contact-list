import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeName(e) {
        this.props.onInputChangeName(e.target.value);
    }


    handleChangeNumber(e) {
        this.props.onInputChangeNumber(e.target.value);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='w3-row'>
                <h2> Add new contact </h2>
                <input type='text' 
                    className='form-input w3-mobile' 
                    onChange={this.handleChangeName} 
                    value={this.props.nameValue}
                    placeholder='name'
                    required
                />
                
                <input type='tel' 
                    className='form-input w3-mobile' 
                    onChange={this.handleChangeNumber} 
                    value={this.props.numberValue}
                    placeholder='phone number'
                    required
                />

                <input 
                    type='submit' 
                    className='submit-button w3-mobile' 
                    value='New Contact'
                />
            </form>
        );
    }
}

export default Form;