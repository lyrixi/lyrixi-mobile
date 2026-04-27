# 新增、编辑、详情 页面架构生成 skill

读取用户输入的 json 文件，将对应的`example`里的插槽的值改成 json 定义的动态值，修改方法如下：

# path

代码生成到的本地路径

# api

api 用于发请求, 组装数据, 构建 result;

1. api: 对应`${example}/api`文件夹;

2. api 下一层级`动态字段`: 对应`${example}/api/动态字段`文件夹，例如 api: {queryData: ..}就对应`${example}/api/queryData`, 若`example`没有此`动态字段`文件夹，创建一个;

3. url, method, headers: 参考 `${example}/api/queryData/index.ts`, 替换规则为: `url的值`替换`url插槽值`, `method的值`替换`method插槽值(强改成post或get)`, `headers的值`替换`headers插槽值`;

4. payload: 本质上是将本地的 state(queryParams)通过 toServerParams 转成后台所需的 payload, json 中的 payload 为转换的映射关系

```bash
值的规则: queryParams 为页面中的 state 变量名称; 而 Device 为获取入参的工具类;
`id:值`: 若有此字段, 则将`id的值` 替换 `payload.id插槽值`, 若没有此字段, 则不需要`payload.id插槽值`那段代码;
`[动态字段]:queryParams.[动态字段]`: 通过`toServerParams(queryParams)`转成服务器所需要的数据, `toServerParams`的转换方法则是`[动态字段] = queryParams.[动态字段]`;
```

5. response: 本质上是将后台返回的结果转成本地的 state(result), json 中的 response 为转换的映射关系, 格式为`"[服务器字段]->result?.[status|data|message]]": "服务器返回值的说明"`,
   格式说明:

- `[服务器字段]`: 若`->`后面是`result.status` 则为`[status服务器动态字段]`, `result.data` 则为`[data服务器动态字段]`, `result.message` 则为`[message服务器动态字段]`;
- `->`: 表示需要将服务器的字段转成本地数据;
- `result?.[status|data|message]]`: 只有三个字段.

参考 `${example}/api/queryData/index.ts`, 替换规则为:

`status服务器动态字段`, 根据值描述, 替换`status服务器插槽字段`;
`message服务器动态字段` 替换`message服务器插槽字段`;
`data服务器动态字段` 替换 `data服务器插槽字段`, 需要用 toData 转为本地数据, 若`data服务器动态字段`的值为数组, 则也转成数组, data 的值里有`->`字段映射关系说明.

# view

定义页面上显示的组件, 格式为: `"组件名称(Header|Main|Footer|Skeleton)": 配置`, 若未定义对应组件则将则组件的代码删除
