export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    };
}

export function viewItemContent(item) {
    return {
        type: "VIEW_ITEM_CONTENT",
        payload: item
    };
}
