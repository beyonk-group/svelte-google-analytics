
import { gaStore } from './store.js'

function addEvent (event, data) {
  if (!data.send_to) { delete data.send_to }
  gaStore.update(exisiting => [ ...exisiting, { type: 'event', event, data } ])
}

function setUserProperties (data) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'set', event: 'user_properties', data } ])
}

function setUserId (id) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'set', event: 'userId', data: id } ])
}

function setConfig (id, config = {}) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'config', event: id, data: config } ])
}

/**
 * all events
 * https://support.google.com/analytics/answer/9267735
 **/
const all = {
  /**
   * when a user has earned virtual currency
   **/
  earnVirtualCurrency: function eventName (virtual_currency_name, value, send_to) {
    addEvent('earn_virtual_currency', { virtual_currency_name, value, send_to })
  },

  /**
   * when a user joins a group
   **/
  joinGroup: function eventName (group_id, send_to) {
    addEvent('join_group', { group_id, send_to })
  },

  /**
   * when a user logs in.
   **/
  login: function eventName (method, send_to) {
    addEvent('login', { method, send_to })
  },

  /**
   * when a user completes a purchase
   **/
  purchase: function eventName (transaction_id, value, currency, tax, shipping, items, coupon, send_to) {
    addEvent('purchase', { transaction_id, value, currency, tax, shipping, items, coupon, send_to })
  },

  /**
   * when a user receives a refund
   **/
  refund: function eventName (transaction_id, value, currency, tax, shipping, items, send_to) {
    addEvent('refund', { transaction_id, value, currency, tax, shipping, items, send_to })
  },

  /**
   * when a user searches your content
   **/
  search: function eventName (search_term, send_to) {
    addEvent('search', { search_term, send_to })
  },

  /**
   * when a user has selected content
   **/
  selectContent: function eventName (content_type, item_id, send_to) {
    addEvent('select_content', { content_type, item_id, send_to })
  },

  /**
   * when a user has shared content
   **/
  share: function eventName (content_type, item_id, send_to) {
    addEvent('share', { content_type, item_id, send_to })
  },

  /**
   *
   **/
  signUp: function eventName (method, send_to) {
    addEvent('sign_up', { method, send_to })
  },

  /**
   * when a user has spent virtual currency (coins, gems, tokens, etc.)
   **/
  spendVirtualCurrency: function eventName (item_name, virtual_currency_name, value, send_to) {
    addEvent('spend_virtual_currency', { item_name, virtual_currency_name, value, send_to })
  },

  /**
   * when a user begins a tutorial
   **/
  tutorialBegin: function eventName () {
    addEvent('tutorial_begin', { })
  },

  /**
   * When a user completes a tutorial
   **/
  tutorialComplete: function eventName () {
    addEvent('tutorial_complete', { })
  }
}

/**
 * ecommerce events
 * https://support.google.com/analytics/answer/9268036
 **/
const ecommerce = {
  /**
   * when a user submits their payment information
   **/
  addPaymentInfo: function eventName (coupon, currency, items, payment_type, value, send_to) {
    addEvent('add_payment_info', { coupon, currency, items, payment_type, value, send_to })
  },

  /**
   * when a user submits their shipping information
   **/
  addShippingInfo: function eventName (coupon, currency, items, shipping_tier, value, send_to) {
    addEvent('add_shipping_info', { coupon, currency, items, shipping_tier, value, send_to })
  },

  /**
   * when a user adds items to cart
   **/
  addToCart: function eventName (currency, items, value, send_to) {
    addEvent('add_to_cart', { currency, items, value, send_to })
  },

  /**
   * when a user adds items to a wishlist
   **/
  addToWishlist: function eventName (currency, items, value, send_to) {
    addEvent('add_to_wishlist', { currency, items, value, send_to })
  },

  /**
   * when a user begins checkout
   **/
  beginCheckout: function eventName (coupon, currency, items, value, send_to) {
    addEvent('begin_checkout', { coupon, currency, items, value, send_to })
  },

  /**
   * when a user submits a form or request for information
   **/
  generateLead: function eventName (value, currency, send_to) {
    addEvent('generate_lead', { value, currency, send_to })
  },

  /**
   * when a user completes a purchase
   **/
  purchase: function eventName (affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to) {
    addEvent('purchase', { affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to })
  },

  /**
   * when a refund is issued
   **/
  refund: function eventName (affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to) {
    addEvent('refund', { affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to })
  },

  /**
   * when a user removes items from a cart
   **/
  removeFromCart: function eventName (currency, items, value, send_to) {
    addEvent('remove_from_cart', { currency, items, value, send_to })
  },

  /**
   * when an item is selected from a list
   **/
  selectItem: function eventName (items, item_list_name, item_list_id, send_to) {
    addEvent('select_item', { items, item_list_name, item_list_id, send_to })
  },

  /**
   * when a user selects a promotion
   **/
  selectPromotion: function eventName (items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to) {
    addEvent('select_promotion', { items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to })
  },

  /**
   * when a user views their cart
   **/
  viewCart: function eventName (currency, items, value, send_to) {
    addEvent('view_cart', { currency, items, value, send_to })
  },

  /**
   * when a user views an item
   **/
  viewItem: function eventName (currency, items, value, send_to) {
    addEvent('view_item', { currency, items, value, send_to })
  },

  /**
   * when a user sees a list of items/offerings
   **/
  viewItemList: function eventName (items, item_list_name, item_list_id, send_to) {
    addEvent('view_item_list', { items, item_list_name, item_list_id, send_to })
  },

  /**
   * when a promotion is shown to a user
   **/
  viewPromotion: function eventName (items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to) {
    addEvent('view_promotion', { items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to })
  }
}

/**
 * retail events
 * https://support.google.com/analytics/answer/9268037
 **/
const retail = {
  /**
   * when a user submits their payment information
   **/
  addPaymentInfo: function eventName (coupon, currency, items, payment_type, value, send_to) {
    addEvent('add_payment_info', { coupon, currency, items, payment_type, value, send_to })
  },

  /**
   * when a user submits their shipping information
   **/
  addShippingInfo: function eventName (coupon, currency, items, shipping_tier, value, send_to) {
    addEvent('add_shipping_info', { coupon, currency, items, shipping_tier, value, send_to })
  },

  /**
   * when a user adds items to cart
   **/
  addToCart: function eventName (currency, items, value, send_to) {
    addEvent('add_to_cart', { currency, items, value, send_to })
  },

  /**
   * when a user adds items to a wishlist
   **/
  addToWishlist: function eventName (currency, items, value, send_to) {
    addEvent('add_to_wishlist', { currency, items, value, send_to })
  },

  /**
   * when a user begins checkout
   **/
  beginCheckout: function eventName (coupon, currency, items, value, send_to) {
    addEvent('begin_checkout', { coupon, currency, items, value, send_to })
  },

  /**
   * when items are purchased by a user
   **/
  purchase: function eventName (affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to) {
    addEvent('purchase', { affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to })
  },

  /**
   * when a refund is issued
   **/
  refund: function eventName (affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to) {
    addEvent('refund', { affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to })
  },

  /**
   * when a user removes items from a cart
   **/
  removeFromCart: function eventName (currency, items, value, send_to) {
    addEvent('remove_from_cart', { currency, items, value, send_to })
  },

  /**
   * when an item is selected from a list
   **/
  selectItem: function eventName (items, item_list_name, item_list_id, send_to) {
    addEvent('select_item', { items, item_list_name, item_list_id, send_to })
  },

  /**
   * when a user selects a promotion
   **/
  selectPromotion: function eventName (items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to) {
    addEvent('select_promotion', { items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to })
  },

  /**
   * when a user views their cart
   **/
  viewCart: function eventName (currency, items, value, send_to) {
    addEvent('view_cart', { currency, items, value, send_to })
  },

  /**
   * when a user views an item
   **/
  viewItem: function eventName (currency, items, value, send_to) {
    addEvent('view_item', { currency, items, value, send_to })
  },

  /**
   * when a user sees a list of items/offerings
   **/
  viewItemList: function eventName (items, item_list_name, item_list_id, send_to) {
    addEvent('view_item_list', { items, item_list_name, item_list_id, send_to })
  },

  /**
   * when a promotion is shown to a user
   **/
  viewPromotion: function eventName (items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to) {
    addEvent('view_promotion', { items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to })
  }
}

/**
 * travel events
 * https://support.google.com/analytics/answer/9267738
 **/
const travel = {
  /**
   * when a user submits their payment information
   **/
  addPaymentInfo: function eventName (coupon, currency, items, payment_type, value, send_to) {
    addEvent('add_payment_info', { coupon, currency, items, payment_type, value, send_to })
  },

  /**
   * when a user submits their shipping information
   **/
  addShippingInfo: function eventName (coupon, currency, items, shipping_tier, value, send_to) {
    addEvent('add_shipping_info', { coupon, currency, items, shipping_tier, value, send_to })
  },

  /**
   * when a user adds items to cart
   **/
  addToCart: function eventName (currency, items, value, send_to) {
    addEvent('add_to_cart', { currency, items, value, send_to })
  },

  /**
   * when a user adds items to a wishlist
   **/
  addToWishlist: function eventName (currency, items, value, send_to) {
    addEvent('add_to_wishlist', { currency, items, value, send_to })
  },

  /**
   * when a user begins checkout
   **/
  beginCheckout: function eventName (coupon, currency, items, value, send_to) {
    addEvent('begin_checkout', { coupon, currency, items, value, send_to })
  },

  /**
   * when a user submits a form or request for information
   **/
  generateLead: function eventName (value, currency, send_to) {
    addEvent('generate_lead', { value, currency, send_to })
  },

  /**
   * when items are purchased by a user
   **/
  purchase: function eventName (affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to) {
    addEvent('purchase', { affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to })
  },

  /**
   * when a refund is issued
   **/
  refund: function eventName (affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to) {
    addEvent('refund', { affiliation, coupon, currency, items, transaction_id, shipping, tax, value, send_to })
  },

  /**
   * when a user removes items from a cart
   **/
  removeFromCart: function eventName (currency, items, value, send_to) {
    addEvent('remove_from_cart', { currency, items, value, send_to })
  },

  /**
   * when an item is selected from a list
   **/
  selectItem: function eventName (items, item_list_name, item_list_id, send_to) {
    addEvent('select_item', { items, item_list_name, item_list_id, send_to })
  },

  /**
   * when a user selects a promotion
   **/
  selectPromotion: function eventName (items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to) {
    addEvent('select_promotion', { items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to })
  },

  /**
   * when a user views their cart
   **/
  viewCart: function eventName (currency, items, value, send_to) {
    addEvent('view_cart', { currency, items, value, send_to })
  },

  /**
   * when a user views an item
   **/
  viewItem: function eventName (currency, items, value, send_to) {
    addEvent('view_item', { currency, items, value, send_to })
  },

  /**
   * when a user sees a list of items/offerings
   **/
  viewItemList: function eventName (items, item_list_name, item_list_id, send_to) {
    addEvent('view_item_list', { items, item_list_name, item_list_id, send_to })
  },

  /**
   * when a promotion is shown to a user
   **/
  viewPromotion: function eventName (items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to) {
    addEvent('view_promotion', { items, promotion_id, promotion_name, creative_name, creative_slot, location_id, send_to })
  }
}

/**
 * games events
 * https://support.google.com/analytics/answer/9267565
 **/
const games = {
  /**
   * when a user has earned virtual currency (coins, gems, tokens, etc.)
   **/
  earnVirtualCurrency: function eventName (virtual_currency_name, value, send_to) {
    addEvent('earn_virtual_currency', { virtual_currency_name, value, send_to })
  },

  /**
   * when a user joins a group. Allows you to track the popularity of various clans or user groups
   **/
  joinGroup: function eventName (group_id, send_to) {
    addEvent('join_group', { group_id, send_to })
  },

  /**
   * when a user completes a level in the game
   **/
  levelEnd: function eventName (level_name, success, send_to) {
    addEvent('level_end', { level_name, success, send_to })
  },

  /**
   * when a user starts a new level in the game
   **/
  levelStart: function eventName (level_name, send_to) {
    addEvent('level_start', { level_name, send_to })
  },

  /**
   * when a player levels-up in the game
   **/
  levelUp: function eventName (character, level, send_to) {
    addEvent('level_up', { character, level, send_to })
  },

  /**
   * when a player posts his or her score
   **/
  postScore: function eventName (level, character, score, send_to) {
    addEvent('post_score', { level, character, score, send_to })
  },

  /**
   * when a user has selected content
   **/
  selectContent: function eventName (content_type, item_id, send_to) {
    addEvent('select_content', { content_type, item_id, send_to })
  },

  /**
   * when a user has spent virtual currency (coins, gems, tokens, etc.)
   **/
  spendVirtualCurrency: function eventName (item_name, virtual_currency_name, value, send_to) {
    addEvent('spend_virtual_currency', { item_name, virtual_currency_name, value, send_to })
  },

  /**
   * when a user begins a tutorial
   **/
  tutorialBegin: function eventName () {
    addEvent('tutorial_begin', { })
  },

  /**
   * when a user completes a tutorial
   **/
  tutorialComplete: function eventName () {
    addEvent('tutorial_complete', { })
  },

  /**
   * when a player unlocks an achievement
   **/
  unlockAchievement: function eventName (achievement_id, send_to) {
    addEvent('unlock_achievement', { achievement_id, send_to })
  }
}

export {
  addEvent,
  setUserProperties,
  setUserId,
  setConfig,
  all,
  ecommerce,
  retail,
  travel,
  games
}
