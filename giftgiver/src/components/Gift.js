import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class Gift extends React.Component {
    constructor() {
        super();
        this.state = {
            person:'',
            present: '',
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl
                            className='input-person'
                            onChange={e => this.setState({person: e.target.value})}
                        />
                    </FormGroup>
                </Form>
            </div>
        );
    }
}