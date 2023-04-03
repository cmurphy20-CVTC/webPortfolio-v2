import React from 'react';


function App() {
  return (
    <>
    
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/schedule" element={<Schedule />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>

      <Footer />
    
    </>
  );
}

export default App;
