import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';

const Contacts = () => {
    const details = {
        email: 'datetechsoftware@gmail.com',
        mobile: '9761064944',
        website: 'https://date-tech.vercel.app/',
        whatsapp: '9761064944'
    }
    return (
        <div className='px-5 sm:rounded-b-3xl py-4 bg-[var(--bg-color)]'>
            <ul>
                <li className='py-2 group'>
                    <Link
                        href='#'
                        onClick={(e: any) => {
                            window.location.href = `mailto:${details.email}`;
                            e.preventDefault();
                        }}
                        title={details.email}
                        data-te-target="tooltip"
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaEnvelope className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold group-hover:text-gray-400 transition'>
                                {details.email}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='py-2 group'>
                    <Link
                        href='#'
                        onClick={(e: any) => {
                            window.location.href = `tel:${details.mobile}`;
                            e.preventDefault();
                        }}
                        title={details.mobile}
                        data-te-target="tooltip"
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaPhoneAlt className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold group-hover:text-gray-400 transition'>
                                {'+91 ' + details.mobile}
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='py-2 group'>
                    <Link
                        href={details.website}
                        title={details.website}
                        data-te-target="tooltip"
                        target='_blank'
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaGlobe className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold group-hover:text-gray-400 transition'>
                                Date-tech.vercel.app
                            </p>
                        </div>
                    </Link>
                </li>
                <li className='py-2 group'>
                    <Link
                        href={`https://wa.me/+91${details.whatsapp}`}
                        title={details.whatsapp}
                        data-te-target="tooltip"
                        target='_blank'
                    >
                        <div className='flex items-center'>
                            <span className='rounded-full inline-block p-3 bg-[var(--themeColor)]'>
                                <FaWhatsapp className='text-white text-xl' />
                            </span>
                            <p className='px-3 text-ellipsis w-full overflow-hidden font-semibold hover:text-black group-hover:text-gray-400 transition'>
                                {'+91 ' + details.whatsapp}
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Contacts