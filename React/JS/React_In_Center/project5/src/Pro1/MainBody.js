import React from 'react'
import dashImg from '../Images/impvd_dash_img.png'

export default function MainBody() {
    return (
        <>
            <div className="mainBody">
                <div className="bodyContent">

                    <div className="rows r1">
                        <div className="r1Column r1c1 img">
                            <img className='dashImg' src={dashImg} alt="" />
                        </div>
                        <div className="r1Column r1c2">
                            <h5>
                                see your dashboard in action
                            </h5>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quibusda Lorem ipsum dolor sit amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quis!
                            </p>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                            </div>
                        </div>

                    </div> {/* row 1 ends here */}

                    <div className="row2">

                        <div className="row2_col1 row2_columns">
                            <div className='r2c1 firstrow'>
                                <div className='account_number'>
                                    <h4>Business Bank Account</h4>
                                    <p>XXXX-XXXX-XXXX</p>
                                </div>
                                <div className='info'>
                                    <p> &#8505;</p>
                                </div>
                            </div>
                            <div className='r2c1 secondrow'>
                                <button className='btn1'>Securely connect to back account</button>
                                <div className='secondRow_text'>
                                    <p>Balance in xero:  0.00</p>
                                    <p>Statement balance: 0.00 </p>
                                </div>
                            </div>
                            <div className='r2c1 thirdrow'> graph img</div>
                        </div>
                        <div className="row2_col2 row2_columns">
                            <div className='r2c1 firstrow'>
                                <div className='account_number'>
                                    <h4>Inovoice owned to you</h4>
                                </div>
                                <div className='info'>
                                    <p> &#8505;</p>
                                </div>
                            </div>
                            <div className='r2c1 secondrow'>
                                <button className='btn1'>Create your first Inovoice</button>
                                <div className='secondRow_text'>
                                    <p>0 draft inovoices</p>
                                    <p>0 awaiting payment </p>
                                    <p>0 overdue </p>
                                </div>
                            </div>
                            <div className='r2c1 thirdrow'> graph img</div>
                        </div>
                    </div>


                </div> {/*body-content ends*/}

            </div>
        </>
    )
}
/*

<div className="rows r2">
<div className="r2columns r2c1">

    
</div>
<div className="r2columns r2c2">

<div className='r2c2 firstrow'>
        <div className='account_number'>
            <h4>Business Bank Account</h4>
            <p>XXXX-XXXX-XXXX</p>
        </div>
        <div className='info'>
            <p> &#8505;</p>
        </div>
    </div>
</div>
</div>*/