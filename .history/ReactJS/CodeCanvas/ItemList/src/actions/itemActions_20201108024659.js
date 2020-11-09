export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    };
}

export function displayItemContent(itemId) {
    return {
        type: "DISPLAY_ITEM_CONTENT",
        payload: itemId
    };
}
