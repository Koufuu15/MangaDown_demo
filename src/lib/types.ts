export type Position = {
  x: number
  y: number
}

export type Size = {
  w: number
  h: number
}

export type Frame = {
  x: number
  y: number
  w: number
  h: number
}

export type Layer =
  | {
      type: "background"
      asset: string
      tone?: string
    }
  | {
      type: "character"
      name: string
      pose: string
      position: Position
      size?: Size
    }
  | {
      type: "bubble"
      text: string
      shape: string
      position: Position
    }

export type Panel = {
  id: number
  frame: Frame
  backgroundColor?: string
  layers: Layer[]
}

export type MangaPage = {
  panels: Panel[]
}