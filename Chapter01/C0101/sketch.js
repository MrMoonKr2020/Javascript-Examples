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
    text( "( " + parseInt( mouseX ) + " )", 4, mouseY - 8  );

    stroke( 0, 255, 0 );
    line( mouseX, 0, mouseX, windowHeight );
    textSize( 18 );
    text( "( " + parseInt( mouseY ) + " )", mouseX + 8, 24  );

    /* if ( touches.length >= 1 ) // 노트북 터치 패드 지원
    {
        let mx = touches[0].x ;
        let my = touches[0].y ;

        stroke( 255, 0, 0 );
        line( 0, my, windowWidth, my );
        textSize( 18 );
        text( "( " + parseInt( mx ) + " )", 4, my - 8  );

        stroke( 0, 255, 0 );
        line( mx, 0, mx, windowHeight );
        textSize( 18 );
        text( "( " + parseInt( my ) + " )", mx + 8, 24  );
    } */
}


