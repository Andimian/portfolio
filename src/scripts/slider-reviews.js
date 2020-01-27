import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
	el: "#app-reviews-slider",
	template: "#reviews",
	components: {
		Flickity
	},

  data() {
    return {
			desktop: window.matchMedia("(min-width: 480px)").matches,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: false,
        pageDots: false,
				wrapAround: false,
				groupCells: true,
				freeScroll: false,
				contain: true,
				groupCells: auto
				// autoPlay: 6000,
      }
    };
  },
  
  methods: {
    next() {
			this.$refs.flickity.next();
			this.checkArrows();
    },
    previous() {
			this.$refs.flickity.previous();
			this.checkArrows();
		},

	// 	setFlickityGroupCells() {
	// 		this.flickityOptions.groupCells = this.desktop == true ? 2 : 1;
	// },
	// created() {
	// 	this.setFlickityGroupCells();
	// },
		checkArrows() {
			var prev = this.$el.querySelector('.reviews__arrows-item--left');
			var next = this.$el.querySelector('.reviews__arrows-item--right');
			
			
			if (this.$refs.flickity.selectedIndex() == 0){
				prev.disabled = true;
				next.disabled = false;

			} else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length -1){
				// console.log(this.$refs.flickity.slides().length);

				this.$el.querySelector('.reviews__arrows-item--right').disabled = true;
				this.$el.querySelector('.reviews__arrows-item--left').disabled = false;
			} else {
				this.$el.querySelector('.reviews__arrows-item--right').disabled = false;
				this.$el.querySelector('.reviews__arrows-item--left').disabled = false;
			}
		}
	}
});
