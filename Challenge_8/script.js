const tagInput = document.getElementById('tags-input');
const tagsContainer = document.querySelector('.tags-ctn');

const createTag = (text) => {
    const tagDiv = document.createElement('div');
    tagDiv.className = 'tag';

    const span = document.createElement("span");
    span.textContent = text;
    tagDiv.appendChild(span);

    tagDiv.innerHTML += `<svg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" +
        "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.6129 5.7097C6.22061 5.40468 5.65338 5.43241 5.29289 5.79289C4.90237 6.18342 4.90237 6.81658 5.29289 7.20711L10.5858 12.5L5.29289 17.7929L5.2097 17.8871C4.90468 18.2794 4.93241 18.8466 5.29289 19.2071C5.68342 19.5976 6.31658 19.5976 6.70711 19.2071L12 13.9142L17.2929 19.2071L17.3871 19.2903C17.7794 19.5953 18.3466 19.5676 18.7071 19.2071C19.0976 18.8166 19.0976 18.1834 18.7071 17.7929L13.4142 12.5L18.7071 7.20711L18.7903 7.1129C19.0953 6.72061 19.0676 6.15338 18.7071 5.79289C18.3166 5.40237 17.6834 5.40237 17.2929 5.79289L12 11.0858L6.70711 5.79289L6.6129 5.7097Z\" fill=\"currentColor\"/>\n" +
        "</svg>\n`;
    const svg = tagDiv.querySelector('svg');
    svg.addEventListener('click', () => tagDiv.remove());

    tagsContainer.insertBefore(tagDiv, tagInput);
};

const displayTag = () => {
    const tag = tagInput.value;
    if(tag.includes(",")) {
        const tagText = tag.replace(",", "").trim();
        createTag(tagText);
        tagInput.value = '';
    }
};

tagInput.addEventListener('input', displayTag);