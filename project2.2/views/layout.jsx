const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>African Vacation Destinations</h1>
            <h3> 
            <nav>
              <span> <a href = "/auth/signup">SIGNUP</a></span>
              <span> <a href = "/auth/login">LOGIN</a></span>
              <span> <a href = "/auth/logout">LOGOUT</a></span>
            </nav>
            </h3>
           
          </header>
          <main>{this.props.children}</main>
          <footer>
            <h1>This is my footer</h1>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
 