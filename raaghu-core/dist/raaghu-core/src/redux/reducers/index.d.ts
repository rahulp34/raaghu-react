declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    confidReducer: {
        loading: boolean;
        config: any;
        error: any;
    };
    localizationReducer: {
        loading: boolean;
        localization: any;
        error: any;
    };
}>, any>;
export default rootReducer;
