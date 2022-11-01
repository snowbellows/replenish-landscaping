/* eslint-disable no-console */
import api from './index';
import { parseDateString } from '~/utils/data';

export async function getPages() {
  const response = await api.get('pages');
  return response.data.sort((a, b) => {
    return a.menu_order - b.menu_order;
  });
}

export async function getPage(slug) {
  const response = await api.get('pages/', { params: { slug } }).catch((e) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(e);
    }
  });
  return response.data[0];
}

export async function getHomePageReviews() {
  const response = await api
    .get('review/', {
      params: { home_page_show: true },
    })
    .catch((e) => {
      if (process.env.NODE_ENV !== 'production') {
        console.error(e);
      }
    });

  const reviews = response.data
    // We only care about WP custom fields
    .map((r) => r.acf)
    // Parse date string (formatted "20220101") to Date
    .map((r) => ({
      ...r,
      date: parseDateString(r.date),
    }));

  console.log(reviews);
  return reviews;
}
