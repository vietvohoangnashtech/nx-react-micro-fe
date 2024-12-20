import { CSSProperties } from 'react';

const homeContainerStyle: CSSProperties = {
  textAlign: 'center',
  padding: '20px',
};

const headingStyle: CSSProperties = {
  marginBottom: '20px',
};

const paragraphStyle: CSSProperties = {
  fontSize: '1.1em',
};

export function Home() {
  return (
    <div style={homeContainerStyle}>
      <h2 style={headingStyle}>Welcome to the E-commerce Home Page</h2>
      <p style={paragraphStyle}>Browse our latest products!</p>
    </div>
  );
}

export default Home;
