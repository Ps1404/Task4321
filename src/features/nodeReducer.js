// nodeReducer.js
import { createSlice } from "@reduxjs/toolkit";
import { useState, useCallback } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'reactflow';
import ReactFlow, { Node } from 'reactflow';
import 'reactflow/dist/style.css';

const initialState = {
    nodes: {}
  };
  
  const nodeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_NODE':
        return {
          ...state,
          nodes: [...state.nodes, action.payload]
        };
      case 'UPDATE_NODE':
        return {
          ...state,
          nodes: state.nodes.map(node =>
            node.id === action.payload.nodeId ? { ...node, ...action.payload.newData } : node
          )
        };
      case 'DELETE_NODE':
        return {
          ...state,
          nodes: state.nodes.filter(node => node.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default nodeReducer;
  