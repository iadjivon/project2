const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    // const{locations}= this.props;
    return (
      <Layout title="My African Vacation Spots">
        <h1> New Vacation Spots </h1>
        <form action = "/locations/" method="post">
          <input type = "text" Placeholder= " name of location here" name = "location"/>
          <input type = "submit" value= "Create Locations"/>
        </form>
      </Layout>
    );
  }
}
 
module.exports = Index;
