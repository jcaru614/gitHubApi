import React from 'react';
import { render, fireEvent, waitFor, act } from '../src/utils/testUtils';
import Main from '../src/screens/Main';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Main Test', () => {
  test('Main displays button', async () => {
    const { getByText } = render(<Main />);
    const button = getByText('Get Commits');
    expect(button).toBeDefined();
  });
  test('Main displays title', async () => {
    const { getByText } = render(<Main />);
    const button = getByText('GitHubAPI');
    expect(button).toBeDefined();
  });
  test('Main displays commits after button is fired', async () => {
    const { getByTestId, findByText } = render(<Main />);
    const button = getByTestId('btn');
    act(() => {
      fireEvent.press(button);
    });
    const commitAuthor = findByText(/Author/i);
    const commitHash = findByText(/Hash/i);
    const commitMsg = findByText(/Message/i);
    await waitFor(() => {
      expect(commitAuthor).toBeDefined();
      expect(commitHash).toBeDefined();
      expect(commitMsg).toBeDefined();
    });
  });
});
