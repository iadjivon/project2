const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const {locations} = this.props;
    return (
      <Layout title="My African Vacation Spots">
        <h1> My Vacation Spots </h1>
        <a href="/locations/new"><button>New Location</button></a>
          {locations.map((location) =>(
          <div>
            <h2>{location.location}</h2>
          <form action={`/locations/${location.id}?_method=DELETE`} method="POST">
            <input type="submit" value="Delete"/>
          </form>

          <form action={`/locations/edit/${location.id}`} method="GET">
            <input type="submit" value="Edit"/>
          </form>
          </div>
          ))}
      </Layout>
    );
  }
}
 
module.exports = Index;
