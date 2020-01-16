$(document).ready(function() {
  $('form#dimensions').submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    
   if ((side1+side2<=side3) || (side2+side3<=side1) || (side1+side3<= side2)) {
     $("#NA").show()
      } else if ((side1 === side2) && (side2=== side3)) {
        $("#Equilateral").show();
      } else if ((side1 === side2) || (side1 === side3) || (side2 === side3))  {
        $("#Isosceles").show();
      } else 
        $("#Scalene").show();
    
    
        
    event.preventDefault();
  });
});


// if ((side1 === side2) && (side2=== side3)) {
//   $("#Equilateral").show();
// } else if ((side1 === side2) || (side1 === side3) || (side2 === side3))  {
//   $("#Isosceles").show();
// } else if ((side1 !== side2) && (side2 !== side3)) {
//   $("#Scalene").show();
// } else 
//   $("#NA").show();
// ((side1 !== side2) && (side2 !== side3)) 


// Equilateral: All sides are equal.
// Isosceles: Exactly 2 sides are equal.
// Scalene: No sides are equal.
// NOT a triangle: The sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.


