import PanelView from "./Panel"

export default function Viewer({ panels }: any) {
  if (!panels || panels.length === 0) {
    return <div>ここに漫画が表示されます</div>
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        alignItems: "center",
      }}
    >
      {panels.map((panel: any, index: number) => (
        <PanelView key={index} panel={panel} />
      ))}
    </div>
  )
}