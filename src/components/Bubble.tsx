export default function Bubble({ layer }: any) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${layer.position.x}%`,
        top: `${layer.position.y}%`,
        border: "1px solid black",
        backgroundColor: "white",
        padding: "8px",
        fontSize: "14px",
      }}
    >
      {layer.text}
    </div>
  )
}