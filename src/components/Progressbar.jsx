import React, {useState, useEffect} from 'react'

export default function Progressbar(props) {
	const [filled, setFilled] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
	useEffect(() => {
		setIsRunning(true)
		if (filled < 100 && isRunning) {
			setTimeout(() => setFilled(prev => prev += 2), 50)
		}
	},[filled, isRunning])
  return (
	  <div>
		  <div className="progressbar">
			  <div style={{
				  height: "100%",
				  width: `${props.perc}%`,
				  backgroundColor: "#7CFC00",
				  transition:"width 0.5s"
			  }}></div>
			  <span className="progressPercent">{ props.perc }%</span>
		  </div>
		  {/* <button className="btn" onClick={() => {setIsRunning(true)}}>Run</button> */}
	</div>
  )
}
