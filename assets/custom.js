/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


$(window).on('load scroll', function() {
	//　「.select_element」が存在したら発火
	if($('.floating-banner').length){
	    add_class_in_scrolling($('.floating-banner'));
	}
});
 
// スクロールで要素が表示されている時にclassを付与する
function add_class_in_scrolling(target) {
    //　指定した要素の次の要素
    var nextElement = $('.product-form__add-button');
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight;
    //　指定した要素が画面内に入ったらclass付与して出たら削除
    if(target.offset().top < scrollPos && nextElement.offset().top + winHeight > scrollPos) {
        target.addClass('fade_off');
    }else{
        target.removeClass('fade_off');
    }
}