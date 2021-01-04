const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <div className="flex-container-login"> 
        <form action="/auth/login" method="post">
          <div className="login-box"> 
          <p className="parag-text-login"> Log in</p>
          <input type="text" name="username" placeholder="username" className="login-info"/>
          <input type="text" name="password" placeholder="password" className="login-info"/>
         
          <input type="submit" value="Login" className="login-btn" />
          <p className="login-signup"> Need to create an account? <a href= "/auth/signup"> Sign Up.</a></p>
          </div>
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Login;
