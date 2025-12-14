// localStorage keys
const STORAGE_KEYS = {
  CONTENT: 'markdown-slicer-content',
  MODE: 'markdown-slicer-mode',
  FRONTMATTER: 'markdown-slicer-frontmatter',
  AUTO_FILENAME: 'markdown-slicer-auto-filename',
  HEADING_LEVEL: 'markdown-slicer-heading-level',
};

// Save to localStorage
export const saveToStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

// Load from localStorage
export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

// Clear all storage
export const clearStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

// Specific helpers
export const saveContent = (content) => saveToStorage(STORAGE_KEYS.CONTENT, content);
export const loadContent = () => loadFromStorage(STORAGE_KEYS.CONTENT, '');

export const saveMode = (mode) => saveToStorage(STORAGE_KEYS.MODE, mode);
export const loadMode = () => loadFromStorage(STORAGE_KEYS.MODE, 'manual');

export const saveFrontmatter = (enabled) => saveToStorage(STORAGE_KEYS.FRONTMATTER, enabled);
export const loadFrontmatter = () => loadFromStorage(STORAGE_KEYS.FRONTMATTER, false);

export const saveAutoFilename = (enabled) => saveToStorage(STORAGE_KEYS.AUTO_FILENAME, enabled);
export const loadAutoFilename = () => loadFromStorage(STORAGE_KEYS.AUTO_FILENAME, true);

export const saveHeadingLevel = (level) => saveToStorage(STORAGE_KEYS.HEADING_LEVEL, level);
export const loadHeadingLevel = () => loadFromStorage(STORAGE_KEYS.HEADING_LEVEL, 2);
