const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    const{locations}= this.props;
    return (
      <Layout title="My African Vacation Spots">
        <h1> My Vacation Spots </h1>
        
      </Layout>
    );
  }
}
 
module.exports = Index;
