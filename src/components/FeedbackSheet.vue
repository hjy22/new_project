<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-divider></v-divider>
        <v-row>
            <v-col>
                <v-container>
            <v-list three-line subheader>
          <v-subheader>Rating</v-subheader>
          <v-flex  v-for="(checkBox, id) in checkBoxInfo" :key="id">
              <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="checkBox.model"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{checkBox.name}}</v-list-item-title>
              <v-list-item-subtitle>{{checkBox.intro}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          </v-flex>
        </v-list>
        </v-container>
            </v-col>
            <v-col>
              <v-container>
            <v-list three-line subheader>
            <v-subheader>TextField</v-subheader>
            <v-flex v-for="(text, id) in textFieldInfo" :key="id">
                <v-list-item>
                <v-list-item-action>
                    <v-checkbox></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                        <v-list-item-subtitle>
                            <v-textarea
                            outlined
                            disabled
                            :label="text.label"
                            rows="2"
                            row-height="20"
                            ></v-textarea>
                        </v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-flex>
        </v-list>
        </v-container>
        </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
  export default {
    data () {
      return {
        checkBoxInfo:[],
        textFieldInfo:[],
        dialog: false,
        organisation: false,
        content: false,
        presentation: false,
        engagement:false,
        delivery:false,
        pace:false,
        question:false,
      }
    },
    created () {
      this.getInfo() // 本地JSON
    },
     methods:{
       getInfo() {
        axios.get('../static/CourseInfo.json').then(response => {
            this.checkBoxInfo = response.data.feedbackCheckBox;
            this.textFieldInfo = response.data.feedbackTextField;
        }, response => {
            console.log("error");
        });
      },
     }
  }
</script>