const initialState = {
    filter: ""
};

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'filter/update':
            return{
                ...state,
                filter: action.payload,
            }
        default:
            return state;
    }
}

export const updateFilter = newFilter => {
    return{
        type: 'filter/update',
        payload: newFilter,
    }
  }