import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../CSS/AllProducts.module.css'
import ProductListing from '../Components/ProductListing'
import HeroImage from '../Components/HeroImage'


const AllProducts = (props) => {


    const [products, setProducts] = useState([])

    const singleLightImage = "https://images2.minutemediacdn.com/image/upload/c_crop,h_1000,w_1500,x_0,y_147/v1555182930/shape/mentalfloss/501201-ep6_key_125_r_0.jpg?itok=3GEPmyV5"
    const singleLightAlt = "Luke Skywalker Lightsaber"
    const doubleLightImage = "https://i1.wp.com/www.comicsbeat.com/wp-content/uploads/2020/11/rosario_dawson_mandalorian_ahsoka_character.jpg?fit=1200%2C500&ssl=1"
    const doubleLightAlt = "Ahsoka Tano Lightsaber"

    const singleDarkImage = "https://d13ezvd6yrslxm.cloudfront.net/wp/wp-content/images/ZZ7E13BB42.jpg"
    const singleDarkAlt = "Darth Vader Lightsaber"
    const doubleDarkImage = "https://static2.srcdn.com/wordpress/wp-content/uploads/2019/02/ray-park-as-darth-maul-in-star-wars-episode.jpg"
    const doubleDarkAlt = "Darth Maul Lightsaber"

    const getProducts = async () => {
        let response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}${props.backEnd}`)
        setProducts(response.data.products)
    }

    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])

    useEffect(() => {
        window.scrollTo(0,0)
    // eslint-disable-next-line react-hooks/exhaustive-deps          
    }, [])

    return (
        <div className={styles.container}>
            { props.backEnd === '/single/light' && 
             <HeroImage imageSrc={singleLightImage} imageAlt={singleLightAlt} />
            }
            { props.backEnd === '/double/light' && 
             <HeroImage imageSrc={doubleLightImage} imageAlt={doubleLightAlt} />
            }
            { props.backEnd === '/single/dark' && 
             <HeroImage imageSrc={singleDarkImage} imageAlt={singleDarkAlt} />
            }
            { props.backEnd === '/double/dark' && 
             <HeroImage imageSrc={doubleDarkImage} imageAlt={doubleDarkAlt} />
            }                                   
            { products.length === 0 ?
            <div>Retrieving crystal inventory</div>
            :
             
            <ProductListing products={products} />
            }
        </div>
    )
}


export default AllProducts