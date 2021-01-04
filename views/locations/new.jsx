const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    // const{locations}= this.props;
    return (
      <Layout title="My African Vacation Spots">
        <div className="flex-container-form">

        <div className="new-form-header" >
        <h1> Enter your new Vacation Spots 
        </h1>
        </div>

        <div className="new-form-form" >
        <form action = "/locations/" method="post">
          <input type = "text" Placeholder= " name of location here" name = "location" className="new-form-input"/>
<br></br>

          <input 
          type = "url" 
          placeholder= "link to image of location here" 
          name = "image" className="new-form-input"
          />
<br></br>
        <input 
          type = "text"
          placeholder= "say a little something about this location" 
          name = "content" className="new-form-input"
          />
<br></br>

          <input type = "submit" value= "Create Locations" className="new-form-submit"/>
        </form>
        </div>
        </div>
      </Layout>
    );
  }
}
 
module.exports = Index;
