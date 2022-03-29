const app = Vue.createApp({
  data() {
    return {
      name: "andre",
      age: 29,
      
      
    };
   
  },
  computed: {
    ageinfive(){
    return this.age + 5;
    }
    },
  
  methods: {
    
  }
  });
app.mount("#assignment");
