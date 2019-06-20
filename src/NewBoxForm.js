import React, { Component } from 'react';
import uuid from 'uuid/v4';

class NewBoxForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    const newBox = {...this.state, id: uuid()};
    this.props.createBox(newBox);
    this.setState({ height: "", width: "", color: ""});
  }

  render() { 
    return (  
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Height</label>
          <input type="text" name="height" value={this.state.height} id="height" onChange={this.handleChange}/>
        </div>
        <div>
          <label>Width</label>
          <input type="text" name="width" value={this.state.width} id="width" onChange={this.handleChange}/>
        </div>
        <div>
          <label>Color</label>
          <input type="text" name="color" value={this.state.color} id="color" onChange={this.handleChange}/>
        </div>
        <button>Add new box</button>
      </form>
    );
  }
}
 
export default NewBoxForm;