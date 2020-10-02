const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const{location}= this.props;
    return (
      <Layout title="Edit Vacation Spots">
        <h1> New Vacation Spots </h1>
        <form action = {`/locations/edit/${location.id}?_method=PUT`}method="post">
          <input 
          type = "text"
          value={location.location} 
          placeholder= "name of location here" 
          name = "location"
          />
          <input type = "submit" value= "Edit Location"/>
        </form>
      </Layout>
    );
  }
}
 
module.exports = Index;
