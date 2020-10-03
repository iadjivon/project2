const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <div className="flex-container-signup"> 
        <form action="/auth/signup" method="post">
          <div className="signup-box"> 
          <p className="parag-text-signup"> Sign Up </p>
          <input type="text" name="username" placeholder="username" className="signup-info"/>
          <input type="password" name="password" placeholder="password" className="signup-info"/>
          
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
 