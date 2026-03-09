import React from 'react'
import "../styles/Empowering.css"
import container from "../assets/container.jpg"
import container2 from "../assets/Container2.jpg"
import employe from "../assets/employe.jpg"
function Empowering() {
    return (
        <div className='MainDiv'>
            <div className='FlexDiv'>
                <div className='Content1'>
                    <p>GLOBAL TRADE SOLUTIONS</p>
                </div>
                <div className='Content2'>
                    <h2>Empowering your business with seamless trade</h2>
                </div>
                <div className='Content3'>
                    <div className='Content3-Cart1'>
                        <div className='Carddescription'>
                            <div>
                                <p className='heading'>Comprehensive import services</p>
                            </div>
                            <div>
                                <p className='Description'>Our import services ensure smooth and efficient <br />
                                    entry of goods into your market, backed by expert <br />
                                    logistics and compliance support.</p>
                            </div>
                            <div>
                                <p className='subtitle1'>Efficient logistics</p>
                            </div>
                            <div>
                                <p className='subtitle1'>Customs expertise</p>
                            </div>
                            <div>
                                <button className='button1'>Exloper</button>
                            </div>
                        </div>
                        <div className='Cardimg'>
                            <img src={container} alt="" className='Contianerimg' />
                        </div>

                    </div>
                    <div className='Content3-Cart2'>
                         <div className='Cardimg2'>
                            <img src={container2} alt="" className='Contianerimg2' />
                        </div>
                        <div className='Carddescription2'>
                            <div>
                                <p className='heading'>Reliable export solutions</p>
                            </div>
                            <div>
                                <p className='Description'> Our export services facilitate the global reach of <br />
                                    your products, ensuring compliance and timely <br />
                                    delivery.</p>
                            </div>
                            <div>
                                <p className='subtitle1'>Global reach</p>
                            </div>
                            <div>
                                <p className='subtitle1'>Timely delivery</p>
                            </div>
                            <div >
                                <button className='button2'>Discover</button>
                            </div>
                        </div>
                    </div>
                    <div className='Content3-Cart3' >
                        <div className='content3-cart3-content'>
                            <div className='Carddescription3'>
                                   <div>
                                    <p className='heading'>Logistics & customs support</p>
                                   </div>
                                   <div>
                                    <p className='Description'>Our logistics and customs support services streamline <br />
                                       your supply chain, ensuring compliance and efficiency <br />
                                       at every step.</p>
                                   </div>
                                   <div>
                                    <img src={employe} alt="" className='employe' />
                                   </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Empowering
