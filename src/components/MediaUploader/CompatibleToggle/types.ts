export interface CompatibleToggleProps {
  compatible?: boolean | string
  compatiblePlatform?: string
  onCompatiblePlatformChange?: (platform: string) => void
}
