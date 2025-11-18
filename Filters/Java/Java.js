function changeBackground1() {
  document.getElementById("Cuadro1A").classList.toggle("activo");
}
function changeBackground2() {
  document.getElementById("Cuadro1B").classList.toggle("activo");
} 
function changeBackground3() {
  document.getElementById("Cuadro1C").classList.toggle("activo");
}
function changeBackground4() {
  document.getElementById("Cuadro1D").classList.toggle("activo");
} 
function changeBackground5() {
  document.getElementById("Cuadro1E").classList.toggle("activo");
}
function changeBackground6() {
  document.getElementById("Cuadro1F").classList.toggle("activo");
} 

function changePole1() {
  let back1 = document.getElementById("Cuadro3A");
  let back2 = document.getElementById("Cuadro3B");
  let back3 = document.getElementById("Cuadro3C");
  let back4 = document.getElementById("Cuadro3D");
  let back5 = document.getElementById("Cuadro3E");

  if ( back1.style.display === "none") {
    back1.style.display = "flex";
    back2.style.display = "none";
    back3.style.display = "none";
    back4.style.display = "none";
    back5.style.display = "none";
  }
  else {
    back1.style.display = "none"
  }
}

function changePole2() {
  let back1 = document.getElementById("Cuadro3A");
  let back2 = document.getElementById("Cuadro3B");
  let back3 = document.getElementById("Cuadro3C");
  let back4 = document.getElementById("Cuadro3D");
  let back5 = document.getElementById("Cuadro3E");

  if ( back2.style.display === "none") {
    back1.style.display = "none";
    back2.style.display = "flex";
    back3.style.display = "none";
    back4.style.display = "none";
    back5.style.display = "none";
  }
  else {
    back2.style.display = "none"
  }
}

function changePole3() {
  let back1 = document.getElementById("Cuadro3A");
  let back2 = document.getElementById("Cuadro3B");
  let back3 = document.getElementById("Cuadro3C");
  let back4 = document.getElementById("Cuadro3D");
  let back5 = document.getElementById("Cuadro3E");

  if ( back3.style.display === "none") {
    back1.style.display = "none";
    back2.style.display = "none";
    back3.style.display = "flex";
    back4.style.display = "none";
    back5.style.display = "none";
  }
  else {
    back3.style.display = "none"
  }
}

function changePole4() {
  let back1 = document.getElementById("Cuadro3A");
  let back2 = document.getElementById("Cuadro3B");
  let back3 = document.getElementById("Cuadro3C");
  let back4 = document.getElementById("Cuadro3D");
  let back5 = document.getElementById("Cuadro3E");

  if ( back4.style.display === "none") {
    back1.style.display = "none";
    back2.style.display = "none";
    back3.style.display = "none";
    back4.style.display = "flex";
    back5.style.display = "none";
  }
  else {
    back4.style.display = "none"
  }
}

function changePole5() {
  let back1 = document.getElementById("Cuadro3A");
  let back2 = document.getElementById("Cuadro3B");
  let back3 = document.getElementById("Cuadro3C");
  let back4 = document.getElementById("Cuadro3D");
  let back5 = document.getElementById("Cuadro3E");

  if ( back5.style.display === "none") {
    back1.style.display = "none";
    back2.style.display = "none";
    back3.style.display = "none";
    back4.style.display = "none";
    back5.style.display = "flex";
  }
  else {
    back5.style.display = "none"
  }
}




function changeBackg1() {
  document.getElementById("CircleA").classList.toggle("activo");
}

function changeBackg2() {
  document.getElementById("Circle2B").classList.toggle("activo");
} 
function changeBackg2() {
  document.getElementById("CircleB").classList.toggle("activo");
} 
function changeBackg3() {
  document.getElementById("CircleC").classList.toggle("activo");
} 
function changeBackg4() {
  document.getElementById("CircleD").classList.toggle("activo");
} 