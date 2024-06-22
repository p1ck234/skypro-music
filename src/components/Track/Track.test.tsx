import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Track from "./Track";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { playlistReducer } from "@/store/features/playlistSlice";
import { TrackType, userType } from "@/types/types";

const mockUser: userType = {
  id: 1,
  username: "testuser",
  first_name: "Test",
  last_name: "User",
  email: "testuser@example.com",
};

const mockTrack: TrackType = {
  id: 1,
  name: "Test Track",
  author: "Test Author",
  album: "Test Album",
  duration_in_seconds: 240,
  release_date: 2020,
  genre: "Test Genre",
  logo: "test-logo.png",
  track_file: "test-track.mp3",
  stared_user: [mockUser],
  onClick: () => {},
};

const mockTracksData: TrackType[] = [mockTrack];

interface RenderWithReduxOptions {
  initialState?: PreloadedState<{ playlist: PlaylistStateType }>;
  store?: ReturnType<typeof configureStore>;
}

const renderWithRedux = (
  component: React.ReactNode,
  {
    initialState,
    store = configureStore({
      reducer: { playlist: playlistReducer },
      preloadedState: initialState,
    }),
  }: RenderWithReduxOptions = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

describe("Track Component", () => {
  it("should render track details", () => {
    renderWithRedux(<Track track={mockTrack} tracksData={mockTracksData} />);

    expect(screen.getByText("Test Track")).toBeInTheDocument();
    expect(screen.getByText("Test Author")).toBeInTheDocument();
    expect(screen.getByText("Test Album")).toBeInTheDocument();
    expect(screen.getByText("4:00")).toBeInTheDocument(); // Assuming durationFormat(240) returns '4:00'
  });

  it("should dispatch actions on click", () => {
    const { store } = renderWithRedux(
      <Track track={mockTrack} tracksData={mockTracksData} />
    );

    fireEvent.click(screen.getByText("Test Track"));

    const state = store.getState().playlist;
    expect(state.currentTrack).toEqual(mockTrack);
    expect(state.isPlaying).toBe(true);
  });
});
