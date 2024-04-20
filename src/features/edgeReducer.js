// edgeReducer.js
const initialState = {
    edges: []
  };
  
  const edgeReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EDGE':
        return {
          ...state,
          edges: [...state.edges, action.payload]
        };
      case 'UPDATE_EDGE':
        return {
          ...state,
          edges: state.edges.map(edge =>
            edge.id === action.payload.edgeId ? { ...edge, ...action.payload.newData } : edge
          )
        };
      case 'DELETE_EDGE':
        return {
          ...state,
          edges: state.edges.filter(edge => edge.id !== action.payload)
        };
      default:
        return state;
    }
  };
  
  export default edgeReducer;
  