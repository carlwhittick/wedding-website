<script>
import Vue from 'vue'
export default Vue.component('Wrapper', {
    name: 'Wrapper',
    render(createElement) {
        return createElement(
            this.tag,   // tag name
            {
                props: this.$props.props
            },
            this.$slots.default, // array of children
        );
    },
    props: {
        tag: {
            type: String,
            required: true,
        },
        props: {
            type: Object
        }
    },
});
</script>
