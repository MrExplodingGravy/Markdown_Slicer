import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title || 'Markdown Slicer - Split Large Markdown Files | Free Online Tool'}</title>
      <meta name="description" content={description || 'Free browser-based markdown splitter. Extract and download sections from large .md files. Perfect for documentation and splitting manuals into smaller files.'} />
    </Helmet>
  );
};

export default SEO;
