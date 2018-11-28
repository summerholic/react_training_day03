import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import moment from 'moment';

export default class TodoListView extends Component {
    render() {
        const {todos, onTodoSelect} = this.props;

        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        Array.isArray(todos) && todos.length ?
                            todos.map((todo) => {
                                return (
                                    <Table.Row key={todo.id} onClick={() => onTodoSelect(todo.id)}>
                                        <Table.Cell>{todo.title}</Table.Cell>
                                        <Table.Cell>{moment(todo.date).format('YYYY-MM-DD HH:mm')}</Table.Cell>
                                    </Table.Row>
                                )
                            })
                        :
                            <Table.Row>Empty</Table.Row>

                    }
                </Table.Body>
            </Table>
        )
    }
}