import {IChat, IMan, ITrade} from "../interfaces";

export const admin: IMan = {
    id: 1,
    name: "Alina",
    avatar: "../src/assets/img/woman.png"
};

export const mans: Array<IMan> = [{
    id: 2,
    name: "Ivan",
    avatar: "../src/assets/img/man.jpg"
}, {
    id: 3,
    name: "Olga",
    avatar: "../src/assets/img/woman.png"
}, {
    id: 4,
    name: "Dima",
    avatar: "../src/assets/img/man.jpg"
}];

export const chats: Array<IChat> = [{
    id: 1,
    people: [admin, mans[0]],
    messages: [{
        id: 1,
        sender: mans[0],
        text: "Hello",
        date: new Date().toString(),
        isRead: true
    }, {
        id: 2,
        sender: admin,
        text: "Hi",
        date: new Date().toString(),
        isRead: true
    }]
}, {
    id: 2,
    people: [admin, mans[0]],
    messages: [{
        id: 1,
        sender: mans[0],
        text: "Good morning",
        date: new Date().toString(),
        isRead: true
    }, {
        id: 2,
        sender: admin,
        text: "Hi",
        date: new Date().toString(),
        isRead: false
    }]
}, {
    id: 3,
    people: [admin, mans[0]],
    messages: [{
        id: 1,
        sender: mans[0],
        text: "Good day",
        date: new Date().toString(),
        isRead: true
    }, {
        id: 2,
        sender: admin,
        text: "Hi",
        date: new Date().toString(),
        isRead: true
    }]
}];

export const TradeList: Array<ITrade> = [{
    id: 1,
    man: mans[0],
    chatID: 1,
    chat: chats[0],
    status: "is buying",
    paySystem: "Amazon Gift Card",
    amountUSD: 21.00,
    tradeHASH: "ddsfef43232",
    tradeStatus: "not paid",
    ofTrades: 8,
    pros: 12,
    cons: 0
}, {
    id: 2,
    man: mans[0],
    chatID: 2,
    chat: chats[1],
    status: "is buying",
    paySystem: "Amazon Gift Card",
    amountUSD: 29.00,
    tradeHASH: "dfdf2222",
    tradeStatus: "paid",
    ofTrades: 3,
    pros: 16,
    cons: 4
}, {
    id: 3,
    man: mans[0],
    chatID: 3,
    chat: chats[2],
    status: "is buying",
    paySystem: "Amazon Gift Card",
    amountUSD: 4.00,
    tradeHASH: "dd23dd",
    tradeStatus: "paid",
    ofTrades: 1,
    pros: 10,
    cons: 3
}];