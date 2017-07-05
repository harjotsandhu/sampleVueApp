new Vue({
  el: '#items',

  data: {
    item: { name: '', price: '', detail: '', date: '', quantity: '' },
    items: []
  },

  ready: function () {
    this.fetchItems();
  },

  methods: {

    fetchItems: function () {
      var items = [];
      this.$http.get('/api/items')
        .success(function (items) {
          this.$set('items', items);
          console.log(items);
        })
        .error(function (err) {
          console.log(err);
        });
    },

    addItem: function () {
      if (this.item.name.trim()) {
        this.$http.post('/api/items', this.item)
          .success(function (res) {
            this.items.push(this.item);
            console.log('item added!');
          })
          .error(function (err) {
            console.log(err);
          });
      }
    },

    deleteItem: function (index) {
      if (confirm('you sure you want to delete')) {
        this.$http.delete('api/items/' + index)
          .success(function (res) {
            console.log(res);
            this.items.splice(index, 1);
          })
          .error(function (err) {
            console.log(err);
          });
      }
    }
  }
});
