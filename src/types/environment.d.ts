export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TOKEN: string,
            ENV: 'test' | 'dev' | 'prod';
        }
    }
}