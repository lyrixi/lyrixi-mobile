/// <reference types="jest" />
import React from 'react'
import { render } from '@testing-library/react'
import ErrorBoundary from './../ErrorBoundary'
import Combo from './demos/Combo'

test('白屏测试', () => {
  console.error = (error: unknown) => {
    const msg = error instanceof Error ? error.message : String(error ?? 'error')
    console.log(msg)
  }
  console.warn = jest.fn()

  try {
    const { container } = render(
      <ErrorBoundary>
        <Combo />
      </ErrorBoundary>,
    )

    if (container.textContent?.indexOf('Something went wrong.') !== -1) {
      throw new Error('已白屏, 未通过测试')
    }
  } finally {
    // 恢复 console 可按需取消注释
  }
})
