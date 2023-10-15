import { useContext } from 'react'
import { ContextCartCount } from '../../utils/context-cart';
import { ShoppingCart } from 'phosphor-react';
import { Cart, CartCounter, Container } from './styles';

export default function CartIcon() {

    const { contextCartCount } = useContext(ContextCartCount);

    return (
        <>
            <Container>
                <Cart>
                    <ShoppingCart size={24} color='#C47F17' weight="fill" />
                
                {contextCartCount > 0 &&
                    <CartCounter>
                        {contextCartCount}
                    </CartCounter>
                    }
                </Cart>              
            </Container>
        </>
    )
}
