const orderForm = document.querySelector(".order-form");

if (orderForm) {

orderForm.addEventListener("submit", function(event) { event.preventDefault();

   const selectedItem = document.querySelector("#item").value; 
   const quantity = Number(document.querySelector("#quantity").value);
   const customerName = document.querySelector("#customer-name").value;

   const prices = {
        latte: 4.75,
        cappuccino: 4.25,
        coffee: 3.25,
        muffin: 3.50,
        croissant: 3.95,
        "avocado-toast": 7.95,
        bagel: 4.50
    };

    const itemNames = {
        latte: "Vanilla Latte",
        cappuccino: "Cappuccino",
        coffee: "Fresh Brewed Coffee",
        muffin: "Blueberry Muffin",
        croissant: "Butter Croissant",
        "avocado-toast": "Avocado Toast",
        bagel: "Bagel with Cream Cheese"
    };

    const itemPrice = prices[selectedItem];
    const total = itemPrice * quantity;

    document.querySelector("#order-summary").style.display = "block";

    document.querySelector("#order-details").textContent =
        itemNames[selectedItem] + " x " + quantity;

    document.querySelector("#order-total").textContent =
        "Total: $" + total.toFixed(2);

    document.querySelector("#order-message").textContent =
        "Thank you, " + customerName + "! Your order has been received.";
});

}

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const contactName = document.querySelector("#contact-name").value;

        document.querySelector("#contact-message").textContent =
            "Thank you, " + contactName + "! Your message has been sent.";
    });

}