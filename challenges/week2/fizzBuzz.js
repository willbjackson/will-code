
    // let first = document.getElementById('firstNumber');
    // let second = document.getElementById('secondNumber');

function fizzBuzz(start, end) {  
    // first = start.value;
    // second = end.value;
    var output;
    for(var i=start;i<=end;i++){
        output = '';
      if ( i % 3 == 0 && i % 5 == 0 ) {
          console.log("fizzbuzz");
          document.getElementById('output').innerHTML += "fizzbuzz<br>";
        }
      else if ( i % 3 == 0 ) {
        console.log("fizz");
        document.getElementById('output').innerHTML += "fizzbuzz<br>";
    }
      else if ( i % 5 == 0 ) {
        console.log("buzz");
        document.getElementById('output').innerHTML += "fizzbuzz<br>";
    }
      else {
        console.log(i);   
        document.getElementById('output').innerHTML += "fizzbuzz<br>";
    }
      console.log(output);
    }
  }

  fizzBuzz();

  let submitFizzBuzz = document.querySelector('#submitFizzBuzz');

  if (submitFizzBuzz) {
    submitFizzBuzz.addEventListener('click', function () {
    });
  };