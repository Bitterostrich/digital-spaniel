import '../app/globals.css';
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import RecentProjects from '@/components/recentprojects/RecentProjects'


export default function Home () {
    return (
        <div>
           <Hero/>
           <About/>
           <RecentProjects/>
        </div>
    )
}