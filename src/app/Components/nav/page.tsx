import Image from 'next/image';
import Link from "next/link";
import LogoTrans from './Assets/Logo/logoTransp.png';
import navStle from './navStyle.module.css';

const NavBar = () => {
  return (
   <div className= {navStle.all} >
   <div className={navStle.main}>
    <div> <Image src={LogoTrans} alt="main logo" className={navStle.img} /> </div>
    <ul className={navStle.submain}>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/bio'}>  Bio </Link></li>
      <li><Link href={'/project'}>Project</Link></li>
    </ul>
   </div>
   </div>
  )
}

export default NavBar