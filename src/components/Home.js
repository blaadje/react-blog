import React, { Component } from 'react';
import store from '../store/index'

export default class Content extends Component {
  render() {
    const messages = store.messages
    return (
      <div>
        { messages.map(message => <li key={message.id}>{message.text}</li> ) }
      </div>
    );
  }
}