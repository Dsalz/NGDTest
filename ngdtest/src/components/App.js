import React, { Component } from 'react';

// CSS
import '../css/App.css';

class App extends Component {
  state = {
    email: '',
    password: '',
    submitted: false,
    errorMessage: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      errorMessage: ''
    })
  }

  handleSubmit = (e) => {
    // Prevent Page Reloading
    e.preventDefault();
    const { email } = this.state;

    // Validate email before accepting submission
    const validEmail = /\w+[@]\w+[.]\w/.test(email);
    if(validEmail){
      this.setState({
        submitted: true
      })
    }
    else{
      this.setState({
        errorMessage: 'Invalid Email'
      })
    }
  }

  render() {
      const { email , password, submitted, errorMessage } = this.state;
    return (
      <React.Fragment>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light">
            
            {/* Logo */}
            <a className="navbar-brand" href="/">
                <img className="navbar-brand-img" src="/images/logo.png" alt="NGD Logo" />
                <span className="navbar-brand-text blue-cl" >scout</span>
            </a>
          
            {/* Responsive Toggle Button */}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
          
            {/* Navbar Links */}
            <div className="collapse navbar-collapse nav-info" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                       <a className="nav-link" href="#nowhere">Product </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nowhere">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#nowhere">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link nav-btn round-edge blue-bg" href="#nowhere">Get Started</a>
                    </li>
                </ul>
            </div>

        </nav>

        {/* Main Section */}
        <main className="signin-main">

            {/* Sign In Form */}
            <form className="signin-form" onSubmit={this.handleSubmit}>
                <h2 className="blue-cl signin-form-header"> Sign in</h2>
                <p className="signin-form-sub-header"> Sign into our platform below</p>
                <span className="signin-form-error">{errorMessage}</span>
                <input name='email' placeholder="Email address" value={email} onChange={this.handleChange} type="text" className="round-edge signin-form-input" required/>
                <input name='password' placeholder="Password" value={password} onChange={this.handleChange} type="password" className="round-edge signin-form-input" required/>
                <button type="submit" className="round-edge signin-form-submit-btn blue-bg">
                  <img src={submitted ? '/images/unlock.png': '/images/lock.png'} alt= {submitted ? 'unlocked': 'locked'} className="signin-form-submit-btn-img"/>
                </button>
                <a className="blue-cl signin-form-link" href="#nowhere">Forgot your password?</a>
            </form>

            {/* Form Footer Links */}
            <div className="signin-xtra-links">
                <a className="blue-cl signin-xtra-link" href="#nowhere">Terms of Service</a>
                <a className="blue-cl signin-xtra-link" href="#nowhere">Privacy Policy</a>            
            </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
