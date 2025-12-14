import React from 'react';

const Editor = ({ content, onChange, placeholder = "Paste or open a large Markdown file here..." }) => {
  return (
    <textarea
      value={content}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full bg-input-bg border border-line rounded-[10px] text-txt resize-y"
      style={{
        padding: '12px',
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        fontSize: '14px',
        lineHeight: '1.45',
        minHeight: '60vh',
        whiteSpace: 'pre-wrap'
      }}
      spellCheck="false"
    />
  );
};

export default Editor;
