declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        MONGO_URI: string;
        CLIENT_URL: string;
        OMDB_API_KEY: string;
    }
}
