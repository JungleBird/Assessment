export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    }
}

export function showItemContent(itemId) {

    const index = this.state.items.findIndex(function(item, i) {
        return item.id === itemId
      });
    const item = this.state.items[index]

    return {
        type: "SHOW_ITEM_CONTENT",
        payload: item
    }
}