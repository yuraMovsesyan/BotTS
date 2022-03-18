import TelegramBot from "node-telegram-bot-api"

import { Parser } from "./Parser";
import { Okko } from "./Service/Okko";
import { Wiki } from "./Service/Wiki";

const bot = new TelegramBot("TOKEN", {polling: true});
const parser: Parser = new Parser(new Okko());

bot.onText(/\/okko(.+)/, function onEchoText(msg) {
    parser.SetService(new Okko());
    const text: string = msg.text?.replace(/\/okko/i, '') ?? "зона";
    
    parser.Search(text, parser.GetTitles, SendList, msg);
    
});

bot.onText(/\/wiki(.+)/, function onEchoText(msg) {
    parser.SetService(new Wiki());
    const text: string = msg.text?.replace(/\/wiki/i, '') ?? "зона";
    parser.Search(text, parser.GetTitles, SendList, msg);
});

function SendList (msg: TelegramBot.Message, res: string[]){
    let text: string = ""; 
    for (let i: number = 0; i < res.length; i++) text += `${i + 1}) ${res[i]}\n`;
    
    bot.sendMessage(msg.chat.id, text);
}
