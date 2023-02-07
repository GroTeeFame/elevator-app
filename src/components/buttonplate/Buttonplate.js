import "./buttonplate.scss"

export const Buttonplate = ({addOperation, currentFloor, executionListUp, executionListDown}) => {

    return (
        <div className="buttonplate-wrapper">
            <div className="buttonplate">
                <div className="floor-counter">{currentFloor}</div>
                <button key={5} className={`button ${currentFloor == 5 ? "button-current-floor" : executionListUp.includes(5) ? "button-up" : executionListDown.includes(5) ? "button-down" : ''}`} onClick={() => addOperation(5)} >5</button>
                <button key={4} className={`button ${currentFloor == 4 ? "button-current-floor" : executionListUp.includes(4) ? "button-up" : executionListDown.includes(4) ? "button-down" : ''}`} onClick={() => addOperation(4)} >4</button>
                <button key={3} className={`button ${currentFloor == 3 ? "button-current-floor" : executionListUp.includes(3) ? "button-up" : executionListDown.includes(3) ? "button-down" : ''}`} onClick={() => addOperation(3)} >3</button>
                <button key={2} className={`button ${currentFloor == 2 ? "button-current-floor" : executionListUp.includes(2) ? "button-up" : executionListDown.includes(2) ? "button-down" : ''}`} onClick={() => addOperation(2)} >2</button>
                <button key={1} className={`button ${currentFloor == 1 ? "button-current-floor" : executionListUp.includes(1) ? "button-up" : executionListDown.includes(1) ? "button-down" : ''}`} onClick={() => addOperation(1)} >1</button>
                {/* <button key={5} className="button" onClick={() => addOperation(5)} >5</button>
                <button key={4} className="button" onClick={() => addOperation(4)} >4</button>
                <button key={3} className="button" onClick={() => addOperation(3)} >3</button>
                <button key={2} className="button" onClick={() => addOperation(2)} >2</button>
                <button key={1} className="button" onClick={() => addOperation(1)} >1</button> */}
            </div>
        </div>
    )

}