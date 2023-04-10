export default function configReducer(state: {
    loading: boolean;
    config: any;
    error: string;
} | undefined, action: any): {
    loading: boolean;
    config: any;
    error: any;
};
