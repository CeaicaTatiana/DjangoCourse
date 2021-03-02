//Add a method nameLength that prints out the length of the employees to the console
//write a program that will create an Alert in the browser of each of the objet's values for the key value pairs


var employee = {
  name: "John Smith",
  job: "Programmer",
  age: 31,
  report: function(){
    alert("Name is" + this.name, "Job is" + this.job + "Age is" + this.age)
  },
  nameLength: function(){
    console.log(this.name);
  }
}
