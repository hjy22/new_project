<template>
    <v-flex s12>
        <v-card 
            color="gray-2" 
            max-height="300"
            max-width="344"
            class="mx-auto"
        >
        <v-layout>
            <v-flex xs5>
            <v-img
                src="https://avataaars.io/?avatarStyle=Transparent&hairColor=orange&facialHairType=Blank&clotheType=Hoodie&clotheColor=red&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                height="125px"
                contain
            ></v-img>
            </v-flex>
            <v-flex xs7>
            <v-card-title primary-title>
                <div>
                <div class="headline">Name: {{ name }}</div>
                <div>ID: {{ ID }}</div>
                <div>Identity: {{ character }}</div>
                </div>
            </v-card-title>
            </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        </v-card>
    </v-flex>
</template>

<script>
export default {
    props: ['name', 'ID', 'character']
        // people: 
        //   { name: 'Florida', ID: '0001', character: 'Lecturer'},
        //   { name: 'Jack', ID: '2013123456', character: 'Student'}
}
</script>

<style scoped>
</style>

