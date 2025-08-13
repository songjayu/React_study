// 함수
let area1 = getArea(10, 20);
console.log(area1);




function getArea(width, height){
    function another(){
        console.log("another");
    }
    another();
    let area = width * height;

    return area;
}