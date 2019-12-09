<template>
      <article :class="['message', 'has-text-left', `is-${type}`]">
        <header v-if="title" class="message-header">
            <p>{{ title }}</p>
        </header>
        <section class="message-body">
            <div class="media">
                <div v-if="hasIcon && icon" class="media-left">
                    <b-icon
                        :icon="icon"
                        :class="`is-${type}`"
                        both
                        :size="iconSize"/>
                </div>
                <div class="media-content" v-html="text">
                </div>
            </div>
        </section>
    </article>
</template>

<script>
export default {
    name: "BMessageWithHTML",
    props: {
        title: String,
        text: String,
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: "is-large"
        },
        hasIcon: {
            type: Boolean,
            default: false
        },
        iconPack: String,
        iconSize: {
            type: String,
            default: "is-medium"
        }

    },
    data() {
        return {}
    },
    computed: {
        icon() {
            switch (this.type) {
                case 'info':
                    return 'information'
                case 'success':
                    return 'check-circle'
                case 'warning':
                    return 'alert'
                case 'danger':
                    return 'alert-circle'
                default:
                    return null
            }
        }
    }
}
</script>