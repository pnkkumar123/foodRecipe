import React from 'react'
import Banner from './Banner'
import Category from './Category'

function Home() {
    const top = [{name:1,pic:"https://img.freepik.com/free-vector/flat-design-food-sale-banner_23-2149108165.jpg?w=1060&t=st=1720938300~exp=1720938900~hmac=7c4559fcc41349e7fa01e346f92cbf72b22934781d8722f246dc79b2aa391601"},
            {name:2,pic:"https://img.freepik.com/free-psd/fast-food-restaurant-banner-template_23-2148987499.jpg?w=1060&t=st=1720938311~exp=1720938911~hmac=fd3d10d44fa3f6260bfe6fee67ba38d9c66376547462543ef0a0dfc5467dbb7b"},
            {name:3,pic:"https://img.freepik.com/free-vector/flat-design-pizza-sale-banner_23-2149116013.jpg?w=1060&t=st=1720938447~exp=1720939047~hmac=144dc4e74e63157169e64503b0d75483d443ac4fec832f88794ead056e4eebd2"},
            {name:4,pic:"https://img.freepik.com/free-vector/flat-design-food-sale-banner-with-special-offer_23-2149113276.jpg?w=1060&t=st=1720938463~exp=1720939063~hmac=6f480c58d099c619f4d32eb708004aeff60fb0aca4af7838d86645056a001aaa"},
            {name:5,pic:"https://img.freepik.com/free-psd/delicious-food-banner_23-2148663779.jpg?w=1060&t=st=1720938493~exp=1720939093~hmac=f2c4f0d16c76394f86e4310286b411ad1a8eff4a922fca7cac34b907b5e6c0da"},
            {name:6,pic:"https://img.freepik.com/free-vector/flat-design-food-facebook-cover_23-2149108159.jpg?w=1060&t=st=1720938508~exp=1720939108~hmac=42b37c51ed62f9b0029026e714af3e9541ffd2f3f86446d6f905a0871ec9f74c"},

    ]
  return (
    <div>
        <Banner data={top}/>
        <Category/>
    </div>
  )
}

export default Home