import { useEffect, useState } from 'react';

const useDepartments = () => {
    const [depts, setDepts] = useState([]);
    useEffect(() => {
        fetch('./departments.json')
            .then(res => res.json())
            .then(data => setDepts(data))
    }, [])
    return [depts, setDepts];

};

export default useDepartments;