const itemReducer = (state = {
    itemList: [],
    displayItem: null
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
            
            index = state.items.itemList.findIndex(function(item, i) {
                return item.id === action.payload
            });
            item = state.items[index];

            state = {
                ...state,
                displayItem: item
            };
            break;
    }
    return state;
}

export default itemReducer;