import React, { useEffect, useState } from 'react'
import data from '../../utils/data'
import './employee.css'
import useCheckSize from '../Hooks/useCheckSize';
import EmployeeValue from './EmployeeValue';
import EmployeeResp from './EmployeeResp';

function Employee() {
    
    const size = useCheckSize();
    const [display,setDisplay] = useState('none');
    const [final, setFinal] = useState([]);
    const[name,setName] = useState('');
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick= () =>{
        if(display==="flex"){
            setDisplay('none');
        }

        if(display==="none"){
        setDisplay('flex');
       
    }
    }
    
    //FETCHING THE ACTIVE ONCLICK EMPLOYEE VALUE FOR MOBILE AND TAB
    const handleprog = (index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    }

    // FILTER AN EMPLOYEE ON THE BASIS OF NAME
    useEffect(()=>{
        let f = data.filter((i)=>i.name.toLowerCase().includes(name.toLowerCase()))
        setFinal(f)
      },[name])
    return (
        <>
        <div className='inputcon'>
            <p>Referral Status 💵</p>

            {/* SEARCH CONTAINER */}
            <input type='text' placeholder='Search' value={name} onChange={(e)=>setName(e.target.value)}/><span>:</span>
            </div>
        <div className="wrapper">
            
            <div className='employeedesc'>
                <p>Candidate</p>
                <p>Referred</p>
                <p>Interviewed</p>
                <p>Hired</p>
                <p>Joined</p>
                <p>Reward</p>
            </div>
            <div className='employeevalue'>
                {
                    // ACCORDING TO WINDOW SIZE SETTING RESPONSIVE LAYOUT
                    size>1280  ? final.length>0? final.map((employee, index) =>
                    {
                        // IT RENDER FOR DESKTOP LAYOUT
                        return <EmployeeValue key={index} employee={employee}/>
                    } ):<p>Employee Not Exists</p>: final.length>0 ? final.map((e,i)=>{

                        // IT RENDER FOR MOBILE AND DESKTOP LAYOUT
                        return <EmployeeResp key={i} i={i} e={e} handleClick={handleClick} handleprog={handleprog} activeIndex={activeIndex}/>
                    }
                    ):<p>Employee Not Exists</p>
                }


            </div>
        </div>
        </>
    )
}

export default Employee