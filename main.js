const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listFeatures = $$('.feature');


listFeatures.forEach(value => {
    value.onclick = () => {
        listFeatures.forEach(feature => {
            feature.children[0].classList.remove('feature-active');
        });
        value.children[0].classList.add('feature-active');
    }
});