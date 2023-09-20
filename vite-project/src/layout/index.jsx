import Footer from "./Footer/index";
import Header from "./Header/index"

export const Layout = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}
export default Layout;
