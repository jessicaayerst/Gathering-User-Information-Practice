// Some starter code
const container = document.querySelector("#addressList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const personName = document.querySelector("#fullName").value
    const personAddress = document.querySelector("#address").value


    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `
})


const wishlistContainer = document.querySelector("#wishlist")

document.querySelector("#saveItems").addEventListener("click", function(){
    const wishlistItem = document.querySelector("#favoriteThing").value
    const wishlistLocation = document.querySelector("#whereToPurchase").value

    wishlistContainer.innerHTML += `
    <section>
    I can purchase ${wishlistItem} at ${wishlistLocation}.
    </section>
    `;


    // Challenge #1

    document.querySelector("#favoriteThing").value = "";
    document.querySelector("#whereToPurchase").value = "";
    document.getElementById("favoriteThing").focus();


})

// Challenge #2

if (document.querySelector("#favoriteThing").value === "");
alert("Please add item to the wishlist!")