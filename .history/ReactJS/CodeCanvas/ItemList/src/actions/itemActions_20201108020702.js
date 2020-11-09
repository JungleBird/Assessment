export function loadItemList(items) {
    return {
        type: "LOAD_ITEM_LIST",
        payload: items
    };
}

export function displayItemContent(itemId) {

    const index = this.props.items.itemList.findIndex(function(item, i) {
        return item.id === itemId
      });
    const item = this.props.items[index];
    console.log(item);
    return {
        type: "DISPLAY_ITEM_CONTENT",
        payload: item
    };
}