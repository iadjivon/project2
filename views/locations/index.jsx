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
  <div class="card-top">
  <div className="location-index-form" >
            
            <div className="location-index-location">
            <h2>{location.location}</h2> 
            </div>
            <br/>
            <div className="location-index-image">
            <img src={location.image} className="card-img-top" width="500px" height="100%"></img>
            </div>
            
            
            <div className="location-index-content">
            <p> A little bit about this location:{location.content}</p>
            
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
          // </div>
          ))} 
          </div>


          <div>
                
                <h1 className="location-index-h1-2"> Places I have been </h1>
                        <div class="card">
                  
                <img src="https://cdn-images.go2africa.com/wp-content/uploads/2020/03/06104227/cape_town_aerial_go2africa.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Cape town</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                {/* <ul class="list-group list-group-flush">
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                  <a href="#" class="card-link">Card link</a>
                  <a href="#" class="card-link">Another link</a>
                </div> */}
              </div>
              
              </div> 
         
      </Layout>
    );
  }
}
 
module.exports = Index;
