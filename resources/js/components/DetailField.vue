<template>
    <!-- <panel-item :field="field" /> -->
    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
            <slot>
                <h4 class="font-normal text-80">
                    {{ label }}
                </h4>
            </slot>
        </div>
        <div class="w-3/4 py-4">
            <Tool :user="field.value"></Tool>
        </div>
    </div>
</template>

<script>
import Tool from "./Tool.vue";

export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
    components: {
        Tool
    },
    computed: {
        label() {
            return this.fieldName || this.field.name
        }
    }
}
</script>
