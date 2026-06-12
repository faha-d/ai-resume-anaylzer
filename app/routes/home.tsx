import type {Route} from "./+types/home";
import Navbar from "~/components/Navbar";
import {resumes} from "../../constants";
import ResumeCard from "~/components/ResumeCard";


export function meta({}: Route.MetaArgs) {
    return [
        {title: "Untitled Project"},
        {name: "description", content: "Untitled Router!"},
    ];
}

export default function Home() {
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar/>
        <section className="main-section">
            <div className="page-heading">
                <h1>Track your applications & Resume</h1>
                <h2>Review your submissions and check AI-powered feedback.</h2>
            </div>
        </section>

        {resumes.length > 0 && (
            <section className="resumes-section">
                {resumes.map(resume => (
                    <ResumeCard key={resume.id} resume={resume}/>
                ))}
            </section>
        )}
    </main>
}
