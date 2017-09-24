import { observable, useStrict, action, computed } from 'mobx'
import fire from './fire';

class MessagesStore {

  @observable messages = []

  @action addMessage (message) {
    e.preventDefault()
    fire.database().ref('message').push(this.inputEl.value)
    this.inputEl.value = ''
  }

  @action start () {
    let messagesRef = fire.database().ref('message').orderByKey().limitToLast(100)
    messagesRef.on('child_added', snapshot => {
      let message = { text: snapshot.val(), id: snapshot.key }
      this.messages.push({messages: [message].concat(this.state.messages)})
      // this.setState({ messages: [message].concat(this.state.messages) })
    })
  }
}

export default new MessagesStore()