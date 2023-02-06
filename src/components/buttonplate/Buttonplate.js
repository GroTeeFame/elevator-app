import "./buttonplate.scss"

export const Buttonplate = ({addOperation, currentFloor}) => {

    return (
        <div className="buttonplate-wrapper">
            <div className="buttonplate">
                <div className="floor-counter">{currentFloor}</div>
                <button key={5} className="button" onClick={() => addOperation(5)} >5</button>
                <button key={4} className="button" onClick={() => addOperation(4)} >4</button>
                <button key={3} className="button" onClick={() => addOperation(3)} >3</button>
                <button key={2} className="button" onClick={() => addOperation(2)} >2</button>
                <button key={1} className="button" onClick={() => addOperation(1)} >1</button>
            </div>
        </div>
    )

}