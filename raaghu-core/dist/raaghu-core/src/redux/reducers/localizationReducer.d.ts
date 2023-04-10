export default function localizationReducer(state: {
    loading: boolean;
    localization: any;
    error: string;
} | undefined, action: any): {
    loading: boolean;
    localization: any;
    error: any;
};
