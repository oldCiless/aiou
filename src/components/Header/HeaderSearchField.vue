<template lang="pug">
    .header_search_field
        input.search_field_input(type="text" placeholder="Search")
</template>

<script>
export default {
    name: 'headerSearchField',
};
</script>

<style lang="scss" scoped>
.header_search_field {
    width: 80%;
    display: flex;
    justify-content: center;
}

.search_field_input {
    height: 2rem;
    border: none;
    outline: none;
    background: none;
    background-color: $backgroud--color;
    border-radius: 2px;
    padding: 0.4rem 1rem;
    color: $text--color;
    width: 80%;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
    &::placeholder {
        color: $text-p--color;
    }
    &:focus {
        @include border-gradient($accent, #546de5);
    }
}
</style>
