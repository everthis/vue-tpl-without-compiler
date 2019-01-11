new Vue({
  // 对应id为app的元素
  el: "#app",
  // 对应type为x-template，id为vue-tpl的script
  template: "#vue-tpl",
  data: function() {
    return {
      response: null
    };
  },
  computed: {
    users: function() {
      if (this.response != null) {
        return JSON.stringify(this.response, null, 2);
      } else {
        return "";
      }
    }
  },
  methods: {
    xhrData: function() {
      var that = this;
      $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/users",
        // data to be added to query string:
        data: {},
        // type of data we are expecting in return:
        dataType: "json",
        timeout: 300,
        success: function(data) {
          that.response = data;
        },
        error: function(xhr, type) {
          that.response = mockApi();
        }
      });
    }
  },
  mounted: function() {}
});

function mockApi() {
  var data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496"
        }
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets"
      }
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618"
        }
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains"
      }
    }
  ];

  return data;
}
