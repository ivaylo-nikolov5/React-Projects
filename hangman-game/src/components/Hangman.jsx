import {React, useEffect, useRef} from 'react';
import { drawScaffold, drawVerticalBar, drawHorizontalBar, drawHead, 
        drawBody, drawLeftArm, drawRightArm, drawLeftLeg, drawRightLeg } from "../data/drawHangman";

import "../css/Hangman.css";

const Hangman = (props) => {
    const canvasRef = useRef(null);
    const fails = props.fails;
    
    const draw = (ctx, fails) => {
        // Set line properties
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.strokeStyle = "#FFFFFF";
        ctx.imageSmoothingEnabled = true;

        const drawOrder = {
            0: () => {
                    ctx.beginPath();
                    ctx.moveTo(137, 550);
                    ctx.lineTo(237, 550);
                    ctx.stroke();
                },
            1: drawScaffold,
            2: drawVerticalBar,
            3: drawHorizontalBar,
            4: drawHead,
            5: drawBody,
            6: drawLeftArm,
            7: drawRightArm,
            8: drawLeftLeg,
            9: drawRightLeg
        }
        
        drawOrder.hasOwnProperty(fails) ?  drawOrder[fails](ctx) : props.setFailed(true);
        
    };
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        draw(context, fails);
    }, [fails]);

    return (
        <div className='hangmanContainer'>
            <canvas
                ref={canvasRef}
                width="400"
                height="400"
            />
        </div>
    )
}

export default Hangman