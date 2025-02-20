Vue.component('todo-list', {
    template: `
      <div class="todo-container">
        <h2>To Do List</h2>
        <input v-model="newTask" @keyup.enter="addTask" placeholder="To Do">
        <button @click="addTask">Add</button>
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            {{ task }}
            <button @click="removeTask(index)">Delete</button>
          </li>
        </ul>
      </div>
    `,
    data() {
      return {
        newTask: '',
        tasks: []
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          this.tasks.push(this.newTask.trim());
          this.newTask = '';
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      }
    }
  });