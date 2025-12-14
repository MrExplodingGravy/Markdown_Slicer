import React from 'react';

const ModeToggle = ({ mode, onModeChange }) => {
  return (
    <div className="flex gap-2 mb-4">
      <button
        onClick={() => onModeChange('manual')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          mode === 'manual'
            ? 'bg-accent text-white'
            : 'bg-button-bg text-txt hover:bg-button-hover border border-line'
        }`}
      >
        Manual Selection
      </button>
      <button
        onClick={() => onModeChange('batch')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          mode === 'batch'
            ? 'bg-accent text-white'
            : 'bg-button-bg text-txt hover:bg-button-hover border border-line'
        }`}
      >
        Batch Split
      </button>
    </div>
  );
};

export default ModeToggle;
