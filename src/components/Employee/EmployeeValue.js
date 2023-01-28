import React from 'react'
import EmployeeImage from '../../utils/employeeimages.jpeg'


function EmployeeValue(props) {
    
    const { employee} = props;
    
  return (
    <div  className='employeecontainer'>
    <div className='employeeimg'>
        <img src={EmployeeImage} alt='employeeimage' />
    </div>
    <div className='employeestatus'>
        <p className='empname'>{employee.name}</p>
        <p className='role'>{employee.role}</p>
    </div>
    <div className='empprogress' >
        <div className='emprefer'>
            {employee.status === "referred" || employee.status === "closed" ? <div className='employeeimg'>
            <img src={EmployeeImage} alt='employeeimage' />
            </div> : <span className='empcircle' style={{ backgroundColor: employee.status === "referred" ? "#ccc" : "#0ed745" && employee.status === "closed" ? "#ccc" : "#0ed745" }} ></span>}
            <progress className='pro' value={employee.status === "referred" ? "0" : "25" && employee.status === "closed" ? "0" : "25"} max="25"  >Reffered</progress>

            {employee.status === "interviewed" ? <div className='employeeimg'>
            <img src={EmployeeImage} alt='employeeimage' />
            </div> : <span className='empcircle' style={{ backgroundColor: employee.status === "hired" ? "#0ed745" : "#ccc" && employee.status === "joined" ? "#0ed745" : "#ccc" && employee.status === "reward" ? "#0ed745" : "#ccc" }} ></span>}
            <progress className='pro' value={employee.status === "hired" ? "25" : "0" && employee.status === "joined" ? "25" : "0" && employee.status === "reward" ? "25" : "0"} max="25">Interview</progress>

            {employee.status === "hired" ? <div className='employeeimg'>
            <img src={EmployeeImage} alt='employeeimage' />
            </div> : <span className='empcircle' style={{  backgroundColor: employee.status === "joined" ? "#0ed745" : "#ccc" && employee.status === "reward" ? "#0ed745" : "#ccc" }} ></span>}
            <progress className='pro' value={employee.status === "joined" ? "25" : "0" && employee.status === "reward" ? "25" : "0"}max="25">Hired</progress>

            {employee.status === "joined" || employee.status === "reward" ? <div className='employeeimg'>
            <img src={EmployeeImage} alt='employeeimage' />
            </div> : <span className='empcircle' style={{ backgroundColor: employee.status === "reward" ? "#0ed745" : "#ccc" }} ></span>}
            
            <progress className='pro' value={employee.status === "reward" ? "25" : "0" && employee.status === "joined" ? "10" : "0"} max="25">Joined</progress>
            
        </div>

        <p style={{ color: employee.status === "reward" ? "#0ed745" : "#ccc", fontSize: employee.status === "reward" ? "24px" : "18px" }}>${employee.reward}</p>

    </div>
    
</div>
  )
}

export default EmployeeValue