const compItem = {
    name: 'comp-item',
    template: `<p> New Info </p>`
}


Vue.component('new-component', {
  props: ['title'],

  data() {
    return {
      counter: 0,
    }
  },

  components:{
    'comp': compItem,
  },

  methods: {
    incr(step){
        this.counter += step;
    },
  },
  template: `
    <div>
        <h3>{{title}}</h3>
        <comp></comp>
        <p> counter click {{counter}}</p>
        <button @click='incr(3)'> +3 </button>
    </div>
  `
});