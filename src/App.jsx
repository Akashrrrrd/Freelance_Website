import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment/AppDevelopment';
import CloudServices from './pages/CloudServices/CloudServices';
import DataAnalysis from './pages/DataAnalysis/DataAnalysis';
import DataScience from './pages/DataScience/DataScience';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import SoftwareDevelopment from './pages/SoftwareDevelopment/SoftwareDevelopment';
import BlockChainCrpytocurrency from './pages/BlockChainCrpytocurrency/BlockChainCrpytocurrency';
import PortfolioShowcase from './pages/PortfolioShowcase/PortfolioShowcase';
import ProUserPage from './pages/ProUserPage/ProUserPage';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';
import UI_UX from './pages/UI_UX/UI_UX';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import BrowseFreelancers from './pages/BrowseFreelancers/BrowseFreelancers';
import LoadMoreSamplePage from './pages/LoadMoreSamplePage/LoadMoreSamplePage';
import PostJob from './pages/PostJob/PostJob';
import OwnerPage from './pages/OwnerPage/OwnerPage';
import FindWork from './pages/FindWork/FindWork';
import ProgramTech from './pages/ProgramTech/ProgramTech';
import GraphicDesign from './pages/GraphicDesign/GraphicDesign';
import DigitalMarket from './pages/DigitalMarket/DigitalMarket';
import WritingTranslation from './pages/WritingTranslation/WritingTranslation';
import VideoAnimation from './pages/VideoAnimation/VideoAnimation';
import AIServices from './pages/AIServices/AIServices';
import MusicAudio from './pages/MusicAudio/MusicAudio';
import Business from './pages/Business/Business';
import HomePage from './components/HomePage/HomePage';
import RatingPage from './pages/RatingPage/RatingPage';
import LearningHub from './pages/LearningHub/LearningHub';
import ScrollToTop from './components/ScrollToTop';
import AI from './pages/AI/AI';
import TechNewsPage from './pages/TechNewsPage/TechNewsPage';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home_page' element={<HomePage/>}/>
        <Route path="/web_development" element={<WebDevelopment />} />
        <Route path="/app_development" element={<AppDevelopment />} />
        <Route path="/cloud_services" element={<CloudServices />} />
        <Route path="/data_analysis" element={<DataAnalysis />} />
        <Route path="/data_science" element={<DataScience />} />
        <Route path="/machine_learning" element={<MachineLearning />} />
        <Route path="/software_development" element={<SoftwareDevelopment />} />
        <Route path="/blockchain_cryptocurrency" element={<BlockChainCrpytocurrency />} />
        <Route path="/portfolio_showcase" element={<PortfolioShowcase />} />
        <Route path="/pro-user" element={<ProUserPage />} />
        <Route path='/digital_marketing' element={<DigitalMarketing />} />
        <Route path='/ui_ux' element={<UI_UX />} />
        <Route path='/how_it_works' element={<HowItWorks />} />
        <Route path='/browse_freelancers' element={<BrowseFreelancers />} />
        <Route path='/load_more_sample_page' element={<LoadMoreSamplePage />} />
        <Route path='/post_job' element={<PostJob />} />
        <Route path="/owner/:id" element={<OwnerPage />} />
        <Route path='/find_work' element={<FindWork />} />
        <Route path='/program_tech' element={<ProgramTech />} />
        <Route path='/graphic_design' element={<GraphicDesign />} />
        <Route path='/digital_market' element={<DigitalMarket />} />
        <Route path='/writing_translation' element={<WritingTranslation />} />
        <Route path='/video_animation' element={<VideoAnimation />} />
        <Route path='/ai_services' element={<AIServices />} />
        <Route path='/music_audio' element={<MusicAudio />} />
        <Route path='/business' element={<Business />} />
        <Route path='/rating_page' element={<RatingPage />} />
        <Route path='/learning_hub' element={<LearningHub />} />
        <Route path='/ai' element={<AI/>}/>
        <Route path='/tech_news' element={<TechNewsPage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
