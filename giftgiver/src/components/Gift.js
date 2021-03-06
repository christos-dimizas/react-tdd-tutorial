import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

export default class Gift extends React.Component {
    constructor(props) {
        super(props);
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
                    <FormGroup>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl
                            className='input-present'
                            onChange={e => this.setState({present: e.target.value})}
                        />
                    </FormGroup>
                </Form>
                <Button
                    className="btn-remove"
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                    Remove Gift
                </Button>
            </div>
        );
    }
}