const itemReducer = (state = {
    itemList: [],
    viewItem: {}
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
        case "VIEW_ITEM_CONTENT":
            state = {
                ...state,
                viewItem: action.payload
            };
            break;
    }
    return state;
}

export default itemReducer;