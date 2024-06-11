export default {
    template: 
       `
       <!--Submit.prevent is doing what e.preventDefault is doing-->
       <form @submit.prevent="add">
           <div class="border border-gray-600 text-black">
               <input v-model="newAssignment" placeholder="New Assignment.." class="p-2">
               <button type="submit" class="bg-white p-2 border-l">Add</button>
           </div>
       </form>
       `,

    data() {
        return {
            newAssignment: ""
        }
    },

    methods: {
        add() {
            // As children if you want to pass data back to the parent you have to emit the data.
            this.$emit('add', this.newAssignment);

        //     this.assignments.push({
        //         name: this.newAssignment,
        //         completed: false,
        //         id: this.assignments.length + 1
        //     });
        //     this.newAssignment = '';
        }
    }
}