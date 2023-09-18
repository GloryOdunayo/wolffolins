import React from 'react'
import logo from '../public/logo.png';
import Image from 'next/image';
import styles from '../styles/Auth.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="py-5 container">
                        <div className="row justify-content-between">
                            <div className="col-md-3">
                                <Image src={logo} alt='logo' />
                                <p>Unlock the super-learning potentials in you with our courses specially designed for your academic and career excellence.</p>
                                <div className="d-flex justify-content-between col-6">
                                    <Link href=''><div className={`border-${styles.footer} text-center rounded-circle media`}><i className="fa fa-linkedin" aria-hidden="true"></i></div></Link>
                                    <Link href=''><div className={`border-${styles.footer} text-center rounded-circle media`}><i className="fa fa-facebook" aria-hidden="true"></i></div></Link>
                                    <Link href=''><div className={`border-${styles.footer} text-center rounded-circle media`}><i className="fa fa-twitter" aria-hidden="true"></i></div></Link>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h6>Contact Us</h6>
                                <div className='mt-4'>hello@gradeplusafrica.com</div>
                                <p>+234 703 978 4638, +234 811 102 4463</p>
                            </div>
                            <div className="col-md-4 ps-md-5">
                                <h6>Subscribe to our Newsletter</h6>
                                <form className="mt-4" role="search">
                                    <input className={`form-control ${styles.footer__input}`} type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn button__search rounded-0 px-4" type="submit" style={{backgroundColor:'#198FFB', color:"white"}}>Send</button>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex pt-5 justify-content-between">
                            <div className="">
                                © 2022 GradePlus Africa. All rights reserved
                            </div>
                            <div className="">
                                Terms of Use    Privacy Policy
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer