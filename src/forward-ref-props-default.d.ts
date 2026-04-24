/**
 * 与 @types/react 中 forwardRef 的第二泛参默认 `{}` 并存：未显式写 Props 的 forwardRef
 * 在 strict 下会把解构 props 推断成无属性对象，产生大量 TS2339。
 * 将无注解场景的默认 props 放宽为「可含任意字符串键」。
 */
import 'react'

declare module 'react' {
  function forwardRef<T, P extends object = Record<string, unknown>>(
    render: ForwardRefRenderFunction<T, P>
  ): ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>>
}
