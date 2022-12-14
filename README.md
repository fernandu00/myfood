# MyFood food ordering app

Fullstack application created as an ifood clone in order to empower small businesses with a lower cost solution to manage orders and provide a web solution to their clients. This app includes payment integration with Mercado Pago's gateway.

### Frontend

The Frontend was developed using ReactJs and Redux to manage various states such as the user and the menu.

#### Screens

Some App functionalities

![initial screen](./images/initial.png "Initial page")

##### Register and Login

![register screen](./images/register.png "register page")
![login screen](./images/login.png "login page")

##### Customer Pages

###### Menu

![main page](./images/menu_costumer.png "menu customer")

###### Menu with filtered items

![menu filtered items](./images/filtered_categories.png "filtered by categories")
![menu filtered items](./images/filtered_categories_2.png "filtered by categories 2")

###### Single Product Page

![single product page](./images/single_product_page.png "single product page")

###### Empty Cart

![empty cart](./images/empty_cart.png "empty cart")
Item added
![item added](./images/added_item.png "item added toast")

###### Cart with Items

![cart with items](./images/cart_with_items.png "cart with items")

###### Profile Page

![profile](./images/profile.png "user profile")

###### Order History Page

![order history](./images/order_history_customer.png "user order history")

###### Order Review Page

![order review](./images/order_review_2.png "review your order page")

###### Payment Page

![payment](./images/payment_MP_1.png "payment page")
![payment 2](./images/payment_MP_2.png "payment page")

##### Admin Pages

###### Admin Main

![admin main](./images/admin_homescreen.png "admin homescreen")

###### Admin Orders to deliver

![admin orders to go](./images/admin_order_to_go.png "admin page order to go")

##### Admin Order History

![admin order history](./images/admin_order_history.png "admin order history")

##### Admin Menu Page

![admin menu](./images/admin_menu.png "admin menu")

##### Add Menu Item

![add menu item](./images/admin_add_item_2.png "add menu item")

##### Edit Menu Item

![edit menu item](./images/admin_edit_item.png "edit menu item")

### Backend

The Backend was developed using Nodejs, Express and MongoDB. Firebase was used for authorizarion.

The API has the following routes:

#### User

##### Create User Route:

```js
var axios = require("axios");
var data = JSON.stringify({
  name: "John Doe",
  email: "john@gmail.com",
  address: {
    line_1: "main street",
    line_2: " ",
    number: 30,
    zipCode: "01000-000",
  },
  uuid: "qwerqwerqwer",
});

var config = {
  method: "post",
  url: "localhost:5000/user/new",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### List all users Route:

```js
var axios = require("axios");

var config = {
  method: "get",
  url: "localhost:5000/user",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### List single user by uuid Route:

```js
var axios = require("axios");

var config = {
  method: "get",
  url: "localhost:5000/user/iM7zEr48ZjgEidLNHLCMGE1b2dE3",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Update user Route:

```js
var axios = require("axios");
var data = JSON.stringify({
  isAdmin: true,
});

var config = {
  method: "patch",
  url: "localhost:5000/user/azSu2O7ct8azbft6tMgWzJDiCSq2",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Delete user Route:

```js
var axios = require("axios");

var config = {
  method: "delete",
  url: "localhost:5000/user/63652859737f455564147d37",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

#### Menu Routes

##### Create a dish Route:

```js
var axios = require("axios");
var data =
  '{\n "title": "X - Tudo",\n "desc": "Lanche com dois hamb??rgueres, alface, queijo, alface, tomate, bancon e ovo",\n "unit*price": 19.9,\n "category": "lanches",\n "ingredients": [],\n "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger*%28black*bg%29.jpg/375px-Hamburger*%28black_bg%29.jpg",\n}';

var config = {
  method: "post",
  url: "localhost:5000/menu/new",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### List all menu Items Route:

```js
var axios = require("axios");

var config = {
  method: "get",
  url: "localhost:5000/menu/all",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Update menu Item Route:

```js
var axios = require("axios");
var data = JSON.stringify({
  description: "Guaran?? Dolly 2L",
});

var config = {
  method: "patch",
  url: "localhost:5000/menu/update/636153d7d3e28f6a9ae4e81a",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Delete menu item by it's id Route:

```js
var axios = require("axios");

var config = {
  method: "delete",
  url: "localhost:5000/menu/delete/6365016e8bfa018c36417c96",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

#### Order Routes

##### Create order Route:

```js
var axios = require("axios");
var data = JSON.stringify({
  items: [
    {
      _id: "636138840ba2673c82f18dfb",
      title: "X - Tudo",
      desc: "Lanche com dois hamb??rgueres, alface, queijo, alface, tomate, bancon e ovo",
      price: 19.9,
      category: "lanches",
      ingredients: [],
      picture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Hamburger_%28black*bg%29.jpg/375px-Hamburger*%28black_bg%29.jpg",
      "**v": 0,
      quantity: 2,
    },
    {
      _id: "63615382d3e28f6a9ae4e818",
      title: "Coca Cola 2L",
      desc: "Coca Cola 2L garrafa PET",
      price: 9.9,
      category: "bebidas",
      ingredients: [],
      picture:
        "http://lanchonetetedesco.com.br/wp-content/uploads/2018/08/8-7.jpg",
      "**v": 0,
      quantity: 1,
    },
  ],
  quantity: 2,
  total: 99.9,
  paymentOption: "pix",
  uuid: "HUWCuFORrDWDli1mCXZkzHXeYno1",
});

var config = {
  method: "post",
  url: "localhost:5000/order/new",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### List all orders Route:

```js
var axios = require("axios");

var config = {
  method: "get",
  url: "localhost:5000/order/",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### List single order by it's id Route:

```js
var axios = require("axios");

var config = {
  method: "get",
  url: "localhost:5000/order/636b96ba3486538d3eda2078",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Update order Route:

```js
var axios = require("axios");
var data = JSON.stringify({
  paid: true,
});

var config = {
  method: "patch",
  url: "localhost:5000/order/636d275e053760c8176e155e",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Delete Order by id Route:

```js
var axios = require("axios");

var config = {
  method: "delete",
  url: "localhost:5000/order/636b96ba3486538d3eda2078",
  headers: {},
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
```

If you have any questions or suggestions please contact me!
