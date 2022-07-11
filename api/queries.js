import axios from 'axios';
import { apiUrl } from './utils';

export async function getPages() {
  const response = await axios.get(apiUrl('pages', { populate: '*' }));
  return response.data.data;
}

export async function getPage(slug) {
  const response = await axios.get(
    apiUrl('pages', {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: '*',
    })
  );
  return response.data.data[0];
}
