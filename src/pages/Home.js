import React from 'react';
import { useState } from 'react';
import "../styles/Home.css"
const Home = () => {
    
  const [propertyType, setPropertyType] = useState('');
  const [location, setLocation] = useState('');

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
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
            <img src="house.png" alt="City Buildings" className="city-image"/>
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
 {/* end of this section */}
 {/* next section */}
 
    <div className="container">
      <h1 className="title">Insight</h1>
      <div className="grid">
        <div className="card">
          <img src="firsthouse.png" alt="Houses by the water" />
          <div className="content">
            <h3>Lorem ipsum dolor sita ameno ipsum dolor</h3>
            <p>sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...</p>
            <button>Read more</button>
          </div>
        </div>
        <div className="card">
          <img src="second.png" alt="House at sunset" />
          <div className="content">
            <h3>Lorem ipsum dolor sita ameno ipsum dolor</h3>
            <p>sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...</p>
            <button>Read more</button>
          </div>
        </div>
        <div className="card">
          <img src="third.png" alt="Houses in a row" />
          <div className="content">
            <h3>Lorem ipsum dolor sita ameno ipsum dolor</h3>
            <p>sit cursus massa non laoreet lobortis, Cras est. placerat tincidunt volutpat no...</p>
            <button>Read more</button>
          </div>

        </div>
      </div>
    </div>
    {/* next section */}
 
    <div className="third-container">
      <div className="nex-header">
        <h1>Explore Some of Our properties</h1>
      </div>
      <div className="third-content">
        <div className="sidebar">
          <h2>EXPLORE WHAT WE CREATE</h2>
          <h3>I'm looking for</h3>
          <div className="filter">
            <select value={propertyType} onChange={handlePropertyTypeChange}>
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="filter">
            <select value={location} onChange={handleLocationChange}>
              <option value="">Select location</option>
              <option value="new-york">New York</option>
              <option value="los-angeles">Los Angeles</option>
              <option value="chicago">Chicago</option>
            </select>
          </div>
          <button className="reset-button">Reset</button>
          <ul className="links">
            <li>
              <a href="#">View residential</a>
            </li>
            <li>
              <a href="#">Advisory services</a>
            </li>
          </ul>
        </div>
        <div className="properties">
          <div className="property">
            <img
              src="chair.png"
              alt="Property 1"
            />
          </div>
          <div className="property-2">
            <img
              src="png2.png"
              alt="Property 2"
            />
          </div>
          <div className="property">
            <img
              src="fine.png"
              alt="Property 3"
            />
            <div className="property-info">
              <h2>Lorem Ipsum Dolor Sita</h2>
              <p>
                sit cursus massa non laoreet lobortis, Cras est. placerat
                tincidunt volutpat non, nisi id nisi non eu volutpat dui felis,
                sit cursus massa non laoreet lobortis, Cras est. placerat.
              </p>
              <button className="more-info-button">More info</button>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* end of section */}

    <div className="app-container">
      <header className="header">
        <div className="container">
          <h1>Get Started</h1>
          <p>To invest in one of our offerings, please contact your Financial Professional</p>
          <p>If you are a Financial Professional interested in one of our offerings for your clients or yourself, please <a href="#">contact us</a></p>
        </div>
        <div className="header-right">
          <div className="header-item">
            <h2>Lorem ipsum Dolor Sita Ameno</h2>
            <a href="#">VISIT HERE</a>
          </div>
          <div className="header-item">
            <h2>Lorem ipsum Dolor Sita Ameno</h2>
            <a href="#">CONTACT US</a>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <div className="main-left">
            <div className="blackbain">
              <h2>BLACKBAIN</h2>
              <p>Dive into industry insights, trends, and expert advice in our comprehensive blog section. Stay informed and inspired as we aim to provide knowledge to navigate the world of real estate.</p>
              <div className="social">
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="samson">
              <img src="samson-logo.png" alt="Samson Properties Logo" />
            </div>
          </div>
          <div className="main-right">
            <div className="hug">
              <div className="hug-text">1440 x Hug</div>
            </div>
            <div className="property-types">
              <h3>PROPERTY TYPES</h3>
              <ul>
                <li>Office Space</li>
                <li>Retail</li>
                <li>Industrial</li>
                <li>Hospitality</li>
                <li>Special Purpose</li>
              </ul>
            </div>
            <div className="navigation">
              <h3>NAVIGATION</h3>
              <ul>
                <li>Home estimate</li>
                <li>Contact Us</li>
                <li>Search</li>
                <li>BLOG</li>
              </ul>
            </div>
            <div className="services">
              <h3>SERVICES</h3>
              <ul>
                <li>Market Research & Analysis</li>
                <li>Deal Structuring & Negotiation</li>
                <li>Due Diligence & Data Analysis</li>
                <li>Transaction Advisory</li>
              </ul>
            </div>
            <div className="newsletter">
              <h3>SUBSCRIBE TO OUR NEWSLETTER.</h3>
              <input type="email" placeholder="Please enter your email" />
              <button>Subscribe now</button>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© 2024 BlackBain. All rights reserved.</p>
          <p>Company address should be here. Company address should be here. Company address should be here.</p>
          <div className="footer-right">
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>Activa</p>
            <a href="#">Go to Se</a>
          </div>
        </div>
      </footer>
    </div>


  


    </div>
  );
}

export default Home;
