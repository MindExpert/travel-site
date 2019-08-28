import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
	constructor(els, offset) { //the order of the initalization is IMPORTANT
		this.itemsToReveal = els;
		this.offsetPercentage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially() { //we want this method to run as soon as page loads, so we add it to constructor.
		this.itemsToReveal.addClass("reveal-item");
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function() {
			// will run once for each element;
			var currentItem = this;
			new Waypoint({
				element: currentItem, //is the DOM el, that we want to watch for as we scroll down the page
				handler: function() {
					$(currentItem).addClass("reveal-item--is-visible");
				}, //what we want to happen, when that element is scrolled to.
				offset: that.offsetPercentage
			});
		});
	}

}

export default RevealOnScroll;