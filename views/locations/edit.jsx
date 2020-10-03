const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const{location}= this.props;
    return (
      <Layout title="Edit Vacation Spots">
        <div className="location-edit">
        <h1> New Vacation Spots </h1>
        <form action = {`/locations/edit/${location.id}?_method=PUT`}method="post">
          <input 
          type = "text"
          value={location.location} 
          placeholder= "name of location here" 
          name = "location"
          />

        <input 
          type = "url"
          value={location.image} 
          placeholder= "link to image of location here" 
          name = "image"
          />

        <input 
          type = "text"
          value={location.content} 
          placeholder= "say a little something about this location" 
          name = "content"
          />
          
          <input type = "submit" value= "Edit Location"/>
        </form>
        </div>
      </Layout>
    );
  }
}
 
module.exports = Index;
