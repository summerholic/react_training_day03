import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import TodoEditFormContainer from './containers/TodoEditFormContainer';
import TodoListContainer from './containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid centered columns={2} stackable>
          <Grid.Column>
            <Segment>
              <TodoEditFormContainer />
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>
              <TodoListContainer />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
