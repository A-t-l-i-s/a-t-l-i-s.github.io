



const ProjectsList=document.getElementById("ProjectsList");




GetRepositories("A-t-l-i-s").forEach(function (Item){
	let Element=document.createElement("div");
	Element.id="Projects";
	Element.setAttribute("onclick",`location.href="${Item["html_url"]}";`);
	ProjectsList.appendChild(Element);



	console.log(Item["name"]);



	Element.innerHTML+=Item["name"];


	// console.log(JSON.stringify(Item));



});






