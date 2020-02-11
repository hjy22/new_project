<template>
    <div id="app">
    <v-app id="inspire">
        <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" md="4">
            <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
            >
            <template v-slot:activator="{ on }">
                <v-text-field
                v-model="date"
                label="Picker in dialog"
                readonly
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
            </v-date-picker>
            
            </v-dialog>
            <v-file-input accept="PDF/*" label="Upload Assignment Detail File"></v-file-input>
            <v-btn class="ma-2" color="primary" dark>Upload
                <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
            </v-btn>
        </v-col>
        
        <v-spacer></v-spacer>
        </v-row>
    </v-app>
    </div>
</template>

<script>
export default {
    data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>