import Bubble from "./Bubble"
import tarouIntro from "../assets/tarou_intro.png"

const characterAssets: Record<string, string> = {
  "山田タロウ_intro": tarouIntro,
}

export default function PanelView({ panel }: any) {
  console.log(panel)
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        position: "relative",
        border: "1px solid black",
        overflow: "hidden",
        backgroundColor: panel.backgroundColor || "white",
      }}
    >
      {panel.layers.map((layer: any, index: number) => {
        if (layer.type === "background") {
          return (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: panel.backgroundColor || "#eee",
              }}
            />
          )
        }

        if (layer.type === "character") {
          const key = `${layer.name}_${layer.pose}`
          const imageSrc = characterAssets[key]

          return (
            <img
              key={index}
              src={imageSrc}
              alt={layer.name}
              style={{
                position: "absolute",
                left: `${layer.position.x}%`,
                top: `${layer.position.y}%`,
                width: `${layer.size?.w || 80}px`,
                height: `${layer.size?.h || 120}px`,
                objectFit: "contain",
              }}
            />
          )
        }

        if (layer.type === "bubble") {
          return <Bubble key={index} layer={layer} />
        }

        return null
      })}
    </div>
  )
}