import Header from '../../components/Header/Header'
import Slider from '../../components/Slider/Slider'
import Cards from '../../components/Cards/Cards'
import Tabs from '../../components/Tabs/Tabs'
import Servs from '../../components/Servs/Servs'
import Tours from '../../components/Tours/Tours'
import People from '../../components/People/People'
import Offers from '../../components/Offers/Offers'
import Gallery from '../../components/Gallery/Gallery'
import Footer from '../../components/Footer/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function MainPage() {

    return (
        <>
            <Header />
            <Slider />
            <Cards />
            <Tabs />
            <Servs />
            <Tours />
            <People />
            <ParallaxProvider><Offers /></ParallaxProvider>
            <Gallery />
            <Footer />
        </>
    )
}

export default MainPage;