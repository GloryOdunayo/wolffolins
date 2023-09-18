import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="row justify-content-between align-items-between container-fluid py-3">
                    <div className="col-md-3">
                        Wolff Olins 2023
                    </div>
                    <div className="row justify-content-center col-md-6">
                        <div className='col-md-3'>Cookie Policy</div>
                        <div className='col-md-3'>Privacy notice</div>
                        <div className="col-md-4 d-flex align-items-center">
                            <Link href=''><div className={`footer-icon me-4 text-center `}><i className="fa fa-instagram" aria-hidden="true"></i></div></Link>
                            <Link href=''><div className={`footer-icon text-center me-4`}><i className="fa fa-twitter" aria-hidden="true"></i></div></Link>
                            <Link href=''><div className={`footer-icon text-center me-4`}><i className="fa fa-youtube" aria-hidden="true"></i></div></Link>
                            <Link href=''><div className={`footer-icon text-center me-4`}><i className="fa fa-linkedin" aria-hidden="true"></i></div></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer