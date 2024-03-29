import '../app/globals.css';
import Hero from '@/components/hero/Hero';
import About from '@/components/about/About';
import RecentProjects from '@/components/recentprojects/RecentProjects';
import CaseStudies from '@/components/casestudies/CaseStudies';
import MissionStatement from '@/components/missionstatement/MissionStatement';
import Testimonials from '@/components/testimonials/Testimonials';



export default function Home () {
    return (
        <div>
           <Hero/>
           <About/>
           <RecentProjects/>
           <CaseStudies/>
           <MissionStatement/>
           <Testimonials/>
        </div>
    )
}