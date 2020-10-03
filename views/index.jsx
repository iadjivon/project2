const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    const{locations}= this.props;
    return (
      <Layout title="My African Vacation Spots">
        <div className="index-top-image"> 
        <h1 className="index-top-title"> L'Afrique en Luxe </h1>
        <hr className="hr"></hr>
        <p className="index-top-para"> Where on the <span>Continent</span> would you like to explore next? <br></br>Use our app to save those beautiful destinations and keep track of where to go next.</p>
        <hr className="hr"></hr>
        </div>
       
       <div>
       <hr className="featured-hr"></hr>
         <h1 className="featured"> Featured Destinations </h1>
        <hr className="featured-hr"></hr>
       </div>
        <div className="landing-countries">

    {/* MOROCCO IMAGE */}
      <div className="item">
          <figure className="figure">
          <h2 className="item-title"> Morocco</h2>
            <img className="morocco-img" src="https://adventuremoroccotravel.com/wp-content/uploads/2019/03/02.jpg" alt="Morocco image" >
            </img>
            <figcaption className="figure-caption"> Morocco
            <p className="morocco-img">Morocco is an exotic and enchanting destination. With its great views, sights, wonderful touristic locations, and the so much great activities to do while in Morocco, it remains a great travel destination to go to all year round. I know that Morocco isn’t the first place that pops into mind when the idea of a Christmas destination comes up. But believe me, you won’t find a better place than Marrakech.</p>
            </figcaption>
          </figure>
          </div>

    {/* SOUTH AFRICA IMAGE */}
      <div className="item">
         <figure className="figure"> 
          <h2 className="sa-title"> South Africa</h2>
          <img className="sa-img" src="https://www.africaendeavours.com/wp-content/uploads/2017/06/south-africa-vacation-luxury-travel-900x600-phinda-rock-rooftop.jpg" alt="South Africa image"></img>
          <figcaption className="figure-caption"> South Africa
          <p className="sa-img">South Africa is a great destination for the adventurous, boasting fantastic wildlife viewing, beautiful beaches, world-class wineries, trendy cities, and so much more. Kruger National Park is a flagship wildlife park, where you can easily see the Big 5 on safari. But Kruger is just the tip of the iceberg when it comes to all the fantastic safari parks in South Africa!</p>
          </figcaption>
          </figure>
        </div>

    {/* ZANZIBAR IMAGE */}   
      <div className="item">
          <figure className="zan-img"> 
          <h2> Zanzibar</h2>
          <img className="zan-img" src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/08/01/0920/Park-Hyatt-Zanzibar-P302-Lifestyle-Pool.jpg/Park-Hyatt-Zanzibar-P302-Lifestyle-Pool.16x9.jpg?imwidth=1280" alt="Zanzibar image"></img>
          <figcaption className="figure-caption"> Zanzibar
          <p className="zan-img">Zanzibar, an archipelago off the coast of Tanzania, is one of Africa's best-known destinations.The islands of Zanzibar are surrounded by transparent, blue-green waters, and are bordered by miles of white-sand beaches. A spot of paradise in the Indian Ocean, Zanzibar offers everything from world-class diving to rich local culture. </p>
          </figcaption>
          </figure>
        </div>
    
    {/* SEYCHELLES IMAGE */}
      <div className="item">
          <figure className="figure"> 
          <h2 className="sey-title"> Seychelles</h2>
          <img className="sey-img" src="https://cdn.cnn.com/cnnnext/dam/assets/170629165939-seychelles-best-resorts-maia-luxury-resort-2--credit-tsogo-sun-full-169.jpg" alt="Seycheles image"></img>
          <figcaption className="figure-caption"> 
          Seychelles
          <p className="sey-img" >The Seychelles, a string of 115 tropical islands 1,000 miles east of Tanzania,boasts some of the world's best beaches with a renowned collection of luxurious getaways.It's long been a sun-drenched playground for the rich and famous, so there's no shortage of villa resorts with 24-hour butlers, private swimming holes, gourmet cuisine and spa treatments alongside arrestingly beautiful beaches. </p>
          </figcaption>
          </figure>
          </div>

    {/* EGYPT IMAGE */}
      <div className="item">
          <figure className="figure"> 
          <h2> Egypt</h2>
          <img className="egy-img" src="https://globalgrasshopper.com/wp-content/uploads/2011/10/Aswan-Egypt.jpg" alt="Egypt image"></img>
          <figcaption className="figure-caption"> 
          Egypt
          <p className="egy-img"> Aswan is a historic city on the southern end of the Nile River. One of the must-see cities in Egypt, it is a gorgeous metropolis set in an idyllic location with a pristine natural environment and scenic views. In addition to being situated in a picturesque part of Egypt, the city itself is and packed with many amazing ancient buildings that give it a delightful ambience.</p>
          </figcaption>
          </figure>
          </div>

    {/* MAURITIUS IMAGE */}
          <div className="item">
          <figure className="figure"> 
          <h2 className="mau-title"> Mauritius</h2>
          <img className="mau-img" src="https://beaumondetraveler.com/wp-content/uploads/2019/06/Lux-Grand-Gaube-Little-Guest-Slider-9.jpg" alt="Mauritius image"></img>
          <figcaption className="figure-caption"> Mauritius
          <p className="mau-img">Mauritius is known for its island living and LUX* Grand Gaube offers its guests an authentic Mauritian lifestyle. The décor, design and location of the resort reflect the country at its best. Its breezy, spacious and sun-dappled rooms or suites are ideal for those looking for ultimate comfort and tranquility.</p>
          </figcaption>
          </figure>
          </div>
        </div>
        
      </Layout>
    );
  }
}
 
module.exports = Index;

