function IMC() {
	var ALTURA = parseFloat(document.getElementById('ALTURA').value);
	var PESO = parseFloat(document.getElementById('PESO').value);

            var result1 = ALTURA / 100 ;
             var result =  PESO / (result1*result1);
            document.getElementById('result').textContent = result;

         
        }