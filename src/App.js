import React, {useState} from "react"
import "./App.css";
import pic from './Photos/star.png'


function App() {

  const [isClicked, setIsClicked] = useState("false")

  const clickHandler = (id)=>{
    setIsClicked(!isClicked)
  }

  
	return (
		<div className="flex justify-center items-center h-screen bg-black">
			<div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-sm justify-center items-center h-80 w-80">
        <img className="h-7 w-7 mb-1"src={pic} alt="star"/>
				<h3 className="text-2xl text mb-4 text-white">How did we do ?</h3>
				<p className="text-white">
					Please let us know how we did with your support request.All feedback
					is appreciated to help us improve our offering
				</p>
        <div className="items-center justify-center">
				<button className={`rounded-full  m-3 h-8 w-8 hover:bg-amber-600 text-white ${isClicked ? "bg-gray-400" : "bg-slate-700"}` } onClick={clickHandler}>1</button>
				<button className={`rounded-full  m-3 h-8 w-8 hover:bg-amber-600 text-white ${isClicked ? "bg-gray-400" : "bg-slate-700"}`}  onClick={clickHandler}>2</button>
				<button className={`rounded-full  m-3 h-8 w-8 hover:bg-amber-600 text-white ${isClicked ? "bg-gray-400" : "bg-slate-700"} `} onClick={clickHandler}>3</button>
				<button className={`rounded-full  m-3 h-8 w-8 hover:bg-amber-600 text-white ${isClicked ? "bg-gray-400" : "bg-slate-700"} `} onClick={clickHandler}>4</button>
				<button className={`rounded-full  m-3 h-8 w-8 hover:bg-amber-600 text-white ${isClicked ? "bg-gray-400" : "bg-slate-700"} `} onClick={clickHandler}>5</button>
        <br/>
        </div>
        {/* Submit button */}
        <button className="rounded-full border mt-2 h-12 w-72 bg-white hover:text-amber-600 ">SUBMIT</button>
			</div>
		</div>
	);
}

export default App;
