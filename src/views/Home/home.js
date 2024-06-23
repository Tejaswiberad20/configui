import './home.css'
import Navbar from '../../componants/Navbar/Navbar'
import { siteDetails, theme, products, button } from '../../data'
import ProductCard from '../../componants/ProductCard/ProductCard'
import Footer from '../../componants/Footer/Footer'

function Home() {
    return (
        <>
            <Navbar name={siteDetails.title} />
            <div className='details-container'>
                <p style={{ color: theme.subText }}>{siteDetails.button}</p>
                <div className='product-card-container'>
                    {
                        products.map((product, i) => {
                            const { name, img, button} = product

                            return (
                                <ProductCard
                                    key={i}
                                    name={name}
                                    img={img}
                                    button={button}
                                />
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Home