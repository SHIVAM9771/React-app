import React from 'react';

export default function About(props) {
  const cardStyle = {
    backgroundColor: props.mode === 'dark' ? '#2c3e50' : '#f7f7f7',  // Dark and light background colors
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Text colors for dark and light mode
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: props.mode === 'dark'
      ? '0 4px 12px rgba(0, 0, 0, 0.4)'  // Dark mode shadow
      : '0 4px 12px rgba(0, 0, 0, 0.1)',  // Light mode shadow
    marginBottom: '20px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Heading color for dark and light mode
  };

  const accordionButtonStyle = {
    fontWeight: 'bold',
    fontSize: '1.25rem',
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Text color for dark and light mode
    backgroundColor: props.mode === 'dark' ? '#34495e' : '#ffffff',  // Button background for dark and light mode
    border: props.mode === 'dark' ? '1px solid #f1f1f1' : '1px solid #2c3e50',  // Border colors
    borderRadius: '5px',
  };

  const accordionBodyStyle = {
    backgroundColor: props.mode === 'dark' ? '#34495e' : '#ffffff',  // Background color for dark and light mode
    color: props.mode === 'dark' ? '#f1f1f1' : '#2c3e50',  // Text color for dark and light mode
    padding: '1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, color 0.3s ease',  // Smooth transition
  };



  return (
    <div className='container my-5'>
      <div style={cardStyle}>
        <h1 style={headingStyle}>About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={{ border: 'none' }}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={accordionButtonStyle}
              >
                Our Mission
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBodyStyle}>
                <strong>We are dedicated to providing the best service.</strong> Our mission is to deliver value through innovative solutions that meet the needs of our clients. We focus on quality, customer satisfaction, and continuous improvement.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={{ border: 'none' }}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={accordionButtonStyle}
              >
                Our Values
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBodyStyle}>
                <strong>Integrity, Excellence, and Respect.</strong> We believe in maintaining the highest level of integrity, striving for excellence in all we do, and showing respect to everyone we work with.
              </div>
            </div>
          </div>

          <div className="accordion-item" style={{ border: 'none' }}>
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={accordionButtonStyle}
              >
                Our Vision
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={accordionBodyStyle}>
                <strong>A future of limitless possibilities.</strong> Our vision is to be recognized as the leading provider of innovative solutions, driven by creativity and a commitment to the success of our clients and our people.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
