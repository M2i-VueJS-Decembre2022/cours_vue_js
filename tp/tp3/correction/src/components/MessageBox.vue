<template>
    <transition name="fade">
        <div :class="type">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'PopupModal',
    props:{
        type: String
    }
}
</script>