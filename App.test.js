import {render, screen, fireEvent} from '@testing-library/react-native';
import App from './App';

describe('form submits two answers', function () {
  const allQuestions = ['q1', 'q2'];
  const mockFn = jest.fn();
  it('renders Card Label', () => {
    render(<App questions={allQuestions} onSubmit={mockFn} />);
    expect(0).toBe(1);
  });
});
