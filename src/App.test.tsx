import { render } from 'test-utils';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
});
