import Image from 'next/image';
import Link from "next/link";
import LogoTrans from './Assets/Logo/logoTransp.png';
import navStle from './navStyle.module.css';

const NavBar = () => {
  return (
   <div className= {navStle.all} >
   <div className={navStle.main}>
    <div> <Image src={LogoTrans} alt="main logo" className={navStle.img} /> </div>
    <div className={navStle.submain}>
      <Link href={'/'}>Home</Link>
      <Link href={'/component/bio'}>  Bio </Link>
      <Link href={'/component/project'}>Project</Link>
    </div>
   </div>
   </div>
  )
}

export default NavBar