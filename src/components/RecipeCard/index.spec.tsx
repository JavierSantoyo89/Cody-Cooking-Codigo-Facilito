import { render, screen, fireEvent } from '@testing-library/react';
import RecipeCard from './index'


describe('RecipeCard', () => {

    const props = {
        image: 'image.jpg',
        title: 'Recipe Title',
        description: 'Recipe description'
    }

    test('should render correctly', () => {
        render(
            <RecipeCard {...props} />
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
        const { debug } = render(
            <RecipeCard {...props} />
        )
        debug();

        // Utiliza getByRole, getByTestId, o cualquier otro selector para obtener el elemento
        const likeIcon = screen.getByTestId('like-icon');

        // Verifica que el elemento no tenga la clase "is-favorite"
        expect(likeIcon).not.toHaveClass('is-favorite');

        // Hacemos click en el icono de corazón
        fireEvent.click(likeIcon);

        // Verifica que el elemento ahora tenga la clase "is-favorite"
        expect(likeIcon).toHaveClass('is-favorite');

    })
})