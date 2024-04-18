// import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import MainWrapper from '../../components/common/MainWrapper'
import { Title } from '../../components/common/titles'
export default function Apidocs() {
  return (
    <MainWrapper>
      <CustomTitle>API Docs</CustomTitle>

      <h2>Fetch structure</h2>

      <Link to="https://www.themealdb.com/api.php">The meal db</Link>

      <h3>Search meal by name</h3>

      <Link to="https://www.themealdb.com/api/json/v1/1/search.php?s=[strMeal]">
        <Paragraph className='link'>Link</Paragraph>
      </Link>

      <TableContainer>
          <h4>Name</h4>
          <h4>Type</h4>
          <h4>Description</h4>
          <Paragraph>idMeal</Paragraph>
          <Paragraph>Integer</Paragraph>
          <Paragraph>Id único del platillo</Paragraph>
          <Paragraph>strMeal</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Nombre del platillo</Paragraph>
          <Paragraph>strCategory</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Categoría del platillo</Paragraph>
          <Paragraph>strInstructions</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Instrucciones de preparación del platillo</Paragraph>
          <Paragraph>strMealThumb</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Link de imágen HTML</Paragraph>
          <Paragraph>strTags</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Tags relacionados al platillo</Paragraph>
          <Paragraph>strIngredient[1~20]</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Cantidad de ingredientes necesarios para el platillo (max 20)</Paragraph>
      </TableContainer>


      <h3>Lookup full meal details by id</h3>

      <Link to="https://www.themealdb.com/api/json/v1/1/lookup.php?i=[idMeal]">
        <Paragraph className='link'>Link</Paragraph>
      </Link>
      <TableContainer>
          <h4>Name</h4>
          <h4>Type</h4>
          <h4>Description</h4>
          <Paragraph>idMeal</Paragraph>
          <Paragraph>Integer</Paragraph>
          <Paragraph>Id único del platillo</Paragraph>
          <Paragraph>strMeal</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Nombre del platillo</Paragraph>
          <Paragraph>strCategory</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Categoría del platillo</Paragraph>
          <Paragraph>strInstructions</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Instrucciones de preparación del platillo</Paragraph>
          <Paragraph>strMealThumb</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Link de imágen HTML</Paragraph>
          <Paragraph>strTags</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Tags relacionados al platillo</Paragraph>
          <Paragraph>strIngredient[1~20]</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Cantidad de ingredientes necesarios para el platillo (max 20)</Paragraph>
      </TableContainer>

      <h3>List all meal categories</h3>

      <Link to="https://www.themealdb.com/api/json/v1/1/categories.php">
        <Paragraph className='link'>Link</Paragraph>
      </Link>

      <p>Don't need parameters</p>

      <TableContainer>
          <h4>Name</h4>
          <h4>Type</h4>
          <h4>Description</h4>
          <Paragraph>idCategory</Paragraph>
          <Paragraph>Interger</Paragraph>
          <Paragraph>Id de la categoría</Paragraph>
          <Paragraph>strCategory</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Nombre de la categoría</Paragraph>
          <Paragraph>strCategoryThumb</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Link completo de la categoría</Paragraph>
          <Paragraph>strCategoryDescription</Paragraph>
          <Paragraph>String</Paragraph>
          <Paragraph>Descripción de la categoría</Paragraph>
      </TableContainer>

      <h3>List all Categories</h3>

      <Link to ="https://www.themealdb.com/api/json/v1/1/list.php?c=list">
        <Paragraph className='link'>Link</Paragraph>
      </Link>
      <TableContainer>
          <h4>Name</h4>
          <h4>Type</h4>
          <h4>Description</h4>
          <Paragraph>strCategory</Paragraph>
          <Paragraph>string</Paragraph>
          <Paragraph>name of the category</Paragraph>
      </TableContainer>

    </MainWrapper>
  )
}

const CustomTitle = styled(Title)`
  text-align: center;
  color: #058240;
  margin-bottom: 20px;

`


const TableContainer = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    font-size: 12px;
      width: 100%;
  }
`

const Paragraph = styled.p`
  border: 1px solid #2b2b2b;
  height: 100%;
  &.link {
    font-weight: bold;
    font-size: 1.5rem;
    border: none;
    text-decoration: underline;
  }
`