import { gallery } from './const';

export function createCard(cards) {
  const markup = cards
    .map(card => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        id,
      } = card;
      return `<a class="gallery-item" href="${largeImageURL}">
            <div class="photo-card" id="${id}">
                <img class = "image" src="${webformatURL}" alt="${tags}" loading="lazy"/>
                <div class="info">
                    <p class="info-item">
                        <b>likes:</b> 
                        ${likes}
                    </p>
                    <p class="info-item">
                        <b>views:</b> 
                        ${views}
                    </p>
                    <p class="info-item">
                        <b>comments:</b>
                        ${comments}
                    </p>
                    <p class="info-item">
                        <b>downloads:</b>
                        ${downloads}
                    </p>
                </div>
            </div>
        </a>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
