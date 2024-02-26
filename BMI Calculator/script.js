const calculate = () => {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;
  const bmi = weight / (height * height);
  const result = document.getElementById("results");
  result.innerHTML = "BMI: " + bmi.toFixed(2);
};

const clearForm = () => {
  document.getElementById("height").value = "";
  document.getElementById("weight").value = "";
  document.getElementById("results").innerHTML = "";
};
