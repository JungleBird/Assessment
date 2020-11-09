const itemReducer = (state = {
    items:{
        itemList: [],
        viewItem: {}
    }
}, action) => {
    switch (action.type) {
        default:
            break;
        case "LOAD_ITEM_LIST":
            state = {
                ...state,
                items: {itemList: action.payload}
            };
            break;
        case "VIEW_ITEM_CONTENT":
            state = {
                ...state,
                items: {viewItem: action.payload}
            };
            break;
    }
    return state;
}

export default itemReducer;