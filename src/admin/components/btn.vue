<template lang="pug">
    button(class="about-me__title-ad-group")
  
        
</template>

<script>
export default {
 
}
</script>

<style lang="postcss" scoped>
    .about-me__title-ad-group {
        position: relative;
        background-color: transparent;

        &:after {
            width: 0.9rem;
            height: 0.9rem;
            left: -47%;
            top: 50%;
            border-radius: 100px;
            transform: translate(-100%, -50%) rotate(45deg);
            position: absolute;
            content: '';
            background: svg-load("remove.svg", fill=white);
        }

        &:before {
        width: 1.5rem;
        height: 1.5rem;
        content: '';
        left: -5.7%;
        top: 50%;
        border-radius: 100px;
        transform: translate(-100%, -50%);
        position: absolute;
        background-color: rgb(11.7%, 11.7%, 86.2%);
        }
    }
</style>
