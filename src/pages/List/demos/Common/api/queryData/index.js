import { Request, Device, LocaleUtil } from 'lyrixi-mobile'
const locale = LocaleUtil.locale

// 获取列表
// 兼容新 List.Main 要求：外部仍返回数组，调用处已包装为新对象
function queryData(params, { success } = {}) {
  return new Promise((resolve) => {
    // 查询
    Request.post(
      '/combo/v1/getComboGrid.do?comboCode=employee',
      {
        isControl: '0',
        menuId: Device.getUrlParameter('menuId') || '',
        ...params
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded' // application/json;charset=UTF-8
        }
      }
    )
      .then((result) => {
        if (Array.isArray(result.rows)) {
          let list = result.rows.map((item) => {
            return {
              ...item,
              id: item.id,
              name: item.name,
              description: item.dept_name + ' ' + item.position_name
            }
          })
          // 设置数据的分页信息, 总条数和总页数只要传一个就行了, 可使List控件更准确的分页
          // list.totalItems = result.totalItems
          // list.totalPages = result.totalPages

          success && success({ list: list })

          resolve(list)
        } else {
          resolve(result.message || locale('获取数据错误！'))
        }
      })
      .catch((err) => {
        resolve(err?.data?.message || locale('获取数据异常！'))
      })
  })
}

export default queryData
