$(document).on('click', '#carritoResumen', function(){
    $('#carrito').toggle();
    $('#productosCarrito:visible').load('carrito.html', calcularTotal);
})
$(document).on('click', '.borrar', function(){
	$(this).parent().remove();
	calcularTotal();
})
$(document).on('click', 'article a', function(){
	var article = $(this).parents('article');
	var precio = parseFloat(article.find('.precio').text());
	var nombre = article.find('.nombre').text();
	var cantidad = parseInt(article.find('input').val());
	var id = article.data('id');
	var subtotal = cantidad * precio;

	$('#carrito [data-id="'+id+'"]').remove();
	var producto = $(`<div class="productoCarrito" data-id="${id}">
			<div class="nombre">${nombre}</div>
			<div class="cantidad">${cantidad}</div>
			<div class="subtotal">${subtotal}</div>
			<a href="#" class="borrar">x</a>
			</div>`);
	producto.prependTo('#productosCarrito');
	calcularTotal();
});

var calcularTotal = function(){

	var total = 0;
	$('.subtotal').each(function(){
		total += parseFloat( $(this).text() );
	});
	$('.total').text(total);
	$('#totalProductos').text($('.subtotal').length);
}
