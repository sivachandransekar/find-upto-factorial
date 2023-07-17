var number=prompt("Enter the factorial number");
document.write("The factorial  number of"+number+"<br>");
var fact=1;
for(var i=1;i<=number;i++){
	fact=fact*i;
	
	document.write(fact+"<br>");
	
	
}