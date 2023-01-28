import React from 'react'
import EmployeeImage from '../../utils/employeeimages.jpeg'


function EmployeeResp(props) {

    const {i, e, handleClick, handleprog, activeIndex} = props;

  return (
    <div key={i} className='econtainer'>
                            <div className='einnercon'>

                            <p onClick={() => { handleClick(); handleprog(i);}}>{activeIndex===i?">":"<"}</p>
                        <div className='employeeimg'>
                        <img src={EmployeeImage} alt='employeeimage' />
                        </div>
                        <div className='employeestatus'>
                            <p className='empname'>{e.name}</p>
                            <p className='role'>{e.role}</p>
                        </div>
                        </div>
                
                        
                            <div className='eprefer' style={{display:i === activeIndex?"flex":"none" }}>
                                
                                {e.status === "referred" || e.status === "closed" ? <div className='employeeimg' style={{marginLeft: "-56px"}}>
                                <img src={EmployeeImage} alt='employeeimage' />
                                </div> : <span className='empcircle' style={{ backgroundColor: e.status === "referred" ? "#ccc" : "#0ed745" && e.status === "closed" ? "#ccc" : "#0ed745", marginLeft: "-56px" }} ></span>}
                                <label>refer</label>
                                <progress className='prog' value={e.status === "referred" ? "0" : "25" && e.status === "closed" ? "0" : "25"} max="25" >Reffered</progress>
                          

                                {e.status === "interviewed" ? <div className='employeeimg' style={{marginLeft: "-56px"}}>
                                <img src={EmployeeImage} alt='employeeimage' />
                                </div> : <span className='empcircle' style={{ backgroundColor: e.status === "hired" ? "#0ed745" : "#ccc" && e.status === "joined" ? "#0ed745" : "#ccc" && e.status === "reward" ? "#0ed745" : "#ccc",marginLeft: "-56px" }} ></span>}

                                <label style={{marginLeft:"20px"}}>interview</label>

                                <progress className='prog' value={e.status === "hired" ? "25" : "0" && e.status === "joined" ? "25" : "0" && e.status === "reward" ? "25" : "0"} max="25"></progress>

                                {e.status === "hired" ? <div className='employeeimg' style={{marginLeft: "-56px"}}>
                                <img src={EmployeeImage} alt='employeeimage' />
                                </div> : <span className='empcircle' style={{  backgroundColor: e.status ==="joined" ? "#0ed745" : "#ccc" && e.status === "reward" ? "#0ed745" : "#ccc",marginLeft: "-56px" }} ></span>}

                                <label>hire</label>

                                <progress className='prog' value={e.status === "joined" ? "25" : "0" && e.status === "reward" ? "25" : "0"}  max="25">Hired</progress>

                                {e.status === "joined" || e.status === "reward" ? <div className='employeeimg' style={{marginLeft: "-56px"}}>
                                <img src={EmployeeImage} alt='employeeimage' />
                                </div> : <span className='empcircle' style={{ backgroundColor: e.status === "reward" ? "#0ed745" : "#ccc", marginLeft: "-56px" }} ></span>}
                                <label>join</label>

                               
                                <progress className='prog' value={e.status === "reward" ? "25" : "0" && e.status === "joined" ? "10" : "0"} max="25">Joined</progress>
                               
                            </div>


                            <p style={{ color: e.status === "reward" ? "#0ed745" : "#ccc", fontSize: e.status === "reward" ? "24px" : "18px", marginTop:"112px", display:i === activeIndex?"flex":"none" }}>${e.reward}</p>

                       
                        
                    </div>
  )
}

export default EmployeeResp