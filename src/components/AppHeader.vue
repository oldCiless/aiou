<template lang="pug">
    header.app_header
        .app_header__inner
            router-link(to="/").logotype
                img.logotype__src(src='@/assets/logo.svg' width="40px")
                span.logotype__title aiou
            header-search-field
            .actions_side
                .user_bar
                    ul.user_bar__actions
                        li.user_bar_actions__action
                            button.action
                                icon.user_bar_actions__icon(name="notification" width="25" height="25")
                                    notifications-icon
                        li.user_bar_actions__action
                            button.action
                                icon.user_bar_actions__icon(name="inbox" width="25" height="25")
                                    inbox-icon
                        li.user_bar_actions__action
                            button.action
                                icon.user_bar_actions__icon(name="apps" width="25" height="25")
                                    apps-icon
                    .user_bar__avatar
                        .avatar__wrapper
                            img.avatar__src(src="@/assets/logo.svg")
                    .user_bar__profile
                        router-link.user_link(to="/")
                            span.user_nickname ciless
                            span.user_status pro
                        button.user_actions
                            icon.user_arrow_icon(name="arrow" viewBox="30")
                                arrow-icon

</template>

<script>
import HeaderSearchField from '@/components/Header/HeaderSearchField.vue';
import NotificationsIcon from '@/components/icons/Notifications.vue';
import InboxIcon from '@/components/icons/Inbox.vue';
import AppsIcon from '@/components/icons/Apps.vue';
import ArrowIcon from '@/components/icons/Arrow.vue';
import Icon from '@/components/icons/Icon.vue';

export default {
    name: 'header',
    components: {
        HeaderSearchField,
        Icon,
        NotificationsIcon,
        InboxIcon,
        AppsIcon,
        ArrowIcon,
    },
};
</script>

<style lang="scss" scoped>
.app_header {
    width: 100%;
    height: 80px;
    background-color: $backgroud-light--color;
    .app_header__inner {
        max-width: 1240px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding-left: 20px;
        padding-right: 20px;
    }
}

.logotype {
    display: flex;
    align-items: center;
    text-decoration: none;
    .logotype__src {
        width: 30px;
    }
    .logotype__title {
        margin-left: 1rem;
        font-size: 1rem;
        color: $white;
        font-family: 'Varela Round';
        letter-spacing: 2px;
        transition: color 0.1s ease-in-out;
    }
    &:hover {
        .logotype__title {
            color: $accent;
        }
    }
}

.actions_side {
    .user_bar {
        display: flex;
        align-items: center;
    }
}

.user_bar__actions {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    margin-right: 40px;
    .user_bar_actions__action {
        &:not(:last-child) {
            margin-right: 15px;
        }
        .action {
            outline: none;
            background: none;
            border: none;
            color: $icon--color;
            transition: color 0.1s ease-in-out;
            &:hover {
                cursor: pointer;
                color: $icon-lighten--color;
            }
        }
    }
}

.user_bar__avatar {
    width: 30px;
    height: 30px;
    border-radius: 20em;
    margin-right: 10px;
    background: linear-gradient(45deg, #fbca88, #ef69ad);
    padding: 1px;
    user-select: none;
    .avatar__wrapper {
        background-color: $backgroud--color;
        border-radius: 20em;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .avatar__src {
        width: 15px;
    }
}

.user_bar__profile {
    display: flex;
    .user_link {
        display: flex;
        flex-direction: column;
        text-align: right;
        text-decoration: none;
        &:hover {
            .user_nickname {
                color: $accent;
            }
        }
        .user_nickname {
            color: $text--color;
            transition: color 0.1s ease-in-out;
        }
        .user_status {
            color: $text-p--color;
        }
    }

    .user_actions {
        border: none;
        outline: none;
        background: none;
        &:hover {
            .user_arrow_icon {
                cursor: pointer;
                color: $icon-lighten--color;
            }
        }
        .user_arrow_icon {
            margin-left: 10px;
            color: $text-p--color;
        }
    }
}
</style>
