function drawScaffold(ctx) {
    // Draw the scaffold
    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(150, 250);
    ctx.stroke();
}

function drawVerticalBar(ctx) {
    // Draw the vertical bar
    ctx.beginPath();
    ctx.moveTo(100, 250);
    ctx.lineTo(100, 50);
    ctx.stroke();
}

function drawHorizontalBar(ctx) {
    // Draw the horizontal bar
    ctx.beginPath();
    ctx.moveTo(100, 50);
    ctx.lineTo(200, 50);
    ctx.stroke();
}

function drawHead(ctx) {
    // Draw the head
    ctx.beginPath();
    ctx.arc(200, 75, 25, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawBody(ctx) {
    // Draw the body
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(200, 175);
    ctx.stroke();
}

function drawLeftArm(ctx) {
    // Draw the left arm
    ctx.beginPath();
    ctx.moveTo(200, 125);
    ctx.lineTo(175, 150);
    ctx.stroke();
}

function drawRightArm(ctx) {
    // Draw the right arm
    ctx.beginPath();
    ctx.moveTo(200, 125);
    ctx.lineTo(225, 150);
    ctx.stroke();
}

function drawLeftLeg(ctx) {
    // Draw the left leg
    ctx.beginPath();
    ctx.moveTo(200, 175);
    ctx.lineTo(175, 200);
    ctx.stroke();
}

function drawRightLeg(ctx) {
    // Draw the right leg
    ctx.beginPath();
    ctx.moveTo(200, 175);
    ctx.lineTo(225, 200);
    ctx.stroke();
}

export {
    drawScaffold,
    drawVerticalBar,
    drawHorizontalBar,
    drawHead,
    drawBody,
    drawLeftArm,
    drawRightArm,
    drawLeftLeg,
    drawRightLeg
}