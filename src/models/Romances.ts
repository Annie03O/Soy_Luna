import { GastinaImg, LumonImg, LutteoImg, MambarImg, PelfiImg, SimbarImg, YamiroImg } from "./Images";
import { Relationship } from "./Relationships";
import jicoImg from "/src/assets/jico.jpg"

export const romances: Relationship[] = [
    new Relationship(1, "Luna and Matteo", LutteoImg,"/Lutteo"),
    new Relationship(2, "Luna and Simón", LumonImg, "/Lumon"),
    new Relationship(3, "Nina and Gastón", GastinaImg, "/Gastina"),
    new Relationship(4, "Àmbar and Simón", SimbarImg, "/Simbar"),
    new Relationship(5, "Pedro and Delfi", PelfiImg, "/Pelfi"),
    new Relationship(6, "Nico and Jim", jicoImg, "/Jico"),
    new Relationship(7, "Yam and Ramiro", YamiroImg, "/Yamiro"),
    new Relationship(8, "Àmbar and Matteo", MambarImg, "/Mambar"),
]
