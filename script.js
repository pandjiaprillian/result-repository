addEventListener('load', (e) => {
    const testResult = document.querySelector('section.summary .test-result');

    async function getData() {
        try {
            const data = await fetch('assets/data/data.json', {method: 'GET'});
            return data.json();
        } catch (e) {
            console.log(`error in ${e}`);
        }
    }

    async function renderData() {
        try {
            const results = await getData();
            let box = ``;

            for (const result of results) {
                box += `<div class="box ${result.category.toLowerCase()}">
                            <div class="heading">
                                <img src="${result.icon}" alt="${result.category}">
                                ${result.category}
                            </div>
                            <p><span class="boldy">${result.score}</span> / 100</p>
                        </div>`;
            }

            testResult.innerHTML = box;
        } catch (error) {
            console.log(`error in ${e}`);
        }
    }

    renderData();
});
