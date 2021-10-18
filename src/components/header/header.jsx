import Navigation from '../navigation/navigation'
import logo from './logo.svg'

const Header = () => {
  return (
    <header className="bg-dark flex justify-between gap-36 items-center p-5">
      <h1>
        <img src={logo} alt="SportSee" />
      </h1>
      <Navigation />
    </header>
  )
}

export default Header
