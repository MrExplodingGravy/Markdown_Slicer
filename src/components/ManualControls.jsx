import React from 'react';

const ManualControls = ({
  filename,
  onFilenameChange,
  autoFilename,
  onAutoFilenameChange,
  frontmatter,
  onFrontmatterChange,
  onOpenFile,
  onSaveSelection,
  onClearEditor
}) => {
  return (
    <div className="space-y-4">
      {/* Filename Input */}
      <div>
        <label className="block text-muted text-xs mb-1">Filename</label>
        <input
          type="text"
          value={filename}
          onChange={(e) => onFilenameChange(e.target.value)}
          placeholder="section.md"
          disabled={autoFilename}
          className="w-full max-w-[300px] bg-input-bg border border-line rounded-lg px-3 py-2 text-txt text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={autoFilename}
            onChange={(e) => onAutoFilenameChange(e.target.checked)}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="text-txt text-sm">Auto-generate filename from first heading</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={frontmatter}
            onChange={(e) => onFrontmatterChange(e.target.checked)}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="text-txt text-sm">Add YAML front-matter</span>
        </label>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={onOpenFile}
          className="bg-button-bg hover:bg-button-hover text-white border border-line rounded-lg px-4 py-2 text-sm cursor-pointer transition-colors"
        >
          Open File
        </button>
        <button
          onClick={onSaveSelection}
          className="bg-accent hover:bg-accent/90 text-white rounded-lg px-4 py-2 text-sm cursor-pointer transition-colors font-medium"
        >
          Save Selection
        </button>
        <button
          onClick={onClearEditor}
          className="bg-button-bg hover:bg-button-hover text-white border border-line rounded-lg px-4 py-2 text-sm cursor-pointer transition-colors"
        >
          Clear Editor
        </button>
      </div>
    </div>
  );
};

export default ManualControls;
