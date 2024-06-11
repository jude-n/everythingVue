// This is a js module. its like a file. A file that can export things to the outside world. this case the thing we are exporting is an object 
export default {
    template: `
        <button 
        :class="{
            'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
            'bg-blue-600 hover:bg-gray-700': type === 'primary',
            'bg-purple-200 hover:bg-gray-400': type === 'secondary',
            'bg-gray-200 hover:bg-gray-400': type === 'muted',
            'is-loading': processing
        }" 
        :disabled="processing">
            <slot/>
        </button>
    `,
    props: {
        type: {
            type: String,
            default: "primary"
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    // data() {
    //     return {
    //         processing: true
    //     };
    // }
}