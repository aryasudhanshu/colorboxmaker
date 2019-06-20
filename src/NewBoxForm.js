import React, { Component } from 'react';

class NewBoxForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = { height: "", width: "", color: ""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBox(this.state);
    this.setState({ height: "", width: "", color: ""});
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
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