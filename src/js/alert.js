import Notiflix from 'notiflix';
import '../css/main.css';

export function alertFound(data) {
  Notiflix.Notify.success(`We are found ${data.totalHits} images.`);
}

export function alertEmptySearch() {
  Notiflix.Notify.failure('Please specify your search query.');
}

export function alertNoSuchImages() {
  Notiflix.Notify.failure(
    'OOPS... there are no such images. Please try again.'
  );
}

export function alertEndSearch() {
  Notiflix.Notify.failure('Unfortunately this is the last image.');
}
