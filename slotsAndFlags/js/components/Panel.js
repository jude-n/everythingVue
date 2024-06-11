export default {
    // when page rendered do line 6. if the theme is light render 7 and if the theme is dark render 8
    template: 
    `
    <div :class="{
        'p-4 rounded-lg': true,
        'bg-white border border-gray-300 text-black' : theme === 'light',
        'bg-gray-700 border border-gray-600 text-white' : theme === 'dark',
    }">
        <!--<h2 class="font-bold">{{ heading }}</h2> -->       
        <h2 v-if="$slots.heading" class="font-bold mb-2">
            <slot name="heading"/>
        </h2>

        <slot/>

        <h2 v-if="$slots.footer" class="border-t mt-4 pt-4 border-gray-600 text-sm">
        <slot name="footer"/>
    </h2>
    </div>
    `,

    props: {
        heading: String,
        theme: {
            type: String,
            default: 'dark'
        }
    }
}