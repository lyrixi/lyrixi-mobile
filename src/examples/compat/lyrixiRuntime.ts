/**
 * 示例页从包入口导入时，部分组件被推断为过宽的 forwardRef，导致子组件/静态方法报错。
 * 仅用于 examples。
 */
import * as LM from 'lyrixi-mobile'
import type { ComponentType, FC, ReactNode } from 'react'

export const ExampleLoading = LM.Loading as unknown as { show(): void; hide(): void }

export const ExampleRequest = LM.Request as unknown as {
  post(url: string, data?: unknown, config?: unknown): Promise<unknown>
}

export function useExampleForm(): [unknown, unknown] {
  const F = LM.Form as unknown as { useForm: () => [unknown, unknown] }
  return F.useForm()
}

export const ExampleForm = LM.Form as unknown as ComponentType<Record<string, unknown>> & {
  Item: FC<Record<string, unknown>>
}

export const ExampleFooterBar = LM.FooterBar as unknown as ComponentType<Record<string, unknown>> & {
  Button: FC<Record<string, unknown>>
}

export const ExampleToolBar = LM.ToolBar as unknown as ComponentType<Record<string, unknown>> & {
  Search: FC<Record<string, unknown>>
  SearchActive: FC<Record<string, unknown>>
  Filter: FC<Record<string, unknown>>
}

export const ExampleToast = LM.Toast as unknown as {
  show(opts: { content?: ReactNode; [key: string]: unknown }): void
}
