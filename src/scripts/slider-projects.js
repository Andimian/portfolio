import Vue from "vue";

const btns = {
  template: "#slider-btns",
  props: {
    works: Array,
    currentWork: Object,
    termnext: Boolean,
    termprev: Boolean,
  }  
};

const thumbs = {
  template: "#slider-thumbs",
  components: {
    btns
  },
  props: {
    works: Array,
    currentWork: Object,
    termnext: Boolean,
    termprev: Boolean,
  }
};

const number = {
  template: "#slider-number",
  props: {
    currentWork: Object
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tagsArray: Array
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentWork: Object
  },
  computed: {
    tagsArray() {
      return this.currentWork.skills.split(',');
    }
  }
};


const display = {
  template: "#slider-display",
  components: {
    number,
    info,
    thumbs,
  },
  props: {
    works: Array,
    currentWork: Object,
    currentIndex: Number,
    termnext: Boolean,
    termprev: Boolean,
  },
  computed: {
    reversedWorks() {
      const works = [...this.works];
      return works.reverse();
    }
  }
};



new Vue({
	el: '#app-projects',
	template: '#projects-template-vue',
    components: {
      display
    },
    data() {
      return {
        works: [],
        currentIndex: 0,
        termnext: false,
        termprev: true,
        title: 'hello'
      }
    },
    computed: {
      currentWork() {
        return this.works[this.currentIndex];
      },
    },
    watch: {
      currentIndex(value) {
        this.makeInfiniteLoopForCurIndex(value);
      }
    },
    methods: {
      changeNext: function() {
        this.termnext = !this.termnext;
        return this.termnext;
      },
      changePrev: function() {
        this.termprev = !this.termprev;
        return this.termprev;
      },
      makeInfiniteLoopForCurIndex(value) {
        const worksAmount = this.works.length - 1;
        if (value === worksAmount) {
          // console.log('asdf');
          // this.termnext = !this.termnext;
          this.changeNext();
          console.log('dada');
          
          this.changePrev();
        }else if(value === 0){
          this.changeNext();
          this.changePrev();
        }else{
          this.termnext = false;
          this.termprev = false;
        }
      },

      // в created в данном случае мы не можем использовать просто this.works = data; потому что 
      // вебпак потом потеряет путь при создании диста, для этого мутим метод(форммирум точно такой же массив но заменим поле фото на нужное, зареквайрим картинку, укжаем относительный путь вставим имя картинки и после обработки вебпаком в эту переменную будет возвращено имя картинки уже обработанное) Важно чтобы был корректный json (не будет работать если ты там к примеру написал 3 элемента, а картинок с названием у тебя 2)
      makeArrWithRequiredImages(data) {
        return data.map(item => {
          const requiredPic = require(`../images/content/${item.photo}`);
          item.photo = requiredPic;
          return item;
        });
      },
      handleSlide(direction) {
        switch (direction) {
          case "next":
            this.currentIndex++;
            this.term = true;
            break;
          case "prev":
            this.currentIndex--;
            break;
        }
        
      }
    },
    // подключаем данные из json
    created() {
      const data = require("../data/works.json");

      this.works = this.makeArrWithRequiredImages(data);
      // this.works = data;
    }
  });