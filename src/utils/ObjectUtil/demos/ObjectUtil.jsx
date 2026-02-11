import React from 'react'
import { ObjectUtil, Page, Card, Divider } from 'lyrixi-mobile'

export default () => {
  const emptyExamples = [
    { label: '{}', result: ObjectUtil.isEmpty({}) },
    { label: '[]', result: ObjectUtil.isEmpty([]) },
    { label: "''", result: ObjectUtil.isEmpty('') },
    { label: 'null', result: ObjectUtil.isEmpty(null) },
    { label: 'undefined', result: ObjectUtil.isEmpty(undefined) },
    { label: 'new Date()', result: ObjectUtil.isEmpty(new Date()) },
    { label: "new Date('invalid')", result: ObjectUtil.isEmpty(new Date('invalid')) },
    { label: '{ a: 1 }', result: ObjectUtil.isEmpty({ a: 1 }) },
    { label: '[1]', result: ObjectUtil.isEmpty([1]) }
  ]

  const plainObj = { a: 1 }
  const notPlainObj = [1, 2]
  const dateObj = new Date()

  const pickByObj = { a: 1, b: 2, c: 3, d: 4 }
  const pickByResult = ObjectUtil.pickBy(pickByObj, (v) => v > 2)

  const cloneSrc = { a: 1, b: { c: 2 } }
  const cloneResult = ObjectUtil.cloneDeep(cloneSrc)
  const cloneRef = cloneResult !== cloneSrc && cloneResult.b !== cloneSrc.b

  const isEqualA = { x: 1, y: { z: 2 } }
  const isEqualB = { x: 1, y: { z: 2 } }
  const isEqualC = { x: 1, y: { z: 3 } }

  return (
    <Page>
      <Page.Main>
        <Card>
          <Divider>isEmpty(value)</Divider>
          <div style={{ margin: '0 12px' }}>
            判断 null / undefined / 空字符串 / 空数组 / 空对象 / 无效 Date 等是否“为空”。
          </div>
          {emptyExamples.map(({ label, result }) => (
            <div key={label} style={{ margin: '4px 12px' }}>
              ObjectUtil.isEmpty({label}) → {String(result)}
            </div>
          ))}
        </Card>

        <Card>
          <Divider>isPlainObject(value)</Divider>
          <div style={{ margin: '0 12px' }}>
            判断是否为纯对象（{} 或 Object.create(null)），非 Date/Array 等。
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.isPlainObject(plainObj) → {String(ObjectUtil.isPlainObject(plainObj))}
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.isPlainObject([1,2]) → {String(ObjectUtil.isPlainObject(notPlainObj))}
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.isPlainObject(new Date()) → {String(ObjectUtil.isPlainObject(dateObj))}
          </div>
        </Card>

        <Card>
          <Divider>pickBy(object, predicate)</Divider>
          <div style={{ margin: '0 12px' }}>
            从对象中挑选 predicate(value, key) 为真的属性。例：从 {'{ a:1, b:2, c:3, d:4 }'} 中挑出值 &gt; 2。
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.pickBy(..., v =&gt; v &gt; 2) → {JSON.stringify(pickByResult)}
          </div>
        </Card>

        <Card>
          <Divider>cloneDeep(value)</Divider>
          <div style={{ margin: '0 12px' }}>
            深拷贝对象或数组，新对象与原始无引用关系。
          </div>
          <div style={{ margin: '4px 12px' }}>
            cloneResult !== cloneSrc && cloneResult.b !== cloneSrc.b → {String(cloneRef)}
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.cloneDeep({'{ a:1, b:{ c:2 } }'}) → {JSON.stringify(cloneResult)}
          </div>
        </Card>

        <Card>
          <Divider>isEqual(a, b)</Divider>
          <div style={{ margin: '0 12px' }}>
            深度比较两个值是否相等。
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.isEqual({'{ x:1, y:{ z:2 } }'}, {'{ x:1, y:{ z:2 } }'}) →{' '}
            {String(ObjectUtil.isEqual(isEqualA, isEqualB))}
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.isEqual(isEqualA, isEqualC) → {String(ObjectUtil.isEqual(isEqualA, isEqualC))}
          </div>
        </Card>

        <Card>
          <Divider>randomUUID()</Divider>
          <div style={{ margin: '0 12px' }}>
            生成类 UUID 字符串（如 xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx）。
          </div>
          <div style={{ margin: '4px 12px' }}>
            ObjectUtil.randomUUID() → {ObjectUtil.randomUUID()}
          </div>
        </Card>
      </Page.Main>
    </Page>
  )
}
