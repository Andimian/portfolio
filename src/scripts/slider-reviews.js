import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
	el: "#app-reviews-slider",
	template: "#reviews",
	components: {
		Flickity
	},
	// data() {
	// 	return {
	// 		desktop: window.matchMedia("(min-width: 768px)").matches,
	// 		flickityOptions: {
	// 			prevNextButtons: false,
	// 			"autoPlay": 5000,
	// 			pageDots: false,
  //       cellClass: 'reviews__item',
	// 			wrapAround: true,
	// 			groupCells: 1
	// 		}
	// 	};
	// },
	// methods: {
	// 	next() {
	// 		this.$refs.flickity.next();
	// 	},

	// 	previous() {
	// 		this.$refs.flickity.previous();
	// 	},
	// 	setFlickityGroupCells() {
	// 		this.flickityOptions.groupCells = this.desktop == true ? 2 : 1;
	// 	},
	// },
	// created() {
	// 	this.setFlickityGroupCells();
  // }
  data() {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
				wrapAround: false,
				groupCells: true,
				autoPlay: 6000,
      }
    }
  },
  
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    }
  }
});
