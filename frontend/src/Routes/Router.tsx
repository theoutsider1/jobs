import { createBrowserRouter } from 'react-router-dom';
import HeroSection from '../components/HeroSection/HeroSection';
import Layout from './Layout';
import OffersList from '../components/Offers/OffersList';
import JobDescription from '../components/OfferDetails/JobDescription';
import { HeroSectionRecruteur } from '../components/Recruteur/LandingPage/HeroSection2';
import { ContactezNous } from '../components/ContactPage/ContactezNous';
import { AddJobComponent } from '../components/Recruteur/AddOffersPage/AddJobComponent';
import { ChooseSpace } from '../components/ChooseSpace/ChooseSpaceT';
import { OffersManagement } from '../components/Recruteur/JobsManagement/JobsManagement';
import { EditJobOffer } from '../components/Recruteur/JobsManagement/EditJobOffer/EditJobOffer';
import { LoginCanditatesForm } from '../components/Navbar/IdentificationForms/LoginForm';
import { CreateAccountCandidates } from '../components/Navbar/IdentificationForms/CreateAccount';
import ProtectedRoute from './ProtectedRoutes';
//import { MainProfileComponent } from '../components/MyProfil/RecruiterProfil/MainProfileComponent';
import { AddOfferFormComponent } from '../components/Recruteur/AddOffersPage/AddOfferFrom/AddOfferComponent';
import { RecruiterProfileInfo } from '../components/Recruteur/RecruiterInfos/RecruiterProfileInfo';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <HeroSection /> },
      { path: '/trouverunemploi', element: <OffersList /> },
      { path: '/description/:id', element: <JobDescription /> },
      { path: '/EspaceRecruteur', element: <HeroSectionRecruteur /> },
      { path: '/ContacezNous', element: <ContactezNous /> },
      { path: '/chooseSpace', element: <ChooseSpace /> },
      {
        path: '/lancerUnOffre',
        element: <ProtectedRoute rolle="recruiter" />, // Use ProtectedRoute here
        children: [
          { path: '', element: <AddJobComponent /> }, // Nested route rendered by Outlet in ProtectedRoute
        ],
      },
      {
        path: '/suivezlesOffres',
        element: <ProtectedRoute rolle="recruiter" />, // Use ProtectedRoute here
        children: [
          { path: 'offersManagement', element: <OffersManagement /> }, // Nested route rendered by Outlet in ProtectedRoute
          { path: 'modifieroffre/:id', element: <EditJobOffer /> },
          { path: 'mon-profile', element: <RecruiterProfileInfo /> },
          { path: 'ajouter-offre', element: <AddOfferFormComponent /> },
        ],
      },
      // {
      //   path: '/espacerecruteur',
      //   element: <ProtectedRoute rolle="recruiter" />, // Use ProtectedRoute here
      //   children: [
      //     { path: 'mon-profile', element: <MainProfileComponent /> }, // Nested route rendered by Outlet in ProtectedRoute
          
      //   ],
      // },
      // {
      //   path: '/suivezlesoffres/modifieroffre/:id',
      //   element: <ProtectedRoute rolle="recruiter" />, // Use ProtectedRoute here
      //   children: [
      //     { path: '', element: <EditJobOffer /> }, // Nested route rendered by Outlet in ProtectedRoute
      //   ],
      // },
      { path: '/login', element: <LoginCanditatesForm /> },
      { path: '/signup', element: <CreateAccountCandidates /> },
    ],
  },
]);

export default Router;
