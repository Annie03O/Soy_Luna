import { Page } from "../classes/AllType";
import { GastinaImg, LumonImg, LutteoImg, MambarImg, PelfiImg, SimbarImg, YamiroImg, JicoImg } from "./Images";

export const romances: Page[] = [
    {id: "1", label: "Luna and Matteo", imgUrl: LutteoImg, path: "/Lutteo"},
    {id: "2", label: "Luna and Simón", imgUrl: LumonImg, path: "/Lumon"},
    {id: "3", label: "Nina and Gastón", imgUrl: GastinaImg, path: "/Gastina"},
    {id: "4", label: "Àmbar and Simón", imgUrl: SimbarImg, path: "/Simbar"},
    {id: "5", label: "Pedro and Delfi", imgUrl: PelfiImg, path: "/Pelfi"},
    {id: "6", label: "Nico and Jim", imgUrl: JicoImg, path: "/Jico"},
    {id: "7", label: "Yam and Ramiro", imgUrl: YamiroImg, path: "/Yamiro"},
    {id: "8", label: "Àmbar and Matteo", imgUrl: MambarImg, path: "/Mambar"},
]
