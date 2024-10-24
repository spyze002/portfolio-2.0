import homeStyle from './homeStylle.module.css'

const LineZero = () => {
  return (
    <div className={homeStyle.lineZero}>
    <div className={homeStyle.zero}></div>
    <div className={homeStyle.line}></div>
    <div className={homeStyle.zero}></div>
    </div>
  )
}

export default LineZero