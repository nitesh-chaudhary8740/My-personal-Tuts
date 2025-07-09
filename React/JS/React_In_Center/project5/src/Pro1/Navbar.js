import React from 'react'

export default function Navbar() {
    return (
        <>
            <div className="navContainer">
                <ul className='navItems'>
                    <li>
                        <div>
                            <select name="" id="">
                                <option value="jstc">JSTC</option>
                                <option value="jstc1">JSTC1</option>
                            </select>
                        </div>
                    </li>
                    <li>DASHBOARD</li>
                    <li>BUSINESS</li>
                    <li>ACCOUNTING</li>
                    <li>PROJECTS</li>
                    <li>CONTACTS</li>
                </ul>
                <ul className='navItems right_side_Nav'>

                    <li><ion-icon name="add-sharp" size='36px'></ion-icon></li>
                    <li><ion-icon name="search-outline"></ion-icon></li>
                    <li><ion-icon name="notifications-sharp"></ion-icon></li>
                    <li><ion-icon name="help-circle-sharp"></ion-icon></li>
                    <li><ion-icon name="apps"></ion-icon></li>
                    <li><ion-icon name="person-circle-sharp"></ion-icon></li>
                </ul>
            </div>
            <div className='dashStatusNav'>
                <div className="left_dash dash_statusItems">
                    <h5>USER_NAME</h5>
                </div>
                <div className="right_dash  dash_statusItems">
                    <div>
                        last time logged in
                    </div>
                    <div>

                        <button className='edit_dash_btn'>EDIT DASHBOARD</button>
                    </div>
                </div>

            </div>
        </>
    )
}
