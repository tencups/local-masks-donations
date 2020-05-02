import React from 'react';
import Map from './Map'

import styled from "styled-components"

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`



class App extends React.Component {

  constructor() {
    super()
    this.state = {address: ""}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

handleChange(e){
    this.setState({address: e.target.value})
}

handleSubmit(e){
    e.preventDefault()
}


  render(){
  return (<React.Fragment>
    <Container>
    <h1>Find local hospitals in need of masks.</h1>
    <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder="Type your address" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
    <Map address={this.state.address}/>
    </Container>
    </React.Fragment>)

}}
export default App;
