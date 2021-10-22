import { Row } from 'react-bootstrap';
import useDepartments from '../../hooks/useDepartments';
import DeptItem from '../DeptItem/DeptItem';
import './Departments.css'

const Departments = () => {
    const [depts] = useDepartments();

    return (
        <div className="backgrnd-img">
            <h1 className="pt-5">The Departments we direct</h1>
            <div className="container-fluid px-4 p-md-5">
                <Row xs={1} md={3} lg={3} xl={4} className=" py-4 g-4">
                    {
                        depts.map(dept => <DeptItem
                            key={dept.id}
                            dept={dept}
                        ></DeptItem>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Departments;