import YAML from "yaml"
import type { Panel } from "./types"

export function parseDSL(input: string): Panel[] {
  const data = YAML.parse(input)

  return data.panels
  /*
  return {
    id: data.panel.id,
    frame: data.panel.frame,
    layers: data.panel.layers,
  }
  */
}