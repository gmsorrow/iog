import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <span className="copyrights">
        © IT Promocodes,
        {' '}
        {currentYear}
      </span>
    </footer>
  );
};

export default Footer;
