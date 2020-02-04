import React from 'react'
import NavMenu from '../../components/navbar'
import {Container} from 'reactstrap'


export default class Layout extends React.Component {
    static displayName = Layout.name;

   render(){
    return (
        <div>
            <NavMenu />
            <Container>
                {this.props.children}
            </Container>
        </div>

        
        
        )
    }
}