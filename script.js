
console.log(trelloData);


// Data rendering file
// Read trelloData, find the data display row and
// Generate HTML elements based on trelloData

function renderColumns() {
    let trelloDataRowRootNode = document.getElementById("dataDisplayRow");
    // Removing any stale or old HTML content
    trelloDataRowRootNode.innerHTML = "";

    trelloData.columns.forEach((column) => {
        console.log(column.name);

        let columnNode = document.createElement("div");
        columnNode.classList.add("trelloColumn");
        
        // Create content to render column data
        let columnHeading = document.createElement("h3");
        columnHeading.innerText = column.name;
        columnNode.appendChild(columnHeading);

        column.cards.forEach((card) => {
            // Find the card preview,copy it, save the copy to the variable
            let newCard = document.getElementById("cardPreview").cloneNode(true);

            if (!card.timestamp || isNaN(card.timestamp)) {
                card.timestamp = Date.now();
            }

            newCard.id = card.timestamp

            // Fine the h3 of the card title and change its content
            newCard.querySelector(".cardDisplay-title").innerText = card.title;

            // Same
            newCard.querySelector(".cardDisplay-content").innerText = card.content;

            // After data is all done, attach card to column
            columnNode.appendChild(newCard);
        });

        trelloDataRowRootNode.appendChild(columnNode);

    });

}



renderColumns();
