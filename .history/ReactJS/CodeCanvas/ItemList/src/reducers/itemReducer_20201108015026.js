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
        case "DISPLAY_ITEM_CONTENT":
            state = {
                ...state,
                activeItem: action.payload
            };
            break;
    }
    return state;
}

export default itemReducer;