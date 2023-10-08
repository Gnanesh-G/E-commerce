let initialProducts = [
  {
    id: 1,
    title: "Agni 9",
    description: "An  mobile which is nothing like apple",
    price: 549,
    thumbnail:
      "https://m.media-amazon.com/images/I/61OBw+XUiuL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    title: "Laser S23",
    description: "An apple mobile which is nothing like apple",
    price: 899,
    thumbnail:
      "https://cdn1.smartprix.com/rx-i557UUuo7-w280-h280/itel-s23-plus.webp",
  },
  {
    id: 3,
    title: "Blaze 9 PRO",
    description: "An apple mobile which is nothing like apple",
    price: 1249,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZFaunq5YAeyup61mEh1sniwN5Ka647VlMg&usqp=CAU",
  },
  {
    id: 4,
    title: "OPPOF19",
    description: "OPPO F19 is officially announced on April 2021.",
    price: 280,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBZN3u0LsUsisTS0tE0_h4rRQipkiKrzT2g&usqp=CAU",
  },
  {
    id: 5,
    title: "Blaze Note 10",
    description: "An apple mobile which is nothing like apple",
    price: 499,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDmklcQwV7AJQ8QwAhOcwC71ITNv5xtfywXA&usqp=CAU",
  },
  {
    id: 6,
    title: "Yuva 2 Pro",
    description: "An apple mobile which is nothing like apple",
    price: 1749,
    thumbnail:
      "https://cdn1.smartprix.com/rx-iatJMWpck-w1200-h1200/atJMWpck.jpg",
  },

  {
    id: 7,
    title: "Microsoft  4",
    description: "An apple mobile which is nothing like apple",
    price: 1499,
    thumbnail:
      "https://cdn1.smartprix.com/rx-ivX9kR4r4-w280-h280/lava-agni-5g.webp",
  },
  {
    id: 8,
    title: "Lava Inbook",
    description: "An apple mobile which is nothing like apple",
    price: 1099,
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrNBDBu0Msjwke2D7oUlnjsQNs3ZY0gRgjg&usqp=CAUhttps://tpc.googlesyndication.com/simgad/14052556633634358875",
  },
];

let customer = [
  { id: 1, email: "gnaneshg@admin.com", password: "admin" },
  { id: 2, email: "gnaneshg@user.com", password: "gnanesh" },
];
window.addEventListener("load", () => {
  if (!localStorage.getItem("customer")) {
    localStorage.setItem("customer", JSON.stringify(customer));
  }

  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(initialProducts));
  }
  if (location.pathname === "/index.html") {
    homePage();
  }
  if (location.pathname === "/admin/index.html") {
    adminPage();
  }
  if (location.pathname === "/PageHTML/addtocart.html") {
    loadCartPage();
  }

  if (location.pathname === "/PageHTML/order.html") {
    orderPage();
  }

  if (location.pathname === "/admin/order.html") {
    adminOrderPage();
  }

  if (
    location.pathname === "/index.html" ||
    location.pathname === "/PageHTML/order.html" ||
    location.pathname === "/PageHTML/cart.html"
  ) {
    addingCartCount();
  }
  if (location.pathname === "/admin/addproducts.html") {
    let params = new URL(document.location).searchParams;
    let productId = params.get("id");
    if (productId) {
      const products = JSON.parse(localStorage.getItem("products"));
      const product = products.find(
        (product) => product.id === parseInt(productId)
      );
      populateProduct(product);
    }
  }
});
//Random number
const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};
//Sign in
const signIn = () => {
  const emailRef = document.getElementById("user");
  const passwordRef = document.getElementById("pass");
  const errorRef = document.getElementById("errorSignin");

  if (emailRef.value.length === 0) {
    errorRef.innerText = "Email field cannot be empty";
    return;
  }
  if (!validateEmail(emailRef.value)) {
    errorRef.innerText = "Invalid email address";
    return;
  }

  if (passwordRef.value.length === 0) {
    errorRef.innerText = "Password field cannot be empty";
    return;
  }
  if (passwordRef.value.length < 4) {
    errorRef.innerText = "Password is atleast more than four digits";
    return;
  }
  let customer = JSON.parse(localStorage.getItem("customer"));
  const loggedUser = customer.find(
    (customer) =>
      customer.email == emailRef.value && customer.password == passwordRef.value
  );
  if (!loggedUser) {
    errorRef.innerText = "Invalid credentials";
    return;
  }
  sessionStorage.setItem("userId", loggedUser.id);
  errorRef.innerText = "";
  //location.replace("/PageHTML/index.html");
  if (emailRef.value === "gnaneshg@admin.com" && passwordRef.value === "admin")
    location.replace("/admin/index.html");
  else location.replace("/index.html");
};
const validateEmail = (email) => {
  let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return regex.test(email);
};
//Signup
const Signup = () => {
  const emailRef = document.getElementById("signupEmail");
  const nameRef = document.getElementById("signupUser");
  const passwordRef = document.getElementById("signupPassword");
  const confirmpasswordRef = document.getElementById("signupConfirmpassword");
  const errorRef = document.getElementById("signupError");

  if (emailRef.value.length === 0) {
    errorRef.innerText = "Email field cannot be empty";
    return;
  }
  if (!validateEmail(emailRef.value)) {
    errorRef.innerText = "Invalid email address";
    return;
  }
  if (nameRef.value.length === 0) {
    errorRef.innerText = "Username field cannot be empty";
    return;
  }
  if (passwordRef.value.length === 0 && confirmpasswordRef.value.length === 0) {
    errorRef.innerText = "Password field cannot be empty";
    return;
  }
  if (passwordRef.value.length < 4 && confirmpasswordRef.value.length) {
    errorRef.innerText = "Password is atleast more than four digits";
    return;
  }
  if (passwordRef.value.length === confirmpasswordRef.value.length) {
    let users = JSON.parse(localStorage.getItem("customer"));

    customer.push({
      id: getRandomNumber(),
      email: emailRef.value,
      password: passwordRef.value,
    });

    localStorage.setItem("customer", JSON.stringify(customer));
    location.href = "/PageHTML/login.html";
  } else {
    errorRef.innerText = "Password Mismatch";
  }
};

//signout
const signOut = () => {
  location.replace("/PageHTML/login.html");
};

const homePage = () => {
  const bannerRef = document.getElementById("banner");
  let customerRef = JSON.parse(localStorage.getItem("products"));
  let body = "";

  for (let customer of customerRef) {
    body += ` <div class="col-3  card  ">
  <img src="${customer.thumbnail}" class="card-img-top image-fluid w-50 h-50 mx-5"  alt="..." />
  <div class="card-body">
    <h5 class="card-title">${customer.title}</h5>
    <p class="card-text">
      ${customer.description}
    </p>
    <button type="button" class="btn btn-primary mx-3" onclick="addCartHandler(${customer.id})">Add to cart</button>
  </div>
  </div>
`;
    bannerRef.innerHTML = body;
  }
};

const adminPage = () => {
  const bannerRef = document.getElementById("adminBanner");
  let customerRef = JSON.parse(localStorage.getItem("products"));
  let body = "";
  for (let customer of customerRef) {
    body += ` <tr class="text-center">
    <th scope="row"><img src="${customer.thumbnail}" alt="img" style="width:150px; heigth:50px"></th>
    <td>${customer.title}</td>
    <td>${customer.description}</td>
    <td>${customer.price}</td>
    <td class="d-flex">
      <button type="button" class="btn btn-primary mx-3">Edit</button
      ><button type="button" class="btn btn-danger" onclick="deleteHandler(${customer.id})">Delete</button>
    </td>
  </tr>
  `;
    bannerRef.innerHTML = body;
  }
};

//Update products
const addProductHandler = () => {
  const nameRef = document.getElementById("name");
  const idRef = document.getElementById("id");
  const priceRef = document.getElementById("price");
  const descriptionRef = document.getElementById("desc");
  const imageRef = document.getElementById("image");
  const popupRef = document.getElementById("popup");
  const popupMessageRef = document.getElementById("popupMessage");

  let products = JSON.parse(localStorage.getItem("products"));
  let id = idRef.value;
  if (id) {
    const product = products.find((product) => product.id === parseInt(id));
    products = products.filter((product) => product.id !== parseInt(id));
    products.push({
      ...product,
      title: nameRef.value,
      description: descriptionRef.value,
      price: priceRef.value,
      thumbnail: imageRef.value,
    });
  }

  popupMessageRef.innerText = "Product added successfully";

  {
    products.push({
      id: getRandomNumber("products"),
      title: nameRef.value,
      description: descriptionRef.value,
      price: priceRef.value,
      thumbnail: imageRef.value,
    });
  }
  popupMessageRef.innerText = "Product added successfully";

  popupRef.classList.add("fade", "show");
  setTimeout(() => {
    popupRef.classList.remove("fade", "show");
  }, 3000);
  localStorage.setItem("products", JSON.stringify(products));
  location.href = "/admin/index.html";
};

//Delete
const deleteHandler = (id) => {
  const products = JSON.parse(localStorage.getItem("products"));
  const filterProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(filterProducts));
  adminPage();
};

// Add to cart
const addCartHandler = (id) => {
  let products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((product) => product.id === parseInt(id));

  if (!sessionStorage.getItem("userId")) {
    location.href = "/pageHTML/login.html";
  } else {
    let userId = parseInt(sessionStorage.getItem("userId"));
    let cart = [];
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    const cartProduct = cart.find(
      (a) => a.userId === parseInt(userId) && a.id === parseInt(id)
    );
    if (cartProduct) {
      cart = cart.map((a) => {
        if (a.id === parseInt(id) && a.userId === parseInt(userId)) {
          return { ...a, count: a.count + 1 };
        } else {
          return a;
        }
      });
    } else {
      cart.push({ userId: parseInt(userId), count: 1, ...product });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    addingCartCount();
  }
};

// updating cart
const addingCartCount = () => {
  const cartCountRef = document.getElementById("cartCount");
  if (sessionStorage.getItem("userId")) {
    const userId = parseInt(sessionStorage.getItem("userId"));
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userCart = cart.filter((a) => a.userId === userId);
      if (userCart.length > 0) {
        const cartCount = userCart.reduce((acc, curr) => {
          acc += curr.count;
          return acc;
        }, 0);
        cartCountRef.innerText = `Cart - ${cartCount}`;
      } else cartCountRef.innerText = `Cart`;
    }
  } else location.href = "/PageHTML/login.html";
};

// loadCartPage
const loadCartPage = () => {
  const tableCartRef = document.getElementById("tableCart");
  const totalRef = document.getElementById("total");

  if (localStorage.getItem("cart")) {
    const cart = JSON.parse(localStorage.getItem("cart"));

    if (sessionStorage.getItem("userId")) {
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((o) => o.userId === userId);

      let body = "";
      let total = 0;
      for (let cartItem of userCart) {
        total = total + parseInt(cartItem.count) * parseInt(cartItem.price);
        const count = cartItem.count * cartItem.price;
        body += `<tr>
                  <td>${cartItem.title}</td>
                 
                  <td>${cartItem.count}</td>
                  <td>${cartItem.price}</td>
                  <td>₹ ${count}</td>
                </tr>`;
      }
      tableCartRef.innerHTML = body;
      totalRef.innerText = `Total - ₹ ${total}`;
    } else {
      location.href = "/PageHTML/login.html";
    }
  }
};

// checkOut
const checkOut = () => {
  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userCart = cart.filter((c) => c.userId === userId);

      let orders = [];
      if (localStorage.getItem("orders")) {
        orders = JSON.parse(localStorage.getItem("orders"));
      }
      orders.push({
        timestamp: Date.now(),
        userId: userId,
        status: "Pending",
        products: userCart,
      });

      const otherUserCart = cart.filter((c) => c.userId !== userId);
      localStorage.setItem("cart", JSON.stringify(otherUserCart));
      localStorage.setItem("orders", JSON.stringify(orders));
      addingCartCount();
      location.href = "/index.html";
    } else {
      location.href = "/index.html";
    }
  } else {
    location.href = "/PageHTML/login.html";
  }
};
// loading order in user Page
const orderPage = () => {
  const tableRef = document.getElementById("tableOrder");

  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));
      const userId = parseInt(sessionStorage.getItem("userId"));
      const userOrder = orders.filter((order) => order.userId === userId);

      let body = "";
      for (let order of userOrder) {
        let product = "";
        let total = 0;
        for (let prod of order.products) {
          product += `<p>${prod.count} * ${prod.title}</p>`;
          total += prod.count * prod.price;
        }

        const date = new Date(order.timestamp);
        const formattedDate =
          date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        body += `<tr>
            <td>${order.timestamp}</td>
            <td>${formattedDate}</td>
            <td>${product}</td>
            <td>₹ ${total}</td>
            <td>${order.status}</td>
          </tr>`;
      }
      tableRef.innerHTML = body;
    } else {
      location.href = "/index.html";
    }
  } else {
    location.href = "/PageHTML/login.html";
  }
};
// loading orders in admin page
const adminOrderPage = () => {
  const tableRef = document.getElementById("tableOrder");

  if (sessionStorage.getItem("userId")) {
    if (localStorage.getItem("orders")) {
      const orders = JSON.parse(localStorage.getItem("orders"));

      let body = "";
      for (let order of orders) {
        let product = "";
        let total = 0;
        for (let prod of order.products) {
          product += `<p>${prod.count} * ${prod.title}</p>`;
          total += prod.count * prod.price;
        }

        const date = new Date(order.timestamp);
        const formattedDate =
          date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

        const customer = JSON.parse(localStorage.getItem("customer"));
        const orderedUser = customer.find(
          (user) => user.id === parseInt(order.userId)
        );

        body += `<tr>
            <td>${order.timestamp}</td>
            <td>${formattedDate}</td>
            <td>${orderedUser.email}</td>
            <td>${product}</td>
            <td>₹ ${total}</td>
            <td>
              <select class="form-select" id="status-${order.timestamp}">
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </td>
          </tr>`;
      }
      tableRef.innerHTML = body;

      for (let order of orders) {
        const statusRef = document.getElementById(`status-${order.timestamp}`);
        statusRef.value = order.status;
        statusRef.addEventListener("change", () => {
          const lastUpdatedOrders = JSON.parse(localStorage.getItem("orders"));
          const updatedOrders = lastUpdatedOrders.map((o) => {
            if (o.timestamp === order.timestamp) {
              return { ...o, status: statusRef.value };
            } else return o;
          });
          localStorage.setItem("orders", JSON.stringify(updatedOrders));
        });
      }
    } else {
      location.href = "/index.html";
    }
  } else {
    location.href = "/PageHTML/login.html";
  }
};
