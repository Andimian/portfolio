import Vue from 'vue'


const skill = {
	template: '#skill',
	props: {
		title: String,
		percent: Number
	},
	methods: {
		setColorCirclePercent() {
			const 
				ref = this.$refs['color-circle'],
				dashArray = parseInt(getComputedStyle(ref).strokeDasharray),
				dashOffset = ( dashArray / 100 ) * (100 - this.percent);

			ref.style.strokeDashoffset = dashOffset;
		}
	},
	mounted() {
    this.setColorCirclePercent();
    
	}
}

const skillRow = {
	template: '#skills-row',
	components: {
		skill
	},
	props: {
		skills: Object
	}
}

new Vue({
	el: '#app-skills',
	template: '#skills-template-vue',
	components: {
		skillRow
	},
	data() {
		return {
			data: []
		}
	},
	created() {
		const data = require('../data/skills.json');

		this.data = data
	}
})