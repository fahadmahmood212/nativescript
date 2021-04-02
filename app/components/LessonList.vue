<template>
    <ListView for='lesson in lessons' @itemTap='onItemTap'> 
    <v-template>
        <StackLayout>
        <Label :text='lesson.name'/>
        <Label :text="`price: ${lesson.price}`"/>
        <Label :text="`places: ${lesson.places}`"/>
        <Label :text="`location: ${lesson.location}`"/>
        </StackLayout>
    </v-template>
    </ListView>
</template>

<script>
export default {
    data() {
       return {
            lessons: [
                { name: "Music", price: 5, places: 10, location: "London" },
                { name: "Maths", price: 5, places: 10 ,location: "London" },
                { name: "Further Maths", price: 5, places: 10, location: "London"  },
                { name: "Pure Maths", price: 5, places: 10, location: "London"  },
                { name: "History", price: 5, places: 10, location: "London"  }
            ],
       };
    },
    methods: {
        onItemTap(event) {
        alert("Added to cart: " + event.item.name);
        this.$emit('addLesson' ,event.item);
        }
    }
}
</script>