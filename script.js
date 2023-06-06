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
                    'done' : false

                },

                {
                    'text' : 'Task3' ,
                    'done' : true

                },

                {
                    'text' : 'Task4' ,
                    'done' : false

                },

                {
                    'text' : 'Task5' ,
                    'done' : true

                },

                {
                    'text' : 'Task6' ,
                    'done' : false

                },

                {
                    'text' : 'Task7' ,
                    'done' : true

                },

                {
                    'text' : 'Task8' ,
                    'done' : false

                },

                {
                    'text' : 'Task9' ,
                    'done' : true

                },

                {
                    'text' : 'Task10' ,
                    'done' : false

                }
            ],
            
            isTaskDone : '',
            newElement: {
                'text' : '' ,
                'done' : true

            }
        }
    },

    methods: {
        isTaskDoneFunction(index){
            if(this.todoList[index].done === true) {
                this.isTaskDone = true,
                console.log(this.isTaskDone)
            } else {
                this.isTaskDone = false,
                console.log(this.isTaskDone)
            }
        },

        removeTask(todoIndex){
            if(todoIndex >= this.todoList.lenght || todoIndex < 0){
                console.warn('Error')

            } else {
                this.todoList.splice(todoIndex, 1)
            }

        },

        addNewElement(newItem){
            if(this.newElement === ''){

            }
            this.todoList.push(newItem);
            this.newElement = {

            } 
        }

    }

}).mount('#app')