import { lazy, Suspense } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

// Lazy Load Pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const CreatePage = lazy(() => import("./pages/CreatePage.jsx"));

function App() {
  const bgColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Box minH="100vh" bg={bgColor}>
      {/* Navbar */}
      <Navbar />

      {/* Routing dengan Suspense */}
      <Suspense fallback={<Box p={4}>Loading...</Box>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </Suspense>
    </Box>
  );
}

export default App;
