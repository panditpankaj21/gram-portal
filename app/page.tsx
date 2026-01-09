import AboutSection from './components/AboutSection';
import ComplaintFormSection from './components/ComplaintFormSection';
import GrampanchayatTabs from './components/GrampanchayatTab';
import SarpanchSection from './components/SarpanchSection';
import YojanaSection from './components/YojnaSection';

export default function Home() {
  return (
    <div>
      <AboutSection/>
      <SarpanchSection/>
      <GrampanchayatTabs/>
      <YojanaSection/>
      <ComplaintFormSection/>
    </div>
  );
}
