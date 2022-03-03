//
// fill in code that creates the triangles for a cube with dimensions 1x1x1
// on each side (and the origin in the center of the cube). with an equal
// number of subdivisions along each cube face as given by the parameter
//subdivisions
//
function makeCube (subdivisions)  {


    // fill in your code here.
    // delete the code below first.
    let step = 1 / subdivisions;
    
   
    for (let x = 0; x < subdivisions; x++) {
        for (let y = 0; y < subdivisions; y++) {
            // face 1 top
            addTriangle(-0.5 + step * x, 0.5 - step * y, 0.5,
                -0.5 + step * (x + 1), 0.5 - step * (y + 1), 0.5,
                -0.5 + step * (x + 1), 0.5 - step * y, 0.5);
            addTriangle(-0.5 + step * x, 0.5 - step * y, 0.5,
                -0.5 + step * x, 0.5 - step * (y + 1), 0.5,
                -0.5 + step * (x + 1), 0.5 - step * (y + 1), 0.5);

            // face 2 bottom
            addTriangle(-0.5 + step * (x + 1), 0.5 - step * y, -0.5,
                -0.5 + step * (x + 1), 0.5 - step * (y + 1), -0.5,
                -0.5 + step * x, 0.5 - step * y, -0.5);
            addTriangle(-0.5 + step * (x + 1), 0.5 - step * (y + 1), -0.5,
                -0.5 + step * x, 0.5 - step * (y + 1), -0.5,
                -0.5 + step * x, 0.5 - step * y, -0.5);

            // face 3

            addTriangle(-0.5 + step * x, 0.5, 0.5 - step * y,
                -0.5 + step * (x + 1), 0.5, 0.5 - step * (y + 1),
                -0.5 + step * (x + 1), 0.5, 0.5 - step * y);
            addTriangle(-0.5 + step * x, 0.5, 0.5 - step * y,
                -0.5 + step * x, 0.5, 0.5 - step * (y + 1),
                -0.5 + step * (x + 1), 0.5, 0.5 - step * (y + 1));

            // face 4
            addTriangle(-0.5 + step * x, -0.5, 0.5 - step * y,
                -0.5 + step * (x + 1), -0.5, 0.5 - step * (y + 1),
                -0.5 + step * (x + 1), -0.5, 0.5 - step * y);
            addTriangle(-0.5 + step * x, -0.5, 0.5 - step * y,
                -0.5 + step * x, -0.5, 0.5 - step * (y + 1),
                -0.5 + step * (x + 1), -0.5, 0.5 - step * (y + 1));

            // face 5
            addTriangle(0.5, 0.5 - step * y, -0.5 + step * x,
                0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1),
                0.5, 0.5 - step * y, -0.5 + step * (x + 1));
            addTriangle(0.5, 0.5 - step * y, -0.5 + step * x,
                0.5, 0.5 - step * (y + 1), -0.5 + step * x,
                0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1));

            // face 6
            addTriangle(-0.5, 0.5 - step * y, -0.5 + step * x,
                -0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1),
                -0.5, 0.5 - step * y, -0.5 + step * (x + 1));
            addTriangle(-0.5, 0.5 - step * y, -0.5 + step * x,
                -0.5, 0.5 - step * (y + 1), -0.5 + step * x,
                -0.5, 0.5 - step * (y + 1), -0.5 + step * (x + 1));

        }
    }
}


//
// fill in code that creates the triangles for a cylinder with diameter 1
// and height of 1 (centered at the origin) with the number of subdivisions
// around the base and top of the cylinder (given by radialdivision) and
// the number of subdivisions along the surface of the cylinder given by
//heightdivision.
//
function makeCylinder(radialdivision, heightdivision) {
    // fill in your code here.

    let step = 2 * Math.PI / radialdivision;
    for (let i = step; i <= 2 * Math.PI; i += step) {
        let pCos1 = 0.5 * Math.cos(i);
        let pCos2 = 0.5 * Math.cos(i + step);
        let pSin1 = 0.5 * Math.sin(i);
        let pSin2 = 0.5 * Math.sin(i + step);
        addTriangle(0, 0.5, 0, pCos1, 0.5, pSin1, pCos2, 0.5, pSin2);
        addTriangle(pCos2, -0.5, pSin2, pCos1, -0.5, pSin1, 0, -0.5, 0);

        let hStep = 1 / heightdivision;
        for (let h = 0; h < 1; h += hStep) {
            addTriangle(pCos1, 0.5 - h, pSin1, pCos2, 0.5 - h - hStep, pSin2, pCos2, 0.5 - h, pSin2);
            addTriangle(pCos1, 0.5 - h, pSin1, pCos1, 0.5 - h - hStep, pSin1, pCos2, 0.5 - h - hStep, pSin2);
        }
    }
}


//
// fill in code that creates the triangles for a cone with diameter 1
// and height of 1 (centered at the origin) with the number of
// subdivisions around the base of the cone (given by radialdivision)
// and the number of subdivisions along the surface of the cone
//given by heightdivision.
//
function makeCone (radialdivision, heightdivision) {
    // fill in your code here.

    let step = 2 * Math.PI / radialdivision;
    let hStep = 1 / heightdivision;

    // base of cone
    for (let i = step; i <= 2 * Math.PI; i += step) {
        let pCos1 = 0.5 * Math.cos(i);
        let pCos2 = 0.5 * Math.cos(i + step);
        let pSin1 = 0.5 * Math.sin(i);
        let pSin2 = 0.5 * Math.sin(i + step);
        addTriangle(pCos2, -0.5, pSin2, pCos1, -0.5, pSin1, 0, -0.5, 0);
    }
    
    for (let h = 0; h < 1; h += hStep) {

        let radius = 0.5 - h / 2;
        let nextRadius = radius - hStep;
        for (let i = step; i <= 2 * Math.PI; i += step) {
            let pCos1 = radius * Math.cos(i);
            let pCos2 = radius * Math.cos(i + step);
            let pSin1 = radius * Math.sin(i);
            let pSin2 = radius * Math.sin(i + step);
            // points for above layer
            let pCos3 = nextRadius * Math.cos(i);
            let pCos4 = nextRadius * Math.cos(i + step);
            let pSin3 = nextRadius * Math.sin(i);
            let pSin4 = nextRadius * Math.sin(i + step);

            addTriangle(pCos3, -0.5 + h + hStep, pSin3, pCos2, -0.5 + h, pSin2, pCos4, -0.5 + h + hStep, pSin4);
            addTriangle(pCos3, -0.5 + h + hStep, pSin3, pCos1, -0.5 + h, pSin1, pCos2, -0.5 + h, pSin2);
        }
    }
}
    
//
// fill in code that creates the triangles for a sphere with diameter 1
// (centered at the origin) with number of slides (longitude) given by
// slices and the number of stacks (lattitude) given by stacks.
// For this function, you will implement the tessellation method based
// on spherical coordinates as described in the video (as opposed to the
//recursive subdivision method).
//
function makeSphere (slices, stacks) {
    // fill in your code here.

}


////////////////////////////////////////////////////////////////////
//
//  Do not edit below this line
//
///////////////////////////////////////////////////////////////////

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function addTriangle (x0,y0,z0,x1,y1,z1,x2,y2,z2) {

    
    var nverts = points.length / 4;
    
    // push first vertex
    points.push(x0);  bary.push (1.0);
    points.push(y0);  bary.push (0.0);
    points.push(z0);  bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
    
    // push second vertex
    points.push(x1); bary.push (0.0);
    points.push(y1); bary.push (1.0);
    points.push(z1); bary.push (0.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++
    
    // push third vertex
    points.push(x2); bary.push (0.0);
    points.push(y2); bary.push (0.0);
    points.push(z2); bary.push (1.0);
    points.push(1.0);
    indices.push(nverts);
    nverts++;
}

