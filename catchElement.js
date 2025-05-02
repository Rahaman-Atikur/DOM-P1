document.getElementById('add-product-btn')
    .addEventListener('click', function () {
        const productNameInputField = document.getElementById('product-name-input');
        const productLinkInputField = document.getElementById('product-link-id');
        const productPriceInputField = document.getElementById('product-price-id');

        const mainContainer = document.getElementById('output-div');

        const writtenInBoxName = productNameInputField.value;
        const writtenInBoxLink = productLinkInputField.value;
        const writtenInBoxPrice = productPriceInputField.value;


        const div = document.createElement("div");
        div.innerHTML = `
        <p>${writtenInBoxName}</p>
        <p>${writtenInBoxLink}</p>
        <p>${writtenInBoxPrice}</p>
        `;

        mainContainer.appendChild(div);

    })
