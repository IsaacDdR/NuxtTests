import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as ProductCard } from '../../components/ProductCard.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyProductCard = import('../../components/ProductCard.vue' /* webpackChunkName: "components/product-card" */).then(c => wrapFunctional(c.default || c))
