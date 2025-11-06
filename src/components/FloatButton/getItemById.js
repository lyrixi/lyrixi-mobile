// 有子项的菜单项，点击无效, 故不返回item
function getItemById(list, id) {
  for (let item of list) {
    if (id === item.id && !item?.children?.length) return item

    // if (Array.isArray(item.children) && item.children?.length) {
    //   for (let child of item.children) {
    //     if (id === child.id) return child
    //   }
    // }
  }
}

export default getItemById
