// GraphComponent.js
import React from 'react';
import ReactFlow, { addEdge, removeElements } from 'react-flow-renderer';
import { useDispatch, useSelector } from 'react-redux';

const GraphComponent = () => {
  const dispatch = useDispatch();
  const nodes = useSelector(state => state.nodes);
  const edges = useSelector(state => state.edges);

  const handleAddNode = () => {
    dispatch({ type: 'ADD_NODE', payload: { id: nodes.length + 1, data: { label: `Node ${nodes.length + 1}` }, position: { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight } } });
  };

  const handleDeleteNode = (nodeId) => {
    dispatch({ type: 'DELETE_NODE', payload: nodeId });
  };

  const handleConnect = (params) => {
    dispatch({ type: 'ADD_EDGE', payload: { id: `edge-${params.source}-${params.target}`, source: params.source, target: params.target } });
  };

  const handleElementRemove = (elementsToRemove) => {
    const removedNodes = elementsToRemove.filter(element => element.type === 'node');
    removedNodes.forEach(node => handleDeleteNode(node.id));
  };

  return (
    <div>
      <button onClick={handleAddNode}>Add Node</button>
      <ReactFlow
        elements={nodes.concat(edges)}
        onConnect={handleConnect}
        onElementsRemove={handleElementRemove}
        style={{ width: '100%', height: '500px' }} // Adjust the height as needed
      />
    </div>
  );
};

export default GraphComponent;
