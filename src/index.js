import './css/main.css';
import { fetch } from './js/fetch';
import { createCard } from './js/markup';
import Notiflix from 'notiflix';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchForm = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.btn-add-load');

searchForm.addEventListener('submit', onSearchForm);
btnLoadMore.addEventListener('click', onBtnLoadMore);

let page = 1;
let simpleLightBox;
let q = '';
const perPage = 40;

function onSearchForm(e) {
  e.preventDefault();
  window.scrollTo({ top: 0 });
  page = 1;
  q = e.currentTarget.searchQuery.value.trim();
  gallery.innerHTML = '';
  //   btnLoadMore.classList.add('hidden');

  if (q === '') {
    alertNoEmptySearch();
    return;
  }
}

function onBtnLoadMore() {
  page += 1;
  simpleLightBox.destroy();
}
