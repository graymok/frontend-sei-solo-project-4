import HeroImage from '../Components/HeroImage'
import HeroItem from '../Components/HeroItem'
import HeroImageItem from '../Components/HeroImageItem'

const Landing = () => {

    const landingBanner = "https://lumiere-a.akamaihd.net/v1/images/databank_lightsabercrystal_01_169_6d843285.jpeg?region=0%2C98%2C1560%2C780"
    const landingRey = "https://www.slashfilm.com/wp/wp-content/images/star-wars-the-rise-of-skywalker-21-e1589815385179.jpg"
    const landingKylo = "https://starwarsblog.starwars.com/wp-content/uploads/2014/12/kylo-ren-2400x1200-689099462190.jpg"
    const landingFight ="https://media.vanityfair.com/photos/5ce426151c0b0773cacd1121/7:3/w_2394,h_1026,c_limit/star-wars-feature-vf-2019-summer-embed-05.jpg"

    const landingQuote = `Not as clumsy or random as a blaster: an elegant weapon for a more civilized age.`
    const landingQuoteAuthor = `Obi-Wan Kenobi`

    const landingReclaimed = "https://www.syfy.com/sites/syfy/files/mon-calamari-sweater-the-mandalorian.jpg"
    const landingReclaimedCaption = `Every Kyber Parker crystal is reclaimed, masterfully tempered back into fighting form by our talented team of Mon Calamari artisans.`


    return (
        <>
            <HeroImage imageSrc={landingRey} />
            <HeroItem landingQuote={landingQuote} landingQuoteAuthor={landingQuoteAuthor} />
            <HeroImage imageSrc={landingKylo} />            
            <HeroImageItem imageSrc={landingReclaimed} caption={landingReclaimedCaption} />
        </>
    )
}


export default Landing