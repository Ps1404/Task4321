// Controls.js
import React from 'react';

const Controls = ({ onAddNode }) => {
  const handleAddNode = () => {
    onAddNode();
  };

  return (
    <div className="controls">
      <button onClick={handleAddNode}>Create Node</button>
    </div>
  );
};

export default Controls;
