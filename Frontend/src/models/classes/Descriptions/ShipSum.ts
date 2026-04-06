import { ComponentType } from "react";

export type ShipSum = {
    id: string;
    name: string;
    roleLabel: string;
    SummaryComponent: ComponentType[];
    category: "Romance" | "Friendship" | "Family" | "Rival"  
}