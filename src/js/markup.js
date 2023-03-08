const gallery = document.querySelector('');

export function createCard(cards) {
  const markup = cards
    .map(card => {
      const {
        webformatURL,
        largeImageURL,
        likes,
        views,
        comments,
        downloads,
        tags,
        id,
      } = card;
      return `<a class="card-gall" href="${largeImageURL}">
            <div class="card-item" id="${id}">
                <img class = "image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
                <div class="description">
                    <p class="item-info">
                        <b>likes:</b> 
                        ${likes}
                    </p>
                    <p class="item-info">
                        <b>views:</b> 
                        ${views}
                    </p>
                    <p class="item-info">
                        <b>comments:</b>
                        ${comments}
                    </p>
                    <p class="item-info">
                        <b>downloads:</b>
                        ${downloads}
                    </p>
                </div>
            </div>
        </a>`;
    })
    .join('');
}
