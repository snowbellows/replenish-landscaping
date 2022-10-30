import api from './index';

export async function getPages() {
  const response = await api.get('pages');
  return response.data.sort((a, b) => {
    return a.menu_order - b.menu_order;
  });
}

export async function getPage(slug) {
  const response = await api.get('pages/', { params: { slug } });
  return response.data[0];
}

export async function getHomePageReview() {
  const response = await api.get('review/', {
    params: { home_page_show: true },
  });
  const review = response.data[0].acf;

  console.log(review)
  return response.data[0].acf;
}
