const itemReducer = (state = {
    itemList: [],
    activeItem: null
}, action) => {
    switch (action.type) {
        case "LOAD_ITEM_LIST":
            state = {
                ...state,
                itemList: action.payload
            };
            break;
        
        case "SHOW_ITEM_CONTENT":
            start = {
                ...state,
            }
    }
    return state;
}

export default itemReducer;