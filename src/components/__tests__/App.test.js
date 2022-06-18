import App from '../App';
import ReactDOM from 'react-dom';

it('shows a comment box', () => {
  const div = document.create('div');

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});
