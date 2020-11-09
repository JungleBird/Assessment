export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    };
}

export function displayItemContent(itemId) {

    const index = this.state.items.itemList.findIndex(function(item, i) {
        return item.id === itemId
      });
    const item = this.state.items[index]

    return {
        type: "DISPLAY_ITEM_CONTENT",
        payload: item
    };
}