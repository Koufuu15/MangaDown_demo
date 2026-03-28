import { useState } from "react"
import Editor from "./components/Editor"
import Viewer from "./components/Viewer"
import { parseDSL } from "./lib/parser"
import "./App.css"

const initialCode = `panels:
  - id: 1
    frame: {x: 50, y: 0, w: 50, h: 50}
    backgroundColor: "#c9d5f9"
    layers:
      - type: background
        asset: classroom

      - type: character
        name: 山田タロウ
        pose: intro
        size: {w: 480, h: 720}
        position: {x: -10, y: -50}

      - type: bubble
        text: ぼくは山田タロウ。 
        shape: square
        position: {x: 10, y: 10}

      - type: bubble
        text: あだ名は「コーギー」
        shape: square
        position: {x: 30, y: 22}
        padding: {r: 5, l: 20}
`

function App() {
  const [code, setCode] = useState(initialCode)
  const [panels, setPanels] = useState<any[]>([])

  return (
    <div className="container">
      <header className="header">
        <h1>MangaDown デモページ</h1>
        <p>Markdown DSL から漫画をリアルタイム表示</p>
      </header>
      
      <main className="workspace">
      <section className="editor-card">
        <h2>Markdown エディタ</h2>
        <Editor value={code} onChange={setCode} />

        <button
          className="run-button"
          onClick={() => setPanels(parseDSL(code))}
        >
          パース実行
        </button>
      </section>

      <section className="viewer-card">
        <h2>プレビュー</h2>
        <Viewer panels={panels} />
      </section>
    </main>
  </div>
  )
}

export default App