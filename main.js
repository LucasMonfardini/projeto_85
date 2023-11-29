canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencarWidth =75 ;
greencarHeight=150 ;

backgroundImage = "parkingLot.jpg";
greencarImage = "greencar.png";


greencarX =5 ;
greencarY =400 ;

function add() {
	
	backgroudImgTag = new Image();
	backgroudImgTag.onload = uploadBackground;
	backgroudImgTag.src = backgroundImage;

	greencarImgTag = new Image();
	greencarImgTag.onload = uploadgreencar;
	greencarImgTag.src = greencarImage;
}

function uploadBackground() {
	ctx.drawImage(backgroudImgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {     
	ctx.drawImage(greencarImgTag, greencarX, greencarY, greencarWidth, greencarHeight);

}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencarY >=0)
	{
		greencarY = greencarY - 10;
		console.log("Quando cima é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(greencarY <=500)
	{
		greencarY = greencarY + 10;
		console.log("Quando baixo é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}

}

function left()
{
	if(greencarX >=0)
	{
		greencarX = greencarX - 10;
		console.log("Quando esquerda é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}

}

function right()
{
	if(greencarX <=700)
	{
		greencarX = greencarX + 10;
		console.log("Quando direita é pressionado, x = " + greencarX + " | y = " +greencarY);
		uploadBackground();
		uploadgreencar();
	}
}
