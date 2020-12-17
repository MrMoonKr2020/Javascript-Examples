/// 인텔리센스 동작을 위한 코드
/// <reference path="../../lib/p5.global-mode.d.ts"/>



function setup()
{
    createCanvas( 800, 600 );

    textSize( 24 );
}

function draw()
{
    background( 96, 96, 96 );

    stroke( 255, 0, 0 );
    line( 0, mouseY, windowWidth, mouseY );
    textSize( 18 );
    text( "( " + mouseX + " )", 4, mouseY - 8  );

    stroke( 0, 255, 0 );
    line( mouseX, 0, mouseX, windowHeight );
    textSize( 18 );
    //text( "( " + mouseY + " )", mouseX + 8, 24  );
    text( "( " + mouseY + " )", mouseX + 8, 24  );


}


