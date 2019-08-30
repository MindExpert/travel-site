import $ from 'jquery'; /* Import jquery library, and save it to a $ */
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
	constructor() {
		this.lazyImages = $(".lazyload");
		this.siteHeader = $(".site-header");
		this.headerTriggerElement = $(".large-hero__title");
		this.pageSections = $(".page-section");
		this.headerLinks = $(".primary-nav a"); /* look inside the primary-nav and grab any link elements  */
		this.createHeaderWaypoint();
		this.createPageSectionWaypoints();
		this.addSmoothScrolling();
		this.refreshWaypoints();
	}

	refreshWaypoints() {
		this.lazyImages.on('load', function(){
			Waypoint.refreshAll();
		});
	}

	addSmoothScrolling() {
		this.headerLinks.smoothScroll();
	}

	createHeaderWaypoint() {
		var that = this;
		new Waypoint({
			element: this.headerTriggerElement[0], /* We can acces the native DOM element withn a jQuery Obj by addin [0]
			                                        - First item in a jQuery array like object, is always a pointer to the
			                                        native DOM Element */
			handler: function(direction) {
				if(direction == "down"){
					that.siteHeader.addClass("site-header--dark");
				} else {
					that.siteHeader.removeClass("site-header--dark");
				}
			} //what we want to happen, when that element is scrolled to.
		});
	}

	createPageSectionWaypoints(){
		var that = this;
		this.pageSections.each(function(){
			var currentPageSection = this;
			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "down") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 					
				},
				offset: "18%"
			});

			new Waypoint({
				element: currentPageSection,
				handler: function(direction) {
					if (direction == "up") {
						var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
						that.headerLinks.removeClass("is-current-link");
						$(matchingHeaderLink).addClass("is-current-link");
					} 					
				},
				offset: "-40%"
			});

		});
	}

}

export default StickyHeader;