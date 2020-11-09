export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    }
}

export function showItemContent(itemId) {
    return {
        type: "SHOW_ITEM_CONTENT",
        payload: itemId
    }
}