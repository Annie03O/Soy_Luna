import { RankItem } from "../../../models/RankItem";

export enum ActionTypes {
    ADDED, 
    REMOVED,
    MOVED_UP,
    MOVED_DOWN
}

type Action = {
    type: ActionTypes;
    payload: string;
}

export const RankingReducer = (items: RankItem[], action: Action): RankItem[] => {
    switch (action.type) {
        case ActionTypes.ADDED:
            return [...items, new RankItem(action.payload)];

        case ActionTypes.REMOVED:
            return items.filter((i) => i.id !== +action.payload);

        case ActionTypes.MOVED_UP: {
            const index = items.findIndex((item) => item.id === parseInt(action.payload))
            if (index <= 0) return items;

            const newItems = [...items];
            [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
            return newItems;
        }
        case ActionTypes.MOVED_DOWN: {
            const index = items.findIndex((i) => i.id === +action.payload);
            if (index < 0 || index === items.length -1) return items;
            const newItems = [...items];
            [newItems[index + 1], newItems[index]] = [newItems[index], newItems[index +1]];
            return newItems;
        }

        default:
            return items;
        }
}