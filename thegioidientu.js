let products = {
    data: [
        {
            id: 1,
            name: "dong cung",
            image: "img/31d2ae35d8c3218ba287f47d2f63db08.jpeg"
        },
        {
            id: 2,
            name: "doc bo thien ha",
            image: "img/61cc3fbf842f154d052a9c945eb25fee.jpeg"
        },
        {
            id: 3,
            name: "di ai vi doanh",
            image: "img/469d65d537cfc3102fb4d401abb994ce.jpeg"
        },
        {
            id: 4,
            name: "vung trom khong the giau",
            image: "img/65949c8081e2fb8e2de9496f79e4dac6.jpeg"
        },
    ]
}

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById('products');

    // Render products
    products.data.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('image');


        const imageElement = document.createElement('img');
        imageElement.src = product.image;
        const productElement1 = document.createElement('div');
        productElement1.classList.add('pi');
        productElement1.appendChild(imageElement);
        productElement.appendChild(productElement1);

        const nameElement = document.createElement('p');
        nameElement.textContent = product.name;
        productElement.appendChild(nameElement);

        productsContainer.appendChild(productElement);
    });

   
})