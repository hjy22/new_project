<template>
    <v-container>
    <v-flex s12>
        <v-card 
            color="gray-2" 
            max-height="300"
            max-width="450"
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
                    <div v-if="character=='Lecturer'">
                <div class="headline">Name: {{ name }}</div>
                </div>
            <div v-else-if="character=='Student'">
                <div class="headline">Team{{ group }}</div>
                <div class="headline">Marking for Team{{ marking }}</div>
            </div>
                <div class="headline">Identity: {{ character }}</div>
                </div>
            </v-card-title>
            </v-flex>
        </v-layout>
        <v-divider light></v-divider>
        </v-card>
    </v-flex>
    </v-container>
</template>

<script>
export default {
    props: ['name', 'group', 'character','marking']
}
</script>

<style scoped>
</style>

