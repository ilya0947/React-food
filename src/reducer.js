export default function reducer(state, {type, peyload}) {
    switch (type) {

        case 'SET_CATALOG': 
            return {
                ...state,
                catalog: peyload
            };
           
        case 'SET_MEALS':
            return {
                ...state,
                meals: [...peyload]
            };

        case 'SET_RESIPE':
            return {
                ...state,
                resipe: peyload,
            };

        case 'SET_RESIPE_LOAD':
            return {
                ...state,
                resipeLoad: peyload
            };

        case 'SET_VALUE':
            return {
                ...state,
                value: peyload
            };

        case 'SET_FILTERED_CATALOG':
            return {
                ...state,
                filteredCatalog: peyload
            };

        case 'FILTER_CATALOG':
            return {
                ...state,
                filteredCatalog: state.catalog.filter(item => item.strCategory.toLowerCase().includes(peyload.toLowerCase()))
            };

        default:
            return state;
    }
}