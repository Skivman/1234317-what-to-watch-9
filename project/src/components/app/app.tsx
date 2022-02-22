import MainPage from '../main-page/MainPage';

type AppMainPageProps = {
  filmTitle: string,
  filmGenre: string,
  filmYear: number,
}

function App({filmTitle, filmGenre, filmYear}: AppMainPageProps): JSX.Element {
  return (
    <MainPage filmTitle={filmTitle} filmGenre={filmGenre} filmYear={filmYear}/>
  );
}

export default App;
