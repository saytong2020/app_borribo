export class Job {
    constructor (
        public id: string,
        public title_en: string,
        public title_kh: string,
        
        public description_en: string,
        public description_kh: string,
        public requirement_en: string,
        public requirement_kh: string,
        public content_en: string,
        public content_kh: string,
        public id_user: string,
        public id_job_type: string,
        public image: string,
        public created_at: Date,
        public updated_at: Date,

   
    
        
    ) {}
}