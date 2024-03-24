# Dev zone

## fetch structure

Site: [The meal db](https://www.themealdb.com/api.php)

### Search meal by name

```https://www.themealdb.com/api/json/v1/1/search.php?s=[strMeal]``` Needs strMeal

|    Name    |   Type     | Description |
| ---------- | ---------- |  ---------- |
| idMeal | Integer | Id unico del platillo |
|strMeal | String | Nombre del platillo |
|strCategory | String | Categoria del platillo |
|strInstructions | String | Instrucciones de preparacion del platillo |
|strMealThumb | String | Link de imagen html |
|strTags | String | Tags realacionados al platillo |
|strIngredient[1~20] | String | Cantidad de ingredientes necesarios para el platillo (max 20)|

### Lookup full meal details by id

```www.themealdb.com/api/json/v1/1/lookup.php?i=[idMeal]``` Needs idMeal

|    Name    |   Type     | Description |
| ---------- | ---------- |  ---------- |
| idMeal | Integer | Id unico del platillo |
|strMeal | String | Nombre del platillo |
|strCategory | String | Categoria del platillo |
|strInstructions | String | Instrucciones de preparacion del platillo |
|strMealThumb | String | Link de imagen html |
|strTags | String | Tags realacionados al platillo |
|strIngredient[1~20] | String | Cantidad de ingredientes necesarios para el platillo (max 20)|

### List all meal categories

```www.themealdb.com/api/json/v1/1/categories.php```
Don't need parameters

|    Name    |   Type     | Description |
| ---------- | ---------- |  ---------- |
| idCategory | Integer | Id de la categoria |
| strCategory | String | Nombre de la categoria |
| strCategoryThumb | String | Link completo de la categoria |
| strCategoryDescription | String | Descripcion de la categoria |

### List all Categories

```www.themealdb.com/api/json/v1/1/list.php?c=list``` Don't need parameters

|    Name    |   Type     | Description |
| ---------- | ---------- |  ---------- |
| strCategory | String | name of the category |

--------
Site: [EDAMAM](https://developer.edamam.com/es/api-recetas-edamam-documentacion)

Steps:

1. Create user o login on EDAMAM
2. Get Key API example: 2bcd09781d33df07759a29335ce1b038
3. Get App id example: 2f4af5eb

### Search food

```https://api.edamam.com/auto-complete?app_id=[App id]&app_key=[Api Key]=[stringFood]``` Need food name

```JSON 
{
  "text": "",
  "parsed": [],
  "hints": [
    {
      "food": {
        "foodId": "food_blrpqo1bp94h17apq4prgbhcuhex",
        "label": "Butter, Whipped, With Salt",
        "knownAs": "Butter, whipped, with salt",
        "nutrients": {
          "ENERC_KCAL": 731,
          "PROCNT": 0.49,
          "FAT": 78.3,
          "CHOCDF": 0,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/ec6/ec68f0d43ed9b399c8464481f89eb225.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 10
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_stick",
          "label": "Stick",
          "weight": 76
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pat",
          "label": "Pat",
          "weight": 3.8
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 9.4
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 151
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_default",
          "weight": 0.0136
        }
      ]
    },
    {
      "food": {
        "foodId": "food_aqptx2cauhjjzubmplnjna81ev33",
        "label": "Cheese, Blue",
        "knownAs": "Cheese, blue",
        "nutrients": {
          "ENERC_KCAL": 353,
          "PROCNT": 21.4,
          "FAT": 28.7,
          "CHOCDF": 2.34,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/b44/b442cfc174a1a691dca574c9b7dcb47a.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 30
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 135,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_crumbled",
                  "label": "crumbled"
                }
              ],
              "weight": 135
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_wedge",
          "label": "Wedge",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_round",
          "label": "Round",
          "weight": 14.2
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 17
        }
      ]
    },
    {
      "food": {
        "foodId": "food_a06hreabh7agoeazgrtiobunge7b",
        "label": "Cheese, Brie",
        "knownAs": "Cheese, brie",
        "nutrients": {
          "ENERC_KCAL": 334,
          "PROCNT": 20.8,
          "FAT": 27.7,
          "CHOCDF": 0.45,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/f53/f5340600239cf508f17b167265c6a1cf.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_round",
          "label": "Round",
          "weight": 227
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 240,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_melted",
                  "label": "melted"
                }
              ],
              "weight": 240
            },
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_sliced",
                  "label": "sliced"
                }
              ],
              "weight": 144
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 128
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 17
        }
      ]
    },
    {
      "food": {
        "foodId": "food_a5ylefeb5r30eibjj4mqubdc09z1",
        "label": "Cheese, Colby",
        "knownAs": "Cheese, colby",
        "nutrients": {
          "ENERC_KCAL": 394,
          "PROCNT": 23.8,
          "FAT": 32.1,
          "CHOCDF": 2.57,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/a6a/a6a3cb346882b674c5b5086352644ec5.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 132,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_shredded",
                  "label": "shredded"
                }
              ],
              "weight": 113
            },
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_diced",
                  "label": "diced"
                }
              ],
              "weight": 132
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 17
        }
      ]
    },
    {
      "food": {
        "foodId": "food_abw09jebwny3g6bb7jvn0bbalare",
        "label": "Cheese, Cottage, Creamed, Large or Small Curd",
        "knownAs": "Cheese, cottage, creamed, large or small curd",
        "nutrients": {
          "ENERC_KCAL": 98,
          "PROCNT": 11.1,
          "FAT": 4.3,
          "CHOCDF": 3.38,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/8ee/8ee7b75071fc907cce2819031a9ae563.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 118
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 225,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_large",
                  "label": "large"
                }
              ],
              "weight": 210
            },
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  "label": "small"
                }
              ],
              "weight": 225
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 13.1249999997781
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        }
      ]
    },
    {
      "food": {
        "foodId": "food_apqi15daozoc8oacpl41rallrou9",
        "label": "Cheese, Cottage, Creamed, With Fruit",
        "knownAs": "Cheese, cottage, creamed, with fruit",
        "nutrients": {
          "ENERC_KCAL": 97,
          "PROCNT": 10.7,
          "FAT": 3.85,
          "CHOCDF": 4.61,
          "FIBTG": 0.2
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/6a3/6a34798287bc5e41e2328a5973695f38.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 226
        }
      ]
    },
    {
      "food": {
        "foodId": "food_b0nmp6gaermj0aad3mf7iararumu",
        "label": "Cheese, Cottage, Nonfat, Uncreamed, Dry, Large or Small Curd",
        "knownAs": "Cheese, cottage, nonfat, uncreamed, dry, large or small curd",
        "nutrients": {
          "ENERC_KCAL": 72,
          "PROCNT": 10.3,
          "FAT": 0.29,
          "CHOCDF": 6.66,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/f28/f28c23a0ce83d037a5c27401e4ce41e9.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 73
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 145
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 9.06249999984678
        }
      ]
    },
    {
      "food": {
        "foodId": "food_a5oa9cnaawyx9uang44bka8467or",
        "label": "Cheese, Cream",
        "knownAs": "Cheese, cream",
        "nutrients": {
          "ENERC_KCAL": 350,
          "PROCNT": 6.15,
          "FAT": 34.4,
          "CHOCDF": 5.52,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 30
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 232
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 113.33333333333333,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  "label": "small"
                }
              ],
              "weight": 85
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 14.5,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#LanguaL_H0358",
                  "label": "AERATED BY WHIPPING"
                }
              ],
              "weight": 10
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 85,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_small",
                  "label": "small"
                }
              ],
              "weight": 85
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slab",
          "label": "Slab",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 16
        }
      ]
    },
    {
      "food": {
        "foodId": "food_ax6ocbjas0levpb3nl0n7auzwy0i",
        "label": "Cheese, Edam",
        "knownAs": "Cheese, edam",
        "nutrients": {
          "ENERC_KCAL": 357,
          "PROCNT": 25,
          "FAT": 28.6,
          "CHOCDF": 1.43,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/2df/2dfa711cc6aff6e4d3bfefb4814f4cb4.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 60
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 198
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        }
      ]
    },
    {
      "food": {
        "foodId": "food_b1lnwjdb1h2ku6ar7wirebmt136x",
        "label": "Cheese, Gouda",
        "knownAs": "Cheese, gouda",
        "nutrients": {
          "ENERC_KCAL": 356,
          "PROCNT": 24.9,
          "FAT": 27.4,
          "CHOCDF": 2.22,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/7d7/7d700e635219e5185a13c91d8bd02eb1.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 60
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 108,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_shredded",
                  "label": "shredded"
                }
              ],
              "weight": 108
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 198
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        }
      ]
    },
    {
      "food": {
        "foodId": "food_b1nmhm0auf5ztualeuklca4csd86",
        "label": "Cheese, Gruyere",
        "knownAs": "Cheese, gruyere",
        "nutrients": {
          "ENERC_KCAL": 413,
          "PROCNT": 29.8,
          "FAT": 32.3,
          "CHOCDF": 0.36,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/3d2/3d26895a8d68806fb21e441dae7e13d5.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 90
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 132,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_shredded",
                  "label": "shredded"
                }
              ],
              "weight": 108
            },
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_diced",
                  "label": "diced"
                }
              ],
              "weight": 132
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28.35
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 170
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 15
        }
      ]
    },
    {
      "food": {
        "foodId": "food_a2v4abmahzdnsdaeho662a8zhbed",
        "label": "Cheese, Limburger",
        "knownAs": "Cheese, limburger",
        "nutrients": {
          "ENERC_KCAL": 327,
          "PROCNT": 20,
          "FAT": 27.2,
          "CHOCDF": 0.49,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/54d/54dac2c0b0013be17466883c4d868231.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 34
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 227
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_box",
          "label": "Box",
          "weight": 113
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 134
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 18
        }
      ]
    },
    {
      "food": {
        "foodId": "food_bjn8w3lablky7obju160eam4o8xv",
        "label": "Cheese, Monterey",
        "knownAs": "Cheese, monterey",
        "nutrients": {
          "ENERC_KCAL": 373,
          "PROCNT": 24.5,
          "FAT": 30.3,
          "CHOCDF": 0.68,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/590/59062b9f8d57ebc7d831b7b7c231f726.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 60
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 132,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_diced",
                  "label": "diced"
                }
              ],
              "weight": 132
            },
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_shredded",
                  "label": "shredded"
                }
              ],
              "weight": 113
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 170
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 17
        }
      ]
    },
    {
      "food": {
        "foodId": "food_biow2pxar878e0ax97vxobf5csl9",
        "label": "Cheese, Mozzarella, Whole Milk, Low Moisture",
        "knownAs": "Cheese, mozzarella, whole milk, low moisture",
        "nutrients": {
          "ENERC_KCAL": 318,
          "PROCNT": 21.6,
          "FAT": 24.6,
          "CHOCDF": 2.47,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 60
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 259.875
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28.3
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28.3
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ball",
          "label": "Ball",
          "weight": 28.3
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cube",
          "label": "Cube",
          "weight": 28.3
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_rectangle",
          "label": "Rectangle",
          "weight": 28.3
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 18
        }
      ]
    },
    {
      "food": {
        "foodId": "food_avlqq1zaenhg83bdymtdwar6x89a",
        "label": "Cheese, Mozzarella, Part Skim Milk",
        "knownAs": "Cheese, mozzarella, part skim milk",
        "nutrients": {
          "ENERC_KCAL": 254,
          "PROCNT": 24.3,
          "FAT": 15.9,
          "CHOCDF": 2.77,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/166/16626441d34964553a4036bd50b7f43c.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 60
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        }
      ]
    },
    {
      "food": {
        "foodId": "food_bua5duiaxgj1xnbn1mbt9bs4rs2a",
        "label": "Cheese, Neufchatel",
        "knownAs": "Cheese, neufchatel",
        "nutrients": {
          "ENERC_KCAL": 253,
          "PROCNT": 9.15,
          "FAT": 22.8,
          "CHOCDF": 3.59,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/3c1/3c1d53275d70860d26bed4410e498e35.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 43
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 85
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 85
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        }
      ]
    },
    {
      "food": {
        "foodId": "food_a2x56z9bbieq7xaruxig5anxs0a5",
        "label": "Cheese, Parmesan, Grated",
        "knownAs": "Cheese, parmesan, grated",
        "nutrients": {
          "ENERC_KCAL": 420,
          "PROCNT": 28.4,
          "FAT": 27.8,
          "CHOCDF": 13.9,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/9fd/9fdde7bb79e7dc624294b576f3395eb7.jpeg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 100
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 5
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_teaspoon",
          "label": "Teaspoon",
          "weight": 2.083333333439
        }
      ]
    },
    {
      "food": {
        "foodId": "food_aujw86fbtn2mmob5su201bkdjyl1",
        "label": "Cheese, Port de Salut",
        "knownAs": "Cheese, port de salut",
        "nutrients": {
          "ENERC_KCAL": 352,
          "PROCNT": 23.8,
          "FAT": 28.2,
          "CHOCDF": 0.57,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/742/7423dc2d29ff9b71c8ca69e2f325f004.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 60
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 170
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 132,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_shredded",
                  "label": "shredded"
                }
              ],
              "weight": 113
            },
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_diced",
                  "label": "diced"
                }
              ],
              "weight": 132
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 17
        }
      ]
    },
    {
      "food": {
        "foodId": "food_axgw16bbuf438eadhb2tna4wd0hl",
        "label": "Cheese, Provolone",
        "knownAs": "Cheese, provolone",
        "nutrients": {
          "ENERC_KCAL": 351,
          "PROCNT": 25.6,
          "FAT": 26.6,
          "CHOCDF": 2.14,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/f91/f9153e23de712eaa8958ce387c4fb4a4.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 46
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_slice",
          "label": "Slice",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 132,
          "qualified": [
            {
              "qualifiers": [
                {
                  "uri": "http://www.edamam.com/ontologies/edamam.owl#Qualifier_diced",
                  "label": "diced"
                }
              ],
              "weight": 132
            }
          ]
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_unit",
          "label": "Whole",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_package",
          "label": "Package",
          "weight": 170
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_piece",
          "label": "Piece",
          "weight": 28
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cubic_inch",
          "label": "Cubic inch",
          "weight": 17
        }
      ]
    },
    {
      "food": {
        "foodId": "food_b4t7fbzba6rgefaix1hguaqnwxu2",
        "label": "Cheese, Ricotta, Whole Milk",
        "knownAs": "Cheese, ricotta, whole milk",
        "nutrients": {
          "ENERC_KCAL": 150,
          "PROCNT": 7.54,
          "FAT": 10.2,
          "CHOCDF": 7.27,
          "FIBTG": 0
        },
        "category": "Generic foods",
        "categoryLabel": "food",
        "image": "https://www.edamam.com/food-img/fc4/fc42636b63848462aea5f5930c2b6268.jpg"
      },
      "measures": [
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_serving",
          "label": "Serving",
          "weight": 124
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_cup",
          "label": "Cup",
          "weight": 248
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_ounce",
          "label": "Ounce",
          "weight": 28.349523125
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_gram",
          "label": "Gram",
          "weight": 1
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_pound",
          "label": "Pound",
          "weight": 453.59237
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_tablespoon",
          "label": "Tablespoon",
          "weight": 15.3749999997401
        },
        {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#Measure_kilogram",
          "label": "Kilogram",
          "weight": 1000
        }
      ]
    }
  ],
  "_links": {
    "next": {
      "title": "Next page",
      "href": "https://api.edamam.com/api/food-database/v2/parser?session=40&app_id=2f4af5eb&app_key=2bcd09781d33df07759a29335ce1b038&nutrition-type=cooking&health=alcohol-free&category=generic-foods"
    }
  }
}
