import { useState } from "react"


function App() {

const [brightness, setBrightness] = useState(50)
const [isOn, setIsOn] = useState(true)

const increaseBrightness = () => {
	if (brightness < 100) {
		setBrightness(brightness + 10)
	}
}

const decreaseBrightness = () => {
	if (brightness > 0) {
		setBrightness(brightness - 10);
	}
}

const tooglePower = () => {
	setIsOn(!isOn)
}

return (
	<div className="p-8 flex flex-col items-center gap-4">
      <div className={`w-24 h-24 rounded-full border-2 border-black flex items-center justify-center font-bold ${
          isOn ? "bg-yellow-400" : "bg-gray-400"
        }`}
      >
        {isOn ? `${brightness}%` : "OFF"}
      </div>

      <button onClick={tooglePower} className="px-4 py-2 bg-black text-white rounded">
        {isOn ? "Turn Off" : "Turn On"}
      </button>

      <div className="flex gap-2">
        <button onClick={decreaseBrightness} disabled={!isOn} className="px-4 py-2 bg-gray-200 border rounded disabled:opacity-50"
        >
          - 10%
        </button>

        <button
          onClick={increaseBrightness}
          disabled={!isOn}
          className="px-4 py-2 bg-gray-200 border rounded disabled:opacity-50"
        >
          + 10%
        </button>
      </div>
    </div>
)

}

export default App
