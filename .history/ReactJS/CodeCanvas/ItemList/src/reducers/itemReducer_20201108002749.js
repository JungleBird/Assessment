const itemReducer = (state = {
    items: [],
    activeItem: null
}, action) => {
    switch (action.type) {
        case "LOAD_ITEM_LIST":
            state = {
                ...state,
                items: action.payload
            };
            break;
    }
    return state;
}

export default itemReducer;