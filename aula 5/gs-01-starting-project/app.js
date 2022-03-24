

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            if (!this.enteredValue) {
                alert('incluir goal');

            }
            this.goals.push(this.enteredValue);


        }
    }
}).mount('#app');





// const button = document.querySelector('button');
// const input = document.querySelector('input');
// const list = document.querySelector('ul');

// function addgol(){
//     const valoradicionado = input.value;
//     const listitem = document.createElement('li');
//     listitem.textContent = valoradicionado;
//     list.appendChild(listitem);
//     input.value = '';
// }

// button.addEventListener('click', addgol);

