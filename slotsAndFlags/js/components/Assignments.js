import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },
    template: `
        <section class="flex gap-8">
            <assignment-list 
            :assignments="filters.inProgress" 
            title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <div v-show="showCompleted">
                <assignment-list 
                    :assignments="filters.completed" 
                    title="Completed" 
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                ></assignment-list>
            </div>  

        </section>
    `,
    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },

    // methods that can be cached
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete)
            }
        }
    },
    created() {
        // Promise is just a promise that you will get a response but it doesnt have anything for you right now.
        fetch('http://localhost:3001/assignments')
        .then(response => response.json())
        .then(assignments => {
            this.assignments = assignments;
        });
    },
    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }
}

// Life cycle hooks: things that can be done at different stages of the application life
// example when its first created we have the "created" method, beforeMount etc