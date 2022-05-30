import * as React from 'react';
import {createRoot} from 'react-dom/client';
import Form from './components/Form';
import List from './components/List';
import './styles.scss';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', number: '', contacts: []}

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChangeName(formName) {
        this.setState({name: formName});
    }


    handleChangeNumber(formNumber) {
        this.setState({number: formNumber});
    }


    handleSubmit() {
        const newContact = {name: this.state.name, number: this.state.number};

        this.setState({
            contacts: this.state.contacts.concat(newContact),
            name: '',
            number: ''
        });
    }

    render() {
        return(
            <div className='app-container'>
                <Form onInputChangeName={this.handleChangeName}
                    onInputChangeNumber={this.handleChangeNumber}  
                    onFormSubmit={this.handleSubmit} 
                    nameValue={this.state.name}
                    numberValue={this.state.number}
                />
                <List items={this.state.contacts}/>
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App items={["Daniel", "Adam", "Eva", "Moisey"]}/>);