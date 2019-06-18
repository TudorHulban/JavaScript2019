const currentDocumentTable = document.currentScript.ownerDocument;

class CompoTable extends HTMLElement {
    constructor() {
        super();

        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
    };

    connectedCallback() {
        const template = currentDocumentTable.getElementById('teID');
        const instance = template.content.cloneNode(true);
        this.shadowRoot.appendChild(instance);

        const colorData = JSON.parse(this.getAttribute('colors'));

        let elContainer = this.shadowRoot.querySelector('div');
        let elTable = document.createElement('table');

        this.setContent(elTable, '{"header":[{"h1":"x1"},{"h2":"x2"}], "rows":[{"row1":[{"c1":"y1"},{"c2":"y2"}]}, {"row2":[{"c1":"y1"},{"c2":"y2"}]}]}');

        elContainer.appendChild(elTable);
        this.updateColors(colorData);
    };

    updateColors(pColors) {
        let elHeader = this.shadowRoot.querySelectorAll('th');
        let elRows = this.shadowRoot.querySelectorAll('tr');

        elHeader.forEach(e => {
            e.style.backgroundColor = pColors.header[0].background;
            e.style.color = pColors.header[1].color;
        });

        elRows.forEach(e => {
            e.style.backgroundColor = pColors.rows[0].background;
            e.style.color = pColors.rows[1].color;
        });
    };

    updateContent(pContent) {
        let elTable = this.shadowRoot.querySelector('table');
        this.deleteContent(elTable);
        this.setContent(elTable, pContent);
    };

    setContent(pTable, pContent) {
        let elTableBody = document.createElement('tbody');

        const tableData = JSON.parse(pContent);
        this.addHeader(elTableBody, tableData.header)

        Array.from(tableData.rows, (v, ix) => {
            this.addRow(elTableBody, v["row" + String(ix + 1)])
        });

        pTable.appendChild(elTableBody);
    };

    deleteContent(pTable) {
        pTable.removeChild(pTable.childNodes[0]);
    };

    addHeader(pTableBody, pContentHeader) {
        let elHeader = document.createElement('tr');

        pContentHeader.forEach((v, ix) => {
            let elCell = document.createElement('th');
            elCell.appendChild(document.createTextNode(v["h" + String(ix + 1)]));
            elHeader.appendChild(elCell);
        });

        pTableBody.appendChild(elHeader);
    };

    addRow(pTableBody, pContentRow) {
        let elRow = document.createElement('tr');

        pContentRow.forEach((v, ix) => {
            let elCell = document.createElement('td');
            elCell.appendChild(document.createTextNode(v["c" + String(ix + 1)]));
            elRow.appendChild(elCell);
        });

        pTableBody.appendChild(elRow);
    };
};

customElements.define('compo-table', CompoTable);
