$(()=>{
	
	console.log("Hello");
	
	
	$.getJSON("data/monthly.json" ,function(data){
		//console.log(data);
		
		addspecialstopage(data.specials);
		addmonthlytopage(data.hours);
		$(`h4,image`).hide();
	})
	.fail (()=>{
		console.log("Sorry, JSON data can't load");
	});
	
	
	function addmonthlytopage(monthlyArray){
			
			let $list = $("<ul>");
			$("#hours").append($list);
		     $("#hours li").remove();	
			monthlyArray.forEach((monthly) =>{
				//console.log(monthly);
			$list.append(`<li>${monthly.day} ${monthly.time}</li>`); 
			
			});
		}
	
	function addspecialstopage(specialsArray){
			let $list = $("<ul>");
			$("#specials").append($list);
			$("#specials p").remove();	
			specialsArray.forEach((monthly) =>{
				
			$list.append(`<li>${monthly.description} </li>`);
			//$("#specials").append(`<div><p>${moonflowers.code} ${moonflowers.desc} ${moonflowers.img}</p></div>`)
			
			});	
		}
	$.getJSON("data/products.json" ,function(data){
		console.log(data);
		
		loadProductsData(data.teas);
		
	})
	.fail (()=>{
		console.log("Sorry, JSON data can't load. Please try again later!");
	});
	function loadProductsData(productsArray){
        $("#teas p").remove();
        
        productsArray.forEach((products) => {
            const $article = $(`<article class="row"></article>`); 
            $("#teas").append($article);
            $article.append(`<h3 class="col-12">${products.name}</h3>`);
  			$article.append(`<div class="col-2"><img class="img-responsive" src="images/${products.image}" alt="Image of ${products.name}"></div>`);
			$article.append(`<div class="col-8"><p class="origin">${products.origin}<br/> ${products.description}</p></div>`);
			$article.append(`<div class="
			col-2"><h4>Price</h4><div>${products.cost[0].size}${products.cost[0].amount}</div>
			<div>${products.cost[1].size}${products.cost[1].amount}<div>`);
			console.log(products.cost[0]);
			
        });
	
		
    }
	toggle();
	
});
function toggle(){
	$("h3").on("click", function(){
		$(this).siblings().toggle();
	})
}