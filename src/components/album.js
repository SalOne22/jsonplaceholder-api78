import { getData } from '../api';
import { addMarkup } from '../utils';
import { albumsListEl } from '../refs';
import { createAlbumCard } from '../markup';

window.addEventListener('load', init);

function init() {
  const params = new URLSearchParams(location.search);
  getData(`photos?albumId=${params.get('albumid')}`)
    .then((data) => {
      const markup = createAlbumCard(data);
      addMarkup(markup, albumsListEl);
    })
    .catch((error) => {
      console.log(error.message);
    });
}
