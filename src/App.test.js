import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from './redux/configureStore';
import Home from './components/Home';

const renderMissions = (
  <Provider store={store}>
    <Home />
  </Provider>
);

describe('Home page', () => {
  test('renders home page', () => {
    render(renderMissions);
    const header = screen.getByText('Welcome');
    expect(header).toBeInTheDocument();
  });
});

describe('Home page snapshot', () => {
  it('renders the home page and makes a snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
