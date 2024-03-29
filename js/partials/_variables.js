const siteURL = "https://ahoylemon.github.io/notpoutine.fyi";

const crimes = [

  {
    name:        "Hypernova Scotia",
    place:       "The Lobster Shanty",
    pic:         "hypernova.jpg",
    city:        "Salem",
    state:       "MA",
    country:     "US",
    map:         "https://www.google.com/maps/place/The+Lobster+Shanty/@42.5203128,-70.8946345,15z/data=!4m5!3m4!1s0x0:0x20921dee29f4ddd5!8m2!3d42.5203128!4d-70.8946345",
    price:       69.14,
    description: `A big ol' serving of our amazing Nova Scotia poutine topped with 6 oz. of fried scallops AND 6 oz. of butter poached lobster meat; a MONSTER DISH" (Submitter's note: it has New England clam chowder poured on top)`,
    requirements: {
          fries: true,
          curds: true,
          gravy: false
    }
  },

  {
    name:        "Sweet Potato Poutine",
    place:       "The Blue Barn (Minnesota State Fair)",
    pic:         "statefair-sweetpotato.jpg",
    city:        "Falcon Heights",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/VMxDdiqLRMgyKGXC8",
    price:       21.99,
    description: `Sweet potato waffle fries topped with cheese curds, Beyond chorizo sausage, turmeric gravy, pico de gallo and fresh cilantro. (Vegetarian)`,
    requirements: {
          fries: false,
          curds: true,
          gravy: false
    }
  },

  {
    name:        "Tater Tot Poutine",
    place:       "Precinct 10",
    pic:         "precinct-10.jpg",
    city:        "Weymouth",
    state:       "MA",
    country:     "US",
    map:         "https://www.google.com/maps/place/Precinct+10/@42.2038789,-70.9543861,15z/data=!4m5!3m4!1s0x0:0x4ccb77aa9f5cb2c4!8m2!3d42.2038789!4d-70.9543861",
    price:       20.42,
    description: "crunchy tots, red wine demi glace, 10-cheese sauce, house smoked pulled pork, scallions, truffle oil",
    requirements: {
          fries: false,
          curds: false,
          gravy: true
    }
  },

  {
    name:        "Tandoori Chicken Poutine",
    place:       "Chauhan Ale and Masala House",
    pic:         "chauhan-tandoori.jpg",
    city:        "Nashville",
    state:       "TN",
    country:     "US",
    map:         "https://goo.gl/maps/buHXY1yNdDT2Frt17",
    price:       17.72,
    description: "tandoori chicken, makhani sauce, kenny's cheese curds, masala fries",
    requirements: {
          fries: true,
          curds: false,
          gravy: false
    }
  },

  {
    name:        "Farm-To-Table Poutine",
    place:       "Wise Acre",
    pic:         "wiseacre.jpg",
    city:        "Minneapolis",
    state:       "MN",
    country:     "US",
    price:       16.37,
    map:         "https://goo.gl/maps/gYZcT9YDxgYLzKMGA",
    description: "home fries with sautéed farm vegetables, house-made breakfast sausage, Castle Rock Organic Dairy cheese curds, poached eggs, and Granny Dell's black pepper gravy",
    requirements: {
      fries: false,
      curds: true,
      gravy: false
    },
  },

  {
    name:        "Poutine Dog",
    place:       "New York Fries",
    pic:         "nyfries-poutinedog.jpg",
    city:        "Woodstock",
    state:       "ON",
    country:     "Canada",
    map:         "https://goo.gl/maps/q6yydwtVNCS7vEsq8",
    price:       7.49,
    description: "Our 1/4 pound premium hot dog lovingly covered in our world renowned poutine. To try it, is to love it.",
    requirements: {
          fries: false,
          curds: true,
          gravy: true
    }
  },

  {
    name:        "Greek Poutine",
    place:       "Highland House",
    pic:         "highland-greek-poutine.jpg",
    city:        "Highland",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/DjNjJLicSdpZdTSx7",
    price:       12.06,
    description: "French fries tossed with feta cheese, capers and fresh oregano topped with lemon gravy.",
    requirements: {
          fries: true,
          curds: false,
          gravy: false
    }
  },

  {
    name:        "Japayoki Poutine",
    place:       "Bao Down OV",
    pic:         "japayoki-baodown.jpg",
    city:        "Vancouver",
    state:       "BC",
    country:     "Canada",
    map:         "https://g.page/baodownov?share",
    price:       15,
    description: "Chicken karaage, sprouts, furikake, Japanese curry sauce, sweet tamari, jalapeno",
    requirements: {
          fries: true,
          curds: false,
          gravy: false
    }
  },

  {
    name:        "Sweet Poutine",
    place:       "Robson's Fries",
    pic:         "sweet-poutine-japan.jpg",
    city:        "Tokyo",
    //state:       "BC",
    country:     "Japan",
    map:         "https://goo.gl/maps/NwE6XjnYybofkDqo8",
    price:       6.47,
    description: "We've topped it with custard loaded with eggs, mixed berries, and pure Canadian maple syrup. And of course, plenty of cheese!",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Plant-based Poutine",
    place:       "Sunnyside Diner",
    pic:         "sunnyside-diner-plant.jpg",
    city:        "Oklahoma City",
    state:       "OK",
    country:     "US",
    map:         "https://g.page/eatatsunnysidemidtown?share",
    price:       13.91, 
    description: "Fries, Daiya cheese, Gravy, tofu, chorizo, jalapeno & topped with green onions",
    requirements: {
          fries: true,
          curds: false,
          gravy: true
    }
  },

  {
    name:        "Pepperoni Pizza Poutine",
    place:       "LaFork! Poutine & Crêpes",
    pic:         "lafork-pepperoni.jpg",
    city:        "Dearborn",
    state:       "MI",
    country:     "US",
    map:         "https://g.page/LaFork?share",
    price:       11.85,
    description: "fresh cut fries, mozzarella cheese, marinara sauce and pepperoni",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Butter Chicken Poutine",
    place:       "Bliss",
    pic:         "bliss-butter-chicken.jpg",
    city:        "Quesnel",
    state:       "BC",
    country:     "Canada",
    map:         "https://goo.gl/maps/gSMQcN5b8ipnkemaA",
    price:       12.00,
    description: "Fries, Butter Chicken and mozza",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Broadway Poutine",
    place:       "Broadway Pizza",
    pic:         "broadway-pizza.jpg",
    city:        "Minneapolis",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/EEczXVf2tCoj2tRA7",
    price:       13.05,
    description: "crispy tots and handmade battered cheddar curds smothered with smoky cheese sauce, zesty herb seasoned tomatoes, jalapeno bacon and more cheddar on top!",
    requirements: {
      fries:     false,
      curds:     false,
      gravy:     false
    }
  },
  
  {
    name:        "Punjabi Poutine",
    place:       "Burger Liquor",
    pic:         "punjabi-nz.jpg",
    city:        "Wellington",
    //state:       "MI",
    country:     "New Zealand",
    map:         "https://goo.gl/maps/318phZ6DiXZHWRjq8",
    price:       12.01,
    description: "Fat fries with garlic salt and mozarella, smothered in the city's best butter chicken sauce!",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    }
  },

  {
    name:        "Maple Shack Poutine",
    place:       "Jericho Center Country Store",
    pic:         "maple-shack.jpg",
    city:        "Jericho",
    state:       "VT",
    country:     "US",
    price:       12.60,
    map:         "https://goo.gl/maps/aDnasYsGYv5QmTDu9",
    description: "fries covered in VT maple syrup, cheddar cheese curds, grilled onions, and bacon bits. A taste of bliss",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    },
  },

  {
    name:        "Cheesy Lobster Sauce Poutine",
    place:       "Bite of Maine",
    pic:         "bito-maine.jpg",
    city:        "Virginia Beach",
    state:       "VA",
    country:     "US",
    map:         "https://goo.gl/maps/Ft4j5qqXh9ERoSNg6",
    price:       13.12,
    description: "Fries topped with mozarella cheese and a lobster cheesy sauce poured on top to melt it.",
    requirements: {
          fries: true,
          curds: false,
          gravy: false
    }
  },

  {
    name:        "Poutine",
    place:       "Frankie's",
    pic:         "frankies-albany.jpg",
    city:        "Albany",
    state:       "OR",
    country:     "US",
    map:         "https://maps.app.goo.gl/LTWUCFHRkiDtnpLc6",
    price:       15.94,
    description: "Pork belly, Fries, Fried Tillamook White Cheddar Cheese Curds, Demi Glaze, Wild Mushrooms",
    requirements: {
          fries: true,
          curds: false,
          gravy: true
    }
  },

  {
    name:        "Tater Tot Poutine",
    place:       "Bostonia Public House",
    pic:         "bostonia-tots.jpg",
    city:        "Boston",
    state:       "MA",
    country:     "US",
    map:         "https://g.page/BostoniaPublicHouse?share",
    price:       14.77,
    description: "crispy tater tots, black pepper brown gravy, melted cheese",
    requirements: {
      fries: false,
      curds: false,
      gravy: true
    } 
  },

  {
    name:        "BarBtine Médio",
    place:       "Canuck's Poutinerie",
    pic:         "canucks-medio.jpg",
    city:        "São Paulo",
    //state:       "MN",
    country:     "Brazil",
    map:         "https://goo.gl/maps/EAbxiEvedoSgYL7e8",
    price:       10.06,
    description: "fries, creamy cheddar, Canadian BBQ, and cilantro pesto.",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Luna Beer Cheese Poutine",
    place:       "Beards Brewery",
    pic:         "luna-beer-cheese.jpg",
    city:        "Petoskey",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/xSyKb9ZPF9MMARe16",
    price:       18.28,
    description: "House made Luna beer cheese, green onion, white cheddar cheese curds",
    requirements: {
          fries: true,
          curds: true,
          gravy: false
    }
  },

  {
    name:        "Poutine Skillet",
    place:       "CJ Mahoney's",
    pic:         "poutine-skillet.jpg",
    city:        "Rochester",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/gSMQcN5b8ipnkemaA",
    price:       11.74,
    description: "Deep fried tater tots, melted white cheddar curds, brown gravy, garnished with bacon bits and green onions.",
    requirements: {
      fries:     false,
      curds:     true,
      gravy:     true
    }
  },
  
  {
    name: "Hector's Poutine",
    place: "Angry Dog",
    pic: "hectors.jpg",
    city: "Dallas",
    state: "TX",
    country: "US",
    map: "https://goo.gl/maps/C6Ew6BWzTpyL8Dcb7",
    price: 12.98,
    description: "Fries, Cheddar cheese, chorizo and jalapeño gravy",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    } 
  },

  {
    name: "Corned Beef Poutine",
    place: "BlackFriar Pub",
    pic: "blackfriar.jpg",
    city: "Dallas",
    state: "TX",
    country: "US",
    map: "https://goo.gl/maps/YJrSQ37v1tU3txVCA",
    price: 17.75,
    description: "corned beef, white cheddar, gravy, french fries",
    requirements: {
      fries: true,
      curds: false,
      gravy: true
    } 
  },

  {
    name:        "Poutine",
    place:       "Blue Bear",
    pic:         "bluebear-swiss.jpg",
    city:        "Racine",
    state:       "WI",
    country:     "US",
    map:         "https://goo.gl/maps/RdJ4eZdJUUnSRReU7",
    price:       15.76,
    description: "gouda cream sauce, bordelaise sauce, Swiss cheese, duck fat fries, onion rings",
    requirements: {
      fries: true,
      curds: false,
      gravy: true
    } 
  },

  {
    name:        "Poutine",
    place:       "Senate OTR",
    pic:         "senate-otr.jpg",
    city:        "Cincinnati",
    state:       "OH",
    country:     "US",
    map:         "https://goo.gl/maps/RdJ4eZdJUUnSRReU7",
    price:       19.81,
    description: "french fries, local cheese curds, short ribs + local free range egg",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    } 
  },

  {
    name:        "Poutine x Cod Roe Sauce",
    place:       "Becker's",
    pic:         "becker-cod-roe.jpg",
    city:        "Tokyo",
    country:     "Japan",
    map:         "https://goo.gl/maps/j1pyEgKzrquqTtTU6",
    price:       4.07,
    description: "french fries, shredded cheese, cod roe sauce, dried nori seaweed",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Flyin' Hawaiian Poutine",
    place:       "Joe Beevrz Canadian Pub",
    pic:         "beevrz-hawaiian.jpg",
    city:        "Yorkton",
    state:       "Saskatchewan",
    country:     "Canada",
    map:         "https://goo.gl/maps/j1pyEgKzrquqTtTU6",
    price:       16,
    description: "Caramelized pineapple, candied peppered pig candy.",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     true
    }
  },

  {
    name:        "Tater Tot Barrage Poutine",
    place:       "Elite Brewing & Cidery",
    pic:         "tater-tot-barrage.jpg",
    city:        "Calgary",
    state:       "Alberta",
    country:     "Canada",
    map:         "https://goo.gl/maps/RBF3ZL6ue7mAYHyr9",
    price:       14.95,
    description: "Tater Tots, Classic Gravy, Quebec Cheese Curds, Chives",
    requirements: {
      fries:     false,
      curds:     false,
      gravy:     true
    }
  },

  {
    name:        "Poutine",
    place:       "Soo Eagles Hockey Rink",
    pic:         "soo-eagles.jpg",
    city:        "Sault Ste Marie",
    state:       "MI",
    country:     "US",
    map:         "https://goo.gl/maps/2VaWVtsXXVTdQf6h9",
    price:       10.44,
    description: "steak fries, gravy and shredded mozzarella",
    requirements: {
          fries: true,
          curds: false,
          gravy: true
    }
  },

  {
    name:        "Mexican Poutine",
    place:       "The Crack Shack",
    pic:         "crack-mexican.jpg",
    city:        "San Diego",
    state:       "CA",
    country:     "US",
    map:         "https://goo.gl/maps/xSyKb9ZPF9MMARe16",
    price:       13.25,
    description: "schmaltz fries, pollo asado, jalapeño cheese wiz",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Lobster Poutine",
    place:       "The Cook & The Ox",
    pic:         "lobster-poutine.jpg",
    city:        "MSP Airport",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/xSyKb9ZPF9MMARe16",
    price:       22.20,
    description: "Lobster cream sauce, fries, white cheddar, garlic bread crumbs",
    requirements: {
      fries:     true,
      curds:     false,
      gravy:     false
    }
  },

  {
    name:        "Pink Persia Poutine",
    place:       "Frittenwerk",
    pic:         "pink-persia-poutine.jpg",
    city:        "Düsseldorf",
    country:     "Germany",
    price:       7.59,
    map:         "https://goo.gl/maps/HeaZbTSqr2oHzwmLA",
    description: "large portion of house fries with fluffy falafel balls, pink hummus, crispy arugula and refreshing lemon aioli",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },

  {
    name: "Vladimir Poutine",
    place: "Hop Cat",
    pic: "vladimir-poutine.jpg",
    city: "Grand Rapids",
    state: "MI",
    country: "US",
    map: "https://goo.gl/maps/TnDQwdAVYohrmkDNA",
    price: 14.36,
    description: "crack fries, chorizo gravy, yellow cheese, crispy bacon, scallions, perogies",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    } 
  },

  {
    name: "Short Rib Poutine",
    place: "Whiskey Cake",
    pic: "whiskey-cake.jpg",
    city: "Plano",
    state: "TX",
    country: "US",
    map: "https://goo.gl/maps/1TLS5xZ9igx7afxh8",
    price: 6.53,
    description: "hand cut fries, beef pan jus, local goat cheese, pickled veg, sunny side up local egg",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    } 
  },

  {
    name: "Okie Poutine",
    place: "The Mule",
    pic: "okie-poutine.jpg",
    city: "Oklahoma City",
    state: "OK",
    country: "US",
    map: "https://g.page/TheMuleOKC?share",
    price: 11.09,
    description: "French Fries, White Gravy, Watonga Cheese Curds",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    } 
  },

  {
    name: "The Unicorn Poutine",
    place: "The Enchanted Poutinerie",
    pic: "enchanted-unicorn.jpg",
    city: "North York",
    state: "ON",
    country: "Canada",
    map: "https://goo.gl/maps/pTMWMPQh5d99zBhm9",
    price: 10.79,
    description: "Fresh Rainbow Quebec Curds, Multi-colour gravy",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    },
  },

  {
    name: "Playoff Poutine",
    place: "Lambeau Field",
    pic: "playoff-poutine.jpg",
    city: "Green Bay",
    state: "WI",
    country: "US",
    map: "https://goo.gl/maps/igBWK8kwuwEp8AFz8",
    price: 23.51,
    description: "French fries, Johnsonville “brat coins” fresh cheese curds, Cudahy slab bacon, chicken gravy, beer mustard crema & scallions in an old style football helmet.",
    requirements: {
      fries: true,
      curds: true,
      gravy: false
    } 
  },

  {
    name: "Duck Confit Poutine",
    place: "Refreshment Port",
    pic: "refreshment-port-duck-confit.jpg",
    city: "Orlando",
    state: "FL",
    country: "US",
    map: "https://goo.gl/maps/FHhrc3KEAxvSGWWE8",
    price: 11.28,
    description: "with Fig Demi-Sauce and Brie Cheese Fondue",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    }
  },

  {
    name: "Puotine",
    place: "Bar Ostannya Barykada",
    pic: "ukraine-barricade.jpg",
    city: "Kyiv",
    country: "Ukraine",
    map: "https://goo.gl/maps/pTMWMPQh5d99zBhm9",
    price: 7.63,
    description: null,
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },

  /*
  {
    name: "Beef Brisket Poutine",
    place: "Refreshment Port",
    pic: "refreshment-port-brisket.jpg",
    city: "Orlando",
    state: "FL",
    country: "US",
    map: "https://goo.gl/maps/FHhrc3KEAxvSGWWE8",
    price: 11.94,
    description: "French Fries with Beef Brisket, Beer-Cheese Sauce, and Poutine Gravy topped with Crispy Onions",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },
  */


  {
    name:        "Poutine",
    place:       "Red Cow",
    pic:         "redcow.jpg",
    city:        "Minneapolis",
    state:       "MN",
    country:     "US",
    map:         "https://goo.gl/maps/8vMxcWNKqB5KqBUo7",
    price:       14.55,
    description: "house fries w/ Summit beer cheese and braised beef",
    requirements: {
      fries: true,
      curds: false,
      gravy: false
    },
  },

];