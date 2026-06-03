import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <p>&copy; {new Date().getFullYear()} Kartik Thorat. Crafted with intent.</p>
          <div className="footer-secondary">Made for people who care about detail.</div>
        </div>
      </div>
    </footer>
  );
};
