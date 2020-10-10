var jsonData = JSON.parse(movies);
console.log(jsonData);
console.table(jsonData);

/* for (let i = 0; i < jsonData.length; i++) {
    document.getElementById("card-title").innerHTML += `
    <p>${jsonData[i].movieName}</p>
    `;
} */

//for (var i = 0; i < jsonData.length; i++) {

document.getElementById("text").innerHTML += `
		<div>
            <h2>${jsonData[0].movieName}</h2>
            <p>${jsonData[0].description}</p>
	</div>
    `;
document.getElementById("text2").innerHTML += `
		<div>
            <h2>${jsonData[1].movieName}</h2>
            <p>${jsonData[1].description}</p>
	</div>
    `;
document.getElementById("text3").innerHTML += `
		<div>
            <h2>${jsonData[2].movieName}</h2>
            <p>${jsonData[2].description}</p>
	</div>
    `;
document.getElementById("text4").innerHTML += `
		<div>
            <h2>${jsonData[3].movieName}</h2>
            <p>${jsonData[3].description}</p>
	</div>
    `;
document.getElementById("text5").innerHTML += `
		<div>
            <h2>${jsonData[4].movieName}</h2>
            <p>${jsonData[4].description}</p>
	</div>
    `;
document.getElementById("text6").innerHTML += `
		<div>
            <h2>${jsonData[4].movieName}</h2>
            <p>${jsonData[4].description}</p>
	</div>
    `;


//like section
var i = 0;

function buttonClick() {
    document.getElementById('inc').value = ++i;
}

//First card
var i = 0;
document.getElementById("result1").innerHTML += `
		<div>
		
			<p><button class="plus1">Like <i class="fas fa-thumbs-up"></i></button> <span class="like">${jsonData[0].likes}</span></p>
			
		</div>
    `;

$(document).ready(function() {
    $(".plus1").on("click", function() {
        jsonData[0].likes += 1;
        $(this).parent().find(".like").html(jsonData[0].likes);
        console.table(jsonData);
    })


})



//Second card
var i = 0;
document.getElementById("result2").innerHTML += `
		<div>
		<p><button class="plus2">Like <i class="fas fa-thumbs-up"></i></button> <span class="like">${jsonData[1].likes}</span></p>
			
		</div>
    `;

$(document).ready(function() {
    $(".plus2").on("click", function() {
        jsonData[1].likes += 1;

        $(this).parent().find(".like").html(jsonData[1].likes);
        console.table(jsonData);
    })


})

//Third card index2
var i = 0;
document.getElementById("result3").innerHTML += `
		<div>
		<p><button class="plus3">Like <i class="fas fa-thumbs-up"></i></button> <span class="like">${jsonData[2].likes}</span></p>
			
		</div>
    `;

$(document).ready(function() {
    $(".plus3").on("click", function() {
        jsonData[2].likes += 1;

        $(this).parent().find(".like").html(jsonData[2].likes);
        console.table(jsonData);
    })


})

//Forth card
var i = 0;
document.getElementById("result4").innerHTML += `
		<div>
		<p><button class="plus4">Like <i class="fas fa-thumbs-up"></i></button> <span class="like">${jsonData[3].likes}</span></p>
			
		</div>
    `;

$(document).ready(function() {
    $(".plus4").on("click", function() {
        jsonData[3].likes += 1;

        $(this).parent().find(".like").html(jsonData[3].likes);
        console.table(jsonData);
    })


})

//Fifth card
var i = 0;
document.getElementById("result5").innerHTML += `
		<div>
		<p><button class="plus5">Like <i class="fas fa-thumbs-up"></i></button> <span class="like">${jsonData[4].likes}</span></p>
			
		</div>
    `;

$(document).ready(function() {
    $(".plus5").on("click", function() {
        jsonData[4].likes += 1;

        $(this).parent().find(".like").html(jsonData[4].likes);
        console.table(jsonData);
    })


})

//Sixth card
var i = 0;
document.getElementById("result6").innerHTML += `
		<div>
		<p><button class="plus6">Like <i class="fas fa-thumbs-up"></i></button> <span class="like">${jsonData[5].likes}</span></p>
			
		</div>
    `;

$(document).ready(function() {
    $(".plus6").on("click", function() {
        jsonData[5].likes += 1;

        $(this).parent().find(".like").html(jsonData[5].likes);
        console.table(jsonData);
    })


})