import React from 'react'
import Card from './Card/Card'
import './Body.css'

function Body() {

const resList= [
    {
        "type": "restaurant",
        "info": {
            "resId": 19193041,
            "name": "Burger King",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/19165593\/96bb2a4261a76f702bc8032c66526b49_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/3\/19165593\/96bb2a4261a76f702bc8032c66526b49_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "18.3K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "445",
                        "reviewTextSmall": "445 Reviews",
                        "subtext": "445 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "17.8K",
                        "reviewTextSmall": "17.8K Reviews",
                        "subtext": "17.8K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Nishatganj, Lucknow",
                "address": "Shop 17 & 18, Upper Ground Floor, Umrao Mall, Nishatganj, Lucknow",
                "localityUrl": "lucknow\/nishatganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/burger\/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "20 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/burger-king-2-nishatganj\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/burger-king-2-nishatganj\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19193041\",\"element_type\":\"listing\",\"rank\":1}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20440111,
            "name": "Pizza Cave",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20440111\/67eae013aa4d3ea8d7d8442925fff614_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/20440111\/67eae013aa4d3ea8d7d8442925fff614_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "2,716",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "2,716",
                        "reviewTextSmall": "2,716 Reviews",
                        "subtext": "2,716 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9350 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Indira Nagar, Lucknow",
                "address": "K 1, Maruti Npuram, Near Lekhraj Market, Indira Nagar, Lucknow",
                "localityUrl": "lucknow\/indira-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/pizza-cave-indira-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/pizza-cave-indira-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20440111\",\"element_type\":\"listing\",\"rank\":2}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9175 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 800260,
            "name": "McDonald's",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/800260\/29e3c3323d3e4230b30b130efaae9766_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/800260\/29e3c3323d3e4230b30b130efaae9766_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "16.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "1,179",
                        "reviewTextSmall": "1,179 Reviews",
                        "subtext": "1,179 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "15K",
                        "reviewTextSmall": "15K Reviews",
                        "subtext": "15K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.4"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "4.0"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9200 for one"
            },
            "locality": {
                "name": "Sahara Ganj Mall, Hazratganj, Lucknow",
                "address": "4th Floor, Sahara Ganj Mall, Shahnajaf Road, Hazratganj, Lucknow",
                "localityUrl": "lucknow\/restaurants\/in\/saharaganj-mall-hazratganj"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/burger\/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/coffee\/",
                    "name": "Coffee"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/cafes\/",
                    "name": "Cafe"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9200 for one"
            }
        },
        "order": {
            "deliveryTime": "23 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/mcdonalds-hazratganj\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/mcdonalds-hazratganj\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.1 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"800260\",\"element_type\":\"listing\",\"rank\":3}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20630438,
            "name": "Shri Balaji Dhaba",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/800496\/929efd00855e6cb1570141cbc437e3fb_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/800496\/929efd00855e6cb1570141cbc437e3fb_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.7",
                "rating_text": "3.7",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "6,349",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "45",
                        "reviewTextSmall": "45 Reviews",
                        "subtext": "45 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.1",
                        "reviewCount": "6,304",
                        "reviewTextSmall": "6,304 Reviews",
                        "subtext": "6,304 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.1",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9400 for two"
            },
            "cfo": {
                "text": "\u20b9200 for one"
            },
            "locality": {
                "name": "Aliganj, Lucknow",
                "address": "B-2\/363, Lower Ground Floor, Opposite Engineering College, Aliganj, Lucknow",
                "localityUrl": "lucknow\/aliganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/biryani\/",
                    "name": "Biryani"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/chinese\/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9200 for one"
            }
        },
        "order": {
            "deliveryTime": "34 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/shri-balaji-dhaba-1-aliganj\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/shri-balaji-dhaba-1-aliganj\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20630438\",\"element_type\":\"listing\",\"rank\":4}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat 20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20577420,
            "name": "Rominus Pizza And Burger",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/20577420\/7cbb7ebf7bef38284e43f0e239a0d00f_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/20577420\/7cbb7ebf7bef38284e43f0e239a0d00f_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "8,475",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.1",
                        "reviewCount": "600",
                        "reviewTextSmall": "600 Reviews",
                        "subtext": "600 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.1",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.4",
                        "reviewCount": "7,875",
                        "reviewTextSmall": "7,875 Reviews",
                        "subtext": "7,875 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.4",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.4"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.1"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9200 for one"
            },
            "locality": {
                "name": "Jopling Road, Lucknow",
                "address": "Plot 2\/C-66, UGF, Ekta Market, Vikas Nagar, Jopling Road, Lucknow",
                "localityUrl": "lucknow\/jopling-road-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/pizza\/",
                    "name": "Pizza"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/burger\/",
                    "name": "Burger"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/desserts\/",
                    "name": "Desserts"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9200 for one"
            }
        },
        "order": {
            "deliveryTime": "34 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/rominus-pizza-and-burger-jopling-road\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/rominus-pizza-and-burger-jopling-road\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20577420\",\"element_type\":\"listing\",\"rank\":5}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9175 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 801146,
            "name": "Madhurima Veg",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/801146\/7bfb5cc9f1c8171d78267a5d58830b87_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/801146\/7bfb5cc9f1c8171d78267a5d58830b87_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "49.5K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.0",
                        "reviewCount": "911",
                        "reviewTextSmall": "911 Reviews",
                        "subtext": "911 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.0",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.3",
                        "reviewCount": "48.6K",
                        "reviewTextSmall": "48.6K Reviews",
                        "subtext": "48.6K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.3",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.3"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9900 for two"
            },
            "cfo": {
                "text": "\u20b9400 for one"
            },
            "locality": {
                "name": "Gomti Nagar, Lucknow",
                "address": "2, Vibhuti Khand, Railway Station Road, Gomti Nagar, Lucknow",
                "localityUrl": "lucknow\/gomti-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/beverages\/",
                    "name": "Beverages"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/shake\/",
                    "name": "Shake"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9400 for one"
            }
        },
        "order": {
            "deliveryTime": "37 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/madhurima-veg-1-gomti-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/madhurima-veg-1-gomti-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "4.6 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"801146\",\"element_type\":\"listing\",\"rank\":6}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 19535116,
            "name": "Pawan Sweet & Bhojnalay",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19535116\/ec6f7b17559d4963b86553680e8dd0c5_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/19535116\/ec6f7b17559d4963b86553680e8dd0c5_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "8,424",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.2",
                        "reviewCount": "20",
                        "reviewTextSmall": "20 Reviews",
                        "subtext": "20 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "8,404",
                        "reviewTextSmall": "8,404 Reviews",
                        "subtext": "8,404 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.7"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Indira Nagar, Lucknow",
                "address": "Surendar Nagar, Kamta, Indira Nagar, Lucknow",
                "localityUrl": "lucknow\/indira-nagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/street-food\/",
                    "name": "Street Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/mithai\/",
                    "name": "Mithai"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/chinese\/",
                    "name": "Chinese"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "36 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/pawan-sweet-bhojnalay-indira-nagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/pawan-sweet-bhojnalay-indira-nagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "6.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19535116\",\"element_type\":\"listing\",\"rank\":7}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9175 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 801712,
            "name": "New Lucknow Kitchen",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/801712\/6d284e70705fd28f98158764c23ac9e6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/2\/801712\/6d284e70705fd28f98158764c23ac9e6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.0",
                "rating_text": "4.0",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "65.4K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.9",
                        "reviewCount": "607",
                        "reviewTextSmall": "607 Reviews",
                        "subtext": "607 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.9",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "600"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "64.8K",
                        "reviewTextSmall": "64.8K Reviews",
                        "subtext": "64.8K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b91,200 for two"
            },
            "cfo": {
                "text": "\u20b9500 for one"
            },
            "locality": {
                "name": "Jankipuram, Lucknow",
                "address": "B2\/132, Sector F, Sitapur Road, Jankipuram, Lucknow",
                "localityUrl": "lucknow\/jankipuram-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/south-indian\/",
                    "name": "South Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/fast-food\/",
                    "name": "Fast Food"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODNcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/sea-food\/",
                    "name": "Seafood"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/mughlai\/",
                    "name": "Mughlai"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/desserts\/",
                    "name": "Desserts"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/beverages\/",
                    "name": "Beverages"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9500 for one"
            }
        },
        "order": {
            "deliveryTime": "39 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/new-lucknow-kitchen-jankipuram\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/new-lucknow-kitchen-jankipuram\/order",
            "clickActionDeeplink": ""
        },
        "distance": "5.3 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"801712\",\"element_type\":\"listing\",\"rank\":8}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9200 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 800176,
            "name": "Punjabi Dhaba - Aliganj",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/800176\/e6bf33751286b94ce10b5909754f3720_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/6\/800176\/e6bf33751286b94ce10b5909754f3720_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.1",
                "rating_text": "4.1",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "16.9K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "",
                        "reviewCount": "0",
                        "reviewTextSmall": "0 Reviews",
                        "subtext": "Does not offer Dining",
                        "color": "",
                        "ratingV2": "-",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "grey",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "16.9K",
                        "reviewTextSmall": "16.9K Reviews",
                        "subtext": "16.9K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.7"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Aliganj, Lucknow",
                "address": "9, UGF Complex, Aliganj, Lucknow",
                "localityUrl": "lucknow\/aliganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/north-indian\/",
                    "name": "North Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/modern-indian\/",
                    "name": "Modern Indian"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/biryani\/",
                    "name": "Biryani"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "25 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/punjabi-dhaba-aliganj-aliganj\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/punjabi-dhaba-aliganj-aliganj\/order",
            "clickActionDeeplink": ""
        },
        "distance": "3.4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"800176\",\"element_type\":\"listing\",\"rank\":9}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9200 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 18700290,
            "name": "City Dhaba & Family Restaurant",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18700290\/dbfec368d7d883f549109d68b66e0d5b_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/0\/18700290\/dbfec368d7d883f549109d68b66e0d5b_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "37.7K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "357",
                        "reviewTextSmall": "357 Reviews",
                        "subtext": "357 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "37.3K",
                        "reviewTextSmall": "37.3K Reviews",
                        "subtext": "37.3K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9300 for two"
            },
            "cfo": {
                "text": "\u20b9150 for one"
            },
            "locality": {
                "name": "Aliganj, Lucknow",
                "address": "C-1 and 2, SECTOR -N, Aliganj, Lucknow",
                "localityUrl": "lucknow\/aliganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/north-indian\/",
                    "name": "North Indian"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9150 for one"
            }
        },
        "order": {
            "deliveryTime": "29 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/city-dhaba-family-restaurant-aliganj\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/city-dhaba-family-restaurant-aliganj\/order",
            "clickActionDeeplink": ""
        },
        "distance": "4 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18700290\",\"element_type\":\"listing\",\"rank\":10}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "\u20b9150 OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 801511,
            "name": "Grandson Of Tunday Kababi",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/801511\/cb7c453a14b20232efab4253c9e102d7_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/1\/801511\/cb7c453a14b20232efab4253c9e102d7_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "3.6",
                "rating_text": "3.6",
                "rating_subtitle": "Good",
                "rating_color": "9ACD32",
                "votes": "64.2K",
                "subtext": "REVIEWS",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "3.3",
                        "reviewCount": "585",
                        "reviewTextSmall": "585 Reviews",
                        "subtext": "585 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "3.3",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "500"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.0",
                        "reviewCount": "63.7K",
                        "reviewTextSmall": "63.7K Reviews",
                        "subtext": "63.7K Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.0",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.9"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.7"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9500 for two"
            },
            "cfo": {
                "text": "\u20b9200 for one"
            },
            "locality": {
                "name": "Aliganj, Lucknow",
                "address": "Shop 41, Rahim Nagar, Aliganj, Lucknow",
                "localityUrl": "lucknow\/aliganj-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/kebab\/",
                    "name": "Kebab"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/rolls\/",
                    "name": "Rolls"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9200 for one"
            }
        },
        "order": {
            "deliveryTime": "31 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/grandson-of-tunday-kababi-aliganj\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/grandson-of-tunday-kababi-aliganj\/order",
            "clickActionDeeplink": ""
        },
        "distance": "2.7 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"801511\",\"element_type\":\"listing\",\"rank\":11}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [],
        "isDisabled": false,
        "bottomContainers": []
    },
    {
        "type": "restaurant",
        "info": {
            "resId": 20535353,
            "name": "Chinese Wok",
            "image": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20535353\/d26a19eb9a008f75323c09ed12ef25a6_o2_featured_v2.jpg"
            },
            "o2FeaturedImage": {
                "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20535353\/d26a19eb9a008f75323c09ed12ef25a6_o2_featured_v2.jpg"
            },
            "rating": {
                "has_fake_reviews": 0,
                "aggregate_rating": "4.2",
                "rating_text": "4.2",
                "rating_subtitle": "Very Good",
                "rating_color": "5BA829",
                "votes": "1,968",
                "subtext": "REVIEW",
                "is_new": false
            },
            "ratingNew": {
                "newlyOpenedObj": null,
                "suspiciousReviewObj": null,
                "ratings": {
                    "DINING": {
                        "rating_type": "DINING",
                        "rating": "4.2",
                        "reviewCount": "207",
                        "reviewTextSmall": "207 Reviews",
                        "subtext": "207 Dining Reviews",
                        "color": "#1C1C1C",
                        "ratingV2": "4.2",
                        "subtitle": "DINING",
                        "sideSubTitle": "Dining Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDining": false
                    },
                    "DELIVERY": {
                        "rating_type": "DELIVERY",
                        "rating": "4.2",
                        "reviewCount": "1,761",
                        "reviewTextSmall": "1,761 Reviews",
                        "subtext": "1,761 Delivery Reviews",
                        "color": "#E23744",
                        "ratingV2": "4.2",
                        "subtitle": "DELIVERY",
                        "sideSubTitle": "Delivery Ratings",
                        "bgColorV2": {
                            "type": "green",
                            "tint": "700"
                        },
                        "newOnDelivery": false,
                        "bucketRatings": {
                            "buckets": [
                                {
                                    "title": "Under 4 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "700"
                                    },
                                    "rating": "4.2"
                                },
                                {
                                    "title": "4 km to 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "4.0"
                                },
                                {
                                    "title": "Above 7 km",
                                    "bgColor": {
                                        "type": "green",
                                        "tint": "600"
                                    },
                                    "rating": "3.8"
                                }
                            ],
                            "tooltip": {
                                "title": "For orders under 4 km",
                                "bgColor": {
                                    "type": "green",
                                    "tint": "050"
                                },
                                "borderColor": {
                                    "type": "green",
                                    "tint": "300"
                                }
                            }
                        }
                    }
                }
            },
            "cft": {
                "text": "\u20b9700 for two"
            },
            "cfo": {
                "text": "\u20b9300 for one"
            },
            "locality": {
                "name": "Mahanagar, Lucknow",
                "address": "Unit 07 & 08, Upper Ground Floor, Umrao Mall, Mahanagar, Lucknow",
                "localityUrl": "lucknow\/mahanagar-restaurants"
            },
            "timing": {
                "text": "",
                "color": ""
            },
            "cuisine": [
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/chinese\/",
                    "name": "Chinese"
                },
                {
                    "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA1MVwiXX0iXQ%3D%3D",
                    "url": "https:\/\/www.zomato.com\/lucknow\/restaurants\/momos\/",
                    "name": "Momos"
                }
            ],
            "should_ban_ugc": false,
            "costText": {
                "text": "\u20b9300 for one"
            }
        },
        "order": {
            "deliveryTime": "23 min",
            "isServiceable": true,
            "hasOnlineOrdering": true,
            "actionInfo": {
                "text": "Order Now",
                "clickUrl": "\/lucknow\/chinese-wok-mahanagar\/order"
            }
        },
        "gold": [],
        "takeaway": [],
        "cardAction": {
            "text": "",
            "clickUrl": "\/lucknow\/chinese-wok-mahanagar\/order",
            "clickActionDeeplink": ""
        },
        "distance": "1.2 km",
        "isPromoted": false,
        "promotedText": "",
        "trackingData": [
            {
                "table_name": "zsearch_events_log",
                "payload": "{\"search_id\":\"d50763f6-ed4b-4193-b5b3-2a0aacad89e0\",\"location_type\":\"delivery_cell\",\"location_id\":\"4151190155136335872\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20535353\",\"element_type\":\"listing\",\"rank\":12}",
                "event_names": {
                    "tap": "{\"action\":\"tap\"}",
                    "impression": "{\"action\":\"impression\"}"
                }
            }
        ],
        "allCTA": [],
        "promoOffer": "",
        "checkBulkOffers": true,
        "bulkOffers": [
            {
                "text": "Flat 20% OFF",
                "color": {
                    "tint": "500",
                    "type": "blue"
                }
            }
        ],
        "isDisabled": false,
        "bottomContainers": []
    }
];

  return (
    <div>
        <div className="cards-wrapper">
            <div className='search-bar'>Search</div>
            <div className="cards-container">
               {
                resList.map((val, i) => (
                    <Card key={i} resData={val} />
                  )) 
                }
            </div>
        </div>
    </div>
  )
}

export default Body
