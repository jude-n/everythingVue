export default {
    template: `
    <!--always add key so vue knows the specific element or data you are referring to especially for a for-->
    <!-- Without the colon assignment id would be a string but we want the value associated with the assignment id so we add the colon -->
    <li>
        <label>
            {{ assignment.name }}

            <input type="checkbox" v-model="assignment.complete">
        </label>
    </li>
    `,

    props: {
        assignment: Object
    }
}