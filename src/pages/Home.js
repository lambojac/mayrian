import React from 'react';
import "../styles/Home.css"
const Home = () => {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">BLACKBAIN</div>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#advisory">Advisory</a></li>
          <li><a href="#residential">Residential</a></li>
          <li><a href="#commercial">Commercial</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Knowledge
          <br/> Experience
          <br/> Integrity
          <br/> Results.</h1>
          <p> 
            sit cursus massa non lorem lobortis, Cras est placerat tincidunt. Lorem ipsum...
          </p>
          <div className="hero-buttons">
            <button>Investment Sales</button>
            <button>Property Management</button>
            <button>Advisory Services</button>
          </div>
        </div>
      </section>
      {/* first batch ending */}
 
    <section className="second-section">
      <div className="container">
        <div className="content-wrapper">
          {/* Left Content: Image */}
          <div className="image-container">
            <img src="/path/to/your/image.jpg" alt="City Buildings" className="city-image" />
          </div>

          {/* Right Content: Text */}
          <div className="text-container">
            <h2>Work with Our Team of Experts at Nuel & May</h2>
            <p>
              sit cursus massa non laoreet lobortis, Cras est placerat tincidunt volutpat non, nisi id nisi non eu volutpat dui felis, nec amet laoreet ex in amet lacus.
              Nullam vitae tincidunt ex ultrices tincidunt ipsum efficitur. Quisque cursus tortor. volutpat maximus lorem. quis vitae scelerisque dui. adipiscing fringilla.
            </p>
            <a href="#" className="learn-more-btn">
              <button>Learn more about our services</button>
            </a>
          </div>
        </div>

        {/* Bottom Text Section */}
        <div className="bottom-content">
          <h3>Explore Some of the Cities We Cater For</h3>
          <p>
            sit cursus massa non laoreet lobortis, Cras est placerat tincidunt volutpat non, nisi id nisi non eu volutpat dui felis, nec amet...
          </p>
        </div>
      </div>
    </section>
 

    </div>
  );
}

export default Home;
