import { useEffect, useState } from 'react';

const useConsultants = () => {
    const [consultors, setConsultors] = useState([]);
    useEffect(() => {
        fetch('./doctors.json')
            .then(res => res.json())
            .then(data => setConsultors(data))
    }, []);
    return [consultors, setConsultors];

};

export default useConsultants;