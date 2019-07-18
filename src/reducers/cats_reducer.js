



export default function catsReducer(state = {
	pictures: [],
	loading: false
}, action) {
  switch (action.type) {
 
    
  	case 'LOADING_CATS':
  	console.log("loading cats=")
  	 return {...state, loading: true}

    case 'FETCH_CATS':
    console.log("fetching cats=", action.payload)
      return {loading: false, pictures: action.payload }
      
 
    default:
      return state;
  }
};