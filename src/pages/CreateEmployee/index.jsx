import { Link } from 'react-router-dom'
import './index.scss'
import states from '../../utils/states'
import { useContext, useState } from 'react'
import { EmployeeContext } from '../../utils/EmployeeContext'
import Modal from '../../components/Modal'

function CreateEmployee() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const modalMsg = 'Employee Created !'
    const { addEmployee } = useContext(EmployeeContext)
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        startDate: '',
        department: '',
        dateOfBirth: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    })

    const modalSyle = {
        blockerBackgroundColor: 'rgba(0,0,0,0.75)',
        modalWidth: 'clamp(500px, 90% , 100px)',
        textColor: '#000',
        textAlign: 'center',
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        msgFontWeight: '800',
        borderColorAnimation: 'rgba(54, 121, 184, 0.5)',
        lineColorAnimation: 'rgb(54, 121, 184)',
        buttonBgColor: 'rgb(54, 121, 184)',
        buttonFontWeight: '700',
        buttonBgColorHovered: 'rgba(54, 121, 184, 0.5)',
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setEmployee((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        addEmployee(employee)
        setIsModalOpen(true)
    }

    return (
        <>
            <h1>HRnet</h1>
            <div className="container">
                <Link className="employees-link" to="/emloyees">
                    View Current Employees
                </Link>
                <h2>Create Employee</h2>
                <form action="#" id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input
                        type="text"
                        id="first-name"
                        name="firstName"
                        value={employee.firstName}
                        onChange={handleChange}
                    />

                    <label htmlFor="last-name">Last Name</label>
                    <input
                        type="text"
                        id="last-name"
                        name="lastName"
                        value={employee.lastName}
                        onChange={handleChange}
                    />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input
                        type="date"
                        id="date-of-birth"
                        name="dateOfBirth"
                        value={employee.dateOfBirth}
                        onChange={handleChange}
                    />

                    <label htmlFor="start-date">Start Date</label>
                    <input
                        id="start-date"
                        type="date"
                        name="startDate"
                        value={employee.startDate}
                        onChange={handleChange}
                    />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input
                            id="street"
                            type="text"
                            name="street"
                            value={employee.street}
                            onChange={handleChange}
                        />

                        <label htmlFor="city">City</label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            value={employee.city}
                            onChange={handleChange}
                        />

                        <label htmlFor="state">State</label>
                        <select name="state" id="state" onChange={handleChange}>
                            {states.map((state, index) => (
                                <option key={index} value={state.abbreviation}>
                                    {state.name}
                                </option>
                            ))}
                        </select>

                        <label htmlFor="zip-code">Zip Code</label>
                        <input
                            id="zip-code"
                            type="number"
                            name="zipCode"
                            value={employee.zipCode}
                            onChange={handleChange}
                        />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <select
                        name="department"
                        id="department"
                        value={employee.department}
                        onChange={handleChange}
                    >
                        <option value="Sales">Sales</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Human Resources">Human Resources</option>
                        <option value="Legal">Legal</option>
                    </select>
                </form>

                <button
                    className="save-button"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Save
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                modalMsg={modalMsg}
                modalStyle={modalSyle}
            />
        </>
    )
}

export default CreateEmployee
