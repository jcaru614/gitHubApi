import reducer from '../src/redux/reducer';
import { GitHubActionsTypes } from '../src/types/types';
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
const mockData = [
  {
    sha: 'd79b25da26f6c898f5d59cd1c11a987536a7d48c',
    commit: {
      author: {
        date: '2021-10-30T15:11:34.000+08:00',
        name: 'jcaru614',
        email: '68509393+Niebelungen-D@users.noreply.github.com',
      },
      message: 'commit',
    },
  },
  {
    sha: 'a79b25da26f6c898f5d523kf82jvjsa987536a7d48d',
    commit: {
      author: {
        date: '2021-10-30T15:11:34.000+08:00',
        name: 'Niebelungen',
        email: '68509393+Niebelungen-D@users.noreply.github.com',
      },
      message: 'commit',
    },
  },
];
const errorObject = {
  error: 'this is an error',
};

const mockPayload: any = { userText: 'jcaru614', repoText: 'my_portfolio' };
describe('Reducer Test', () => {
  test('Should return the initial state', async () => {
    expect(
      reducer(undefined, {
        type: GitHubActionsTypes.GITHUB_REQUEST,
        payload: mockPayload,
      })
    ).toEqual({
      commits: [],
      error: {},
      spinner: false,
    });
  });
  test('Should return the state with and array of commits', async () => {
    const previousState = {
      commits: [],
      error: {},
      spinner: false,
    };

    expect(
      reducer(previousState, { type: GitHubActionsTypes.GITHUB_SUCCESS, payload: mockData })
    ).toEqual({
      commits: mockData,
      error: {},
      spinner: false,
    });
  });

  test('Should return the state with error message', async () => {
    const previousState = {
      commits: [],
      error: {},
      spinner: true,
    };

    expect(
      reducer(previousState, { type: GitHubActionsTypes.GITHUB_ERROR, payload: errorObject })
    ).toEqual({
      commits: [],
      error: errorObject,
      spinner: false,
    });
  });
});
