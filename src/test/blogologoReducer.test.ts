import {
  getByDate,
  getPostById,
  getSearch,
  getValues,
} from "../api/services/BlogologoServices/BlogologoServices";
import { AnyAction, BlogProps, BlogologoProps } from "../models/BlogologoProps";
import { BlogReducerEnum } from "../store/reducers/blogologoReducer/actionTypes";
import {
  getDataToStore,
  getSelectedPostFromStore,
  searchAndSetResults,
  setArticles,
  setByDateToStore,
  setDateInterval,
  setNews,
  setPaginationData,
  setSearchDateToStore,
  setSearchStringToStore,
  setSelectedCard,
  setView,
} from "../store/reducers/blogologoReducer/actions";

jest.mock("../api/services/BlogologoServices/BlogologoServices", () => ({
  getValues: jest.fn(),
  getSearch: jest.fn(),
  getPostById: jest.fn(),
  getByDate: jest.fn(),
}));

describe("Blog Actions", () => {
  const mockData: BlogologoProps = {
    count: 1,
    results: [
      {
        id: 1,
        title: "Test Title",
        image_url: "test-image-url.jpg",
        summary: "Test Summary",
        published_at: "2024-01-04T12:00:00Z",
      },
    ],
  };

  it("should create an action to set articles", () => {
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_ARTICLES;
      payload: BlogProps[];
    } = {
      type: BlogReducerEnum.SET_ARTICLES,
      payload: mockData.results,
    };
    expect(setArticles(mockData.results)).toEqual(expectedAction);
  });

  it("should create an action to set news", () => {
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_NEWS;
      payload: BlogProps[];
    } = {
      type: BlogReducerEnum.SET_NEWS,
      payload: mockData.results,
    };
    expect(setNews(mockData.results)).toEqual(expectedAction);
  });

  it("should create an action to set pagination data", () => {
    const count = 10;
    const currentPage = 2;
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_PAGINATION_DATA;
      payload: { count: number; currentPage: number };
    } = {
      type: BlogReducerEnum.SET_PAGINATION_DATA,
      payload: { count, currentPage },
    };
    expect(setPaginationData(count, currentPage)).toEqual(expectedAction);
  });

  it("should create an action to set view", () => {
    const view = "articles";
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_VIEW;
      payload: string;
    } = {
      type: BlogReducerEnum.SET_VIEW,
      payload: view,
    };
    expect(setView(view)).toEqual(expectedAction);
  });

  it("should create an action to set date interval", () => {
    const interval = "week";
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_DATE_INTERVAL;
      payload: string;
    } = {
      type: BlogReducerEnum.SET_DATE_INTERVAL,
      payload: interval,
    };
    expect(setDateInterval(interval)).toEqual(expectedAction);
  });

  it("should create an action to set search string to store", () => {
    const newSearch = "test search";
    const searching = true;
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_SEARCH;
      payload: { newSearch: string; searching: boolean };
    } = {
      type: BlogReducerEnum.SET_SEARCH,
      payload: { newSearch, searching },
    };
    expect(setSearchStringToStore(newSearch, searching)).toEqual(
      expectedAction
    );
  });

  it("should create an action to set search date to store", () => {
    const date = "2024-01-01";
    const searchingDate = true;
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_SEARCH_DATE;
      payload: { date: string; searchingDate: boolean };
    } = {
      type: BlogReducerEnum.SET_SEARCH_DATE,
      payload: { date, searchingDate },
    };
    expect(setSearchDateToStore(date, searchingDate)).toEqual(expectedAction);
  });

  it("should create an action to set selected card", () => {
    const card: BlogProps = {
      id: 1,
      title: "Test Title",
      image_url: "test-image-url.jpg",
      summary: "Test Summary",
      published_at: "2024-01-04T12:00:00Z",
    };
    const expectedAction: {
      type: typeof BlogReducerEnum.SET_SELECTED_CARD;
      payload: BlogProps;
    } = {
      type: BlogReducerEnum.SET_SELECTED_CARD,
      payload: card,
    };
    expect(setSelectedCard(card)).toEqual(expectedAction);
  });

  it("should dispatch setArticles and setPaginationData actions for getDataToStore", async () => {
    const view = "articles";
    const page = 1;

    (getValues as jest.Mock).mockResolvedValueOnce(mockData);

    const mockDispatch = jest.fn();

    await getDataToStore(view, page)(mockDispatch);

    const expectedActions: Array<{ type: string; payload: any }> = [
      { type: BlogReducerEnum.SET_ARTICLES, payload: mockData.results },
      {
        type: BlogReducerEnum.SET_PAGINATION_DATA,
        payload: { count: mockData.count, currentPage: page },
      },
    ];

    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(mockDispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
  });

  it("should dispatch setArticles, setPaginationData, and setSearchStringToStore actions for searchAndSetResults", async () => {
    const view = "articles";
    const page = 1;
    const search = "test";

    (getSearch as jest.Mock).mockResolvedValueOnce(mockData);

    const mockDispatch = jest.fn();

    await searchAndSetResults(view, page, search)(mockDispatch);

    const expectedActions: Array<{ type: string; payload: any }> = [
      { type: BlogReducerEnum.SET_ARTICLES, payload: mockData.results },
      {
        type: BlogReducerEnum.SET_PAGINATION_DATA,
        payload: { count: mockData.count, currentPage: page },
      },
      {
        type: BlogReducerEnum.SET_SEARCH,
        payload: { newSearch: search, searching: true },
      },
    ];

    expect(mockDispatch.mock.calls.length).toBe(3);
    expect(mockDispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(mockDispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
    expect(mockDispatch.mock.calls[2][0]).toEqual(expectedActions[2]);
  });

  it("should dispatch setSelectedCard action for getSelectedPostFromStore", async () => {
    const view = "articles";
    const id = 1;

    (getPostById as jest.Mock).mockResolvedValueOnce(mockData.results[0]);

    const mockDispatch = jest.fn();

    await getSelectedPostFromStore(view, id)(mockDispatch);

    const expectedAction: {
      type: typeof BlogReducerEnum.SET_SELECTED_CARD;
      payload: BlogProps;
    } = {
      type: BlogReducerEnum.SET_SELECTED_CARD,
      payload: mockData.results[0],
    };

    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0][0]).toEqual(expectedAction);
  });

  it("should dispatch setArticles and setPaginationData actions for setByDateToStore", async () => {
    const view = "articles";
    const page = 1;
    const date = "2024-01-01";

    (getByDate as jest.Mock).mockResolvedValueOnce(mockData);

    const mockDispatch = jest.fn();

    await setByDateToStore(view, page, date)(mockDispatch);

    const expectedActions: AnyAction[] = [
      { type: BlogReducerEnum.SET_ARTICLES, payload: mockData.results },
      {
        type: BlogReducerEnum.SET_PAGINATION_DATA,
        payload: { count: mockData.count, currentPage: page },
      },
    ];

    expect(mockDispatch.mock.calls.length).toBe(2);
    expect(mockDispatch.mock.calls[0][0]).toEqual(expectedActions[0]);
    expect(mockDispatch.mock.calls[1][0]).toEqual(expectedActions[1]);
  });
});
