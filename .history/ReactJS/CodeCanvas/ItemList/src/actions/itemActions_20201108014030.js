export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    }
}

export function showItemContent(item) {
    return {
        type: "SHOW_ITEM_CONTENT",
        payload: item
    }
}