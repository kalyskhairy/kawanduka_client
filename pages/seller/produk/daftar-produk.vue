<template>
  <div class="container">
    <div class="row align-items-center">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <h2>Daftar Produk</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-3 col-sm-3">
            <input
                v-model="searchText"
                class="form-control"
                type="text"
                placeholder="Cari produk"
            />
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">
            <v-select
            :items="items"
            label="Kategori"
            outlined
            ></v-select>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">
            <v-select
            :items="items"
            label="Status"
            outlined
            ></v-select>
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">
            <v-select
            :items="items"
            label="Urutan"
            outlined
            ></v-select>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <v-data-table
                :headers="headers"
                :items="desserts"
                sort-by="harga"
                class="elevation-1"
            >
                <template v-slot:top>
                <v-toolbar
                    flat
                >
                    <!-- <v-divider
                    class="mx-4"
                    inset
                    vertical
                    ></v-divider> -->
                    <v-spacer></v-spacer>
                    <v-dialog
                    v-model="dialog"
                    max-width="500px"
                    >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="primary"
                        dark
                        class="mb-2"
                        v-bind="attrs"
                        v-on="on"
                        >
                        New Item
                        </v-btn>
                    </template>
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.name"
                                label="Dessert name"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.harga"
                                label="harga"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.stok"
                                label="stok (g)"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.kategori"
                                label="kategori (g)"
                                ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                                <v-text-field
                                v-model="editedItem.status"
                                label="status (g)"
                                ></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        </v-card-text>

                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="save"
                        >
                            Save
                        </v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                    <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
                </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                >
                    mdi-pencil
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(item)"
                >
                    mdi-delete
                </v-icon>
                </template>
                <template v-slot:no-data>
                <v-btn
                    color="primary"
                    @click="initialize"
                >
                    Reset
                </v-btn>
                </template>
            </v-data-table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    layout: 'seller',
    data() {
        return {
            searchText: '',
            items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
            dialog: false,
            dialogDelete: false,
            headers: [
                {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'Harga', value: 'harga' },
                { text: 'Stok', value: 'stok' },
                { text: 'Kategori', value: 'kategori' },
                { text: 'Status', value: 'status' },
                { text: 'Actions', value: 'actions', sortable: false },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                harga: 0,
                stok: 0,
                kategori: 0,
                status: 0,
            },
            defaultItem: {
                name: '',
                harga: 0,
                stok: 0,
                kategori: 0,
                status: 0,
            },
        }
    },
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            harga: 159,
            stok: 6.0,
            kategori: 24,
            status: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            harga: 237,
            stok: 9.0,
            kategori: 37,
            status: 4.3,
          },
          {
            name: 'Eclair',
            harga: 262,
            stok: 16.0,
            kategori: 23,
            status: 6.0,
          },
          {
            name: 'Cupcake',
            harga: 305,
            stok: 3.7,
            kategori: 67,
            status: 4.3,
          },
          {
            name: 'Gingerbread',
            harga: 356,
            stok: 16.0,
            kategori: 49,
            status: 3.9,
          },
          {
            name: 'Jelly bean',
            harga: 375,
            stok: 0.0,
            kategori: 94,
            status: 0.0,
          },
          {
            name: 'Lollipop',
            harga: 392,
            stok: 0.2,
            kategori: 98,
            status: 0,
          },
          {
            name: 'Honeycomb',
            harga: 408,
            stok: 3.2,
            kategori: 87,
            status: 6.5,
          },
          {
            name: 'Donut',
            harga: 452,
            stok: 25.0,
            kategori: 51,
            status: 4.9,
          },
          {
            name: 'KitKat',
            harga: 518,
            stok: 26.0,
            kategori: 65,
            status: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
}
</script>

<style>

</style>