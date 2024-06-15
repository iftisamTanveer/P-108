https://teachablemachine.withgoogle.com/models/7lX8WicKO/

function startClassification()
{
    navigator.mediaDevices.getEserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7lX8WicKO/model.json', modelReady);
}

function modelReady()
{
    clssifier.classify(gotResults);
}

var cow = 0;
Dog = 0;
cat = 0;
tiger = 0;

function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
  
      document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
      document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
      document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
      document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
  
      img = document.getElementById('cat')
      img1 = document.getElementById('dog')
      img2 = document.getElementById('tiger')
      img3 = document.getElementById('cow')
  
      if (results[0].label == "Barking") {
         img.src = dog.webp; 
      } else if (results[0].label == "Meowing") {
         img.src = cat.webp; 
      } else if (results[0].label == "Roaring") {
         img.src = tiger.png; 
      }else{
         img.src = cow.png; 
      }
    }
  }
  


