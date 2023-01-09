import React from "react";

// export const cards = [
//     {name: "Рождение Венеры", author: "Сандро Боттичелли", src: "././src/images/painting-63186_1280 1.svg", price: "1000000", oldPrice: "2000000", stock: true},
//     {name: "Тайная вечеря", author: "Леонардо да Винчи", img: "././src/images/ae973f6678e037cd297053384aa7dca0 1.svg", price: "3000000", oldPrice: false, stock: true},
//     {name: "Сотворение Адама", author: "Микеланджело", img: "././src/images/image-19 1.svg", price: "5000000", oldPrice: "6000000", stock: true},
//     {name: "Урок анатомии", author: "Рембрант", img: "././src/images/Mask Group.png", price: false, oldPrice: false, stock: false}
// ]

class Card extends React.Component{
    state = {
        card: [
            {name: "Рождение Венеры", author: "Сандро Боттичелли", src: "././src/images/painting-63186_1280 1.svg", price: "1000000", oldPrice: "2000000", stock: true},
            {name: "Тайная вечеря", author: "Леонардо да Винчи", img: "././src/images/ae973f6678e037cd297053384aa7dca0 1.svg", price: "3000000", oldPrice: false, stock: true},
            {name: "Сотворение Адама", author: "Микеланджело", img: "././src/images/image-19 1.svg", price: "5000000", oldPrice: "6000000", stock: true},
            {name: "Урок анатомии", author: "Рембрант", img: "././src/images/Mask Group.png", price: false, oldPrice: false, stock: false}
        ]
    };

    render() {
        return(
            <h1>CARDS</h1>
        {this.state.card.map}
        )
    }
}

export default Card;