export interface PickerMainSlotsTouchDragState {
  startX: number
  startY: number
  currentX: number
  currentY: number
  endX: number
  endY: number
  startTimeStamp: number
  duration: number
  diffX: number
  diffY: number
  posY: number
  currentPosY: number
  direction: string | null
}

export interface PickerMainSlotsSlotDragState {
  slotElement: HTMLUListElement | null
  slotIndex: string | null
  slotHeight: number
}
