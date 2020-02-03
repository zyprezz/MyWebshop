import React from 'react';
import './design.css'
import products from '../../Data/products.js'

export default function Store(){
    
    return (
        <div className="productslisting" >
                
                <table>
                    <tr>
                    
                        
                        <th>{"name"}</th>
                        <th>{"price"}</th>
                        <th>{"quantity"}</th>
                        <th>{"image"}</th>
                        
                        
                    </tr>
                {products.map(product => (<tr>    
                       
                        <th> {product.name} </th>
                        <th> {product.image} </th>
                        <th> {product.sku} </th>
                </tr>))}
                </table>
                
           

        </div>
        )
    }


