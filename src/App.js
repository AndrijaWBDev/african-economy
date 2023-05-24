import { makeStyles } from '@mui/styles';
import {
  Routes,
  Route,
} from 'react-router-dom';

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectArticle from './pages/project/Article';
import AddProject from './pages/project/add'
import Propositions from './pages/Propositions';
import PropositionArticle from './pages/proposition/Article';
import Forum from './pages/Forum';
import SelectTopic from './pages/forum/message';
import AboutUs from './pages/AboutUs';
import AccountPage from "./pages/account/votes";
import UploadAvatar from "./pages/account/uploadAvatar"

import Navbar from './components/SiteHeader';
import styles from './assets/themeStyle';

const useStyles = makeStyles(styles);

function App() {
  const classes = useStyles();

  return (
    <div className={classes.bg} style={{ minHeight: "100vh", backgroundRepeat: "repeat" }}>
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/add" element={<AddProject />} />
          <Route path="/project/article" element={<ProjectArticle />} />
          <Route path="/propositions" element={<Propositions />} />
          <Route path="/proposition/article" element={<PropositionArticle />} />
          <Route path="/about" element={<AboutUs />} />

          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/select_topic" element={<SelectTopic />} />

          <Route path="/profile" element={<AccountPage />} />
          <Route path="/profile/upload_avatar" element={<UploadAvatar />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
