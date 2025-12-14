// Filename Sanitization
export const sanitizeFilename = (filename) => {
  if (!filename) return 'section.md';
  
  // Remove forbidden characters: < > : " / \ | ? * and control chars (0x00-0x1F)
  let sanitized = filename.replace(/[<>:"/\\|?*\x00-\x1F]/g, '-');
  
  // Collapse multiple hyphens
  sanitized = sanitized.replace(/-+/g, '-');
  
  // Trim leading/trailing hyphens
  sanitized = sanitized.replace(/^-+|-+$/g, '');
  
  // If empty after sanitization, use default
  if (!sanitized) return 'section.md';
  
  // Ensure .md extension
  if (!sanitized.endsWith('.md')) {
    sanitized += '.md';
  }
  
  return sanitized;
};

// Download a single file
export const downloadFile = (content, filename) => {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Create and download a zip file
export const downloadZip = async (files, zipFilename = 'markdown-sections.zip') => {
  const JSZip = (await import('jszip')).default;
  const { saveAs } = await import('file-saver');
  
  const zip = new JSZip();
  
  // Add each file to the zip
  files.forEach(({ filename, content }) => {
    zip.file(filename, content);
  });
  
  // Generate the zip file
  const blob = await zip.generateAsync({ type: 'blob' });
  saveAs(blob, zipFilename);
};

// Open a file from the user's computer
export const openFile = (callback) => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.md,.markdown,.txt';
  
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      callback(event.target.result);
    };
    reader.readAsText(file);
  };
  
  input.click();
};
