import DateTimeFormat = Intl.DateTimeFormat;
export class Punchline {
    constructor(
        public _id: number,
        public author: string,
        public body: string,
        public created: DateTimeFormat,
        public updated: DateTimeFormat,
        public hidden: boolean,
        public battle: string,
        public meta: {
            goods: number,
            bads: number,
            favs: number,
        }
    ) {  }
}