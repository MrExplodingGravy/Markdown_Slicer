import React from 'react';

const BatchControls = ({
  headingLevel,
  onHeadingLevelChange,
  sectionCount,
  frontmatter,
  onFrontmatterChange,
  onOpenFile,
  onSplitAndDownload,
  onClearEditor
}) => {
  return (
    <div className="space-y-4">
      {/* Heading Level Selector */}
      <div>
        <label className="block text-muted text-xs mb-1">Split by heading level</label>
        <select
          value={headingLevel}
          onChange={(e) => onHeadingLevelChange(Number(e.target.value))}
          className="bg-input-bg border border-line rounded-lg px-3 py-2 text-txt text-sm cursor-pointer"
        >
          <option value={1}>H1</option>
          <option value={2}>H2</option>
          <option value={3}>H3</option>
          <option value={4}>H4</option>
          <option value={5}>H5</option>
          <option value={6}>H6</option>
        </select>
      </div>

      {/* Section Count */}
      <div className="text-muted text-sm">
        Found {sectionCount} H{headingLevel} section{sectionCount !== 1 ? 's' : ''}
      </div>

      {/* Checkbox */}
      <div>
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
          onClick={onSplitAndDownload}
          className="bg-accent hover:bg-accent/90 text-white rounded-lg px-4 py-2 text-sm cursor-pointer transition-colors font-medium"
        >
          Split & Download All
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

export default BatchControls;
