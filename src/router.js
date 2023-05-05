import { wrap } from 'svelte-spa-router/wrap'

import index from './views/index.svelte'


export const routes = {
  '/': index,
  '/nft-storage': wrap({ asyncComponent: () => import('./views/NftStorage.svelte') }),
  '/mfs': wrap({ asyncComponent: () => import('./views/MFS.svelte') }),
}