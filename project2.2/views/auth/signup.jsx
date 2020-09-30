const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div className="flex-container"> 
        <form action="/auth/signup" method="post">
          <div className="signup-box"> 
          <p className="parag-text"> Sign Up </p>
          <input type="text" name="username" placeholder="username" className="signup-info"/>
          <input type="text" name="password" placeholder="password" className="signup-info"/>
          <br></br>
          <input type="submit" value="Sign-up" className="signup-btn"/> 
          <p className="signup-login"> Already have an account? <a href= "/auth/login"> Login.</a></p>
          </div>  
        </form>
        </div>
      </Layout>
    );
  }
}

module.exports = Index;
 