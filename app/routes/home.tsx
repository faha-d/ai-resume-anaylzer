import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Untitled Project" },
    { name: "description", content: "Untitled Router!" },
  ];
}

export default function Home() {
  return <main className='bg-[url'>
  <section className="main-section">
    <div className="page-heading">
      <h1>Track your applications & Resume</h1>
      <h2>Review your submissions and check AI-powered feedback.</h2>
    </div>
  </section>
  </main>
}
