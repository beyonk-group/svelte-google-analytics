/**
 * ------------------------------------------------------------
 * GENERATED FILE. DO NOT DIRECTLY EDIT
 * ------------------------------------------------------------
 **/
import { gaStore } from './store.js'

function addEvent (event, data) {
  if (!data.send_to) { delete data.send_to }
  gaStore.update(exisiting => [ ...exisiting, { type: 'event', event, data } ])
}

function setUserProperties (data) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'set', event: 'user_properties', data } ])
}

function setUserId (id) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'set', event: 'userId', data: id } ]);
}

function setConfig (id, config = {}) {
  gaStore.update(exisiting => [ ...exisiting, { type: 'config', event: id, data: config } ]);
}

/**
 * all events
 * @see https://support.google.com/analytics/answer/9267735
 **/
const all = {
  /**
   * a user sees an ad impression, for app only
   * @see https://firebase.google.com/docs/analytics/measure-ad-revenue
   **/
  adImpression: function eventName (params = {}) {
    addEvent('ad_impression', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user logs in
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login
   **/
  login: function eventName (params = {}) {
    addEvent('login', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user searches your content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search
   **/
  search: function eventName (params = {}) {
    addEvent('search', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user shares content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share
   **/
  share: function eventName (params = {}) {
    addEvent('share', params)
  },

  /**
   * a user signs up to measure the popularity of each sign-up method
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up
   **/
  signUp: function eventName (params = {}) {
    addEvent('sign_up', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user submits their payment information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info
   **/
  addPaymentInfo: function eventName (params = {}) {
    addEvent('add_payment_info', params)
  },

  /**
   * a user submits their shipping information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info
   **/
  addShippingInfo: function eventName (params = {}) {
    addEvent('add_shipping_info', params)
  },

  /**
   * a user adds items to cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart
   **/
  addToCart: function eventName (params = {}) {
    addEvent('add_to_cart', params)
  },

  /**
   * a user adds items to a wishlist
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist
   **/
  addToWishlist: function eventName (params = {}) {
    addEvent('add_to_wishlist', params)
  },

  /**
   * a user begins checkout
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout
   **/
  beginCheckout: function eventName (params = {}) {
    addEvent('begin_checkout', params)
  },

  /**
   * a user submits a form or a request for information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead
   **/
  generateLead: function eventName (params = {}) {
    addEvent('generate_lead', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user removes items from a cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart
   **/
  removeFromCart: function eventName (params = {}) {
    addEvent('remove_from_cart', params)
  },

  /**
   * a user selects an item from a list
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item
   **/
  selectItem: function eventName (params = {}) {
    addEvent('select_item', params)
  },

  /**
   * a user selects a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion
   **/
  selectPromotion: function eventName (params = {}) {
    addEvent('select_promotion', params)
  },

  /**
   * a user views their cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart
   **/
  viewCart: function eventName (params = {}) {
    addEvent('view_cart', params)
  },

  /**
   * a user views an item
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item
   **/
  viewItem: function eventName (params = {}) {
    addEvent('view_item', params)
  },

  /**
   * a user sees a list of items/offerings
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list
   **/
  viewItemList: function eventName (params = {}) {
    addEvent('view_item_list', params)
  },

  /**
   * a user sees a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion
   **/
  viewPromotion: function eventName (params = {}) {
    addEvent('view_promotion', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user completes a level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end
   **/
  levelEnd: function eventName (params = {}) {
    addEvent('level_end', params)
  },

  /**
   * a user starts a new level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start
   **/
  levelStart: function eventName (params = {}) {
    addEvent('level_start', params)
  },

  /**
   * a user levels-up in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up
   **/
  levelUp: function eventName (params = {}) {
    addEvent('level_up', params)
  },

  /**
   * a user posts their score
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score
   **/
  postScore: function eventName (params = {}) {
    addEvent('post_score', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user unlocks an achievement
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement
   **/
  unlockAchievement: function eventName (params = {}) {
    addEvent('unlock_achievement', params)
  }
}

/**
 * ecommerce events
 * @see https://support.google.com/analytics/answer/9268036
 **/
const ecommerce = {
  /**
   * a user sees an ad impression, for app only
   * @see https://firebase.google.com/docs/analytics/measure-ad-revenue
   **/
  adImpression: function eventName (params = {}) {
    addEvent('ad_impression', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user logs in
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login
   **/
  login: function eventName (params = {}) {
    addEvent('login', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user searches your content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search
   **/
  search: function eventName (params = {}) {
    addEvent('search', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user shares content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share
   **/
  share: function eventName (params = {}) {
    addEvent('share', params)
  },

  /**
   * a user signs up to measure the popularity of each sign-up method
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up
   **/
  signUp: function eventName (params = {}) {
    addEvent('sign_up', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user submits their payment information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info
   **/
  addPaymentInfo: function eventName (params = {}) {
    addEvent('add_payment_info', params)
  },

  /**
   * a user submits their shipping information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info
   **/
  addShippingInfo: function eventName (params = {}) {
    addEvent('add_shipping_info', params)
  },

  /**
   * a user adds items to cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart
   **/
  addToCart: function eventName (params = {}) {
    addEvent('add_to_cart', params)
  },

  /**
   * a user adds items to a wishlist
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist
   **/
  addToWishlist: function eventName (params = {}) {
    addEvent('add_to_wishlist', params)
  },

  /**
   * a user begins checkout
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout
   **/
  beginCheckout: function eventName (params = {}) {
    addEvent('begin_checkout', params)
  },

  /**
   * a user submits a form or a request for information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead
   **/
  generateLead: function eventName (params = {}) {
    addEvent('generate_lead', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user removes items from a cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart
   **/
  removeFromCart: function eventName (params = {}) {
    addEvent('remove_from_cart', params)
  },

  /**
   * a user selects an item from a list
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item
   **/
  selectItem: function eventName (params = {}) {
    addEvent('select_item', params)
  },

  /**
   * a user selects a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion
   **/
  selectPromotion: function eventName (params = {}) {
    addEvent('select_promotion', params)
  },

  /**
   * a user views their cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart
   **/
  viewCart: function eventName (params = {}) {
    addEvent('view_cart', params)
  },

  /**
   * a user views an item
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item
   **/
  viewItem: function eventName (params = {}) {
    addEvent('view_item', params)
  },

  /**
   * a user sees a list of items/offerings
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list
   **/
  viewItemList: function eventName (params = {}) {
    addEvent('view_item_list', params)
  },

  /**
   * a user sees a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion
   **/
  viewPromotion: function eventName (params = {}) {
    addEvent('view_promotion', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user completes a level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end
   **/
  levelEnd: function eventName (params = {}) {
    addEvent('level_end', params)
  },

  /**
   * a user starts a new level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start
   **/
  levelStart: function eventName (params = {}) {
    addEvent('level_start', params)
  },

  /**
   * a user levels-up in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up
   **/
  levelUp: function eventName (params = {}) {
    addEvent('level_up', params)
  },

  /**
   * a user posts their score
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score
   **/
  postScore: function eventName (params = {}) {
    addEvent('post_score', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user unlocks an achievement
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement
   **/
  unlockAchievement: function eventName (params = {}) {
    addEvent('unlock_achievement', params)
  }
}

/**
 * retail events
 * @see https://support.google.com/analytics/answer/9268037
 **/
const retail = {
  /**
   * a user sees an ad impression, for app only
   * @see https://firebase.google.com/docs/analytics/measure-ad-revenue
   **/
  adImpression: function eventName (params = {}) {
    addEvent('ad_impression', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user logs in
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login
   **/
  login: function eventName (params = {}) {
    addEvent('login', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user searches your content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search
   **/
  search: function eventName (params = {}) {
    addEvent('search', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user shares content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share
   **/
  share: function eventName (params = {}) {
    addEvent('share', params)
  },

  /**
   * a user signs up to measure the popularity of each sign-up method
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up
   **/
  signUp: function eventName (params = {}) {
    addEvent('sign_up', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user submits their payment information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info
   **/
  addPaymentInfo: function eventName (params = {}) {
    addEvent('add_payment_info', params)
  },

  /**
   * a user submits their shipping information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info
   **/
  addShippingInfo: function eventName (params = {}) {
    addEvent('add_shipping_info', params)
  },

  /**
   * a user adds items to cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart
   **/
  addToCart: function eventName (params = {}) {
    addEvent('add_to_cart', params)
  },

  /**
   * a user adds items to a wishlist
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist
   **/
  addToWishlist: function eventName (params = {}) {
    addEvent('add_to_wishlist', params)
  },

  /**
   * a user begins checkout
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout
   **/
  beginCheckout: function eventName (params = {}) {
    addEvent('begin_checkout', params)
  },

  /**
   * a user submits a form or a request for information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead
   **/
  generateLead: function eventName (params = {}) {
    addEvent('generate_lead', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user removes items from a cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart
   **/
  removeFromCart: function eventName (params = {}) {
    addEvent('remove_from_cart', params)
  },

  /**
   * a user selects an item from a list
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item
   **/
  selectItem: function eventName (params = {}) {
    addEvent('select_item', params)
  },

  /**
   * a user selects a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion
   **/
  selectPromotion: function eventName (params = {}) {
    addEvent('select_promotion', params)
  },

  /**
   * a user views their cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart
   **/
  viewCart: function eventName (params = {}) {
    addEvent('view_cart', params)
  },

  /**
   * a user views an item
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item
   **/
  viewItem: function eventName (params = {}) {
    addEvent('view_item', params)
  },

  /**
   * a user sees a list of items/offerings
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list
   **/
  viewItemList: function eventName (params = {}) {
    addEvent('view_item_list', params)
  },

  /**
   * a user sees a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion
   **/
  viewPromotion: function eventName (params = {}) {
    addEvent('view_promotion', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user completes a level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end
   **/
  levelEnd: function eventName (params = {}) {
    addEvent('level_end', params)
  },

  /**
   * a user starts a new level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start
   **/
  levelStart: function eventName (params = {}) {
    addEvent('level_start', params)
  },

  /**
   * a user levels-up in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up
   **/
  levelUp: function eventName (params = {}) {
    addEvent('level_up', params)
  },

  /**
   * a user posts their score
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score
   **/
  postScore: function eventName (params = {}) {
    addEvent('post_score', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user unlocks an achievement
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement
   **/
  unlockAchievement: function eventName (params = {}) {
    addEvent('unlock_achievement', params)
  }
}

/**
 * travel events
 * @see https://support.google.com/analytics/answer/9267738
 **/
const travel = {
  /**
   * a user sees an ad impression, for app only
   * @see https://firebase.google.com/docs/analytics/measure-ad-revenue
   **/
  adImpression: function eventName (params = {}) {
    addEvent('ad_impression', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user logs in
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login
   **/
  login: function eventName (params = {}) {
    addEvent('login', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user searches your content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search
   **/
  search: function eventName (params = {}) {
    addEvent('search', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user shares content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share
   **/
  share: function eventName (params = {}) {
    addEvent('share', params)
  },

  /**
   * a user signs up to measure the popularity of each sign-up method
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up
   **/
  signUp: function eventName (params = {}) {
    addEvent('sign_up', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user submits their payment information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info
   **/
  addPaymentInfo: function eventName (params = {}) {
    addEvent('add_payment_info', params)
  },

  /**
   * a user submits their shipping information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info
   **/
  addShippingInfo: function eventName (params = {}) {
    addEvent('add_shipping_info', params)
  },

  /**
   * a user adds items to cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart
   **/
  addToCart: function eventName (params = {}) {
    addEvent('add_to_cart', params)
  },

  /**
   * a user adds items to a wishlist
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist
   **/
  addToWishlist: function eventName (params = {}) {
    addEvent('add_to_wishlist', params)
  },

  /**
   * a user begins checkout
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout
   **/
  beginCheckout: function eventName (params = {}) {
    addEvent('begin_checkout', params)
  },

  /**
   * a user submits a form or a request for information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead
   **/
  generateLead: function eventName (params = {}) {
    addEvent('generate_lead', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user removes items from a cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart
   **/
  removeFromCart: function eventName (params = {}) {
    addEvent('remove_from_cart', params)
  },

  /**
   * a user selects an item from a list
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item
   **/
  selectItem: function eventName (params = {}) {
    addEvent('select_item', params)
  },

  /**
   * a user selects a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion
   **/
  selectPromotion: function eventName (params = {}) {
    addEvent('select_promotion', params)
  },

  /**
   * a user views their cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart
   **/
  viewCart: function eventName (params = {}) {
    addEvent('view_cart', params)
  },

  /**
   * a user views an item
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item
   **/
  viewItem: function eventName (params = {}) {
    addEvent('view_item', params)
  },

  /**
   * a user sees a list of items/offerings
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list
   **/
  viewItemList: function eventName (params = {}) {
    addEvent('view_item_list', params)
  },

  /**
   * a user sees a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion
   **/
  viewPromotion: function eventName (params = {}) {
    addEvent('view_promotion', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user completes a level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end
   **/
  levelEnd: function eventName (params = {}) {
    addEvent('level_end', params)
  },

  /**
   * a user starts a new level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start
   **/
  levelStart: function eventName (params = {}) {
    addEvent('level_start', params)
  },

  /**
   * a user levels-up in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up
   **/
  levelUp: function eventName (params = {}) {
    addEvent('level_up', params)
  },

  /**
   * a user posts their score
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score
   **/
  postScore: function eventName (params = {}) {
    addEvent('post_score', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user unlocks an achievement
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement
   **/
  unlockAchievement: function eventName (params = {}) {
    addEvent('unlock_achievement', params)
  }
}

/**
 * games events
 * @see https://support.google.com/analytics/answer/9267565
 **/
const games = {
  /**
   * a user sees an ad impression, for app only
   * @see https://firebase.google.com/docs/analytics/measure-ad-revenue
   **/
  adImpression: function eventName (params = {}) {
    addEvent('ad_impression', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user logs in
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#login
   **/
  login: function eventName (params = {}) {
    addEvent('login', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user searches your content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#search
   **/
  search: function eventName (params = {}) {
    addEvent('search', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user shares content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#share
   **/
  share: function eventName (params = {}) {
    addEvent('share', params)
  },

  /**
   * a user signs up to measure the popularity of each sign-up method
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#sign_up
   **/
  signUp: function eventName (params = {}) {
    addEvent('sign_up', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user submits their payment information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_payment_info
   **/
  addPaymentInfo: function eventName (params = {}) {
    addEvent('add_payment_info', params)
  },

  /**
   * a user submits their shipping information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_shipping_info
   **/
  addShippingInfo: function eventName (params = {}) {
    addEvent('add_shipping_info', params)
  },

  /**
   * a user adds items to cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_cart
   **/
  addToCart: function eventName (params = {}) {
    addEvent('add_to_cart', params)
  },

  /**
   * a user adds items to a wishlist
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#add_to_wishlist
   **/
  addToWishlist: function eventName (params = {}) {
    addEvent('add_to_wishlist', params)
  },

  /**
   * a user begins checkout
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#begin_checkout
   **/
  beginCheckout: function eventName (params = {}) {
    addEvent('begin_checkout', params)
  },

  /**
   * a user submits a form or a request for information
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#generate_lead
   **/
  generateLead: function eventName (params = {}) {
    addEvent('generate_lead', params)
  },

  /**
   * a user completes a purchase
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#purchase
   **/
  purchase: function eventName (params = {}) {
    addEvent('purchase', params)
  },

  /**
   * a user receives a refund
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#refund
   **/
  refund: function eventName (params = {}) {
    addEvent('refund', params)
  },

  /**
   * a user removes items from a cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#remove_from_cart
   **/
  removeFromCart: function eventName (params = {}) {
    addEvent('remove_from_cart', params)
  },

  /**
   * a user selects an item from a list
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_item
   **/
  selectItem: function eventName (params = {}) {
    addEvent('select_item', params)
  },

  /**
   * a user selects a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_promotion
   **/
  selectPromotion: function eventName (params = {}) {
    addEvent('select_promotion', params)
  },

  /**
   * a user views their cart
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_cart
   **/
  viewCart: function eventName (params = {}) {
    addEvent('view_cart', params)
  },

  /**
   * a user views an item
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item
   **/
  viewItem: function eventName (params = {}) {
    addEvent('view_item', params)
  },

  /**
   * a user sees a list of items/offerings
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_item_list
   **/
  viewItemList: function eventName (params = {}) {
    addEvent('view_item_list', params)
  },

  /**
   * a user sees a promotion
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#view_promotion
   **/
  viewPromotion: function eventName (params = {}) {
    addEvent('view_promotion', params)
  },

  /**
   * a user earns virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#earn_virtual_currency
   **/
  earnVirtualCurrency: function eventName (params = {}) {
    addEvent('earn_virtual_currency', params)
  },

  /**
   * a user joins a group to measure the popularity of each group
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#join_group
   **/
  joinGroup: function eventName (params = {}) {
    addEvent('join_group', params)
  },

  /**
   * a user completes a level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_end
   **/
  levelEnd: function eventName (params = {}) {
    addEvent('level_end', params)
  },

  /**
   * a user starts a new level in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_start
   **/
  levelStart: function eventName (params = {}) {
    addEvent('level_start', params)
  },

  /**
   * a user levels-up in the game
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#level_up
   **/
  levelUp: function eventName (params = {}) {
    addEvent('level_up', params)
  },

  /**
   * a user posts their score
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#post_score
   **/
  postScore: function eventName (params = {}) {
    addEvent('post_score', params)
  },

  /**
   * a user selects content
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#select_content
   **/
  selectContent: function eventName (params = {}) {
    addEvent('select_content', params)
  },

  /**
   * a user spends virtual currency (coins, gems, tokens, etc.)
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#spend_virtual_currency
   **/
  spendVirtualCurrency: function eventName (params = {}) {
    addEvent('spend_virtual_currency', params)
  },

  /**
   * a user begins a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_begin
   **/
  tutorialBegin: function eventName (params = {}) {
    addEvent('tutorial_begin', params)
  },

  /**
   * a user completes a tutorial
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#tutorial_complete
   **/
  tutorialComplete: function eventName (params = {}) {
    addEvent('tutorial_complete', params)
  },

  /**
   * a user unlocks an achievement
   * @see https://developers.google.com/analytics/devguides/collection/ga4/reference/events#unlock_achievement
   **/
  unlockAchievement: function eventName (params = {}) {
    addEvent('unlock_achievement', params)
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
