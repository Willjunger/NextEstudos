import Link from "../src/components/Link";
import PageTitle from "../src/components/PageTitle";
// export async function getServerSideProps() {
// console.log("EM MODO DEV, SEMPRE TODA! A CADA ACESSO");
//   console.log("RODA A CADA ACESSO QUE VOCÊ RECEBE");
// }
export async function getStaticProps() {
  console.log("EM MODO DEV, SEMPRE TODA! A CADA ACESSO");
  console.log("RODA SOMENTE EM BUILD TIME");
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });
  return {
    props: {
      qualquercoisa: "qalquercoisa aqui",
      faq,
    },
  };
}

export default function FAQPage({ faq }) {
  console.log(faq);

  return (
    <div>
      <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
      <h1>Alura Cases - Páginas de perguntas FAQ</h1>
      <Link href="/">Ir para a página Home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
