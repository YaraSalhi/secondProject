$('#add').click(function() {
		var toDo = $('#input').val();

		    $('#myUL').append('<li>' + toDo+'<span class="close">x</span></span></li>');
        });

        $('#remove').click(function(){
			$('#myUL li:last-child').remove();
        })

// var x = document.getElementsByClassName("x");
// for (var i = 0; i < x.length; i++) {
//   x[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);