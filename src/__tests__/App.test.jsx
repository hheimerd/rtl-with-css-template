import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { fireEvent } from '@testing-library/react';
jest.setTimeout(70000)

test('renders welcome message', async () => {
  render(<App />);

  const inputElement = screen.getByTestId('input');
  inputElement.click();
  fireEvent.change(inputElement, {target: {value: 'hello'}})
  expect(inputElement).toHaveValue('hello');


  const buttonElement = screen.getByText('click me');
  expect(buttonElement).toBeInTheDocument();
  
  // Simulate a click event
  await fireEvent.click(buttonElement);

  expect(buttonElement).toHaveTextContent('clicked');
});