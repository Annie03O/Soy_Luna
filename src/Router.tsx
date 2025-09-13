import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { Characters } from "./pages/Characters/Characters.tsx";
import { Relationships } from "./pages/Relationships/Relationships";
import { Music } from "./pages/Music/Music";
import { LunaPage } from "./pages/Characters/Luna/LunaPage.tsx";
import { MatteoPage } from "./pages/Characters/Matteo/MatteoPage.tsx";
import { SimónPage } from "./pages/Characters/Simón/SimónPage.tsx";
import { Ranking } from "./pages/Ranking/Ranking.tsx";
import { ÁmbarPage } from "./pages/Characters/Ámbar/ÁmbarPage.tsx"
import { NinaPage } from "./pages/Characters/Nina/NinaPage.tsx";
import { DelfiPage } from "./pages/Characters/Delfi/DelfiPage.tsx";
import { GastónPage } from "./pages/Characters/Gastón/GastónPage.tsx";
import { JazmínPage } from "./pages/Characters/Jazmín/JazmínPage.tsx";
import { Seasons } from "./pages/Seasons/Seasons.tsx";
import { Season1 } from "./pages/Seasons/Season 1/Season1.tsx";
import { JimPage } from "./pages/Characters/Jim/JimPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            // Sidorna i navbaren
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/Characters",
                element: <Characters/>
            },
            {
                path: "/Seasons",
                element: <Seasons/>
            },
            {
                path: "/Relationships",
                element: <Relationships />
            },
            {
                path: "/Music",
                element: <Music/>
            },
            { 
                path: "/Ranking",
                element: <Ranking/>
            },
            // Sidorna för varje karaktär
            {
                path: "/Luna",
                element: <LunaPage/>
            },
            {
                path: "/Matteo",
                element: <MatteoPage />
            }, 
            {
                path: "/Simón",
                element: <SimónPage/>
            },
            {
                path: "/Ámbar",
                element: <ÁmbarPage />
            },
            {
                path: "/Nina",
                element: <NinaPage/>
            },
            {
                path: "/Delfi",
                element: <DelfiPage/> 
            },
            {
                path: "/Gastón",
                element: <GastónPage/>
            },
            {
                path: "/Jazmín",
                element: <JazmínPage/>
            },
            {
                path: "/Jim",
                element: <JimPage/>
            },
            // Sidorna för varje säsong
            {
                path: "/Season_1",
                element: <Season1/>
            }
        ]
    }])