/// 인텔리센스 동작을 위한 코드
/// <reference path="../../lib/p5.global-mode.d.ts"/>

/// 원본소스 
/// https://www.openprocessing.org/sketch/492096


let g_MassArray         = [] ;
let g_PositionXArray    = [] ;
let g_PositionYArray    = [] ;
let g_VelocityXArray    = [] ;
let g_VelocityYArray    = [] ;

function setup()
{
    createCanvas( 800, 600 );

    noStroke();
    fill( random(0,255), random(0,255), random(0,255), 196 );
}

function draw()
{
    background( 96, 96, 96 );

    for ( let i = 0 ; i < g_MassArray.length ; i++ ) 
    {
        let accelerationX = 0;
        let accelerationY = 0;

        for ( let j = 0 ; j < g_MassArray.length ; j++ ) 
        {
            if ( i != j ) 
            {
                let distanceX = g_PositionXArray[j] - g_PositionXArray[i];
                let distanceY = g_PositionYArray[j] - g_PositionYArray[i];

                let distance  = sqrt( distanceX * distanceX + distanceY * distanceY );
                if ( distance < 1 ) distance = 1 ;

                let force = ( distance - 320 ) * g_MassArray[j] / distance ;

                accelerationX += force * distanceX ;
                accelerationY += force * distanceY ;
            }
        }

        g_VelocityXArray[i] = g_VelocityXArray[i] * 0.99 + accelerationX * g_MassArray[i];
        g_VelocityYArray[i] = g_VelocityYArray[i] * 0.99 + accelerationY * g_MassArray[i];
    }

    for ( let i=0 ; i < g_MassArray.length ; ++i )
    {
        g_PositionXArray[i] += g_VelocityXArray[i] ;
        g_PositionYArray[i] += g_VelocityYArray[i] ;

        ellipse( g_PositionXArray[i], g_PositionYArray[i],
            g_MassArray[i] * 1000, g_MassArray[i] * 1000 ) ;
    }
}

function mousePressed()
{
    addNewParticle( mouseX, mouseY );
}

function mouseDragged()
{
    addNewParticle( mouseX, mouseY );
}

function addNewParticle( positionX, positionY )
{
    g_MassArray.push( random( 0.01, 0.03 ) );
    g_PositionXArray.push( positionX );
    g_PositionYArray.push( positionY );
    g_VelocityXArray.push( 0 );
    g_VelocityYArray.push( 0 );

    if ( g_MassArray.length > 300 )
    {
        g_MassArray.shift();
        g_PositionXArray.shift();
        g_PositionYArray.shift();
        g_VelocityXArray.shift();
        g_VelocityYArray.shift();
    }
}
