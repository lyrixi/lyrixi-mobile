// 通用映射规则

/*
refer对应参考的代码
*/

/*
api中

payload请求入参说明
通常queryParams为页面中的state变量名称，而Device为获取入参的工具类
*/

/*
response出参说明
code: 状态码若无说明, 则默认, 通常1成功，其它失败；成功对应result.status为success，失败对应result.status为error
data: 数据说明对应转成state中的result.data, 若result.status为success并且data的数据为空, 则result.status为empty
message: 失败时为错误信息，成功时为成功信息, 对应result.message
*/