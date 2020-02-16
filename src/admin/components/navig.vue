<template lang="pug">
	nav.navig
		.container.container--navig
			ul.navig__list
				router-link(
					v-for="item in navItems"
					tag="li"
					:to="item.href"
					:key="item.href"
					class="navig__item"
					exact-active-class="active"
				) {{item.title}}
</template>

<script>
export default {
	components: {
	},
	data() {
		return {
			navItems: [
				{
					title: "Обо мне",
					href: "/"
				},
				{
					title: "Отзывы",
					href: "/reviews"
				},
				{
					title: "Работы",
					href: "/works"
				}
			]
		};
	}
};
</script>

<style lang="postcss" scoped>
    .navig {
        z-index: 11230;
        height: 8vh;
        color:  #9aa0b5;
        background-color: #fff;
    }

    .container--navig {
        display: flex;
        align-items: center;
        padding-left: 5%;
    }

    .navig__list {
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .navig__item {
        z-index: 11230;
        margin-right: 5%;
        height: 100%;
        padding-top: 2%;
        position: relative;
        cursor: pointer;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color:orange;
            transition: .2s;
        }

        &:before {
            position: absolute;
            content: "";
            height: 2px;
            width: 0;
            background-color: orange;
            transition: width .2s ease-in-out, left .2s ease-in-out;
            left: 50%;
            bottom: 0;
        }

        &:after {
            position: absolute;
            content: "";
            height: 2px;
            width: 0;
            background-color: orange;
            transition: width .2s ease-in-out;
            left: 50%;
            bottom: 0;
        }

        &:hover:before{
            width: 60%;
            left: -10%;
        }

        &:hover::after{
            width: 60%;
        }

        &--active {
            color: orange;
            &:before {
                position: absolute;
                content: "";
                height: 2px;
                width: 0;
                background-color: orange;
                transition: width .2s ease-in-out, left .2s ease-in-out;
                left: 50%;
                bottom: 0;
                width: 60%;
                left: -10%;
            }
            &:after {
                position: absolute;
                content: "";
                height: 2px;
                width: 0;
                background-color: orange;
                transition: width .2s ease-in-out;
                left: 50%;
                bottom: 0;
                width: 60%;
            }
        }
    }

</style>


