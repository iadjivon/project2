const React = require("react");
const Layout = require("../layout.jsx");

class Fail extends React.Component {
  render() {
    return (
      <Layout title="Failed to login">
        <div className="fail-to-login">
        <h1>FAILED TO LOGIN</h1>
        </div>
      </Layout>
    );
  }
}

module.exports = Fail;
