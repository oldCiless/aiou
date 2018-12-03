<template lang="pug">
    .app_sidebar
        ul.sidebar_items
            li.sidebar_items__item
                router-link.item_link(to="#")
                    icon.item_icon(name="notifications" width="25" height="25")
                        notifications-icon
                    span.item_title Dashboard
            li.sidebar_items__item
                router-link.item_link(to="#")
                    icon.item_icon(name="notifications" width="25" height="25")
                        notifications-icon
                    span.item_title All tests
</template>

<script>
import Icon from '@/components/icons/Icon.vue';
import NotificationsIcon from '@/components/icons/Notifications.vue';

export default {
    name: 'sidebar',
    components: { Icon, NotificationsIcon },
};
</script>

<style lang="scss" scoped>
.sidebar_items {
    list-style: none;
    margin: 0;
    padding: 0;
    .sidebar_items__item {
        .item_link {
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 0.8rem 1rem;
            border-radius: 20em;
            .item_icon {
                color: $white;
            }
            .item_title {
                margin-left: 15px;
                color: $white;
                letter-spacing: 1px;
                font-size: 14px;
            }
            &.router-link-active {
            }
        }
    }
}
</style>
