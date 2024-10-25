import Details from "./detailsPic"
import homeStyle from "./homeStylle.module.css"
import Information from "./information"
import LineZero from "./lineZero"
const Home = () => {
  return (
    <div>
      <div className={homeStyle.main}>
      <Information />
        <LineZero />
        <Details />
      </div>

    </div>
  )
}

export default Home