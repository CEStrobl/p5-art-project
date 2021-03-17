let canvas = {width: 800, height:600}

let easing = 0.1;
let FFx = 300
let FFy = 300


let targetX = 9
let targetY = 2


// let targetX = (canvas.width/2) + random(120, 120)
// let targetY = (canvas.height/2)+100 + random(-80, 20)


class Shape {

    constructor(canvas) {
        this.canvas = canvas
        this.x = random(canvas.width)
        this.y = random(canvas.height)
    }


    x = 100;
    y = 100;
    w = 10;
    h = 10;

    //c = random(255)

    vx = random(-2, 2)
    vy = random(7, 12)



    move(){

        //this.x += this.vx;
        this.y += this.vy;

        // if (this.x < 0 || this.x > this.canvas.width) {
        //     this.vx = -this.vx
        // }
        if (this.y < 0 || this.y > this.canvas.height) {
            //this.vy = 0

            this.y=0
        }
    }

    FFvx = random(-0.8, 0.8)
    FFvy = random(-0.8, 0.8)

    // FFx = (canvas.width/2) + random(-120, 120)
    // FFy = (canvas.height/2)+100 + random(-80, 20)

    FFx = 300
    FFy = 300

    targetX = 300
    targetY = 300




    firefliesMove(){

        //dont get to close to mid lol
        for(i = 0; i < 60; i++) {
            
            if (this.FFx == (canvas.width/2)) {
                console.log("yeah we made it why u ask")
                //go bye bye
                this.FFx += random(random(-180, -140), random(140, 180))* easing
            }

            if (this.FFy == (canvas.height/2)) {
                console.log("yeah we made it why u ask")
                //go bye bye
                this.FFy += random(random(-100, -40), random(40, 100))* easing
            }
        }



        targetX = (canvas.width/2) + (random(-220, 220) - (canvas.width/2)) * easing
        targetY = ((canvas.height/2)+100) + (random(-280, 220) - ((canvas.height/2))+100) * easing


        this.FFx = this.FFx + (targetX - this.FFx) * easing
        this.FFy = this.FFy + (targetY - this.FFy) * easing



        //bounce off the walls
        if (this.FFx < -15 || this.FFx > this.canvas.width) {
            //reverse direction
            this.FFvx = -this.FFvx
        }
        if (this.FFy < -15 || this.FFy > this.canvas.height) {
            //reverse direction
            this.FFvy = -this.FFvy
        }
    }

    draw() {
        this.move()
        fill(this.c)
        throw "nothing to draw lol"
    }
}

class Rain extends Shape {

    draw() {
        this.move()
        fill('#3672AF')
        
        
        // circle(this.x, this.y, this.w)
        ellipse(this.x, this.y, this.w-14, this.h+14)
    }

}


class Firefly extends Shape {

    draw() {
        this.firefliesMove()
        fill('#FFD35B')



        circle(this.FFx, this.FFy, this.w)
    }
}


class Tree {

    tree1(coordX, coordY) {

        //w hood
        fill('#523f24')
        //ellipse(56, 80, 20, 125)
        ellipse(56+coordX, 80+coordY, 20, 125)

        fill('#523f24')
        // ellipse(65, 135, 40, 26)
        ellipse(65+coordX, 135+coordY, 40, 26)

        fill('#523f24')
        //ellipse(55, 125, 36, 26)
        ellipse(55+coordX, 125+coordY, 36, 26)

        fill('#523f24')
        //ellipse(45, 135, 46, 20)
        ellipse(45+coordX, 135+coordY, 46, 20)

        

        //leaves
        fill('#346b3e')
        //ellipse(31, 45, 30, 42)
        ellipse(31+coordX, 45+coordY, 30, 42)

        fill('#346b3e')
        //ellipse(53, 42, 53, 55)
        ellipse(53+coordX, 42+coordY, 53, 55)

        fill('#346b3e')
        //ellipse(70, 38, 43, 32)
        ellipse(70+coordX, 38+coordY, 43, 32)

        
        
    }

    tree2(coordX, coordY) {

        //w hood
        fill('#46351d')
        //ellipse(56, 80, 20, 125)
        ellipse(56+coordX, 100+coordY, 30, 145)

        fill('#46351d')
        // ellipse(65, 135, 40, 26)
        ellipse(65+coordX, 155+coordY, 50, 26)

        fill('#46351d')
        //ellipse(55, 125, 36, 26)
        ellipse(55+coordX, 155+coordY, 56, 46)

        fill('#46351d')
        //ellipse(45, 135, 46, 20)
        ellipse(45+coordX, 165+coordY, 66, 20)

        

        //leaves
        fill('#24592d')
        //ellipse(31, 45, 30, 42)
        ellipse(31+coordX, 45+coordY, 40, 39)

        fill('#24592d')
        //ellipse(53, 42, 53, 55)
        ellipse(53+coordX, 42+coordY, 58, 61)

        fill('#24592d')
        //ellipse(70, 38, 43, 32)
        ellipse(75+coordX, 48+coordY, 58, 48)

        
        
    }

    tree3(coordX, coordY) {

        //w hood
        fill('#3C2E19')
        //ellipse(56, 80, 20, 125)
        ellipse(56+coordX, 100+coordY, 30, 145)

        fill('#3C2E19')
        // ellipse(65, 135, 40, 26)
        ellipse(45+coordX, 155+coordY, 50, 26)

        fill('#3C2E19')
        //ellipse(55, 125, 36, 26)
        ellipse(55+coordX, 145+coordY, 56, 36)

        fill('#3C2E19')
        //ellipse(45, 135, 46, 20)
        ellipse(65+coordX, 160+coordY, 66, 25)

        

        //leaves
        fill('#1E4925')
        //ellipse(31, 45, 30, 42)
        ellipse(31+coordX, 45+coordY, 40, 39)

        fill('#1E4925')
        //ellipse(53, 42, 53, 55)
        ellipse(53+coordX, 42+coordY, 58, 61)

        fill('#1E4925')
        //ellipse(70, 38, 43, 32)
        ellipse(75+coordX, 48+coordY, 58, 48)

        
        
    }

    draw() {



        //laggy forest builder

        // //amount of trees
        // for(i = 0; i < 30; i++) {

        //     //tree x coord
        //     for(let x = 0; x < i; x++) {

        //         //tree y coord
        //         for(let y = 0; y < i; y++) {

        //             //plant a tree like mr beast
        //             this.tree1(0+x, 300+y)

        //             x+=40
        //             y+=3

        //         }
                
    
        //     }
        // }

        this.tree3(-33,215)
        this.tree3(38, 198)
        this.tree3(78, 205)
        this.tree3(124, 208)
        this.tree3(164, 200)
        this.tree3(204, 195)
        this.tree3(245, 231)
        this.tree3(287, 204)
        this.tree3(346, 180)
        this.tree3(376, 187)
        this.tree3(396, 190)
        this.tree3(428, 207)
        this.tree3(498, 197)
        this.tree3(537, 192)
        this.tree3(577, 202)
        this.tree3(607, 192)
        this.tree3(642, 208)
        this.tree3(692, 203)
        this.tree3(712, 198)
        this.tree3(752, 180)




        this.tree2(-19,220)
        this.tree2(68, 212)
        this.tree2(134, 225)

        this.tree2(245, 231)
        this.tree2(287, 224)
        this.tree2(376, 210)

        this.tree2(488, 227)
        this.tree2(527, 212)
        
        this.tree2(642, 208)
        this.tree2(702, 203)



        this.tree1(3, 262)
        this.tree1(59, 258)
        this.tree1(124, 273)
        this.tree1(204, 258)
        this.tree1(274, 278)
        this.tree1(332, 276)
        this.tree1(420, 250)
        this.tree1(475, 241)
        this.tree1(519, 265)
        this.tree1(589, 275)
        this.tree1(654, 243)
        this.tree1(708, 244)

        





        
    }
}


class Star {

    constructor() {
		this.x = random(0, canvas.width);
		this.y = random(0, canvas.height/2);
		this.size = random(0.25, 3);
		this.t = random(TAU);
	}

    draw() {
        fill(255)
        this.t += 0.1;
		var scale = this.size + sin(this.t) * 2;
		noStroke();
		ellipse(this.x, this.y, scale, scale);
    }
}






let shapes = []

let forest = []

let nightSky = []




var setup = function() {
    noStroke()
    createCanvas(canvas.width, canvas.height)

    for(i = 0; i < 100; i++){

        let star = new Star(canvas)
        nightSky.push(star)

    }

    for(i = 0; i < 20; i++){

        let fly = new Firefly(canvas)
        shapes.push(fly)

    }

    for(i = 0; i < 100; i++){

        let cir = new Rain(canvas)
        shapes.push(cir)

    }

    for(i = 0; i < 1; i++){

        let tree = new Tree(canvas)
        forest.push(tree)

    }

    


    
}



var draw = function () {

    frameRate(30)

    background('#013C58')

    //draw stars
    for(let i = 0; i < nightSky.length; i++) {
        let stars = nightSky[i]
        stars.draw()
    }

    
    //draw bg
    fill('#20341D')
    rect(0, (canvas.height/2)-60, canvas.width, (canvas.height/2)+100)
    

    //draw trees
    for(let i = 0; i < forest.length; i++){
        let tree = forest[i]
        tree.draw()

    }

    //draw individual shapes
    for(let i = 0; i < shapes.length; i++){
        let shape = shapes[i]
        shape.draw()
    }

    

    
}