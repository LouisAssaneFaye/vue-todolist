const {createApp} = Vue;

createApp({
    data(){
        return{
            todoList : [
                {
                    'text' : 'Task1' ,
                    'done' : true

                },

                {
                    'text' : 'Task2' ,
                    'done' : true

                },

                {
                    'text' : 'Task3' ,
                    'done' : true

                },

                {
                    'text' : 'Task4' ,
                    'done' : true

                },

                {
                    'text' : 'Task5' ,
                    'done' : true

                }
            ]
        }
    },

    methods: {

    }

}).mount('#app')