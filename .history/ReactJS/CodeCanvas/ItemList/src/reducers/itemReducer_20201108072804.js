const itemReducer = (state = {
    itemList: [],
    displayItem: {}
}, action) => {
    switch (action.type) {
        default:
            break;
        case "LOAD_ITEM_LIST":
            state = {
                ...state,
                itemList: action.payload
            };
            break;
        case "DISPLAY_ITEM_CONTENT":
            state = {
                ...state,
                displayItem: action.payload
            };
            break;
    }
    return state;
}

export default itemReducer;