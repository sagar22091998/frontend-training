import ErrorBoundary from "./ErrorBoundary";
import MovieSearch from "./MovieSearch";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <MovieSearch />
      </ErrorBoundary>
    </div>
  );
};

export default App;
