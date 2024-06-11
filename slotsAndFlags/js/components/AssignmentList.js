import Assignment from "./Assignment.js"
import AssignmentTag from "./AssingmentTag.js"
import Panel from "./Panel.js"

export default {
    components: { Assignment, AssignmentTag, Panel },

    template: `
   <!-- <section v-show="show && assignments.length" class="w-60">-->
   <!--<section v-show="assignments.length" class="w-60 bg-gray-700 p-4 border border-gray-600 rounded-lg">-->

   <panel v-show="assignments.length" class="w-60">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2">
            {{ title }}
            <span>({{this.assignments.length}})</span>
            </h2>

            <!--<button v-show="canToggle" @click="show = false">&times;</button>-->
            <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
        </div>


        <assignment-tag 
        v-model="currentTag"
        :initial-tags="assignments.map(a => a.tag)"
        @change="currentTag = $event"
        ></assignment-tag>


        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignment
                v-for="assignment in filteredAssignments"
                :key="assignment.id"
                :assignment="assignment"
            >
            </assignment>
        </ul>
        <slot> </slot>

        <template v-slot:footer> <!-- or can do #footer-->
            My footer goes here
        </template>
    </panel>`,

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },


    data() {
        return {
            currentTag: 'all',
            // show: true
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all'){
                return this.assignments;
            }
            return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    } 
}