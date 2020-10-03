const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
          <script src="/js/app.js"></script>
        </head>


        <body>


          <header>
            <div class="fixed-top">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/"> <img src="https://files.constantcontact.com/f2c04391601/b5e2e7e8-37a4-4e27-ae28-13061f201f4a.png"></img></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

      <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav">
         <li class="nav-item active">
        <a class="nav-link" href="/auth/signup">Sign Up <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/auth/login">Log In</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/locations">My Vacation Spots</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link-logout" href="/auth/logout">Log Out</a>
      </li>

      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>
</div>
          </header>


          <main>{this.props.children}</main>
          <footer>
            <nav class="navbar navbar-light bg-light">
              <a class="navbar-brand" href="https://www.linkedin.com/in/ida-adjivon/">
                <img src="https://www.iconfinder.com/data/icons/popular-social-media-flat/48/Popular_Social_Media-22-512.png" width="100%" height="100%" alt=""></img>
              </a>
              <h6> Ida Adjivon. All Rights reserved.</h6>
              <a class="navbar-brand" href="https://github.com/iadjivon">
                <img src="https://www.kindpng.com/picc/m/128-1280187_github-logo-png-github-transparent-png.png" width="100%" height="100%" alt="Github"></img>
              </a>
            </nav>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
 