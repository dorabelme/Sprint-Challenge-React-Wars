import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'



test('should increment page', () => {
    const { queryByText, getByLabelText, getByText } = ReactDOM.render(
        <App />,
    )

    const nextPageNode = getByText("https://swapi.co/api/people/?page=2")
    expect(nextPageNode).toBeDefined()

    ReactDOM.render(<App />);
})

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});