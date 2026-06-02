import type { VariableMap } from './variables'

export function getVariableClass(token: unknown, map: VariableMap): string {
  return map[String(token)]?.className ?? ''
}

export function getVariableValue(token: unknown, map: VariableMap): string {
  return map[String(token)]?.value ?? ''
}

export function hasVariable(token: unknown, map: VariableMap): boolean {
  return String(token) in map
}
