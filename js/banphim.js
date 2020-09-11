//xây dựng hàm xử lý khi nhấn phím mũi tên lên
function upArrowPressed(){
    let element=document.getElementById("nobita");
    element.style.top=parseInt(element.style.top)-20+'px';
}

//xây dựng hàm xử lý khi nhấn phím mũi tên xuống
function downArrowPressed(){
    let element=document.getElementById("nobita");
    element.style.top=parseInt(element.style.top)+20+'px';
}

//xây dựng hàm xử lý khi nhấn phím mũi tên sang phải
function rightArrowPressed(){
    let element=document.getElementById("nobita");
    element.style.left=parseInt(element.style.left)+20+'px';
}

//xây dựng hàm xử lý khi nhấn phím mũi tên sang trái
function leftArrowPressed(){
    let element=document.getElementById("nobita");
    element.style.left=parseInt(element.style.left)-20+'px';
}

//xây dựng hàm nhận các phím
function moveSelection(evt){
    switch (evt.keyCode){
        case 37:
            leftArrowPressed();
            break;
        case 39:
            rightArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40:
            downArrowPressed();
            break;
    }
}

//xây dựng hàm doReady()
function doReady(){
    window.addEventListener('keydown',moveSelection);
}