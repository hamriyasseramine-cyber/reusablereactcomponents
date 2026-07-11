// src/pages/Icons.jsx
// Nouvelle arch : tout vit dans src/components/iconp/
// (IconLibraryPage, Sidebar, Toolbar, IconGrid, IconDetailPanel à plat,
//  + sous-dossiers common/, data/, styles/)

import IconLibraryPage from "../components/iconp/IconLibraryPage";

// Point d'entrée à importer dans ton routeur, ex:
// <Route path="/icons" element={<Icons />} />
export default function Icons() {
  return <IconLibraryPage />;
}
