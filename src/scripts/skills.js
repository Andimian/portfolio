import Vue from 'vue'


const skill = {
	template: '#skill',
	props: {
		title: String,
		percent: Number
	},
	methods: {
		setColorCirclePercent() {
			
			const	ref = this.$refs['color-circle']; //обратились к элементу дом с помощью встроенного инструмента вью - $refs

			const	dashArray = parseInt(getComputedStyle(ref).strokeDasharray); //будем брать значения со стилей
				// соответственно будет приходить строка для этого пользуем парсинт, гетКомпьютед чтобы извлечь стили 
				// прописанные до нас и примененные браузером? Сабанцев писал getPropertyValue("stroke-dasharray") я сразу strokeDasharray 
			const	dashOffset = ( dashArray / 100 ) * (100 - this.percent);

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