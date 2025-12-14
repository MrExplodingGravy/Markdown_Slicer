import { sanitizeFilename } from './fileUtils';

// Find the first H1 or H2 heading in text
export const findFirstHeading = (text) => {
  if (!text) return null;
  
  const match = text.match(/^\s*#{1,2}\s+(.+)$/m);
  return match ? match[1].trim() : null;
};

// Generate YAML front-matter
export const generateFrontmatter = (title) => {
  return `---
title: ${title}
---

`;
};

// Split document by heading level
export const splitByHeading = (content, headingLevel) => {
  if (!content) return [];
  
  // Create regex for the specified heading level
  // e.g., for H2: /^##\s+(.+)$/gm
  const headingRegex = new RegExp(`^#{${headingLevel}}\\s+(.+)$`, 'gm');
  
  const sections = [];
  const matches = [...content.matchAll(headingRegex)];
  
  if (matches.length === 0) return [];
  
  matches.forEach((match, index) => {
    const headingText = match[1].trim();
    const startPos = match.index;
    
    // Find the end position (start of next heading of same or higher level, or end of document)
    let endPos = content.length;
    
    if (index < matches.length - 1) {
      endPos = matches[index + 1].index;
    }
    
    // Extract section content
    const sectionContent = content.substring(startPos, endPos).trim();
    
    // Generate filename from heading
    const filename = sanitizeFilename(headingText);
    
    sections.push({
      heading: headingText,
      content: sectionContent,
      filename: filename
    });
  });
  
  return sections;
};

// Count sections by heading level
export const countSections = (content, headingLevel) => {
  if (!content) return 0;
  
  const headingRegex = new RegExp(`^#{${headingLevel}}\\s+(.+)$`, 'gm');
  const matches = content.match(headingRegex);
  
  return matches ? matches.length : 0;
};
