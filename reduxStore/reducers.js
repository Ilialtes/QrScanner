import {SET_DECODED_DATA} from './actions'

const initialState = {
    dataList: [],
}
function dataReducer(state = initialState, action) {
    switch(action.type){
        case SET_DECODED_DATA: 
        return { 
            ...state,
            dataList: [...state.dataList, action.payload]
        };
        default:
            return state; 
    }   
}

export default dataReducer;