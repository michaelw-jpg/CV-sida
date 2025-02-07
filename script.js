  let result = document.querySelector("body")

  function changeColor() {
    if (document.body.style.filter === "invert(1)") {
      document.body.style.filter = "invert(0)";
    } 
    else {
      document.body.style.filter = "invert(1)";

    }
  }

  
  function myFunction() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.addEventListener("keydown", easteregg);
  let egginput= "";
  function easteregg(e){
    egginput += e.key;
    console.log(egginput);
    if(egginput.includes("1337")){
      alert("Konami code activated");
      egginput = "";
    }
  }