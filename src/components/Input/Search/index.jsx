import React, { forwardRef, useState, useEffect } from 'react'
import InputText from './../Text'

const Search = forwardRef(({ value, onChange, onSearch, onPressEnter, ...props }, ref) => {
  // No onChange, use keyword
  const [keyword, setKeyword] = useState(value)

  useEffect(() => {
    setKeyword(value)
    // eslint-disable-next-line
  }, [value])

  return (
    <InputText
      ref={ref}
      // 移动端优化属性
      {...props}
      enterKeyHint="search"
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      onPressEnter={(e) => {
        onPressEnter && onPressEnter(e)
        e?.target?.blur?.()
        onSearch && onSearch(typeof onChange === 'function' ? value : keyword)
      }}
      value={typeof onChange === 'function' ? value : keyword}
      onChange={typeof onChange === 'function' ? onChange : setKeyword}
      type="search"
    />
  )
})

export default Search
