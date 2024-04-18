import { Link } from "react-router-dom";

export default function Apidocs() {
  return (
    <div>
      <h1>Apidocs</h1>
      <h2>Fetch structure</h2>
      <Link to="https://www.themealdb.com/api.php">The meal db</Link>
      <h3>Search meal by name</h3>
      <Link to="https://www.themealdb.com/api/json/v1/1/search.php?s=[strMeal]">
        https://www.themealdb.com/api/json/v1/1/search.php?s=[strMeal]
      </Link>
      | Name | Type | Description | | ---------- | ---------- | ---------- | |
      idMeal | Integer | Id unico del platillo | |strMeal | String | Nombre del
      platillo | |strCategory | String | Categoria del platillo |
      |strInstructions | String | Instrucciones de preparacion del platillo |
      |strMealThumb | String | Link de imagen html | |strTags | String | Tags
      realacionados al platillo | |strIngredient[1~20] | String | Cantidad de
      ingredientes necesarios para el platillo (max 20)|
      <h3>Lookup full meal details by id</h3>
      <Link to="https://www.themealdb.com/api/json/v1/1/lookup.php?i=[idMeal]">
        https://www.themealdb.com/api/json/v1/1/lookup.php?i=[idMeal]
      </Link>
      | Name | Type | Description | | ---------- | ---------- | ---------- | |
      idMeal | Integer | Id unico del platillo | |strMeal | String | Nombre del
      platillo | |strCategory | String | Categoria del platillo |
      |strInstructions | String | Instrucciones de preparacion del platillo |
      |strMealThumb | String | Link de imagen html | |strTags | String | Tags
      realacionados al platillo | |strIngredient[1~20] | String | Cantidad de
      ingredientes necesarios para el platillo (max 20)|
      <h3>List all meal categories</h3>
      <Link to="https://www.themealdb.com/api/json/v1/1/categories.php">
        https://www.themealdb.com/api/json/v1/1/categories.php
      </Link>
      {/* 
Don't need parameters

|    Name    |   Type     | Description |
| ---------- | ---------- |  ---------- |
| idCategory | Integer | Id de la categoria |
| strCategory | String | Nombre de la categoria |
| strCategoryThumb | String | Link completo de la categoria |
| strCategoryDescription | String | Descripcion de la categoria | */}
      <h3>List all Categories</h3>
      <Link to="https://www.themealdb.com/api/json/v1/1/list.php?c=list">
        https://www.themealdb.com/api/json/v1/1/list.php?c=list
      </Link>
      {/* |    Name    |   Type     | Description |
| ---------- | ---------- |  ---------- |
| strCategory | String | name of the category | */}
    </div>
  );
}
