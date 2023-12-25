console.log("test");

//Bài 1
function ex1() {
  var sum = 0;
  var i = 0;
  while (sum < 10000) {
    sum += i;
    i++;
  }
  document.getElementById("ex1_result").innerHTML = "Tổng: " + sum;
}
ex1();

//Bài 2

document.getElementById("ex2_bt_result").onclick = function ex2() {
  var tich = 1;
  var tong = 0;
  var number = document.getElementById("number").value * 1;
  var luyThua = document.getElementById("luyThua").value * 1;
  for (var i = 1; i <= luyThua; i++) {
    tich = tich * number;
    tong = tong + tich;
  }
  document.getElementById("ex2_result").innerHTML = "kết quả: " + tong;
};
// ex2();

//Bài 3
document.getElementById("ex3_button").onclick = function () {
  var number = document.getElementById("giaiThua").value * 1;
  var giaiThua = 1;
  for (var i = 1; i <= number; i++) {
    giaiThua = giaiThua * i;
  }
  document.getElementById("ex3_result").innerHTML = "Tổng: " + giaiThua;
};

//Bài 4
document.getElementById("ex4_button").onclick = function () {
  var divs = document.getElementsByClassName("color");
  for (var i = 0; i < divs.length; i++) {
    if ((i + 1) % 2 == 0) {
      divs[i].style.background = "red";
    } else {
      divs[i].style.background = "blue";
    }
  }
};

// Bài 5
function kiem_tra_snt(n) {
  var flag = true;
  if (n < 2) {
    flag = false;
  } else {
    for (var i = 2; i < n - 1; i++) {
      if (n % i == 0) {
        flag = false;
        break;
      }
    }
  }
  return flag;
}
document.getElementById("ex5_button").onclick = function () {
  var number = document.getElementById("number_ex5").value * 1;
  var ketQua = "";
  for (var i = 1; i <= number; i++) {
    if (kiem_tra_snt(i)) {
      ketQua = ketQua + i + " ";
    }
  }
  document.getElementById("ex5_result").innerHTML = "Kết quả: " + ketQua;
};
