import React, { Component } from 'react';
import Content from './components/Content';
import fire from './fire';
import './App.css';

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = { messages: [] }
  }
  componentWillMount () {
    let messagesRef = fire.database().ref('message').orderByKey().limitToLast(100)
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key }
      this.setState({ messages: [message].concat(this.state.messages) })
    })
  }
  addMessages (e) {
    e.preventDefault()
    console.log(this.state.messages)
    fire.database().ref('message').push(this.inputEl.value)
    this.inputEl.value = ''
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.addMessages(e)}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of messages */
              this.state.messages.map( message => <li key={message.id}>{message.text}</li> )
            }
          </ul>
        </form>
        <Content/>
      </div>
    );
  }
}
