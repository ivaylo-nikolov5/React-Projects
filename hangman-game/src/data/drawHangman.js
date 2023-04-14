function drawScaffold(ctx) {
    // Draw the scaffold
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(225, 350);
    ctx.stroke();
}

function drawVerticalBar(ctx) {
    // Draw the vertical bar
    ctx.beginPath();
    ctx.moveTo(137, 350);
    ctx.lineTo(137, 50);
    ctx.stroke();
}

function drawHorizontalBar(ctx) {
    // Draw the horizontal bar
    ctx.beginPath();
    ctx.moveTo(137, 50);
    ctx.lineTo(275, 50);
    ctx.stroke();
}

function drawHead(ctx) {
    // Draw the head
    ctx.beginPath();
    ctx.arc(260, 79, 30, 0, 20 * Math.PI);
    ctx.stroke();
}

function drawBody(ctx) {
    // Draw the body
    ctx.beginPath();
    ctx.moveTo(260, 110);
    ctx.lineTo(260, 200);
    ctx.stroke();
}

function drawLeftArm(ctx) {
    // Draw the left arm
    ctx.beginPath();
    ctx.moveTo(260, 145);
    ctx.lineTo(200, 110);
    ctx.stroke();
}

function drawRightArm(ctx) {
    // Draw the right arm
    ctx.beginPath();
    ctx.moveTo(260, 145);
    ctx.lineTo(320, 110);
    ctx.stroke();
}

function drawLeftLeg(ctx) {
    // Draw the left leg
    ctx.beginPath();
    ctx.moveTo(260, 200);
    ctx.lineTo(210, 250);
    ctx.stroke();
}

function drawRightLeg(ctx) {
    // Draw the right leg
    ctx.beginPath();
    ctx.moveTo(260, 200);
    ctx.lineTo(310, 245);
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