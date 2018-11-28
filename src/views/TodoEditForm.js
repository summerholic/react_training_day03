import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class TodoEditForm extends Component {
    render() {
        const {todo, onSetTodoProp, onAddTodo, onClearTodo} = this.props;
        return(
            <Form>
                <Form.Group widths='equal'>
                    <Form.Input 
                        label='title'
                        value={todo && todo.title ? todo.title : ''}
                        onChange={(e) => onSetTodoProp('title', e.target.value)}
                        />
                    <label>Date</label>
                    <DatePicker
                        showTimeSelect
                        selected={todo && todo.date ? moment(todo.date) : null}
                        dateFormat='YYYY-MM-DD HH:mm'
                        timeFormat='hh:mm'
                        timeIntervals={15}
                        onChange={(date) => onSetTodoProp('date', date.valueOf())}
                        />
                    <Button primary onClick={onAddTodo} >ADD</Button>
                    <Button secondary onClick={onClearTodo}>CLEAR</Button>
                </Form.Group>
            </Form>
        )
    }
}
