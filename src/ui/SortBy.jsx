/* eslint-disable no-unused-vars */

import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/* eslint-disable react/prop-types */
function SortBy({ options }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sortBy') || "";
    function handleChange(e) { 
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams);
    }
    return <Select options={options} type="white" onChange={ handleChange} value={sortBy}/>;
}

export default SortBy;
