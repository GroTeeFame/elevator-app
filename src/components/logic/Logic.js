import { useState, useEffect } from 'react';
import { Buttonplate } from '../buttonplate/Buttonplate';
import { Elevator } from '../elevator/Elevator';

export const Logic = () => {

    const [moveDirection, setMoveDirection] = useState(0);

    const [currentFloor, setCurrentFloor] = useState(1);
    
    const [executionListUp, setExecutionListUp] = useState([]);

    const [executionListDown, setExecutionListDown] = useState([]);

    const [door, setDoor] = useState(true);


    useEffect(() => {
        executOperation();
        checkMoveDirection();
    }, [currentFloor, executionListUp, executionListDown, moveDirection]);

    const changeFloor = (value) => {
        setCurrentFloor(value);
    }

    const setUpMoveDirection = () => {
        setDoor(false);
        setMoveDirection(1);
        sortOperationByMoveDirection(moveDirection);
    }
    
    const setDownMoveDirection = () => {
        setDoor(false);
        setMoveDirection(-1);
        sortOperationByMoveDirection(moveDirection);
    }

    const resetMoveDirection = () => {
        setDoor(true);
        setMoveDirection(0);
    }

    const checkMoveDirection = () => {
        if (!executionListUp[0] && !executionListDown[0]) resetMoveDirection();
    }

    const addOperation = (value) => {
        if (currentFloor < value) {
            if (moveDirection == 0) setUpMoveDirection();
            setExecutionListUp(sortByAsc([...executionListUp, value]));
        }  
        if (currentFloor > value) {
            if (moveDirection == 0) setDownMoveDirection();
            setExecutionListDown(sortByDesc([...executionListDown, value]));
        }
    }

    const removeOperation = () => {
        if (moveDirection !== 0) {
            moveDirection > 0 ? setExecutionListUp(executionListUp.slice(1)) : setExecutionListDown(executionListDown.slice(1));
        }
    }

    const sortByAsc = (arr) => {
        arr.sort((a,b) => a - b);
        return arr;
    }

    const sortByDesc = (arr) => {
        arr.sort((a,b) => b - a);
        return arr;
    }

    const sortOperationByMoveDirection = (arr) => {
        if (moveDirection > 0) {
            arr.sort((a,b) => a - b);
        } 
        if (moveDirection < 0) {
            arr.sort((a,b) => b - a);
        }
        return arr;
    } 

    const startMove = () => {
        if (moveDirection == 0) {
            let upDiff = 100, downDiff = 100;
            if(executionListUp[0]) upDiff = executionListUp[0] - currentFloor;
            if(executionListDown[0]) downDiff = executionListDown[0] - currentFloor;
            upDiff < downDiff ? setUpMoveDirection() : setDownMoveDirection();
        }
    }

    const executOperation = async () => { // 3.0
        console.log('%c executeOperation', 'color: pink; font-size: 20px;');
        if (executionListUp.length !== 0 || executionListDown.length !== 0){

            if (moveDirection == 0){
                startMove();
            } else if (moveDirection > 0) {
                if (!executionListUp[0]) resetMoveDirection();
                if ( currentFloor !== executionListUp[0]){
                    setTimeout(function(){
                        changeFloor(currentFloor + moveDirection);
                    }, 3000)
                } else {
                    setDoor(true);
                    setTimeout(() => {
                        removeOperation();
                        executionListUp[0] ? setDoor(false) : setDoor(true);
                    }, 5000);
                }

            } else if (moveDirection < 0) {
                if (!executionListDown[0]) resetMoveDirection();
                if (currentFloor !== executionListDown[0]){
                    setTimeout(function(){
                        changeFloor(currentFloor + moveDirection);
                    }, 3000)
                } else {
                    setDoor(true);
                    setTimeout(() => {
                        removeOperation();
                        executionListDown[0] ? setDoor(false) : setDoor(true);
                    }, 5000);
                }
            }
        }
    }


    console.log('%c Render', 'color: red; font-size: 22px;');
    return (
        <>
            <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <Elevator currentFloor={currentFloor} moveDirection={moveDirection} executionListUp={executionListUp} executionListDown={executionListDown} door={door}/>
                <Buttonplate addOperation={addOperation} currentFloor={currentFloor}/>
            </div>
        </>
    )
}

