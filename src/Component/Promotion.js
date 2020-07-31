import React, {Component} from 'react';

class Promotion extends Component {
    constructor (props) {
       super(props)
       this.state = {
         input: ''
       }
    }
  handleChange = (text) => {
      this.setState({ input: text })
    }
    
    render () {
      const { input } = this.state
      return (
      <div>
          <label>
            Name:
             <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </div>
        )
      }
   }
export default Promotion;