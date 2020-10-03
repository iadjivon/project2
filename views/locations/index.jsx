const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {locations} = this.props;
    return (
      <Layout title="My African Vacation Spots">
    <div className="location-index">
        <h1 className="location-index-h1"> My Vacation Spots </h1>
        <br/>
        <a href="/locations/new">
          <button>New Location</button></a>
          {locations.map((location) =>(
  
  <div className="location-index-form" >
            
            <div className="location-index-location">
            <h2>{location.location}</h2> 
            </div>
            <br/>
            <div className="location-index-image">
            <img src={location.image} width="400px" height="100%"></img>
            </div>
            <br></br>
            <div className="location-index-content">
            <p> A little bit about this location:{location.content}</p>
            <br></br>
            </div>

<div className="location-index-submit" >
            <form action={`/locations/${location.id}?_method=DELETE`} method="POST">
            <br></br>
            <input type="submit" value="Delete" className="location-index-delbtn"/>
<br/>
           
        
          </form>
<br></br>
          <form action={`/locations/edit/${location.id}`} method="GET">
            <input type="submit" value="Edit" className="location-index-edbtn"/>
            
          </form>
          </div>
          </div>
          ))} 
          </div>
      </Layout>
    );
  }
}
 
module.exports = Index;
