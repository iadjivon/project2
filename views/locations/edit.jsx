const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const{location}= this.props;
    return (
      <Layout title="Edit Vacation Spots">
        <div className="location-edit">
        <h1 className="new-form-header"> Edit Vacation Spots </h1>
        <form action = {`/locations/edit/${location.id}?_method=PUT`}method="post">
          <input 
          type = "text"
          value={location.location} 
          placeholder= "name of location here" 
          name = "location" className="new-form-input"
          />

        <input 
          type = "url"
          value={location.image} 
          placeholder= "link to image of location here" 
          name = "image" className="new-form-input"
          />
<br></br>
        <input 
          type = "text"
          value={location.content} 
          placeholder= "say a little something about this location" 
          name = "content" className="new-form-input"
          />
          
          <input type = "submit" value= "Edit Location"/>
        </form>
        </div>
      </Layout>
    );
  }
}
 
module.exports = Index;
