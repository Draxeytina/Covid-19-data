import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';
import Home from '../components/Home';
import Navbar from '../components/Navbar';

describe('Test rendering properties', () => {
  test('Display home page', () => {
    const home = render(
      <BrowserRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </BrowserRouter>,
    );
    expect(home).toMatchSnapshot();
  });
  test('Display the whole app', () => {
    const application = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(application).toMatchSnapshot();
  });
  test('Display the nav bar', () => {
    const navBar = render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>,
    );
    expect(navBar).toMatchSnapshot();
  });
});
