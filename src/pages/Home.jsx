import React, { useState, useEffect, useCallback } from 'react';
import Editor from '../components/Editor';
import ModeToggle from '../components/ModeToggle';
import ManualControls from '../components/ManualControls';
import BatchControls from '../components/BatchControls';
import SEO from '../components/SEO';
import { openFile, downloadFile, downloadZip, sanitizeFilename } from '../utils/fileUtils';
import { findFirstHeading, generateFrontmatter, splitByHeading, countSections } from '../utils/markdownUtils';
import {
  saveContent,
  loadContent,
  saveMode,
  loadMode,
  saveFrontmatter,
  loadFrontmatter,
  saveAutoFilename,
  loadAutoFilename,
  saveHeadingLevel,
  loadHeadingLevel,
  clearStorage
} from '../utils/storage';

const Home = () => {
  const [content, setContent] = useState('');
  const [mode, setMode] = useState('manual');
  const [filename, setFilename] = useState('section.md');
  const [autoFilename, setAutoFilename] = useState(true);
  const [frontmatter, setFrontmatter] = useState(false);
  const [headingLevel, setHeadingLevel] = useState(2);
  const [sectionCount, setSectionCount] = useState(0);

  // Load saved state on mount
  useEffect(() => {
    setContent(loadContent());
    setMode(loadMode());
    setFrontmatter(loadFrontmatter());
    setAutoFilename(loadAutoFilename());
    setHeadingLevel(loadHeadingLevel());
  }, []);

  // Save content with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      saveContent(content);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [content]);

  // Save other settings immediately
  useEffect(() => {
    saveMode(mode);
  }, [mode]);

  useEffect(() => {
    saveFrontmatter(frontmatter);
  }, [frontmatter]);

  useEffect(() => {
    saveAutoFilename(autoFilename);
  }, [autoFilename]);

  useEffect(() => {
    saveHeadingLevel(headingLevel);
  }, [headingLevel]);

  // Update section count for batch mode
  useEffect(() => {
    if (mode === 'batch') {
      setSectionCount(countSections(content, headingLevel));
    }
  }, [content, headingLevel, mode]);

  const handleOpenFile = () => {
    openFile((fileContent) => {
      setContent(fileContent);
    });
  };

  const handleSaveSelection = () => {
    // Get selected text from textarea
    const textarea = document.querySelector('textarea');
    const selectedText = textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd
    );

    if (!selectedText || selectedText.trim() === '') {
      alert('Please select some text first');
      return;
    }

    // Determine filename
    let outputFilename = filename;
    if (autoFilename) {
      const heading = findFirstHeading(selectedText);
      outputFilename = heading ? sanitizeFilename(heading) : 'section.md';
    } else {
      outputFilename = sanitizeFilename(filename);
    }

    // Prepare content
    let outputContent = selectedText;
    if (frontmatter) {
      const title = outputFilename.replace('.md', '');
      outputContent = generateFrontmatter(title) + outputContent;
    }

    // Download
    downloadFile(outputContent, outputFilename);
  };

  const handleSplitAndDownload = async () => {
    if (!content || content.trim() === '') {
      alert('No content to split');
      return;
    }

    const sections = splitByHeading(content, headingLevel);

    if (sections.length === 0) {
      alert(`No H${headingLevel} headings found in the document`);
      return;
    }

    // Prepare files for zip
    const files = sections.map((section) => {
      let fileContent = section.content;
      if (frontmatter) {
        const title = section.heading;
        fileContent = generateFrontmatter(title) + fileContent;
      }

      return {
        filename: section.filename,
        content: fileContent
      };
    });

    // Download as zip
    await downloadZip(files, 'markdown-sections.zip');
  };

  const handleClearEditor = () => {
    if (confirm('Are you sure you want to clear the editor? This will delete all content.')) {
      setContent('');
      clearStorage();
    }
  };

  return (
    <div className="min-h-screen bg-bg">
      <SEO />
      
      <main className="max-w-[1400px] mx-auto" style={{ padding: '12px 14px' }}>
        {/* Mode Toggle */}
        <div className="mb-6">
          <ModeToggle mode={mode} onModeChange={setMode} />
        </div>

        {/* Control Panel */}
        <div className="bg-card border border-line rounded-xl mb-6" style={{ padding: '12px' }}>
          {mode === 'manual' ? (
            <ManualControls
              filename={filename}
              onFilenameChange={setFilename}
              autoFilename={autoFilename}
              onAutoFilenameChange={setAutoFilename}
              frontmatter={frontmatter}
              onFrontmatterChange={setFrontmatter}
              onOpenFile={handleOpenFile}
              onSaveSelection={handleSaveSelection}
              onClearEditor={handleClearEditor}
            />
          ) : (
            <BatchControls
              headingLevel={headingLevel}
              onHeadingLevelChange={setHeadingLevel}
              sectionCount={sectionCount}
              frontmatter={frontmatter}
              onFrontmatterChange={setFrontmatter}
              onOpenFile={handleOpenFile}
              onSplitAndDownload={handleSplitAndDownload}
              onClearEditor={handleClearEditor}
            />
          )}
        </div>

        {/* Editor */}
        <Editor content={content} onChange={setContent} />
      </main>
    </div>
  );
};

export default Home;
