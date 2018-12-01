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
@mixin border-gradient($from, $to, $weight: 0) {
    $mix-main: mix($from, $to);
    $mix-sub-from: mix($mix-main, $from);
    $mix-sub-to: mix($mix-main, $to);

    box-shadow: 0 1px 20px $weight rgba($mix-sub-to, 0.25),
        0 -1px 0 $weight rgba($mix-sub-from, 0.25),
        1px 0 0 $weight rgba($mix-sub-to, 0.25),
        -1px 0 0 $weight rgba($mix-sub-from, 0.25),
        1px -1px 0 $weight rgba($mix-main, 0.5),
        -1px 1px 0 $weight rgba($mix-main, 0.5),
        1px 1px 0 $weight rgba($to, 0.75), -1px -1px 0 $weight rgba($from, 0.75);
}

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
