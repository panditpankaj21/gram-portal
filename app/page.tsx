import AboutSection from './components/AboutSection';
import ComplaintFormSection from './components/ComplaintFormSection';
import GalleryCarousel from './components/GalleryCarousel';
import GrampanchayatTabs from './components/GrampanchayatTab';
import NotificationBanner from './components/NotificationBanner';
import SarpanchSection from './components/SarpanchSection';
import YojanaSection from './components/YojnaSection';

export default function Home() {
  return (
    <div>
      <NotificationBanner/>
      <GalleryCarousel/>
      <AboutSection/>
      <SarpanchSection/>
      {/* <GrampanchayatTabs/> */}
      <YojanaSection/>
      <ComplaintFormSection/>
    </div>
  );
}
