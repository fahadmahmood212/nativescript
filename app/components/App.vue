<template>
    <Page style='background-color: white;' >
        <ActionBar title="After School Club"/>
        <Label text='Welcome to After School Club!!' class="h3"/>
        <TabView androidTabsPosition='bottom'>
            <TabViewItem title='LessonList' class="h2">
                <LessonList @addLesson="addToCart" /> <!-- this is the lesson list component-->
            </TabViewItem>
            <TabViewItem title='Check out' class="h2">
                <Checkout :cart='cart' @removeLesson='removeFromCart'/> <!-- this is the checkout component-->
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import LessonList from './LessonList.vue' // import the component
import Checkout from './Checkout.vue' //import the checkout component
export default {
    data () {
        return {
            cart:[],
        };
    },
    components: {
        LessonList,
        Checkout
    }, // register the component
    methods: {
        addToCart(lesson) {
            this.cart.push(lesson);
            alert("Added to cart: " + lesson.name);
        },
        removeFromCart(lesson) {
            for (let i=0; i<this.cart.length; i++) {
            if (this.cart[i] == lesson) this.cart.splice(i,1)
            }
        },
    },
};
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
