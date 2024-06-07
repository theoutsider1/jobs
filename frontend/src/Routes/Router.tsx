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
          { path: '', element: <OffersManagement /> }, // Nested route rendered by Outlet in ProtectedRoute
        ],
      },
      {
        path: '/suivezlesoffres/modifieroffre/:id',
        element: <ProtectedRoute rolle="recruiter" />, // Use ProtectedRoute here
        children: [
          { path: '', element: <EditJobOffer /> }, // Nested route rendered by Outlet in ProtectedRoute
        ],
      },
      { path: '/login', element: <LoginCanditatesForm /> },
      { path: '/signup', element: <CreateAccountCandidates /> },
    ],
  },
]);

export default Router;
