import "./App.css";
import { News } from "./components/news/news";
import { Nav } from "./components/nav/nav";

function App() {
  const name = "Franek";

  const newsList = [
    {
      title: "Spotkanie z epsteinem",
      description:
        "Odbyło się spotkanie światowych liderów w Monachium dotyczące bezpieczeństwa i współpracy międzynarodowej.",
    },
    {
      title: "Nowa wyspa epsteina",
      description:
        "teraz jest big saint james na żydzi nie maja wstępu. 676767676767676767676767",
    },
    {
      title: "Rekord na wyspie epsteina",
      description:
        "10000 dzieci już było na wysie  676767676767676767676767676767676767676767676767 .",
    },
    {
      title: "Przełom w medycynie na wyspie epsteina",
      description:
        "dzieci na wyspie epsteina stworzyły lek na 676767676767676767676767676767676767676767676767.",
    },
    {
      title: "Nowe technologie AI opracowane przez epsteina",
      description:
        "Powstał innowacyjny model sztucznej inteligencji wspierający edukację i analizę danych.",
    },
    {
      title: "Zmiany klimatyczne na wyspie epsteina",
      description:
        "Opublikowano raport wskazujący na przyspieszone tempo topnienia lodowców.",
    },
  ];

  return (
    <>

      <h1 className="animated-title">HELLO {name}!</h1>

      <main>
        {newsList.map((news, index) => (
          <News
            key={index}
            title={news.title}
            description={news.description}
          ></News>
        ))}
      </main>
    </>
  );
}

export default App;