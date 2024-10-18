import Link from "next/link";
import navStle from './navStyle.module.css';

const NavBar = () => {
  return (
   <>
   <div className={navStle.main}>
    <div> dev Logo</div>
    <ul className={navStle.submain}>
      <li><Link href={'/'}>Home</Link></li>
      <li><Link href={'/bio'}>Bio</Link></li>
      <li><Link href={'/project'}>Project</Link></li>
    </ul>
   </div>
   </>
  )
}

export default NavBar