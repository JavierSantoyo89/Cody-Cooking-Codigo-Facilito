import { BrowserRouter as Router } from "react-router-dom";

import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCard from './index';

const toogleFavoriteFn = jest.fn();


describe('RecipeCard', () => {
    const props = {
        id: '1',
        image: 'image.jpg',
        title: 'Recipe Title',
        description: 'Recipe description',
        video: 'video',
        isFavorite: false,
        toogleFavorite: toogleFavoriteFn,
    }

    test('should render correctly', () => {
        render(
            <Router><RecipeCard {...props} /></Router>
        );

        // Use `screen.getByText` para encontrar elementos por su texto
        const titleElement = screen.getByText(/Recipe Title/i);
        const descriptionElement = screen.getByText(/Recipe description/i);

        // Verifica que los elementos se encuentren en el documento
        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();

        // También puedes encontrar elementos por su clase usando `screen.getByClassName`
        const buttonElement = screen.getByText(/Ver/i);
        expect(buttonElement).toBeInTheDocument();
    });

    test('should change to favorite', () => {
        render(
            <Router><RecipeCard {...props} /></Router>
        );

        // Utiliza getByRole, getByTestId, o cualquier otro selector para obtener el elemento
        const likeIcon = screen.getByTestId('like-icon');

        // Hacemos click en el icono de corazón
        fireEvent.click(likeIcon);

        // Verifica que el elemento ahora tenga la clase "is-favorite"
        expect(toogleFavoriteFn).toHaveBeenCalledTimes(1);

    })
})