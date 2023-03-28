let api = [
  {
    id: 1,
    fav: false,
    recipe: {
      label: 'Chicken Vesuvio',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',

      ingredientLines: [
        '1/2 cup olive oil',
        '5 cloves garlic, peeled',
        '2 large russet potatoes, peeled and cut into chunks',
        '1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)',
        '3/4 cup white wine',
        '3/4 cup chicken stock',
        '3 tablespoons chopped parsley',
        '1 tablespoon dried oregano',
        'Salt and pepper',
        '1 cup frozen peas, thawed',
      ],
    },
  },
  {
    id: 2,
    fav: false,
    recipe: {
      label: 'Chicken Paprikash',
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '640 grams chicken - drumsticks and thighs ( 3 whole chicken legs cut apart)',
        '1/2 teaspoon salt',
        '1/4 teaspoon black pepper',
        '1 tablespoon butter – cultured unsalted (or olive oil)',
        '240 grams onion sliced thin (1 large onion)',
        '70 grams Anaheim pepper chopped (1 large pepper)',
        '25 grams paprika (about 1/4 cup)',
        '1 cup chicken stock',
        '1/2 teaspoon salt',
        '1/2 cup sour cream',
        '1 tablespoon flour – all-purpose',
      ],
    },
  },
  {
    id: 3,
    fav: false,
    recipe: {
      label: 'Baked Chicken',
      image:
        'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on',
        '1/2 teaspoon coarse salt',
        '1/2 teaspoon Mrs. Dash seasoning',
        '1/4 teaspoon freshly ground black pepper',
      ],
    },
  },
  {
    id: 4,
    fav: false,
    recipe: {
      label: 'Catalan Chicken',
      image:
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 whole 4-pound chicken, quartered',
        '8 slices bacon',
        '30 cloves garlic',
        '3 lemons, peeled, rinds thinly sliced and reserved',
        '½ cup Banyuls or another fortified dessert wine',
        '1 cup veal or chicken stock',
      ],
    },
  },
  {
    id: 5,
    fav: false,
    recipe: {
      label: 'Chicken Stew',
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 pound chicken cut in pieces',
        '4 carrots',
        '1 onion',
        '1 leek',
        '1 green pepper',
        'kosher salt',
        'Freshly ground black pepper',
        'Extra Virgin Olive Oil',
        '1 cup white wine',
        'Chicken broth',
      ],
    },
  },
  {
    id: 6,
    fav: false,
    recipe: {
      label: 'Chicken Liver Pâté',
      image:
        'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '8 oz. chicken livers, cleaned',
        '4 cups chicken stock',
        '2 tbsp. rendered chicken fat or unsalted butter',
        '½ medium yellow onion, minced',
        '1½ tbsp. cognac or brandy',
        '2 hard-boiled eggs',
        'Kosher salt and freshly ground black pepper, to taste',
        'Toast points, for serving',
      ],
    },
  },
  {
    id: 7,
    fav: false,
    recipe: {
      label: 'Persian Chicken',
      image:
        'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '2 large onions',
        '750 g chicken',
        '500 g mushrooms',
        '1 cup water',
        '1 cup red wine',
        '2 teaspoons chicken stock',
        '200 ml mayonnaise',
        '200 ml cream',
        'small bunch of parsley',
        '1 teaspoon curry powder',
      ],
    },
  },
  {
    id: 8,
    fav: false,
    recipe: {
      label: 'Kreplach (Chicken Dumplings)',
      image:
        'https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1½ teaspoons canola oil',
        '½ small shallot, finely chopped',
        '1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped',
        '⅔ cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)',
        '2 chicken livers (optional)',
        '2 garlic cloves, finely chopped',
        '¼ cup finely chopped chives, plus extra for serving',
        '1¼ teaspoons kosher salt',
        '¾ teaspoon freshly ground black pepper',
        '30 to 34 square wonton wrappers',
        '8 cups store-bought or homemade chicken broth',
      ],
    },
  },
  {
    id: 9,
    fav: false,
    recipe: {
      label: 'Roast Chicken',
      image:
        'https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 whole chicken, about 3-4 pounds',
        '-- Salt and fresh-ground pepper, to taste',
        '3 to 4 sprigs thyme, or other herbs',
        '-- Olive oil, to taste',
        '-- Chicken stock (optional)',
      ],
    },
  },
  {
    id: 10,
    fav: false,
    recipe: {
      label: 'Southwestern Chicken Soup',
      image:
        'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mjl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 12-ounce jar salsa verde',
        '3 cups cooked chicken pieces (1 small deli-counter rotisserie chicken or leftovers)',
        '1 15-ounce can cannellini beans, drained',
        '3 cups chicken broth',
        '1 teaspoon ground cumin (optional)',
        '2 green onions, chopped',
        '1/2 cup sour cream',
        'tortilla chips (optional)',
      ],
    },
  },
  {
    id: 11,
    fav: false,
    recipe: {
      label: 'Chicken Soup',
      image:
        'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 pound chicken parts',
        '2 stalks celery, including leafy tops, cut into 3-inch pieces',
        '1 whole chicken, thoroughly rinsed',
        'Salt to rub inside the chicken',
        '1 large whole onion, unpeeled (find one with a firm, golden-brown peel)',
        '1 large whole carrot, peeled',
        '1 medium parsnip, peeled',
        '2 teaspoons salt',
        '¼ teaspoon pepper',
        '1 bunch dill, cleaned and tied with a string',
      ],
    },
  },
  {
    id: 12,
    fav: false,
    recipe: {
      label: 'Braised Chicken Gumbo',
      image:
        'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 tablespoon extra-virgin olive oil',
        '1 medium red or green bell pepper, diced',
        '2 tablespoons all-purpose flour',
        '2 cups shredded chicken from Wine & Tomato Braised Chicken (recipe follows)',
        '2 cups sauce from Wine & Tomato Braised Chicken',
        '2 cups reduced-sodium chicken broth',
        '1 cup sliced okra, fresh or frozen (thawed)',
        '¾ cup instant brown rice (see Tip)',
        '⅛- ¼ teaspoon cayenne pepper',
      ],
    },
  },
  {
    id: 13,
    fav: false,
    recipe: {
      label: 'Roast Chicken With Chicken Livers',
      image:
        'https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        'One 3 3/4- to 4-pound chicken',
        '1 teaspoon coarsely chopped thyme',
        'Salt',
        '1/2 cup extra-virgin olive oil',
        '20 garlic cloves, peeled',
        '2 teaspoons coarsely crushed black peppercorns',
        '1/4 pound chicken livers, trimmed and cut into 1-inch pieces',
        'Freshly ground pepper',
        '2 tablespoons chopped Gaeta olives',
        '1 tablespoon minced flat-leaf parsley',
      ],
    },
  },
  {
    id: 14,
    fav: false,
    recipe: {
      label: 'Smothered Chicken',
      image:
        'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '3 1/2 pounds whole cut-up chicken',
        '2 (5-ounce) packets chicken fry coating (recommended: Dixie Fry)',
        '2 tablespoons salt-free chicken seasoning, divided (recommended: McCormick Grill Mates)',
        'Canola oil, for frying',
        '2 (12-ounce) jars roasted chicken gravy (recommended: Franco American)',
        '1 teaspoon crushed garlic',
      ],
    },
  },
  {
    id: 15,
    fav: false,
    recipe: {
      label: 'Chicken & peppers',
      image:
        'https://images.unsplash.com/photo-1601314002592-b8734bca6604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '4-6 chicken drumsticks',
        '2-3 large red capsicum (bell peppers), chopped',
      ],
    },
  },
  {
    id: 16,
    fav: false,
    recipe: {
      label: 'Chicken Hash',
      image:
        'https://images.unsplash.com/photo-1539136788836-5699e78bfc75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 tbsp. oil',
        '2 large baked potatoes',
        '2 c. shredded cooked chicken',
        '3 medium carrots',
        '1 medium onion',
        '1 jar chicken gravy',
      ],
    },
  },
  {
    id: 17,
    fav: false,
    recipe: {
      label: 'Chicken Poofs',
      image:
        'https://images.unsplash.com/photo-1559054663-e8d23213f55c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NzR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '1 cup reduced-sodium stuffing mix',
        '1 1/2 cups cooked chicken breast, chopped',
        '1 cup fat-free sour cream',
        '2 containers (8 rolls in each) reduced-fat crescent rolls',
        'chicken gravy (optional)',
      ],
    },
  },
  {
    id: 18,
    fav: false,
    recipe: {
      label: 'Chicken Piccata',
      image:
        'https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8ODl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '2 large chicken breasts',
        '1/2 cup flour',
        '3 tablespoons vegetable oil',
        '2 scallions white part only, minced',
        '3 tablespoons lemon juice',
        '1 cup chicken stock',
        '1 teaspoon honey',
        '2 tablespoons unsalted butter cut into small pieces',
        '2 tablespoons parsley minced',
        '2 tablespoons capers',
        '1 teaspoon lemon zest finely zested',
      ],
    },
  },
  {
    id: 19,
    fav: false,
    recipe: {
      label: 'Crispy Chicken Dippers',
      image:
        'https://images.unsplash.com/photo-1559742811-822873691df8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',

      ingredientLines: [
        '24 Ounces Tyson Crispy Chicken Strips',
        '2 cans crescent rolls',
        '21½ Ounces Cream of Chicken soup',
        '½ Teaspoon pepper',
        '16 baby carrots',
        '16 sticks celery',
      ],
    },
  },
];

export default api;
