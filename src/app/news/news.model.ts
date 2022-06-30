export class News {
    constructor (
        public id: string,
        public title_en: string,
        public title_kh: string,
        public content_en: string,
        public content_kh: string,
        public id_user: string,
        public image: string,
        
        public updated_at: Date,
        public created_at: Date,

        
    ) {}
}