import { Quote } from "./quote";

export interface Song {
    id: number;
    title: string;
    youtubeId: string;
    quotes: Array<Quote>;
}
