import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

//import asteroid from '../../common/asteroid';

class Home extends Component {
  constructor(props, context) {
    super(props);
    console.log(props);
    console.log(context);

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.renderTasks = this.renderTasks.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleAddTodo(e) {
    
  }
  handleLogout() {
    //asteroid.logout();
  }
  handleLogin(e) {
    // this.context.drizzle.web3.eth.sign(hash, this.props.accounts[0], (err,res) => console.log(err,res))
    e.preventDefault();
    const hash = this.context.drizzle.web3.utils.sha3(e.target.username.value);
    console.log(hash);

  
  }
  renderTasks() {
    if (this.props.user && this.props.user.username) {
      return (
        <div>
          <div>
            <p>Logged user: {this.props.user.username}</p>
            <button onClick={this.handleLogout}>Logout</button>
          </div>

        </div>
      )
    }
    else {
      return (
        <form onSubmit={this.handleLogin}>
          <div>
            <input type="text" name="username" defaultValue={this.props.accounts[0]} />
          </div>
          {/*
          <div>
            <input type="password" name="password" placeholder="Password" />
          </div>
          */}
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      )
    }
  }
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Drizzle Examples</h1>
            <p>Examples of how to get started with Drizzle in various situations.</p>

            {this.renderTasks()}
            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />

            <br/><br/>
          </div>


          <div className="pure-u-1-1">
            <h2>SimpleStorage</h2>
            <p>This shows a simple ContractData component with no arguments, along with a form to set its value.</p>
            <p><strong>Stored Value</strong>: <ContractData contract="SimpleStorage" method="storedData" /></p>
            <ContractForm contract="SimpleStorage" method="set" />

            <br/><br/>
          </div>

          <div className="pure-u-1-1">
            <h2>TutorialToken</h2>
            <p>Here we have a form with custom, friendly labels. Also note the token symbol will not display a loading indicator. We've suppressed it with the <code>hideIndicator</code> prop because we know this variable is constant.</p>
            <p><strong>Total Supply</strong>: <ContractData contract="TutorialToken" method="totalSupply" methodArgs={[{from: this.props.accounts[0]}]} /> <ContractData contract="TutorialToken" method="symbol" hideIndicator /></p>
            <p><strong>My Balance</strong>: <ContractData contract="TutorialToken" method="balanceOf" methodArgs={[this.props.accounts[0]]} /></p>
            <h3>Send Tokens</h3>
            <ContractForm contract="TutorialToken" method="transfer" labels={['To Address', 'Amount to Send']} />

            <br/><br/>
          </div>

         
        </div>
      </main>
    )
  }
}

export default Home
