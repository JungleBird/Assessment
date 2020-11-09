export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    };
}

export function displayItemContent(itemId) {

    const index = props.items.itemList.findIndex(function(item, i) {
        return item.id === itemId
      });
    const item = props.items[index];
    return {
        type: "DISPLAY_ITEM_CONTENT",
        payload: item
    };
}
