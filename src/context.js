import React, { Component } from "react";
import { magicProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Povoider
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        magicProducts.forEach(item => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(() => {
            return{products:tempProducts}
        })
    }
    handleDetail = () =>{
        console.log("hello from detail");
    }
    render() {
        return (
            <ProductContext.Provider
                value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart:this.addToCart
            }}>
              {this.props.children} 
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };